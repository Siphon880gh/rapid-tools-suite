<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="icon" href="/favicon.ico?v=1.1">

    <!-- jQuery and Bootstrap  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">    
    <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

    <!-- LATER DEV -->
    <script type="x/comments">
        // If you are designing your webpage through Chrome DevTools then copying the markup (like the entire <html> outerHTML) to a code editor, you may notice it removes comments and of course - it can't save PHP code. This becomes an issue if you have boilerplate code that's useful later in development after designing. Another use is having code snippets here that may be useful depending on the type of project so you can choose to copy the snippet outside to the source code if needed after initializing a project with this boilerplate file.
        
        // By giving a script block an invalid type here, Chrome DevTools will not render whatever is inside and neither does it remove the content. Perfect for stashing away code snippets of any language.
        
        // However, if you have any < script> or </ script> blocks, they must be concatenated as < and script>. Browsers still parse script blocks inside invalid script blocks.
        
        
        /* JS: TEMPLATE AS PART OF LAYOUT */
            //Design the template where it's going to be rendered.
            //When finished, make the template a HTML comment <!-- --> for parsing into Handlebar's renderer
            //Advantage: Design the template where it goes in the layout with Chrome DevTools
            
            //Markup:
            <div id="template-wrapper">
                <!-- <span>{{var1}}</span> -->
            </div>
            
            //JS:
            var sel_ = "#template-wrapper";
            if(null!=$(sel_).html().match(/<!--/,"g"))
                $(sel_).html(Handlebars.compile($(sel_).html().replace(/<!--([\s\S]*)-->/g, '$1'))(wrapper));
                
        
        /* JS: TEMPLATE STASHED AWAY */
        
            // This is how Handlebars is typically done:
            < script id="template" type="x/template">
            </ script>
        
        /* PHP: TEMPLATE STASHED AWAY IN EXTERNAL PAGE */
            if(isset($_GET["deviceuid"]) && $_GET["deviceuid"]=="c31b32364ce19ca8fcd150a417ecce58") {
                echo '<'.'script id="templates" type="x/template">';
                include("views/posts.php");
                echo '<'.'/script>';
            }

      
        /* PHP: JS CONSOLE */
            // If the URL string query has "remote", activate remote access to the page at jsconsole.com using command :listen.
            // This lets you see browser console errors from mobile that you would otherwise not see (great for javascript debugging). It also lets you change the layout using javascript and instantly see the results on mobile.
            
            if(isset($_GET["remote"])) {
                $connID = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"; // replace here
                echo '<' . 'script src="http://jsconsole.com/js/remote.js?' . $connID . '"><'.'/script>';
                echo '<'.'script>console.log("' . $connID . '"); function jscid() { alert("Done. JS Console Listening ID inserted at the end of the URL as a hash value.");  window.location.hash = "' . $connID . '"; }<'.'/script>'; // paste alert from url: javascript:jsc_id();
            }
    </script> <!-- LATER DEV -->
    

    <!-- NOTE-ANYWHERE:
    Chrome DevTools duplicates note-anywhere's. This extension
    lets you take notes on the webpage. And if you copy the HTML element's outerHTML to source code, you can take notes between collaborators. This script removes duplicates. -->
    <script>
    $(function() {
        // Remove duplicate note-anywhere (Chrome extension)
        // that came from copying the HTML from DevTools to
        // your editor
        $(".note-anywhere").each(function(i) { 
            var first = $(this),
            curInnerText = ($(this).find(".edit").text()); 
            if($(first).attr("data-marked-for-removal")==1)
                return true;
            $(".note-anywhere").each(function(j) { 
                var second = $(this);
                if(i==j || $(second).attr("data-marked-for-removal")==1) 
                    return true; 
                else if(curInnerText==$(second).find(".edit").text()) { 
                    console.log("%cTHIS:\n", "color:red;"); 
                    $(second).attr("data-marked-for-removal", 1);
                    console.log(second);
                    debugger; 
                } 
            }); 
        });
        $("[data-marked-for-removal=1]").remove();

        // Remove defunct resize ui and add new ones for 
        // note-anywhere that come from copying the HTML 
        // from DevTools to your editor
        $(".note-anywhere").find(".ui-resizable-handle").remove();
        $(".note-anywhere").resizable();

        // Reinit draggable that goes away from copying 
        // the HTML from DevTools to your editor
        $(".note-anywhere").draggable();  
        
    });
    </script> <!-- NOTE-ANYWHERE -->
    
    
    <!-- CACHE BUSTING CSS AND JS -->
    <!--<link href="css/global.css?v=<?php echo time(); ?>" rel="stylesheet">-->
    <!--<script src="js/app.js?v=<?php echo time(); ?>"></script>-->
    
   
    <!-- OPTIONAL: COOKIES GET/SET
    <script src="cookies.js"></script>
    -->
    
    
    <!-- MEDIA QUERIES -->
    <style>
    body {
        margin-top: 30px;
    }
    .width-uniform {
        width: 90%;
    }

    @media (max-width: 320px) {
        /* Smallest */
    }
        
    @media (min-width: 320px) and (max-width: 480px) {
        /* Small */
    }

    @media (min-width: 480px) and (max-width: 768px) {
        body {
            margin-top: 20%;
        }
        .width-uniform {
            width: 70%;
        }
    }
    @media (min-width: 768px) and (max-width: 1200px) {
        body {
            margin-top: 10%;
        }
        .width-uniform {
            width: 50%;
        }
    }
    @media (min-width: 1200px) {
        body {
            margin-top: 5%;
        }
        .width-uniform {
            width: 50%;
        }
    }
    </style> <!-- /MEDIA QUERIES -->
    
    
    <script>
        $(function() {
            Rapid.options({
                bootstrap: {
                                xsJS: function() {},
                                gridlines: true,
                                status: true
                            }
            });
            
            /* REMOVE THE FOLLOWING BEFORE UPLOADING TO PRODUCTION */
            Rapid.i();
            //db("./rapid/js/rapid-mysqli.php", "password123");
        });
    </script>
    
    <!-- APP -->
    <script>
        var app = {
            init: function() {
                this.Main.user.username="Joe";
                this.Main.user.id=1;
                this.Main.header.render();
            }, // init
            Main: {
                user: {
                    username: "",
                    id: 0,
                }, // user
                header: {
                    render: function() {
                    },
              }, // header
            } // Main
        } // app

    $(function() {
        app.init(); 
    }); 
    </script>
    
