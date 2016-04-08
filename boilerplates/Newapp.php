<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">  
    <!--<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">  -->

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
            //Just design the template where it's going to be rendered, then make it a comment when you are done. 
            The code will check for a comment to make into a template then render it where it is. No more needing 
            to have a template in the head block and coming up with ID names for it.
            
            //The markup:
            <div id="template-wrapper">
                <!-- <span>{{var1}}</span> -->
            </div>
            
            //The javascript:
            var sel_ = "#template-wrapper";
            if(null!=$(sel_).html().match(/<!--/,"g"))
                $(sel_).html(Handlebars.compile($(sel_).html().replace(/<!--([\s\S]*)-->/g, '$1'))(wrapper));
                
        
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

    <!-- Note anywhere for marking DevTools -->
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
    </script>
    
    <!-- Cookies management -->
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
    </script>
    
    <style>
    /* Mobile first with precise targetting */
    /*@media (min-width: 320px) {

    }
    @media (min-width: 480px) {

    }*/
        
    /* Mobile first without precise targetting */
    @media (max-width: 767px) {

    }
    @media (min-width: 768px) {

    }

    @media (min-width: 992px) {

    }

    @media (min-width: 1200px) {

    }
    </style>
    
    <script>
        $(function() {
            Rapid.options({
                bootstrap: {
                                xsJS: function() {},
                                gridlines: true,
                                status: true
                            }
            });
            
            /* REMOVE THESE LINES BEFORE UPLOADING TO PRODUCTION SERVER */
            Rapid.i();
            //db("./rapid/js/rapid-mysqli.php", "password123");
        });
    </script>
    
</head>
    <body>
        <div class="container">
        Empty
        </div><!-- container -->
        
        <!-- Designer fonts -->
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300|Open+Sans+Condensed:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        
        <!-- Modernizr -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        
        <!-- Webapp: Qunit -->
        <link href="//code.jquery.com/qunit/qunit-1.20.0.css" rel="stylesheet"/>
        <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
        
        <!-- jQuery UI -->
        <link href="http://code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
       
        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Handlebars JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        
        <!-- Webapp: Crossroads JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crossroads/0.12.2/crossroads.min.js"></script> 
        
        <!-- Rapid Tools Suite (RawGit) -->
        <link href="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.css" rel="stylesheet">
        <script src="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.js"></script>
   
    </body>
</html>