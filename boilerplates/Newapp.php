<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <!--<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">  -->

    <!-- jQuery and Bootstrap  -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>

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
    
    <!-- COOKIES -->
    <script>
    function setCookie(obj, days)
    {
        var date=new Date();
        var exdays = days*24*60*60*1000;
        date.setDate(date.getDate() + exdays);


        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              var c_value=escape(value) + ((days==null) ? "" : "; expires="+date.toUTCString());
              document.cookie=key + "=" + c_value;
          }
        }
    } // setCookie >setCookie({foo:"bar"}, 4);

    function getCookie(c_name)
    {
        if(arguments.length==0) {
            return document.cookie;
        }
        var i,x,y,ARRcookies=document.cookie.split(';');
        for (i=0; i < ARRcookies.length;i++)
        {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf('='));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
            return unescape(y);
          }
        }
          return null;
    } // getCookie >getCookie("foo"); >getCookie(); [return value or null]

    function eraseCookie(c_name) {
        document.cookie = c_name + '=; Max-Age=0'
    } // eraseCookie >eraseCookie("foo");

    function getAllCookies() {
        return document.cookie;
    }  
    </script> <!-- COOKIES -->
    
    
    <!-- MEDIA QUERIES -->
    <style>
    /* Mobile first with precise device targetting */
    /*@media (min-width: 320px) {

    }
    @media (min-width: 480px) {

    }*/
        
    /* Not mobile first and no precise device targeting */
    /*@media (max-width: 767px) {

    }*/
    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
    </style> <!-- MEDIA QUERIES -->
    
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
    $(function() {
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
        <script src="https://rawgit.com/filamentgroup/jQuery-Pixel-Em-Converter/master/pxem.jQuery.js"></script>
        
        <!-- Rendering: Handlebars JS, Sprintf JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        <script src="https://rawgit.com/azatoth/jquery-sprintf/master/jquery.sprintf.js"></script>
        
        <!-- Compatibility: Modernizr, jQuery Migrate -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        
        <!-- Mobile: jQuery UI, jQuery UI Touch Punch -->
        <link href="https://code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
       
        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Friendlier API: ListHandlers, Timeout -->
        <script src="https://rawgit.com/Inducido/jquery-handler-toolkit.js/master/jquery-handler-toolkit.js"></script>
        <script src="https://raw.githubusercontent.com/tkem/jquery-timeout/master/src/jquery.timeout.js"></script>
        
        <!-- Rapid Tools Suite (RawGit) -->
        <link href="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.css" rel="stylesheet">
        <script src="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.js"></script>
                
        <!-- Webapp: Crossroads JS, Qunit -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crossroads/0.12.2/crossroads.min.js"></script>
        <link href="//code.jquery.com/qunit/qunit-1.20.0.css" rel="stylesheet"/>
        <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
   
        <!-- Knockout JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min.js">
        
    </body>
</html>