</head>
    <body>
        <div class="container">
        Empty
        </div><!-- container -->
        
        <!-- Designer: Open Sans, Lato, FontAwesome, Waypoints, Skrollr, Pixel-Em-Converter -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300|Open+Sans+Condensed:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
        <script src="https://raw.githack.com/filamentgroup/jQuery-Pixel-Em-Converter/master/pxem.jQuery.js"></script>
        
        <!-- Rendering: Handlebars JS, LiveQuery, Sprintf JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        <script src="https://raw.githack.com/hazzik/livequery/master/src/jquery.livequery.js"></script>
        <script src="https://raw.githack.com/azatoth/jquery-sprintf/master/jquery.sprintf.js"></script>
        
        <!-- Compatibility: Modernizr, jQuery Migrate (check browser) -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        
        <!-- Mobile: jQuery UI, jQuery UI Touch Punch -->
        <link href="https://code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
       
        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Friendlier API: ListHandlers, Timeout -->
        <script src="https://raw.githack.com/Inducido/jquery-handler-toolkit.js/master/jquery-handler-toolkit.js"></script>
        <script src="https://raw.githack.com/tkem/jquery-timeout/master/src/jquery.timeout.js"></script>
        
        <!-- Rapid Tools Suite (Weng's tool) -->
        <link href="https://rawcdn.githack.com/Siphon880gh/rapid-tools-suite/eb752a9bc502c3eeb80d4aef80d18cc88f3cb691/src/rapid.css" rel="stylesheet">
        <script src="https://rawcdn.githack.com/Siphon880gh/rapid-tools-suite/21dc670439234a7530e3069a81b3c00760af1545/src/rapid.js"></script>
                
        <!-- Webapp: Crossroads JS, Qunit -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/js-signals/0.8.1/js-signals.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crossroads/0.12.2/crossroads.min.js"></script>
        <link href="//code.jquery.com/qunit/qunit-1.20.0.css" rel="stylesheet"/>
        <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
   
    </body>
</html>