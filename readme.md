Rapid Tools Suite
==================
By Weng Fei Fung  
Utilities to speed up development full stack and all around development stages.  
FOR FRONTEND: jQuery, Bootstrap, Crossroad, Knockout, and Handlebar gets developed quicker especially if you are not an expert yet. You can keep code clean by loading js files inside elements or using onclick controllers in a modular fashion.  
FOR MAINTENANCE: You have cssUp and cssDown that lets you reverse engineer you code looking for specific styles up or down the tree from a specific DOM. Syntactic sugar enum's make less tedious reading because constants are initialized once and used everywhere else.  
FOR DEBUGGING: There are enhanced watchers, asserts, and debuggers on Chrome. Asserts are not bulky or opinionated. There's a wait and pause debugger that gives you time to reposition your mouse before debugger is called.  
FOR DESIGNING: You can generate lorem ipsum, placeholders, test out new DOM in a separate floating window, add breakpoints without knowing the specific px, add Bootstrap elements inside the console, highlight Bootstrap columns, have an easier time with Handlebar with syntactic sugar for loading and rendering templates.  
FOR BACKEND: There is a restful API template of PHP mySQL (with variables $_GET, $_POST, $_PUT, $_UPDATE, $_DELETE, $_HEAD, $_OPTIONS) with meekrodb or mysqli. You can also test PHP variables and queries inside the browser console because there's a javascript equivalent of mySQL.  
FOR TEAMWORK: There are utilities to communicate between team members in the web browser or code. And when you're back months later, there are utilities to explore the CSS and js variables. There is an enhanced debugging tool for when you're developing. Scroll down to see the features. For an in-depth summary, go near the bottom of page.

Dependencies:
---
jQuery  
jQuery Migrate (enhanced Chrome debugger)  
Jquery UI (Bootstrap utility: screen size status. Design utility: ihtml)  
Bootstrap CSS (Bootstrap utility: scren size status, column gridlines, and in-console command-line Bootstrap)  
Bootstrap JS (Teamwork utility: Tooltips. Handlebar utility: handlebars.)

Installation:
---
```
Frontend:
<script src="src/rapid.js">
<link href="src/rapid.css" type="stylesheet">

Backend:
Setup your phpMyAdmin credentials at src/rapid-mysql.php
Ajax to src/rapid-mysql.php
```

