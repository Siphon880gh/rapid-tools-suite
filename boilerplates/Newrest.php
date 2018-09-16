<?php

///////////////////////////
//    CONNECT TO DB      //
///////////////////////////
/*  Put your credentials
 */

// If using MeekroDB library:
if (class_exists('DB')) {
    DB::$user = 'foobar';
    DB::$password = 'foobar';
    DB::$dbName = 'foobar';
    DB::$host = "localhost";
    DB::$encoding = 'utf8';
}

// If using mysqli:
$db_username = "foobar";
$db_password = "foobar";
$db_name = "foobar";
$db_server = "localhost";
$lnk1 = mysqli_connect($db_server, $db_username, $db_password) or die('{"status":"Couldn\'t connect to the SQL server with credentials."}');
mysqli_select_db($lnk1, $db_name) or die('{"status":"Couldn\'t connect to database because either database does not exist or it is not privileged to the db user."}');
mysqli_set_charset($lnk1, "utf8");

///////////////////////////
//     BEST PRACTICES    //
///////////////////////////

/* The convention of Restful API methods:
   get = get resource
   post = insert resource at a non-precise URI path
   put = insert resource at a precise URI path
   update = update a resource completely
   delete = remove a resource
   head = get debug information, meta information, or description about a resource.
   options = returns available API methods and URI paths

   E.g. If the request line is 
        GET http://example.com/api.php/songs/1
                            or
        GET http://example.com/api.php/songs/1/

   Then $_SERVER['PATH_INFO'] returns the string:
        "songs/1/"
*/

//Prepare DB auth, HTTP method, and URI Path
if(!isset($lnk1)) die(json_encode(error_arr("\$lnk1 not set. Did you put the database connect code near the top of the page yet? Or did you save the link identifier returned by mysqli_connect() as another name besides \$lnk1?")));
$method = $_SERVER['REQUEST_METHOD'];
$path_info = "";
$path_info = @$_SERVER['PATH_INFO'];
if($path_info[strlen($path_info)-1]!='/') $path_info .= "/";
$request = explode("/", substr($path_info, 1));
if($request[count($request)-1]=="") array_pop($request); // Edge case: last exploded element "" needs to pop off

//Prepare RESTful HTTP methods
$_PARAMS = array();
if (($stream = fopen('php://input', "r")) !== FALSE) {
   parse_str(stream_get_contents($stream), $_PARAMS);
}

//Prepare URI Path levels for IF statements
$LEVEL0=count($request)>0 && $request[0]!=""?true:false;
$LEVEL1=count($request)>1?true:false;
$LEVEL2=count($request)>2?true:false;
$LEVEL3=count($request)>3?true:false;
$LEVEL4=count($request)>4?true:false;
$LEVEL5=count($request)>5?true:false;

//Reroute based on method
switch ($method) {
  case 'GET':
    get($request);  
    break;
  case 'POST':
    post($request);  
    break;
  case 'PUT':
    put($request);  
    break;
  case 'UPDATE':
    update($request);  
    break;
  case 'DELETE':
    delete($request);  
    break;
  case 'HEAD':
    head($request);  
    break;
  case 'OPTIONS':
    options($request);    
    break;
  default:
    die(json_encode(error_arr("Invalid Method")));
    break;
} // switch
        
function get($request) {
    global $lnk1;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr("Invalid get path")));
    else if($request[0]=="songs") {
        //additions to the row before echoing

        
        //modifications to the row before echoing


        //echo json_encode($fetchedAssocArr[0]);
        
    } // GET api.php/albums
    else if($request[0]=="albums") {
    } // GET api.php/songs
    else if($request[0]=="count") {
        if(!$LEVEL1) die(json_encode(error_arr()));
        else if($request[1]=="songs") {
        } // GET api.php/count/songs
        else if($request[1]=="albums") {
        } // GET api.php/count/albums
        else {
            die(json_encode(error_arr()));
        }
    }
    else {
        die(json_encode(error_arr("Invalid get path")));
    }
    
} // get

        
function post($request) {
    global $lnk1;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;

    if(!$LEVEL0) die(json_encode(error_arr("Invalid post path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid post path")));
    }
    
} // post

        
function put($request) {
    global $lnk1;
    global $_PARAMS;
    $_PUT = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;

    if(!$LEVEL0) die(json_encode(error_arr("Invalid put path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid put path")));
    }
    
} // put

function update($request) {
    global $lnk1;
    global $_PARAMS;
    $_UPDATE = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr("Invalid update path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid update path")));
    }
} // update
        

function delete($request) {
    global $lnk1;
    global $_PARAMS;
    $_DELETE = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr("Invalid update path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid update path")));
    }
} // delete
        

function head($request) {
    global $lnk1;
    global $_PARAMS;
    $_HEAD = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr("Invalid head path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid head path")));
    }
} // head
        

function options($request) {
    global $lnk1;
    global $_PARAMS;
    $_OPTIONS = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr("Invalid options path")));
    else if($request[0]==="foobar")
    else {
        die(json_encode(error_arr("Invalid options path")));
    }
} // options

function error_arr() {
    return array( "error"=>$sprintf("API error: %s", func_get_arg(0)) );
}

?>