<?php

/***
 * EZ Loader for Rapid Tools Suite and dependencies
 * -------------------------------------------------------
 *
 * Optional PHP functions to load Rapid Tools Suite,
 * its dependencies, other jquery plugins.
 * 1. Firstly, include("rapid/ezloader.php");
 * 2. Then call load functions. Call jquery first.
 * 3. Tooltips and Rapid Tools Suite are local files
 *    If the script can't be found because of where
 *    you called the include, you may pass ./, ../,
 *    folder name, or a relative path. You could 
 *    open Chrome's console to find these script 
 *    404 errors and debug wrong URL's.
 *
 * Note: Rapid Tools Suite has dependencies:
 *       -Jquery
 *       -Bootstrap's Tooltips
 *
 **/

//Src Jquery
function load_jq() {
    ob_start();
    ?><script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<?php
    echo ob_get_clean();
}

//Src Jquery Migrate
function load_jqm() {
    ob_start();
    ?><script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<?php
    echo ob_get_clean();
}

//Src Jquery UI
function load_jqui() {
    ob_start();
    ?><script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.1/jquery-ui.js"></script>
    <?php
    echo ob_get_clean();
}

//Src Bootstrap
function load_bs() {
    ob_start();
    ?><link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js">
    <?php
    echo ob_get_clean();
}

//Src Bootstrap tooltip only
function load_bs_tooltip() { // polymorphic
    if(func_num_args()>0) {
        $rel = func_get_arg(0);
        if($rel[0]=='/') $rel = substr($rel,1);
        if($rel[strlen($rel)-1]!='/') $rel.='/';
    } else $rel="";
    
    ob_start();
    ?><link rel="stylesheet" href="<?php echo $rel; ?>js/bootstrap-tooltip.min.css"/>
<script src="<?php echo $rel; ?>js/bootstrap-tooltip.min.js"></script>
    <?php
    echo ob_get_clean();
}

//Src Handlebars
function load_hb() {
    ob_start();
    ?><script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
    <?php
    echo ob_get_clean();
}

//Src: jQuery, jQuery Migrate, jQuery UI, Bootstrap, Handlebars
function load_depends() {
    load_jq();
    load_jqm();
    load_jqui();
    load_bs();
    load_hb();
}

//Get Rapid Tools Suite
function load_main() { // polymorphic
    if(func_num_args()>0) {
        $rel = func_get_arg(0);
        if($rel[0]=='/') $rel = substr($rel,1);
        if($rel[strlen($rel)-1]!='/') $rel.='/';
    } else $rel="";
    ob_start();
    ?><link rel="stylesheet" href="<?php echo $rel; ?>js/bundle.css"/>
    <script src="<?php echo $rel; ?>js/bundle.js"></script>
    <?php
    echo ob_get_clean();
}


//Get Buzz
function load_buzz() {
    ob_start();
    ?><script src="https://cdnjs.cloudflare.com/ajax/libs/buzz/1.1.10/buzz.min.js"></script>
    <?php
    echo ob_get_clean();
}

//Get QUnit
function load_qunit() {
    ob_start();
    ?><link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">
<script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
    <?php
    echo ob_get_clean();
}

function show_qunit() {
    echo "<div id='qunit'></div>";
}


?>