<?php

////////////////////////////////////////////
/*                 ABOUT                  */
////////////////////////////////////////////
/*
/ This makes it possible for Rapid.ilisten to 
/ eval mysqli statements. First authenticate
/ credentials through Rapid.idb("path-to-here,
/ "key"). As proof of credentials, the key passed
/ must match the key here under Configuration.
/ Then you can call the pseudo php function 
/ `mysqli(string-query)` inside all future
/ functions passed to Rapid.ilisten.
*/

//include("../rdebug/init.php");

////////////////////////////////////////////
/*             Configuration              */
////////////////////////////////////////////
$rapidKey = "password123";
$db_server = "localhost";
$db_username = "admin";
$db_password = "password";
$db_name = "db";

$suspicious = array("_error"=>"Hack attempt detected with unexpected method and http method variables. Reported.");

if($_SERVER["REQUEST_METHOD"]=="POST") {
    if(!isset($_POST["rapidKey"]) || (string)$_POST["rapidKey"]!=$rapidKey)
        die('{"status":"Failure to authenticate. Make sure the key passed to Rapid.backend.db(path, key) matches \"rapidKey\" found in configuration file."}');
    
    /* AUTHENTICATION */
    $lnk1 = mysqli_connect($db_server, $db_username, $db_password) or die('{"status":"Authentication passed. Key matches that in configuration file. But couldn\'t connect to server database. Check username and/or password in configuration file."}');
    mysqli_select_db($lnk1, $db_name) or die('{"status":"Authentication passed. Key matches that in configuration file. But couldn\'t connect to server database. Check database name in configuration file."}');
            
    if(isset($_POST["authenticating"])) {
        $phpSrc = "\n" . '$lnk1' . " = mysqli_connect(\"$db_server\", \"$db_username\", \"$db_password\") or die('{\"status\":\"Couldn\'t connect to server database. Check username and/or password.\"}');";
        $phpSrc .= "\n" . "mysqli_select_db(" . '$lnk1' . "\", \"$db_name\") or die('{\"status\":\"Couldn\'t connect to server database. Check database name.\"}');\n";

        $arr=array("status"=>"Authentication passed. You can now use fetchQuery and execQuery.","authenticated"=>true,"phpSrc"=>"$phpSrc");
        echo json_encode($arr);
    } // auth request
    
    /* VALIDATION */
    else if(!isset($_POST["rapidMysqli"]) && !isset($_POST["rapidEcho"])) {
        die(json_encode($suspicious));
    }
    
    /* RUN QUERY */
    else if(isset($_POST["rapidMysqli"])) {
        $_POST["rapidMysqli"] = str_replace("\"", "", $_POST["rapidMysqli"]);
        $_POST["rapidMysqli"] = str_replace("+", ".", $_POST["rapidMysqli"]); // Bug fixed: table.id presented as table+id
        //$_POST["rapidMysqli"] = substr($_POST["rapidMysqli"], 1, strlen($_POST["rapidMysqli"])-2);
        $rsQuery = mysqli_query($lnk1, $_POST["rapidMysqli"]);
        
        if(!$rsQuery) // "" -> For other successful queries mysqli_query() will return TRUE.
            die(json_encode(array("_error"=> var_export(mysql_error(), true) . " result after querying: " . $_POST["rapidMysqli"])));

            if($rsQuery!==true) { // was a SELECT
                $rsArr = array();
                while($row = mysqli_fetch_assoc($rsQuery)) {
                    array_push($rsArr, $row);
                }
                echo json_encode($rsArr);
            } else
                
            echo json_encode(array());
    } // emulate mysqli query
    
    else if(isset($_POST["rapidEcho"])) {
        //rdebug_stamp();
        
        // Eval $arr1 = , $arr2 =, etc from mysqli_fetch_assoc's
        if(gettype($_POST["rapidMultiFetchAssocs"])!="string") {
            $arrKeys = array_keys($_POST["rapidMultiFetchAssocs"]); //Array ( [0] => $arr1 [1] => $arr2 [2] => $arr3 )
            for($i = 0; $i<count($arrKeys); $i++)
            {
                $key = $arrKeys[$i];
                $multiFetchAssocs = $_POST["rapidMultiFetchAssocs"][$key];
                //rdebug($key);
                //rdebug($multiFetchAssocs, true);
                eval($key . ' = new ArrayObject($multiFetchAssocs);'); //  $arr1 = array of multiple fetch assoc
                //rdebug($arr1, true);
                //rdebug($arr1[0], true);
            }
        } // if has multiFetchAssocs
        
        //Fill $_GET, $_POST, $_PUT, etc method parameters
        $method = $_POST["rapidMethod"];
        $_PARAMS = json_decode($_POST["rapidParams"], true);
        switch ($method) {
          case 'GET':
            $_GET = $_PARAMS;
          case 'POST':
            $_POST = $_POST + $_PARAMS; 
            break;
          case 'PUT':
            $_PUT = $_PARAMS;
            break;
          case 'PATCH':
            $_PATCH = $_PARAMS;  
            break;
          case 'DELETE':
            $_DELETE = $_PARAMS;  
            break;
          case 'HEAD':
            $_HEAD = $_PARAMS; 
            break;
          case 'OPTIONS':
            $_OPTIONS = $_PARAMS;   
            break;
          default:
            $_GET = $_PARAMS;
            break;
        } // switch
        //$_TEST = array();
        //$_TEST["a"]="success";
        
        eval($_POST["rapidEcho"]);
    } // emulate echo
    
} // CONDITIONAL: $_SERVER["REQUEST_METHOD"]=="POST"
else
    die(json_encode($suspicious));