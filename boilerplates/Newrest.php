<?php


///////////////////////////
//     BEST PRACTICES    //
///////////////////////////
/*
/* get = get resource
/* post = insert resource at a non-precise URI path
/* put = insert resource at a precise URI path
/* patch = update a resource partially
/* update = update a resource completely
/* delete = remove a resource
/* head = get debug information, meta information, or description about a resource.
/* options = returns available API methods and URI paths
/*
/* #Example of URI:
/* http://programmers.stackexchange.com/questions/218798/what-is-the-limit-on-rest-api-resource-levels
/*



///////////////////////////
//      CLIENT USAGE     //
///////////////////////////
/*
/* Some servers don't accept restful URI like api.php/a/b. Instead use api.php?PATH=a/b
/* 
/* PATH is a reserved keyword. Do not use ?PATH=PATH/b or api.php/PATH/b
*/



///////////////////////////
//     CONNECT TO DB     //
///////////////////////////
/* Put your Mysqli connect 
/* code here. Alternately,
/* include the php page
/* that has the code.
*/

$db_server = "localhost";
$db_username = "admin";
$db_password = "password!";
$db_name = "db1";
$lnk1 = mysqli_connect($db_server, $db_username, $db_password) or die('{"status":"Couldn\'t connect to the SQL server with credentials."}');
mysqli_select_db($lnk1, $db_name) or die('{"status":"Couldn\'t connect to database because either database does not exist or it is not privileged to the db user."}');


///////////////////////////
//        ENGINE         //
///////////////////////////
/* 
*/

//Prepare DB auth, HTTP method, and URI Path
$method = $_SERVER['REQUEST_METHOD'];
$path_info = "";
$path_info_thru_get_var = isset($_GET["PATH"]);

if($path_info_thru_get_var)
    $path_info = $_GET["PATH"];

    // Paths need a / to begin
    if(strlen($path_info)>0 && $path_info[0]!='/')
        $path_info = '/' . $path_info;
    else {
    $path_info = @$_SERVER['PATH_INFO'];
}

// Makes sure path ends with /
if($path_info[strlen($path_info)-1]!='/')
    $path_info .= "/";

$request = explode("/", substr($path_info, 1));
if($request[count($request)-1]=="") array_pop($request); // Edge case: last element empty ""

///////////////////////////
//   TEST CLIENT SIDE    //
///////////////////////////
//var_dump($request);
//die();

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


///////////////////////////
//     IMPLEMENTATION    //
///////////////////////////
/* 
*/

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
  case 'PATCH':
    patch($request);  
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
    error($request);  
    break;
} // switch
        
function get($request) {
    global $lnk1;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr()));
    else if($request[0]=="albums") {
        //additions to the row before echoing

        
        //modifications to the row before echoing
        
        
        //mock data
        $albums = array("album #1", "album #2", "album #3");
        $json = array("albums"=>$albums);
        echo json_encode($json);
        die();
        
    } // GET api.php/albums
    else if($request[0]=="songs") {
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
        die(json_encode(error_arr()));
    }
    
} // get
        
function post($request) {
    global $lnk1;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // post
        
function put($request) {
    global $lnk1;
    global $_PARAMS;
    $_PUT = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // put
        
function patch($request) {
    global $lnk1;
    global $_PARAMS;
    $_PATCH = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // patch

function update($request) {
    global $lnk1;
    global $_PARAMS;
    $_UPDATE = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
    if(!$LEVEL0) die(json_encode(error_arr()));
} // update
        
function delete($request) {
    global $lnk1;
    global $_PARAMS;
    $_DELETE = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // delete
        
function head($request) {
    global $lnk1;
    global $_PARAMS;
    $_HEAD = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // head
        
function options($request) {
    global $lnk1;
    global $_PARAMS;
    $_OPTIONS = $_PARAMS;
    global $LEVEL0, $LEVEL1, $LEVEL2, $LEVEL3, $LEVEL4, $LEVEL5;
    
} // options
        
function method_error($request) {
    global $lnk1;
    
} // method_error

function error_arr() {
    $strExtra = "";
    if(func_num_args()>0) $strExtra = ". Code '" . func_get_arg(0) . "'";
    
    return array("error"=>"Invalid connection" . $strExtra . ".");
}

///////////////////////////
//       FUNCTIONS       //
///////////////////////////
/* If you want to keep code
/* organized, the functions
/* that your mysqli code
/* call to transform/amend
/* information before it
/* echoes to ajax should
/* be defined below. 
/* Alternately, you could
/* include a file that
/* implements the functions 
/* so you don't have to
/* scroll up and down.
*/

/*FUNCTIONS WITH SHARED VARIABLES
Eg.
$username = new Username(1, "Admin");
var_dump($username->get_info());
*/
class Username {
    private $user_id;
    private $username;

    public function Username($user_id_, $username_) {
        $this->user_id=$user_id_;
        $this->username=$username_;
    } // constructor

    public function get_info() {
        return array("user_id"=>$this->user_id, "username"=>$this->username);	
    } // get_info
    public function get_user_id() {
        return $this->user_id;
    } // get_info
    
    public function get_username() {
        return $this->username;
    } // get_info
} // class

/*FUNCTIONS WITH EXPLICIT RELATIONSHIP*/
//Eg.
//var_dump(Settings::anonymousMode());
class Settings {
	public static function anonymousMode() {
		return true;
 	}
}

/*FUNCTIONS CALLED GLOBALLY*/
//Eg.
//var_dump(now());
BASIC_FUNCTIONS:
	function now() {
		return date("M. d, Y g:m:s a", time());
	}
END_BASIC_FUNCTIONS: //

/*IN SUMMARY*/
//
//$username = new Username(1, "Admin");
//var_dump($username->get_info());
//
//var_dump(Settings::anonymousMode());
//
//var_dump(error_arr());
//

?>