<?php

function get_depends() {
    ob_start();
    ?>
        <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.0/mustache.js"></script>
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
        <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <?php
    echo ob_get_clean();
}

function get_jq() {
    ob_start();
    ?>
        <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
    <?php
    echo ob_get_clean();
}

function get_min_depends() {
    if(func_num_args()>0) {
        $rel = func_get_arg(0);
        if($rel[0]=='/') $rel = substr($rel,1);
        if($rel[strlen($rel)-1]!='/') $rel.='/';
    } else $rel="";
    ob_start();
    ?>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.2.0/mustache.js"></script>
        <link rel="stylesheet" href="<?php echo $rel; ?>js/bootstrap-tooltip.min.css"/>
        <script src="<?php echo $rel; ?>js/bootstrap-tooltip.min.js"></script>
    <?php
    echo ob_get_clean();
}


function get_suite() {
    if(func_num_args()>0) {
        $rel = func_get_arg(0);
        if($rel[0]=='/') $rel = substr($rel,1);
        if($rel[strlen($rel)-1]!='/') $rel.='/';
    } else $rel="";
    ob_start();
    ?>
        <script src="<?php echo $rel; ?>js/bundle.js"></script>
    <?php
    echo ob_get_clean();
}


function test_defined() {
    echo "<textarea rows='1' cols='1'>";
    echo var_dump(get_defined_vars());
    echo "</textarea>";   
}


?>