<!DOCTYPE html>
<?php /* * * * *
       * * * * 
       
Setup NPM, Sass/Compass, JSDoc, LiveReload, and Git:

A. Setup NPM
  1. Run command: npm init

  2. Merge into package.json's top-level
    
    "scripts": {
      "watch": "concurrently 'compass watch ./' 'livereload --ignore out/' 'watch \"npm run js_docs\"'",
      "js_docs": "jsdoc -c jsdoc.json"
    },
    "watch": {
      "js_docs": {
        "patterns": "**/*.js",
        "ignore": "out/*",
        "extensions": "js,jsx",
        "quiet": false,
        "delay": 2500
      }
    },
    "dependencies": {
      "node-livereload": "^0.6.0",
    }

  3. But also install globally so the livereload command works:
     npm install -g node-livereload
    
     If it doeesn't let you, you may need to sudo.

B. Setup JSDoc (Recommended for big projects that may benefit from on-the-fly documentation)
    - Good: JSDoc is already setup at NPM's package.json
    - Create jsdoc.json.
    - Then add to it:
    {
      "recurseDepth": 10,
      "source": {
          "include": ["js", "comps"],
          "exclude": ["js/vendors", "js/vendor", "node_modules", "out"]
      },
      "tags": {
          "allowUnknownTags": true,
          "dictionaries": ["jsdoc","closure"]
      }
    }
    - Look over the source.include array. 
      If a path does not exist, then you'll get "Unable to find the source file or directory" errors during the `npm run watch` process.
      However the errors may take over the terminal screen, it does not break the watching.

C. Setup Sass and Compass
  4. Run Command: compass init
  5. Create css and css/scss directories then add them to config.rb

D. Setup Git
  6. Run commands
      git init
      git add .
      git commit -m "Init"

  7. hen add to .gitignore:
      .sass_compass/
      .git
      out/

E. Setup Hot Reloading
   You can use MAMP or http-server. Drawback of http-server is it supports only Node so PHP code does not run and opening a directory ignores index.php for the default page.
  
   MAMP Hot Reloading Prerequisites:
        Node's livereload-js:     //www.npmjs.com/package/livereload-js?fbclid=IwAR11sghYx6WPqrNJ_v-BxZJ-e5WzIb77pZaMb8xfUx-yXQZyse8nzfrAO1Q
        Chrome's LiveReload //chrome.google.com/webstore/detail/livereloadhttps/mbcllnijheidbcbjhagbloiplmddkacm?fbclid=IwAR3IICWMkBdgWIxU90BuqaMO-tN9JSVEDmFXCOjagsfGfsIydoZtwR-A53A

   8. MAMP Hot Reloading Instructions:
        1. Run MAMP
        1. Run command: npm run watch
        2. Run Chrome extension: LiveReloadHttps

* * * * 
* * * * */ ?>
<html lang="en">
  <head>
   <title>Untitled</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <!-- jQuery and Bootstrap  -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        
    <link href="css/index.css?v=<?php echo time(); ?>" rel="stylesheet">
    <script src="js/app.js?v=<?php echo time(); ?>"></script>
    
</head>
    <body>
        <div class="container">


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

    </body>
</html>