Table of Contents
=================

   * [BOILERPLATES](#boilerplates)
      * [boilerplates/newstatic.php](#boilerplatesnewstaticphp)
      * [boilerplates/newapp.php](#boilerplatesnewappphp)
      * [boilerplates/newrest.php](#boilerplatesnewrestphp)
   * [MAINTENANCE: Enums](#maintenance-enums)
   * [MAINTENANCE: Reverse-engineer styles going up](#maintenance-reverse-engineer-styles-going-up)
   * [MAINTENANCE: Reverse-engineer styles going down](#maintenance-reverse-engineer-styles-going-down)
   * [MODULAR PATTERNS](#modular-patterns)
      * [JS Files:](#js-files)
      * [Code Snippets:](#code-snippets)
      * [Dependencies: (optional a-d)](#dependencies-optional-a-d)
      * [ori or $(ori):](#ori-or-ori)
      * [Certain Cases:](#certain-cases)
   * [DEBUGGING: assert](#debugging-assert)
   * [DEBUGGING: Assert](#debugging-assert-1)
   * [DEBUGGING: Watch](#debugging-watch)
   * [DEBUGGING: Delay Debugger](#debugging-delay-debugger)
   * [DESIGN UTILITIES: Img and Block Placeholders](#design-utilities-img-and-block-placeholders)
   * [DESIGN UTILITIES: Lorem Ipsum](#design-utilities-lorem-ipsum)
   * [DESIGN UTILITIES: ihtml and handlebars](#design-utilities-ihtml-and-handlebars)
   * [DESIGN UTILITIES: JS Bootstrap Media Queries](#design-utilities-js-bootstrap-media-queries)
   * [DESIGN UTILITIES: CLI Bootstrap](#design-utilities-cli-bootstrap)
   * [DESIGN UTILITIES: Bootstrap More Visual](#design-utilities-bootstrap-more-visual)
   * [ASSET UTILITIES: Load Stylsheets and Scripts from Console](#asset-utilities-load-stylsheets-and-scripts-from-console)
   * [BACKEND: AJAX Generator](#backend-ajax-generator)
   * [BACKEND: JS Console of PHP and MySQL](#backend-js-console-of-php-and-mysql)
   * [TEAMWORK UTILITIES: Notes inside elements](#teamwork-utilities-notes-inside-elements)
   * [TEAMWORK UTILITIES: Tooltips With or Without Stories](#teamwork-utilities-tooltips-with-or-without-stories)
      * [How to instruct your team members](#how-to-instruct-your-team-members)
   * [LATEST VERSION](#latest-version)

BOILERPLATES
===
For frontend and backend: Static webpage, web app, or restful api.  

boilerplates/newstatic.php
---
Static webpage HTML, Bootstrap, jQuery, Knockout, and Handlebar that helps you get started on your static webpage with two way binding (knockout), visibility directives (knockout), and template rendering (handlebar).  

boilerplates/newapp.php
---
Includes the static webpage libraries. Also has Crossroads JS to setup URL routers that enable the user to use the browser back/forward buttons to change the state of the DOM.  

boilerplates/newrest.php
---
A php backend file to access your mysql database, either with meekrodb or mysqli. Uses intuitive variables to access your inputs: $_GET, $_POST, $_PUT, $_UPDATE, $_DELETE, $_HEAD, $_OPTIONS.

MAINTENANCE: Enums
===
Add <b>enums</b> that help you pass flags to functions or to use switch statements without the tedious work of making sure you have unique ID's or making sure the constants are the same across the app. The enum generates an incrementing unique integer underneath irrespective of where it's called in the app. Syntactic sugar enum's make less tedious reading because constants are initialized once and used everywhere else.
```
var SWITCH = {ON:Rapid.Enum.new(), OFF:Rapid.Enum.new()};
var GENDER = {FEMALE:Rapid.Enum.new(), MALE:Rapid.Enum.new()};
//Then you have the enums SWITCH.ON, SWITCH.OFF, etc.
```

If for some reason you want to know the last unique integer generated by Rapid.Enum.new(), then call `Rapid.Enum.last()`

MAINTENANCE: Reverse-engineer styles going up
===
Use in your browser console. Lists ancestral DOMs with the value of your desired CSS property. You can indicate how many ancestors you go up. Useful when you know that a higher DOM is causing the page to display a certain way but there are too many DOMs to click thru in Inspect Element. If you do not indicate the number of ancestors, it will just go up one parent.

```
Rapid.cssUp($DOMtoTransverse, cssProperty, levelsGoingUp) 

Rapid.cssUp($("#goUpFromMe_andLookForElementsWithBgColorDefined_andStop4LevelsUp"), "background-color", 4);
```

MAINTENANCE: Reverse-engineer styles going down
====
Use in your browser console.  
- Finds children DOM that match a CSS property or value. You can match against the value using mathematical expression (<, >, <=, >=) or regular expression (eg. ^5). Mathematical expressions ignore units like px.
- You can match against colors too (eg. lightyellow, rgb, rgba) but you cannot use rules (mathematical or regular expression)
- You can exclude the value or rule to list all the children with the CSS value.

Format:
`Rapid.cssDown($DOMtoTransverse, cssProperty, cssValue_or_matchingRule);`

Examples:
```
Rapid.cssDown($("ul"), "width");
Rapid.cssDown($("ul"), "width", "100%");
Rapid.cssDown($("ul"), "width", "^5");
Rapid.cssDown($("ul"), "width", >=10);
Rapid.cssDown($("ul"), "background-color", "lightyellow");
```

Explanations:
a. `Rapid.cssDown($("ul"), "width");`
   list all the children DOM with their width properties
b. `Rapid.cssDown($("ul"), "font-weight", "^5")`
   find children DOM with font-weight that starts with a 5, so effectively 500-599
c.` Rapid.cssDown($("ul"), "width", >=10)`
   find children DOM with width greater than 10px, but this also shows 100% because remember mathematical expressions ignore units
d. `Rapid.cssDown($("ul"), "background-color", "lightyellow");`
   find children with that specific color. does not matter if you use human readable color names or rgb because the script converts to rgb from the DOM and your input before matching. No mathematical expression and regular expression would work on color CSS, so do not use them.


MODULAR PATTERNS
===
**- JS FILES**  
**- CODE SNIPPETS**  
**- DEPENDENCIES**  
This is optional. You can add a script src to *JS FILES* inside your tag so it becomes clear which elements the script refers to. The js file would have access to the element (via **ori or $(ori))** so you can transverse with children(), next(), previous(), find(), filter(). You can go outside the element with closest() and parent(), or by selecting another element with $(..) and have access to global variables thru window., so you can maintain the flexibility of going outside a component. Another advantage is you don't have to get lost in coming up with ID or class names for your javascript code to access the DOM. The directive is data-onload-src.

You can have a directive that, when its element is clicked, the js file runs. This keeps the code readable without having to go into the js file to determine if there is onclick logic because the directive is data-onclick-src.

If you want to write **code snippets** inside an element, you can use data-onload and data-onclick. Notice there's no suffix src.

You can build **dependencies** by loading the js files in different orders. Super suffix with a to d for first to last. For example, data-onload-src-a or data-onload-src. It becomes clear when reading the code that a directive is for a js file or snippet code because of the value, so placing the letter at the end that is easy to glance is more important than placing src to the right most.

Actually, there is always a dependency system. See, data-onload, data-onload-src, data-onclick, and data-onclick-src are synonymous to data-onload-a, data-onload-src-a, data-onclick-a, and data-onclick-src-a. But leaving out the letter at the rightmost makes your intention clear that you don't need dependencies.

JS Files:
--
```
<div data-onload-src="surpriseAlertWhenThisElementLoads.js"></div>
<div data-onclick-src="expectedAlertWhenClicked.js"></div>
```

Code Snippets:
--
```
<div data-onload="alert('this div was clicked and its text is' + $(ori).text());"></div>
<div data-onclick="alert('this div is loaded and its text is' + $(ori).text());"></div>
```

Dependencies: (optional a-d)
--
```
<div data-onload-src-a="thisWillInitializeWindowMsg.js"></div>
<div data-onclick-b="alert(window.msg)">Click me!</div>
```

ori or $(ori):
--
```
// When clicked:
$(ori).css("background-color", "green");]
var $container = $(ori).parent(".container");
$container.css("border", "1px solid black");
```

Certain Cases:
---
- You can pass the current element ori or $(ori) to a global function.  
- **You can dynamically add new elements with these features**. For example, you add multiple elements that load .js files with dependencies. Make sure to run `reinitM()` to initialize those new elements. M for modular.  
- You can turn on **caching** for performance when you go live.
``
Rapid.options({
    modularCache:true // default: false
});
``

DEBUGGING: assert
===
Simple assert. Use lowercase assert.

Shouldn't return anything because assertion passes.
```
Rapid.assert(1==1, "The numbers didn't match.");
```

Show message when assertion fails.
```
Rapid.assert(1==2, "The numbers didn't match.");
```

Or run javascript when assertion fails. Write the code snippet in a string. Then pass true because the third parameter is a flag for evaluating.
```
Rapid.assert(1==2, "alert('The numbers didn\\'t match.'); alert('And here\\'s a second alert')", true);
```

DEBUGGING: Assert
===
More powerhouse assert. Use uppercase Assert.
```
Rapid.Assert(statement, superOptions); // where paramStrings:

    superOptions = {
        title:"", 
        desc:"", 
        onPass:["print"], // optional
        onFail:["trace","debugger"] // optional
    }
```
    
Assess values at different points of the script without boilerplate. For help during development, call RapidAssert.help() on console.

After passing, if you want to keep the RapidAssert calls for other developers but not pollute, instead of commenting out you can define RapidAssert as RapidAssert = function() {} at the top of your code

If you have to pass multiple values, use an array of those values.

DEBUGGING: Watch
===
*Watch:* Monitor for changes in Javascript Objects, Javascript Object Keys, HTML attributes, HTML5 data attributes, and HTML/text content. If you want to pause on changes like in a breakpoint, pass "true" to the monitoring function(s) and run the website with Chrome's DevTools opened (must be opened for the pauses to work). If you don't want pauses, skip that parameter or pass "false."

FUNCTION: Rapid.watchObj("object", [true]);  
FUNCTION: Rapid.watchKey("object", "key", [true]);  
FUNCTION: Rapid.watchArr("array", [true]);  
FUNCTION: Rapid.watchDOM("css-selector(s)", [true]);  
FUNCTION: Rapid.watchDOMOptions({key:value[, key:value, key:value, ..]});  
OPTIONS: {childList: true/false, attributes: true/false, characterData: true/false, subtree: true/false, attributeOldValue: true/false, characterDataOldValue: true/false} 

**Examples:**  
var fooObj = {foo:13,baz:"42",bar:"33"};
var fooObj2 = {a:1, b:"2"};
Rapid.watchLit(var);
Rapid.watchObj("fooObj2");
Rapid.watchKey("fooObj", "baz");
Rapid.watchArr("arr");
Rapid.watchDOMOptions({subtree:false});
Rapid.watchDOM("#target");
Rapid.watchDOM("#target2", true);

**What could trigger alerts in the console:**  
foo.bar=30;   
$("#target").text("inserted");
$("#target").html("<b>changed</b>");
$("#target").data("attr","2");
$("#target2").data("attr","3");

DEBUGGING: Delay Debugger
===
Runs debugger after x ms. Useful for some scenarios like having your mouse positioned before debugger runs. This is useful because opening the console and running the debugger statement would place the focus away from the DOM and may not trigger the function you want to debug.
```
Rapid.delayDebugger(3000);
```

DESIGN UTILITIES: Img and Block Placeholders
===
*What:* When designing the site layout, you may want to forgo digging for the actual graphics. You can insert placeholders. There are a few different styles available:

A square or rectangle with a X through it (make sure to give a definitive width and height - not auto):
```
<img class="center-block rapid-rect img-responsive" style="width: 200; height: 200;">
OR:
<div class="center-block rapid-rect" style="width: 200; height: 200;"></div>
```

Circle (again, definitive width and height!):
```
<img class="center-block rapid-circ img-responsive" style="width: 100; height: 100;">
OR:
<div class="center-block rapid-circ" style="width: 200; height: 200;"></div>
```

Another style is full control over the color, label, and alignment of the paceholder (requires browser canvas support):
```
<div data-rect='{"title":"Aligned","align":"right"}'></div>
<div data-circ='{"title":"Valid centered text","bgcolor":"orange","top":"120px","font":"16px Helvetica","color":"black"}'></div>`
```

Because full placeholder control has so many options, here is the full reference:  
ATTRIBUTE: [data-rect], [data-circ]  
JSON KEYS: bgcolor, color, top, align, font, title  
JSON VALUES (E.g.): "title":"Page Container","font":"12px Times New Roman"

DESIGN UTILITIES: Lorem Ipsum
===
*What:* When laying out the website, you may not want to dig for the text either. You can generate a bunch of random text:

For five words:
```
<div class="lorem-5w">
```

For five sentences:
```
<div class="lorem-5s">
```

For five paragraphs that take up a lot of the website:
```
<div class="lorem-5p">
```

If dynamically adding these classes, you will need to call reinitL().


DESIGN UTILITIES: ihtml and handlebars
===
*ihtml:* DOM - You want to add html thru jQuery's html, append, or prepend to see how it looks but you already have a good layout going on there? Just use ihtml to create a floating draggable area that acts like scratch paper for html rendering. You can adjust transparency and move it out of the way of the website's main elments.
```
ihtml("<b>I should look bolded.</b>");
```

Finished scratch papering your renders? Just destroy it with:
```
ihtml();
```

*handlebars:* HANDLEBAR - Not confident you can write Handlebar expressions without screwing up? Write them in command line and get instant feedback. Rapid.handlebars(..) helps with this. Pass the Handlebar expressions with html in the first parameter without that much focus on making the html look good. Then pass the javascript object in the second parameter as the context. Optionally, you can pass an array of helper name and its implementation in the third parameter. For extra helpers, you pass the same onto the fourth parameter, fifth parameter, etc etc.  

Below is an example. Once you run with handlebars, you can look at the "render" section to see if it's correct, then there's the "code" section you can copy and paste to. So handlebars not only lets you test out Handlebar templates but also generates the wordy Handlebar code.
```
var data = { 
	random_words: [ 
                    {word: "Alpha"},
                    {word: "Beta"},
                    {word: "Omega"} 
    						] 
};

Rapid.handlebars("{{#random_words}} {{#everyOther @index 2 }}<b>{{word}}</b>{{else}} {{word}} {{/everyOther}}  {{/random_words}}", data, ["everyOther", function (index, amount, scope) { if ( ++index % amount ) return scope.inverse(this); else return scope.fn(this);} ])
```


DESIGN UTILITIES: JS Bootstrap Media Queries
===
*What:* Css media queries stress you out with their pixel numbers you haven't memorized or their confusing screen and width syntax? Have Rapid write the css media queries for you. Setup the responsive css thru options
```
Rapid.options({
    bootstrap: {
                lgCSS:"body { font-size: 1em; }"
                mdCSS:"body { font-size: 1em; }"
                smCSS:"body { font-size: 2em; }"
                xsCSS:"body { font-size: 2em; }"
            }
});
```

Since you are typing CSS code into these xsCSS..lgCSS options, your IDE wont be auto-completing, syntatic coloring, or offering hints for the CSS. If you feel uncomfortable, you can validate your CSS at CSS Lint or you can open a blank css on your editor to type your CSS there first. `Rapid.bootstrap.toStaticCSS();` also helps by returning a concatenated form of all the responsive CSS options with their approproate CSS media queries, something you can validate at CSS Lint.

If the page loads as expected on different screen resolutions, you are good to go. But if the elements take a brief moment to rescale and/or move to fit the css rules targeted for the screen resolution, then ask Rapid for the css and just copy and paste that into a style block, and delete the Rapid options. You get that static css media queries with:
```
Rapid.bootstrap.toStaticCSS();
```

When the css media queries are not enough and you want to use jquery to change the html using .css, .offset, etc to tailor fit certain screen resolutions; Or when you just want to run scripts based on screen resolutions: There are responsive scripts you can setup in Rapid options:
```
Rapid.options({
    bootstrap: {
                    lgJS:'alert("Wow you have a huge monitor. Our page isn't best seen on big screens.");'
                }
});
```
            
To apply the same responsive javascript to one screen resolution as another, just call within the options:
```
Rapid.options({
    bootstrap: {
                    lgJS: function() {
                        $("#header2-desc").css("height", $("#header2-logo").outerHeight(true) + "px");
                        $("#content-desc").css("line-height", "3em");
                        $("#main > div.col-md-6.col-sm-12.col-xs-12").css("padding-bottom");
                    },
                    mdJS: function() {
                        Rapid.bootstrap.lg();
                    },
                    gridlines: true,
                    status: true
                }
});
```


DESIGN UTILITIES: CLI Bootstrap
===
- Get the Bootstrap code for the most common components.
- Modify column widths in console.

Recommend running this so Rapid.bootstrap.preset can be called as preset(), etc
```
Rapid.i(); // load aliases so you can be quicker with being interactive in the console
```

Get or append the Bootstrap code for the most common components
```
$(".container").append(preset("row"));
```

You can use the components:
-"container"
-"well"
-"row"
-"col"
-"colxs"
-"colsm"
-"colmd"
-"collg"

And you can be specific with the column widths, including:
-"col-xs-1"
-"col-lg-12".

Another workflow is you can get the code inside console and edit the DOM in DevTools.

Rapid.add also lets you assign classes, styles, add attributes, and add inner html or text.
```
$(".container").append(preset("row"), {style:"text-align:center;", class:"someClass", attr:"someAttr someOtherAttr='value'", inner:"someTextOrHTML"});
```

Each Bootstrap div that Rapid makes is given an unique id so you can select it in jQuery to do further html changes.

You might forget what the unique id is and don't feel like scrolling up the console to hunt for it. Get the last generated id with
```
Rapid.lastID();
```

You might want to save that DOM position to add multiple children to it:
```
var row = Rapid.lastID();

// so then you could use:
row.append(Rapid.bootstrap.preset("col-xs-4"));
row.append(Rapid.bootstrap.preset("col-xs-4"));
row.append(Rapid.bootstrap.preset("col-xs-4"));
```

You can assign or modify the direct descendants' column widths:
```
Rapid.cols($("#bid2"), "xs",[4, 4, 4]); // give col-xs the widths 4,4,4
Rapid.cols($("#bid2"), "sm", [3, 3, 3]); // give col-sm the widths 3,3,3,3. Notice that additional widths follow the last value.
Rapid.cols($("#bid2"), "sm", 3); // give all col-sm the widths  3
```


DESIGN UTILITIES: Bootstrap More Visual
===

Show gridlines of all Bootstrap rows and columns (default = false)
```
Rapid.options({
    bootstrap: {
                    gridlines: false
                }
});
```

Shows which column the browser is showing - xs, sm, md, or lg - at the lower right corner. Zoom or resize window to test responsiveness (default = false)
```
Rapid.options({
    bootstrap: {
                    status: false
                }
});
```

ASSET UTILITIES: Load Stylsheets and Scripts from Console
===
For example, you can try out different themes and jquery plugins quickly from the console. You can also have javascript code that loads after a js file's loaded. Here's how to load scripts and styles:

Loading a js file:
```
Rapid.assets.script("load_me.js");
```

Loading a js file then run js code:
```
Rapid.assets.script("controllers/section2.js", 'console.log("Code for section 2 loaded!"); section2.someFlag=true; ');
Rapid.assets.script("controllers/section3.js", 'console.log("Code for section 3 loaded!");');
```

Loading a css file:
```
Rapid.assets.style("temp_style.css")
```

Remove all css files added with Rapid.assets (just call blank):
```
Rapid.assets.style();
```

BACKEND: AJAX Generator
===
*AJAX*: Ajax has many methods: get, post, put, patch, update, delete, head, and options. There are many ways to pass parameters and different ways to setup done callbacks. Rapids.ajax(..) offers a uniform way of making ajax requests regardless of method. Then when the request passes, Rapid gives you the ajax code in the console. You just copy and paste that to your code and be confident it will work!

Last parameter should be a done callback that handles the responseText on the client side. If you do not want to bother with a done callback, pass null. The console will still return a console.dir but the ajax code it gives you will exclude any done callback.

```
//Customer seeing all items available
Rapid.ajax("GET api.php/sales/items", function(data) { console.dir(data); });
```
```
//Viewing a specific item
Rapid.ajax("GET api.php/sales/items/45", function(data) { console.dir(data); });
```
```
//The merchant seeing his items
Rapid.ajax("GET api.php/sales/items", {merchantID: 1}, function(data) { console.dir(data); });
```
```
//The merchant adding a new item
Rapid.ajax("POST api.php/sales/items", {merchantID: 1, category: "CDs", name: "John Doe's Music - Album 1", price:9.50}, null);
```
```
//The merchant changing the price
Rapid.ajax("PATCH api.php/sales/items/46", {merchantID: 1, price: 9}, null);
```
Note: The above uses of GET, POST, and PATCH uses RESTful API conventions. Brief review: GET to read information. POST to write information when you don't have a precise URI path (notice it isn't POST api.php/sales/items/46). PUT is to write information when you do (correct: PUT api.php/sales/items/46). PATCH is to update partial information. UPDATE is to update all the information. DELETE is to remove information. HEAD is for debug information, meta information, or description about the resource. OPTIONS is to list all available API methods and URI paths.  

BACKEND: JS Console of PHP and MySQL
===
*Javascript mysql:* Try PHP and MySQL in the console! Then generate the PHP code to copy over. This is a faster workflow where you don't have to setup new php pages and test ajax requests and have to refresh the webpage to see results. You canwrite an equivalent php page in the console to query the database, fetch any associated rows (if it is a query like SELECT), and echo a json as a response to ajax - all in command line. Just setp your database credentials in rapid-mysql.php. Recommend not uploading rapid-mysql.php to production server but if you must, change the master password (aka Rapid Key) to your own.

Authenticate for the webpage. Then you can start querying the database in javascript mysql (This can be typed in command line or be part of your code.)
```
Rapid.mysql.connect("./Rapid/js/rapid-mysql.php","password123");
```
		
Now for the actual rerouting to javascript mysql. You must first setup listeners for those requests using Rapid.serverListen(..), then send the request using Rapid.ajax(..). Rapid's Ajax will internally be rerouted from requesting external php pages to the javascript mysqli.

In this example, we are querying the database with sql injection protection, then echoing the response to AJAX (initScope lets us initialize some PHP variables and that method is totally optional in the chain):

```
//PEDANTIC EXAMPLE: Querying the database with sql injection protection and echo:
Rapid.serverListen(Rapid.mysql.Chain("GET api.php/sales/item").initScope("$arr1=array();").fetchQuery({$arr1:/"SELECT * FROM sales WHERE merchantID='" . mysqli_real_escape_string($_GET["merchantID"]) . "' LIMIT 1"/}).setFinalEcho("echo json_encode($arr1);"));

Rapid.ajax("GET api.php/sales/item", {merchantID:1}, function(data) { console.dir(data); });

console.dir(Rapid.ihelpers.listeners["GET api.php/sales/item"]);
```

Make sure you pass a valid php snippet to setFinalEcho. Statements end in semi-colon. Otherwise, you'll get the syntax error "unexpected end of file, expecting ',' or ';'".

Skip sql injection protection during development with Rapid for something **simplified**:
```
//Querying the database and echo:
Rapid.serverListen(Rapid.mysql.Chain("POST api.php/sales/item").initScope("$arr1=array();").fetchQuery({$arr1:/"SELECT * FROM sales WHERE merchantID='" . $_POST["merchantID"] . "' LIMIT 1"/}).execQuery(/"INSERT INTO `items` (`merchantID`, `category`, `name`, `price`) VALUES ($_POST['merchantID'], $_POST['category'], $_POST['name'], $_POST['price'])"/).setFinalEcho("echo json_encode($arr1);"));

Rapid.ajax("POST api.php/sales/item", {merchantID: 1, category: "CDs", name: "John Doe's Music - Album 1", price:9.50}, null);

console.dir(Rapid.ihelpers.listeners["POST api.php/sales/item"]);
```

Notice you can chain an execQuery too. You can actually chain as many fetchQuery and execQuery as you need. For fetchQuery, you must assign to a php variable because you're fetching for an associative array. For execQuery, you do not assign a php variable because that's usually for queries like INSERT.

Without initScope, even **more simplified**:
```
Rapid.serverListen(Rapid.mysql.Chain("POST api.php/sales/item").fetchQuery({$arr1:/"SELECT * FROM sales WHERE merchantID='" . $_POST["merchantID"] . "' LIMIT 1"/}).execQuery(/"INSERT INTO `items` (`merchantID`, `category`, `name`, `price`) VALUES ($_POST['merchantID'], $_POST['category'], $_POST['name'], $_POST['price'])"/).setFinalEcho("echo json_encode($arr1);"));

Rapid.ajax("POST api.php/sales/item", {merchantID: 1, category: "CDs", name: "John Doe's Music - Album 1", price:9.50}, null);

console.dir(Rapid.ihelpers.listeners["POST api.php/sales/item"]);
```

**All RESTful methods are supported**:  
Rapid will give you the php to generate method associative arrays from the input stream. You can access values directly as $_PUT["foobar"], $_PATCH["foobar"], $_UPDATE["foobar"], $_DELETE["foobar"], $_HEAD["foobar"], or $_OPTIONS["foobar"]. You're not limited to $_GET["foobar"] and $_POST["foobar"]. The method used just needs to be recognized in RESTful API practice.
```
// Update price
Rapid.serverListen(Rapid.mysql.Chain("PATCH api.php/sales/item/46").execQuery(/"UPDATE `items` SET `price`=" . $_PATCH["price"] . " WHERE merchantID='" . $_POST["merchantID"]/).setFinalEcho("echo json_encode($arr1);"));

Rapid.ajax("PATCH api.php/sales/item/46", {merchantID:1, price:9}, function(data) { console.dir(data); });

console.dir(Rapid.ihelpers.listeners["PATCH api.php/sales/item/46"]);
```

As you see in the above examples, you can make the Ajax call and see the result from calling the javascripy mysql. If successful, Rapid generates the php code. You can copy that into an external php page and make the Ajax call when you are ready to invest time. This is superior to relying on PHP's unfriendly linter.

After setting up the actual php page, you would have to turn off listening to the javascrip mysql (or you can simply refresh the page if the code was done in the console). 

**To turn off listening and rerouting**:
```
Rapid.serverListen("POST api.php/sales/item");
```

*What if you just want the php code immediately after querying the database? You don't want to have to call ajax successfully for the php code. The least cumbersome way is using a standalone simpleChain that is runnable. You must call .run() at the end of simpleChain when you are done chaining fetchQuery's and/or execQuery's. Since we are running the queries immediately, we are not waiting for a listener to detect a Rapid Ajax request. Just call simpleChain on its own.


```
Rapid.mysql.simpleChain().fetchQuery({$arr1:/"SELECT * FROM items WHERE id=45"/}).run();
```

*What if you just want to test that the plumbing is working between the ajax request and the external php page, and even parameters? Ajax would request the php page with or without parameters, get the json response, and then print that to console or manipulate some javascript or html. There's nothing you couldn't have done with serverListen and ajax. You aren't forced to query the database.

```
Rapid.serverListen(Rapid.mysql.Chain("GET api.php/sales/").setFinalEcho('echo json_encode(array("passed params"=>$_GET["id"]));'));
Rapid.ajax("GET api.php/sales/", {id:45}, function(data) { console.dir(data); });
```

```
Rapid.serverListen(Rapid.mysql.Chain("POST api.php/sales/").setFinalEcho('echo json_encode(array("passed params"=>$_POST["id"]));'));
Rapid.ajax("POST api.php/sales/", {id:45}, function(data) { console.dir(data); });
```

```
Rapid.serverListen(Rapid.mysql.Chain("PATCH api.php/sales/").setFinalEcho('echo json_encode(array("passed params"=>$_PATCH["id"]));'));
Rapid.ajax("PATCH api.php/sales/", {id:45}, function(data) { console.dir(data); });
```
**Caveats**  
Do not pass params in ajax with key names "rapidKey", "rapidMysqli", "rapidEcho", "rapidMultiFetchAssocs", "rapidMethod", or "rapidParams" if you are using emulated mysql. These variables are needed to communicate with the rapid-mysql.php file that's setup through Rapid.mysql.connect. In summary, the reserved ajax key names are:  
rapidKey  
rapidMysqli  
rapidEcho  
rapidMultiFetchAssocs  
rapidMethod  
rapidParams  



TEAMWORK UTILITIES: Notes inside elements
===
*What:* Add semantics and modularity for more readable code. Here's a brief summary of those features. Following that are example codes.

Add <b>notes for your developer team</b> by using attributes data-note, data-note-john, data-note-cindy, etc that are removed when the webpage loads. You can ask your developers to grep for their names to refer to certain elements.
```
<div id="main-content" data-note="this is where the main content goes" data-notes="and so forth, and so forth"></div>
```


TEAMWORK UTILITIES: Tooltips With or Without Stories
===
*What:* A much more matured version of Bootstrap tooltips that appear when you move your mouse over an element. It is setup through the attribute data-detail (_not_ data-toggle or data-tooltip because I needed to avoid clashes). This detailed version of tooltip allows shorthand codes to show icons (reference below). For example, there are icons for to-do and bugs, which are helpful to mark up the elements during the development phase among a team. Background color and font color are also customizable.

Story Mode's great for communicating between team members. When activated by pressing the backquote (_\`_) button (aka the tilde button), you can narrate about the elements on the screen in a story and tell the viewer to press certain keys to toggle on tooltips as the narration goes on. For example: "The main body (press 1) is where users can scroll through different posts (press 2)." 

To show a story you have to press the key assigned to it while Story Mode is activated. Story Mode can hold multiple stories, each with their own keys. Story keys and tooltip keys can be the same.

You may want to disable mouseover on these tooltips if their description only applies to a narration or a team member because the tooltip would appear on mouseover outside of Story Mode as well. For example, using _data-detail_ always mouseovers and it is key toggleable only in Story Mode. But using _data-story-detail_ designates a story tooltip that has no mouseovers and its purpose is only to be key toggleable while in Story Mode. In terms of coding, the only difference is the attribute name.

If you dynamically loaded new elements, their tooltips may need to be re-initialized by calling reinitT(). T for toolbars.

Here is the full reference for tooltips:  
ATTRIBUTE: [data-detail]  
JSON KEYS: bgcolor, color, align, font, title, pos, bind  
JSON VALUES: "title":"\_BUG\_ Page can't scroll","font":"12px Times New Roman"  

Here is the full reference for shorthand codes for icons inside tooltips: (Capitalized shorthand is an alternate icon style)  
TITLE ICONS: \_todo\_, \_TODO\_, \_done\_, \_DONE\_, \_skipped\_, \_SKIPPED\_, \_bug\_, \_BUG\_  
TITLE_ICONS: \_check\_, \_CHECK\_, \_x\_, \_X\_, \_ix\_, \_IX\_  
TITLE ICONS: \_lefthalf\_, \_righthalf\_, \_tlhalf\_, \_brhalf\_, \_tlcorner\_, \_blcorner\_, \_brcorner\_, \_trcorner\_  
TITLE ICONS: \_scissor\_, \_SCISSOR\_, \_edit\_, \_EDIT\_, \_letter\_  
TITLE ICONS: \_aster\_, \_ASTER\_, \_ninja\_, \_NINJA\_, \_diamond\_, \_DIAMOND\_, \_spokes\_, \_SPOKES\_, \_bspokes\_, \_BSPOKES\_  
TITLE ICONS: \_dash\_, \_DASH\_, \_circle\_, \_CIRCLE\_, \_triang\_, \_TRIANG\_, \_square\_, \_SQUARE\_  
TITLE ICONS: \_star1\_..\_star9\_  
TITLE ICONS: \_point0\_..\_point9\_, \_POINT0\_..\_POINT9\_, \_spoint1\_..\_spoint9\_, \_point\_, \_POINT\_,   
TITLE ICONS: \_Num1\_..\_Num0\, \_num0\_..\_num9_\, \_NUM1\_..\_NUM0\_  
TITLE ICONS: \_rdquo\_, \_ldquo\_, \_rsquo\_, \_lsquo\_, \_lsaquo\_, \_rsaquo\_, \_laquo\_, \_raquo\_, \_ldaquo\_, \_rdaquo\_  
TITLE ICONS: \_return\_, \_RETURN\_, \_3darrowhead\_, \_3DARROWHEAD\_, \_arrowhead\_  
TITLE ICONS: \_trends\_, \_loop\_, \_sparks\_, \_clock\_, \_CLOCK\_, \_lock/, \_LOCK\_  
TITLE ICONS: \_stop\_, \_walk\_, \_run\_, \_biceps\_, \_phone\_, \_airplane\_, \_biohazard\_  
NEW LINE: \\n  
TAB: \\t
  

To setup key toggleable stories (available only in Story Mode), you have to pass an an array of object(s) in options:
```
$(function() {
    Rapid.options({
       stories: { array: [
                    {   onKey:"0",
                        story: ["%cGOLD %cBRONZE","color:red;","color:orange; font-weight:bold;"]
                    },
                    {   onKey:"1",
                        story: ["%cBLACK %cGREEN","color:black;","color:green; font-weight:bold;"]
                    },
                    {   onKey:"3",
                        story: "Awesome"
                    }
                ]}
    });
});
```

How to instruct your team members
---

The story value can be a string or an array of parameters for formatting console log messages.

To setup key toggeable tooltips (available only in Story Mode), just setup a regular detailed tooltip but add one more key/value pair, onKey:
```
<div detail='{"onKey":"1", "title":"This is some text","pos":"right", "bgcolor":"blue", "color":"orange", "align":"center"}'>Try me out</div>
```
There is a narration that explains the site layout. And as you read the narration, it may tell you to press a key to highlight the part of the website it's talking about.  
1. With the webpage loaded, open the browser's console:  
  
  
    A. On Chrome, to open the console:  
       CTRL+SHIFT+J on PC  
       CMD+Opt+J on mac  
  
  
    B. On Firefox, to open the console:  
       CTRL+SHIFT+K on PC  
       CMD+Opt+K on mac  
  
  
    C. For all other browsers, instructions [here](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers#answer-77337)
  
  
3. Press  the backquote ` key (aka tilde key). You will see "Story Mode" is turned on at the console. If you don't see this message, please click a blank area on the website and press the backquote key again since the website's javascript wasn't able to hear for the key press with the focus on another part of the browser.  
4. Now press these keys for narrations that explain the site layout (again, make sure the focus is on the website before pressing the keys):  


**SHORTEN COMMANDS**  
Typing commands like Rapid.etcetc.etc(..) sure is a lot to type. Shorten that command to etc(..). Call this function to shorten many Rapid commands or functions.
```
Rapid.i(); //interactive commands
```
  
  
**BEST PRACTICE: RAPID DEVELOPMENT**  
You can develop faster by working on markup, css, then javascript and php. Have Rapid figure out the Ajax and PHP code for you, then add it over to your PHP.  

Use Command-Line Bootstrap, Placeholders, and Lorem Ipsum to make the site layout. Edit styles inside Chrome's DevTools. Have an editor opened so you can take advantage of the syntax highlighting and tabbing/newlines when needed.  

You may also want to take advantage of JSFiddle. Over at JSFiddle, try to leave CSS out of HTML. Write markup first and do your best to use HTML5 tags whenever possible (article, section, aside, nav, header, footer, etc). You can use JSFiddle to work on the entire site layout or part of a layout. In the latter case, you may want to wrap in a div so you can style only that part of the site in the CSS (you can use an online SASS editor to quickly change the CSS queries to reflect that div wrapping).  

To copy all the markup from Chrome DevTools (before adding javascript or PHP), click Element tab, then right-click the "HTML" tag => Copy => "Copy outerHTML".  

At other times, it may be faster to work exclusively at a coding editor. I suggest Adobe Bracket with Emmet and Keystrap extensions. If using a combination of editing in editor and editing in Chrome DevTools, don't forget which window has the latest version. I suggest getting apps or software that can split your screen in half with applications on each side.  

If you start working on javascript without a clear idea about the specifications, you can type javascript code inside the browser console and "hack away" until the code clicks. Rapid has several features to aide you. This command-line approach is also called exploratory programming:
https://en.wikipedia.org/wiki/Exploratory_programming
  

You may instead opt for Test-Driven Development or Behavior-Driven Development methodologies where you rewrite tests until they pass and that creates valid code for your website. You can use Rapid's enhanced debugging that monitors several types of variables. Rapid also has a semantic Rapid.assert() that you might like over Chrome's console.assert(...). There are libraries and frameworks for TDD. Qunit is a simple library for TDD.
  
  

  
  
**BEST PRACTICE: EXPLORING SPECIFICATIONS**  
1. Design the layout using Command-Line Bootstrap, placeholders, lorem ipsum and Chrome DevTools as discussed before.
3. Add a tooltip to each view that details on what happens when clicked on (program flow) or how models may change (data flows).
```
<span class="top-text" style="font-weight:bold;" data-detail='{"title":"*TO DO* (checkmark=done)\n_DONE_USER: Sees number of new items from subscribed stores.\n_DONE_SYSTEM: \n\t_num1_Loads store id's from user id.\n\t_num2_Stores items that user clicked and explored.\n_DONE_DATA-FLOW:\nuser id-> most-recent id -> count of new items\nuser id -> last 20 items\n_DONE_API:\nGET /sales/item\nGET /subscribed/?most-recent\nGET /subscribed/?count-new\n_DONE_DATA-JSON: storeID, itemID, category, name, price, date\n_DONE_DATA-ATTR:data-most-recent to store most recent id of item to compare against\n_DONE_DATA-VIEW:Shows number of new items. Shows a list of view templates for the JSON.\n_DONE_EVENTS: Onclick for list of items.\n_DONE_POLL: every 1 sec for most recent item ID that's not been clicked/discovered","pos":"left","bgcolor":"blue","bind":"1","align":"left","font":"15px Helvetica"}'>New Items</span>
```
4. If brainstorming specifications with team members, through Rapid options, narrate about the site layout with key toggleable tooltips that user can press as the narration goes on.
  
  



  
  
**FAQs:**   
*Question:* What are commands or command lines?  
*Answer:* You enter them at the browser console. On Chrome, open the console with CMD+OPT+J (On Mac) or CTRL+SHIFT+J (On PC). For Firefox, replace with the key 'K'. Instructions for other browsers [here](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers#answer-77337)    
You are basically calling functions that have been defined in the webpage's javascript and still available after loading. But because you type them in the console, they are also called commands.  
  
  
**TROUBLESHOOTING:**   
*Problem:* Tooltips won't load? Console shows error ".tooltip() is not a function"  
*Solution #1:* Make sure you load jQuery before Bootstrap (or custom build with tooltips).  
*Solution #2:* Make sure you don't load jQuery more than once because that can cause the error as well.  
  
  

**BRIEF SUMMARY**  
A collection of frontend and backend tools to shorten development time on jQuery/Bootstrap/PHP/mySQL projects. Layouts with placeholders, lorem ipsum, and a command line Bootstrap layouter. Discover specifications while making quick layouts and emulating backend queries to the database. Write code faster with controllers attached to elements. Collaborate better using tooltips and narration

**IN-DEPTH SUMMARY**  
A jquery library and microframework with frontend and backend tools to shorten development time. Attach load and click controllers that refer to external scripts, handlers, or inline javascript. If you use Handlebars JS for templating engine, test templates, contexts, and helpers in one function quickly before investing in the heavy API. Use the Boilerplate files for a new app or static page loaded with common libraries, stylesheets, and fonts you can customize. Rapid can generate Bootstrap code, Ajax code, and PHP mysql code.  

Generate placeholder images and lorem ipsum text by adding class names. Test how some HTML code looks in a floating draggable div with the site's stylesheet before incorporating into the layout (ihtml). Load scripts or stylesheets in the browser console so you can experiment with different css and javascript on the fly (assets.script and assets.style). Replace the same stylesheet (replaceStylesheet). Rapid also comes with some tools to enhance JSFiddle so you can load the common libraries, stylesheets, and fonts and Rapid. There is also a tool to toggle fullscreen in JSFiddle. Useful if you prefer to fine tune the layout CSS or more nuanced CSS in an online playground first before bringing it to development.  

Create and modify Bootstrap columns on the fly with the browser console. Then you may copy the code over to your source code. Easily see where the Bootstrap columns are by toggling a lightblue border on them (Rapid Bootstrap gridlines). Resize your window to see your site layout change per xs, sm, md, and lg and a status bar tells you which breakpoint you are at (Rapid Bootstrap status). Run javascript code based on those breakpoints. Write media queries using Bootstrap classes rather than the breakpoint pixels and interchangeably generate its breakpoint pixel CSS.  

Access the mysqli database in javascript with a capable API including inserting, deleting, selecting, and looping through records, so you don't have to invest heavily on the interplay of AJAX, JSON, and PHP until later. Also, have Rapid generate all the AJAX and PHP codeas as you use javascript mysqli. Rapid's Ajax uses an uniform API for all REST methods (get, post, put, patch, update, delete, options) so you don't have to remember syntax differences between $.ajax, $.get, and $.post. Use the Boilerplate php file to pick up on those REST requests and read request data with intuitive $_GET, $_POST, $_PATCH, $_UPDATE, etc arrays.  

Rapid enhanced Chrome's debugging tools with several functions that monitor different types of variables. Rapid also enhanced Javascript by allowing you to make enums for some quick constants to use across your app or functions.  
  

Let teammembers know more about your site layout with explanations in the console and enhanced tooltips that appear over select elements. The tooltips have an assortment of icons like TO-DO list or bugs that can accompany the text. Let teammember developers see your notes about specific elements by having them inside attributes in the source code while loading the page in a browser removes them.  

Fully compatible with Handlebars JS, Crossroads JS, and other libraries. This library and microframework is based in jQuery. Remove what you don't need for faster loading. -Weng Fei Fung*  

LATEST VERSION
===
- Added delayDebugger, parseHTMLComment, Assert, cssUP, cssDown.
- Renamed js/ => src/ because it contains multiple file formats.
- Added Table of Contents