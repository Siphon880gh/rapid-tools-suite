<!DOCTYPE html>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <!-- jQuery and Bootstrap  -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
    
    
    <!-- CACHE BUSTING CSS AND JS -->
    <!--<link href="css/global.css?v=<?php echo time(); ?>" rel="stylesheet">-->
    <!--<script src="js/app.js?v=<?php echo time(); ?>"></script>-->

   
    <!-- OPTIONAL: COOKIES
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
        </div> <!-- /.container -->
        
        <!-- Designer: Open Sans, Lato, FontAwesome, Waypoints, Skrollr, Pixel-Em-Converter -->
        <link href="//fonts.googleapis.com/css?family=Open+Sans:400,300|Open+Sans+Condensed:300" rel="stylesheet">
        <link href="//fonts.googleapis.com/css?family=Lato" rel="stylesheet">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css">
        <script src="//cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
        <script src="//raw.githack.com/filamentgroup/jQuery-Pixel-Em-Converter/master/pxem.jQuery.js"></script>
        
        <!-- Rendering: Handlebars JS, LiveQuery, Sprintf JS -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.js"></script>
        <script src="//raw.githack.com/hazzik/livequery/master/src/jquery.livequery.js"></script>
        <script src="//raw.githack.com/azatoth/jquery-sprintf/master/jquery.sprintf.js"></script>
        
        <!-- Compatibility: Modernizr, jQuery Migrate (check browser) -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        
        <!-- Mobile: jQuery UI, jQuery UI Touch Punch -->
        <link href="//code.jquery.com/ui/1.11.3/themes/ui-lightness/jquery-ui.css" rel="stylesheet"/>
        <script src="//code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
       
        <!-- Bootstrap JS -->
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        
        <!-- Friendlier API: ListHandlers, Timeout -->
        <script src="//raw.githack.com/Inducido/jquery-handler-toolkit.js/master/jquery-handler-toolkit.js"></script>
        <script src="//raw.githack.com/tkem/jquery-timeout/master/src/jquery.timeout.js"></script>
        
        <!-- Rapid Tools Suite (Weng's tool) -->
        <link href="//rawcdn.githack.com/Siphon880gh/rapid-tools-suite/eb752a9bc502c3eeb80d4aef80d18cc88f3cb691/src/rapid.css" rel="stylesheet">
        <script src="//rawcdn.githack.com/Siphon880gh/rapid-tools-suite/21dc670439234a7530e3069a81b3c00760af1545/src/rapid.js"></script>

    </body>
</html>