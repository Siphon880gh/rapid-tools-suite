<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">    

    <!-- jQuery and Bootstrap  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css">
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    <script type="x/after-designing">
        // Persistently saved across Drag n' Drop Editors or Chrome DevTools editing.
        // Once done with laying out the website, move any php code to outside of this script tag. Then correct the opening and closing php tags to activate that code.
        // You can insert other PHP code for future projects. But if the code echoes < /script> or < script>, those must be escaped because the browser parser doesn't like nested script tags
    
    <_php
       /* VIEW TEMPLATE */
        if(isset($_GET["deviceuid"]) && $_GET["deviceuid"]=="c31b32364ce19ca8fcd150a417ecce58") {
            echo '<'.'script id="templates" type="x/template">';
            include("views/posts.php");
            echo '<'.'/script>';
        }
    _>
    
   /* VIEW TEMPLATE */
    <!--
        <script id="templates" type="x/template">
        </script>
    -->
      
    <_?php
        /* JS CONSOLE */
        if(isset($_GET["remote"])) {
            $connID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"; // replace here
            echo '<' . 'script src="http://jsconsole.com/remote.js?' . $connID . '"><'.'/script>';
            echo '<'.'script>console.log("' . $connID . '"); function jscid() { alert("Done. JS Console Listening ID inserted at the end of the URL as a hash value.");  window.location.hash = "' . $connID . '"; }<'.'/script>'; // paste alert from url: javascript:jsc_id();
        }
    _>
    </script> <!-- after-designing -->
    
    <script>
        $(function() {
            Rapid.options({
                bootstrap: {
                                mdCSS:"",
                                xsCSS:"",
                                mdJS: function() {},
                                xsJS: function() {},
                                gridlines: true,
                                status: true
                            }
            });
            
            /* REMOVE THESE LINES BEFORE UPLOADING TO PRODUCTION SERVER */
            Rapid.i();
            db("./rapid/js/rapid-backend.php", "password123");
        });
    </script>
    
</head>
    <body>
        <div class="container">
        Empty
        </div><!-- container -->
        
        <!-- jQuery UI -->
        <link href="http://code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>

        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Handlebars JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        
        <!-- Rapid Tools Suite -->
        <link href="./rapid/js/bundle.css" rel="stylesheet">
        <script src="./rapid/js/bundle.js"></script>
        <link href="./rapid/js/bootstrap-tooltip.min.css" rel="stylesheet"/>
        <script src="./rapid/js/bootstrap-tooltip.min.js"></script>

        <!-- Qunit -->
        <link href="//code.jquery.com/qunit/qunit-1.20.0.css" rel="stylesheet"/>
        <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>

    </body>
</html>