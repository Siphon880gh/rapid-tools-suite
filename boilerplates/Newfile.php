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
        
        <!-- jQuery UI -->
        <link href="http://code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
       
        <!-- Bootstrap JS -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Handlebars JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        
        <!-- Rapid Tools Suite (RawGit) -->
        <link href="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.css" rel="stylesheet">
        <script src="https://rawgit.com/Siphon880gh/rapid-tools-suite/master/js/rapid.js"></script>

    </body>
</html>