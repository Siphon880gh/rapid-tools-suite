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
                                gridlines: true,
                                status: true
                           }
            });
            
            
            /* REMOVE THE FOLLOWING BEFORE UPLOADING TO PRODUCTION */
            Rapid.i();
            //db("./rapid/js/rapid-mysqli.php", "password123");
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
        <script src="https://rawgit.com/tkem/jquery-timeout/master/src/jquery.timeout.js"></script>
        
        <!-- Rapid Tools Suite (RawGit) -->
        <link href="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.css" rel="stylesheet">
        <script src="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.js"></script>

    </body>
</html>