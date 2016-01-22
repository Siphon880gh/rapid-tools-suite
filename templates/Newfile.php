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
    
    <script type="x/comments">
        // Comments or PHP code don't persist in Chrome DevTools editing or Drag and Drop Editors.
        // This section is an invalid script block to help you stash away comments, php code, or even scripts
        //  that may be useful later in development.
        // Browsers skip over invalid script blocks and retain them in the source code.
        // So once you are done designing the website, you can move any code out into the production code.
        // Note that if you have any < script> or </ script> blocks, those must be broken apart like so.
        // If there's PHP echoing < /script> or < script>, they need to be concatenated like so rather than
        //  echo the entire tag. This is because browsers will still parse nested script blocks inside an 
        //  invalid script block and then break your code.
        
        
        /* JS: VIEW TEMPLATE MODULAR */
            //Now you can have the template where it is going to be rendered! Just have it as a comment block.
            <div class="menu items">
                <!-- <span>{{var1}}</span> -->
            </div>
            
            //Use:
            $(".menu-items").html(Handlebars.compile($(".menu-items").html().replace(/<!--([\s\S]*)-->/g, '$1'))(wrapper));
        
        /* JS: VIEW TEMPLATE NON-MODULAR */
            // The old regular way is less as modular because you need to write template code elsewhere on the page
            < script id="template" type="x/template">
            </ script>
        
        /* PHP: VIEW TEMPLATE */
        if(isset($_GET["deviceuid"]) && $_GET["deviceuid"]=="c31b32364ce19ca8fcd150a417ecce58") {
            echo '<'.'script id="templates" type="x/template">';
            include("views/posts.php");
            echo '<'.'/script>';
        }
    
      
        /* PHP: JS CONSOLE */
        if(isset($_GET["remote"])) {
            $connID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"; // replace here
            echo '<' . 'script src="http://jsconsole.com/remote.js?' . $connID . '"><'.'/script>';
            echo '<'.'script>console.log("' . $connID . '"); function jscid() { alert("Done. JS Console Listening ID inserted at the end of the URL as a hash value.");  window.location.hash = "' . $connID . '"; }<'.'/script>'; // paste alert from url: javascript:jsc_id();
        }
    </script> <!-- comments -->
    
    
    <script type="x/md">
    
    body {

    }
    
    </script> <!-- md -->
    
    <script>
        $(function() {
            Rapid.options({
                bootstrap: {
                                xsCSS:"",
                                mdCSS: $('script[type="x/md"]').html(),
                                xsJS: function() {},
                                mdJS: function() {},
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