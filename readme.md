Rapid Tools Suite
==================
By Weng Fei Fung<br/>
Utilities to speed up development full stack and all around development stages. For frontend, jQuery, Bootstrap, crossroad, and handlebar gets developed quicker especially if you are not an expert yet. For backend, php and mySQL, there is a restful API template (with variables $_GET, $_POST, $_PUT, $_UPDATE, $_DELETE, $_HEAD, $_OPTIONS) (supports mysqli and meekroDB) and a javascript equivalent of mySQL so you can test queries and PHP variables in the browser console. There are utilities to communicate between team members in the web browser or code. And when you're back months later, there are utilities to explore the CSS and js variables. There is an enhanced debugging tool for when you're developing. Scroll down to see the features. For an in-depth summary, go near the bottom of page.

**Dependencies:**<br/>
jQuery (must)<br/>
jQuery Migrate (optional for enhanced debugger)<br/>
Jquery UI (optional for draggable Bootstrap status and draggable, resizable, styled ihtml)<br/>
Bootstrap CSS (optional for Bootstrap status and gridlines and Command-line Bootstrap)<br/>
Bootstrap JS (optional for enhanced tooltips and Handlebars itemplate.)

**Installation:**<br/>
```
Frontend:
<script src="src/rapid.js">
<link href="src/rapid.css" type="stylesheet">

Backend:
Setup your phpMyAdmin credentials at src/rapid-mysql.php
Ajax to src/rapid-mysql.php
```

**BOILERPLATES**<br/>
*What:* For frontend static webpages, web apps, and backend. There is a boilerplate that contains HTML, Bootstrap, jQuery, and Handlebar that helps you get started on your static webpage. Another boilerplate includes libraries such as Crossroads JS to help start a web app. Finally, a RESTful PHP boilerplate lets you access your mysql database, use the intuitive $_GET, $_POST, $_PATCH, $_UPDATE, etc arrays, and respond in JSON.

**SEMANTICS**<br/>
Add <b>enum</b> types that help you pass flags to functions or use switch statements without the tedious work of making sure you have unique ID's, or making sure the constant values are the same across the app. The enum generates an integer underneath.
```
var SWITCH = {ON:enumer(), OFF:enumer()}
var GENDER = {FEMALE:enumer(), MALE:enumer()}
//Then call with: SWITCH.ON, etc.
```

**OPTIONAL CONTROLLERS: INLINE JS OR INLINE SCRIPT SRC**<br/>
Add <b>inline logic to your elements</b>. If your inline logic is too long, you can include a <b>src path to .js files in your elements</b>. The javascript has access to the element so can transverse with parent(), children(), next(), previous(), etc. This helps keep code modular and also you <b>don't have to come up with ID's or class names for your javascript to refer to</b>. You also have access to the global scope through the variable window. Unlike frameworks, you are not forced to adopt certain semantics.

There are two inline logic: onload and onclick. 
```
<div data-onload="alert('this div was clicked and its text is' + $(ori).text());"></div>
<div data-onclick="alert('this div is loaded and its text is' + $(ori).text());"></div>
```

You can assign <b>the order they run</b>. Just suffix with a letter a-d (d runs last). Without a letter, it's run as a. This lets you use dependencies.
```
// onload's
onload-a
onload-b
onload-c
onload-d

// onclick's
onclick-a
onclick-b
onclick-c
onclick-d
```

When you want to include a .js file, suffix with a src (but before any letters)
```
<div data-onload-src="surprise1.js"></div>
<div data-onload-src-b="surprise2.js"></div>
```

Lastly, you can refer to the element using variables ori or $(ori).
```
$(ori).css("background-color", "green");
```

Don't forget you can transverse with $(ori), so elements can have access to each other even if they have their own onload:
```
$(ori).closest("ul").css("background-color", "red);
```

You can also pass this $(ori) to a global function. You can be as modular or global as you want.

<i>Dynamically</i>: If you dynamically create DOM that has onload, onload-src, onclick-src, etc, you need to re-init with initS:

```
initS();
```

<i>Caching</i>: When you are ready for production, you may want to turn on cache for onload-src, onclick-src:
```
Rapid.options({
    cache:true // default: false
});
```
            
**PLACEHOLDERS**<br/>
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

Because full placeholder control has so many options, here is the full reference:<br/>
ATTRIBUTE: [data-rect], [data-circ]<br/>
JSON KEYS: bgcolor, color, top, align, font, title<br/>
JSON VALUES (E.g.): "title":"Page Container","font":"12px Times New Roman"

**LOREM IPSUM**<br/>
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

If dynamically adding these classes, you will need to call initL().

**TOOLTIPS AND STORIES**<br/>
*What:* A much more matured version of Bootstrap tooltips that appear when you move your mouse over an element. It is setup through the attribute data-detail (_not_ data-toggle or data-tooltip because I needed to avoid clashes). This detailed version of tooltip allows shorthand codes to show icons (reference below). For example, there are icons for to-do and bugs, which are helpful to mark up the elements during the development phase among a team. Background color and font color are also customizable.

Story Mode's great for communicating between team members. When activated by pressing the backquote (_\`_) button (aka the tilde button), you can narrate about the elements on the screen in a story and tell the viewer to press certain keys to toggle on tooltips as the narration goes on. For example: "The main body (press 1) is where users can scroll through different posts (press 2)." 

To show a story you have to press the key assigned to it while Story Mode is activated. Story Mode can hold multiple stories, each with their own keys. Story keys and tooltip keys can be the same.

You may want to disable mouseover on these tooltips if their description only applies to a narration or a team member because the tooltip would appear on mouseover outside of Story Mode as well. For example, using _data-detail_ always mouseovers and it is key toggleable only in Story Mode. But using _data-story-detail_ designates a story tooltip that has no mouseovers and its purpose is only to be key toggleable while in Story Mode. In terms of coding, the only difference is the attribute name.

If you dynamically loaded new elements, their tooltips may need to be re-initialized by calling initT().

Here is the full reference for tooltips:<br/>
ATTRIBUTE: [data-detail]<br/>
JSON KEYS: bgcolor, color, align, font, title, pos, bind<br/>
JSON VALUES: "title":"\_BUG\_ Page can't scroll","font":"12px Times New Roman"<br/>

Here is the full reference for shorthand codes for icons inside tooltips: (Capitalized shorthand is an alternate icon style)<br/>
TITLE ICONS: \_todo\_, \_TODO\_, \_done\_, \_DONE\_, \_skipped\_, \_SKIPPED\_, \_bug\_, \_BUG\_<br/>
TITLE_ICONS: \_check\_, \_CHECK\_, \_x\_, \_X\_, \_ix\_, \_IX\_<br/>
TITLE ICONS: \_lefthalf\_, \_righthalf\_, \_tlhalf\_, \_brhalf\_, \_tlcorner\_, \_blcorner\_, \_brcorner\_, \_trcorner\_<br/>
TITLE ICONS: \_scissor\_, \_SCISSOR\_, \_edit\_, \_EDIT\_, \_letter\_<br/>
TITLE ICONS: \_aster\_, \_ASTER\_, \_ninja\_, \_NINJA\_, \_diamond\_, \_DIAMOND\_, \_spokes\_, \_SPOKES\_, \_bspokes\_, \_BSPOKES\_<br/>
TITLE ICONS: \_dash\_, \_DASH\_, \_circle\_, \_CIRCLE\_, \_triang\_, \_TRIANG\_, \_square\_, \_SQUARE\_<br/>
TITLE ICONS: \_star1\_..\_star9\_<br/>
TITLE ICONS: \_point0\_..\_point9\_, \_POINT0\_..\_POINT9\_, \_spoint1\_..\_spoint9\_, \_point\_, \_POINT\_, <br/>
TITLE ICONS: \_Num1\_..\_Num0\, \_num0\_..\_num9_\, \_NUM1\_..\_NUM0\_<br/>
TITLE ICONS: \_rdquo\_, \_ldquo\_, \_rsquo\_, \_lsquo\_, \_lsaquo\_, \_rsaquo\_, \_laquo\_, \_raquo\_, \_ldaquo\_, \_rdaquo\_<br/>
TITLE ICONS: \_return\_, \_RETURN\_, \_3darrowhead\_, \_3DARROWHEAD\_, \_arrowhead\_<br/>
TITLE ICONS: \_trends\_, \_loop\_, \_sparks\_, \_clock\_, \_CLOCK\_, \_lock/, \_LOCK\_<br/>
TITLE ICONS: \_stop\_, \_walk\_, \_run\_, \_biceps\_, \_phone\_, \_airplane\_, \_biohazard\_<br/>
NEW LINE: \\n<br/>
TAB: \\t
<p/>


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

The story value can be a string or an array of parameters for formatting console log messages.

To setup key toggeable tooltips (available only in Story Mode), just setup a regular detailed tooltip but add one more key/value pair, onKey:
```
<div detail='{"onKey":"1", "title":"This is some text","pos":"right", "bgcolor":"blue", "color":"orange", "align":"center"}'>Try me out</div>
```

**DEBUGGER (CHROME ONLY)**<br/>
*Watch:* Monitor for changes in Javascript Objects, Javascript Object Keys, HTML attributes, HTML5 data attributes, and HTML/text content. If you want to pause on changes like in a breakpoint, pass "true" to the monitoring function(s) and run the website with Chrome's DevTools opened (must be opened for the pauses to work). If you don't want pauses, skip that parameter or pass "false."<br/>
FUNCTION: Rapid.watchObj("object", [true]);<br/>
FUNCTION: Rapid.watchKey("object", "key", [true]);<br/>
FUNCTION: Rapid.watchArr("array", [true]);<br/>
FUNCTION: Rapid.watchDOM("css-selector(s)", [true]);<br/>
FUNCTION: Rapid.watchDOMOptions({key:value[, key:value, key:value, ..]});<br/>
OPTIONS: {childList: true/false, attributes: true/false, characterData: true/false, subtree: true/false, attributeOldValue: true/false, characterDataOldValue: true/false}<br/>
<p/>
*Assert:* A more semantic alternative to console.assert(..). Great for Test-driven development (TDD) where you write tests before coding.<br/>
Shouldn't return anything because assertion passes.
```
Rapid.assert(1==1, "The numbers didn't match.");
```
Show message when assertion fails.
```
Rapid.assert(1==2, "The numbers didn't match.");
```
Or run javascript when assertion fails. Write the javascript in the second parameter (string), and pass a third parameter true.
```
Rapid.assert(1==2, "alert('The numbers didn\\'t match.'); alert('And here\\'s a second alert')", true);
```
<br/>

**AJAX**<br/>
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

**JAVASCRIPT MYSQL**<br/>
*Javascript mysql:* Don't have external php pages setup for ajax requests to work on? Or you find PHP too troublesome to code because the feedback on errors aren't instant like it is in javascript? No Problem. You can in javascript write an equivalent php page that queries the database, fetch any associated rows (if it is a query like SELECT), and echo a json as a response to ajax - all in command line. Of course, you need to setup your database credentials in rapid-mysql.php beforehand and make sure you change the master password (aka Rapid Key) to your own if the website is on a remote development server.

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

**All RESTful methods are supported**:<br/>
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
**Caveats**<br/>
Do not pass params in ajax with key names "rapidKey", "rapidMysqli", "rapidEcho", "rapidMultiFetchAssocs", "rapidMethod", or "rapidParams" if you are using emulated mysql. These variables are needed to communicate with the rapid-mysql.php file that's setup through Rapid.mysql.connect. In summary, the reserved ajax key names are:<br/>
rapidKey<br/>
rapidMysqli<br/>
rapidEcho<br/>
rapidMultiFetchAssocs<br/>
rapidMethod<br/>
rapidParams<br/>
<p/>

**COMMAND-LINE BOOTSTRAP**<br/>
*What:* Type commands into the browser console and have Rapid generate Bootstrap code. Then copy and paste it to your editor. For more info including how to open the browser's console, read the FAQs in this ReadMe.

Have Rapid type the code for you. You can add "container", "well", "row", "col", "colxs", "colsm", "colmd", "collg", or any column class from "col-xs-1" to "col-lg-12".
```
$(".container").append(preset("row"));
```
You can also use .html, .prepend, etc.

Rapid.add also lets you assign classes, styles, add attributes, and add inner html or text.
```
$(".container").append(preset("row"), {style:"text-align:center;", class:"someClass", attr:"someAttr someOtherAttr='value'", inner:"someTextOrHTML"});
```
 
A quick reminder of what Rapid.add does:
```
Rapid.presetHelp();
```

Each Bootstrap div that Rapid makes is given an unique id so you can select it in jQuery to do further html changes.

You might forget what the unique id is and don't feel like scrolling up the console to hunt for it. Get the last generated id with
```
Rapid.latest();
```

You might want to save that DOM position to add children to it later:
```
var row = Rapid.latest();

// so then you could use:
row.preset("col-xs-4");
row.preset("col-xs-4");
row.preset("col-xs-4");
```

Let's say you wanted to add another column after the last column you made. You would have to hunt for the row's id so you can `$("#bidX").append(("col-xs-4"))`. You can get the parent row's id easily with (and it goes up to three levels in case you are calling from an element inside a column):
```
Rapid.parentRow($("#bid2"));
```

Messed up on the column sizes? You can select a row and change all their children column sizes with one swoop in command line:
```
Rapid.parentRow($("#bid2"), [4, 4, 4]); // give col1-3 sizes 4,4,4
Rapid.parentRow($("#bid2"), [3, 3, 3]); // give col1-4 sizes 3,3,3,3. Notice that additional columns follow the last value in the array.
Rapid.parentRow($("#bid2"), 4); // give all columns the same size 4
```

```
Rapid.options({
    bootstrap: {
                    gridlines: true, // default: false. // visualize all bootstrap columns and rows
                    status: true // default: false // Shows if your webpage is applying xs, sm, md, or lg. Useful to see responsive views by resizing the web browser window or changing the zoom level
                }
});
```

**RESPONSIVE JAVASCRIPT AND CSS**<br/>
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

Since you are typing CSS code into these xsCSS..lgCSS options, your IDE wont be auto-completing, syntatic coloring, or offering hints for the CSS. If you feel uncomfortable, you can validate your CSS at CSS Lint or you can open a blank css on your editor to type your CSS there first. `staticCSS();` also helps by returning a concatenated form of all the responsive CSS options with their approproate CSS media queries, something you can validate at CSS Lint.

If the page loads as expected on different screen resolutions, you are good to go. But if the elements take a brief moment to rescale and/or move to fit the css rules targeted for the screen resolution, then ask Rapid for the css and just copy and paste that into a style block, and delete the Rapid options. You get that static css media queries with:
```
Rapid.staticCSS();
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

**HELP WITH VIEW CODE: ihtml and itemplate**<br/>
*ihtml:* You want to add html thru jQuery's html, append, or prepend to see how it looks but you already have a good layout going on there? Just use ihtml to create a floating draggable area that acts like scratch paper for html rendering. You can adjust transparency and move it out of the way of the website's main elments.
```
ihtml("<b>I should look bolded.</b>");
```

Finished scratch papering your renders? Just destroy it with:
```
ihtml();
```

*itemplate:* Not confident you can write Handlebar expressions without screwing up? Write them in command line and get instant feedback. Rapid.itemplate(..) helps with this. Pass the Handlebar expressions with html in the first parameter without that much focus on making the html look good. Then pass the javascript object in the second parameter as the context. Optionally, you can pass a third parameter, an array of helpers.
```
var data = { 
	random_words: [ 
                    {word: "Alpha"},
                    {word: "Beta"},
                    {word: "Omega"} 
    						] 
};

Rapid.itemplate("{{#random_words}} {{#everyOther @index 2 }}<b>{{word}}</b>{{else}} {{word}} {{/everyOther}}  {{/random_words}}", data, ["everyOther", function (index, amount, scope) { if ( ++index % amount ) return scope.inverse(this); else return scope.fn(this);} ])
```

**COMMAND-LINE LOADING**<br/>
*iscript:* One way to rapidly develop is to figure out the javascript with the browser console opened. Some code may be more conveniently typed up because you need the syntax highlighting or there's newlines and spacing concerns.
```
Rapid.iscript("temp_script.js");
```
You can also run javascript code after loading. You can also opt to load javascript files and initialize their code this way to be more modular.
```
Rapid.iscript("controllers/section2.js", 'alert("Code for section 2 loaded!"); section2.someFlag=true; ');
```
*istyle:* You can load stylesheets:
```
Rapid.istyle("temp_style.css")
```
*replaceStylesheet:* Or if you feel more comfortable, this function removes all previous stylesheets added by it and add the current spreadsheet:
```
Rapid.replaceStylesheet("temp_style.css");
```
*Localhost:* If you are running a local server before pushing to a production server and you are referencing an absolute path, the URI should be precededed with http://localhost
```
Rapid.iscript("http://localhost/test-site/js/main.js");
Rapid.istyle("http://localhost/test-site/css/global.css");
Rapid.replaceStylesheet("http://test-site/css/global.css");
```
<p/>


**TEAMWORK**<br/>
*What:* Add semantics and modularity for more readable code. Here's a brief summary of those features. Following that are example codes.

Add <b>notes for your developer team</b> by using attributes data-note, data-note-john, data-note-cindy, etc that are removed when the webpage loads. You can ask your developers to grep for their names to refer to certain elements.
```
<div id="main-content" data-note="this is where the main content goes" data-notes="and so forth, and so forth"></div>
```

**TEMPLATE: SEND TO TEAM MEMBERS:**<br/>
There is a narration that explains the site layout. And as you read the narration, it may tell you to press a key to highlight the part of the website it's talking about.<br/>
1. With the webpage loaded, open the browser's console:<br/>
<p/>
    A. On Chrome, to open the console:<br/>
       CTRL+SHIFT+J on PC<br/>
       CMD+Opt+J on mac<br/>
<p/>
    B. On Firefox, to open the console:<br/>
       CTRL+SHIFT+K on PC<br/>
       CMD+Opt+K on mac<br/>
<p/>
    C. For all other browsers, instructions [here](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers#answer-77337)
<p/>
3. Press  the backquote ` key (aka tilde key). You will see "Story Mode" is turned on at the console. If you don't see this message, please click a blank area on the website and press the backquote key again since the website's javascript wasn't able to hear for the key press with the focus on another part of the browser.<br/>
4. Now press these keys for narrations that explain the site layout (again, make sure the focus is on the website before pressing the keys):<br/>


**SHORTEN COMMANDS**<br/>
Typing commands like Rapid.etcetc.etc(..) sure is a lot to type. Shorten that command to etc(..). Call this function to shorten many Rapid commands or functions.
```
Rapid.i(); //interactive commands
```
<p/>
**BEST PRACTICE: RAPID DEVELOPMENT**<br/>
You can develop faster by working on markup, css, then javascript and php. Have Rapid figure out the Ajax and PHP code for you, then add it over to your PHP.<br/>

Use Command-Line Bootstrap, Placeholders, and Lorem Ipsum to make the site layout. Edit styles inside Chrome's DevTools. Have an editor opened so you can take advantage of the syntax highlighting and tabbing/newlines when needed.<br/>

You may also want to take advantage of JSFiddle. Over at JSFiddle, try to leave CSS out of HTML. Write markup first and do your best to use HTML5 tags whenever possible (article, section, aside, nav, header, footer, etc). You can use JSFiddle to work on the entire site layout or part of a layout. In the latter case, you may want to wrap in a div so you can style only that part of the site in the CSS (you can use an online SASS editor to quickly change the CSS queries to reflect that div wrapping).<br/>

To copy all the markup from Chrome DevTools (before adding javascript or PHP), click Element tab, then right-click the "HTML" tag => Copy => "Copy outerHTML".<br/>

At other times, it may be faster to work exclusively at a coding editor. I suggest Adobe Bracket with Emmet and Keystrap extensions. If using a combination of editing in editor and editing in Chrome DevTools, don't forget which window has the latest version. I suggest getting apps or software that can split your screen in half with applications on each side.<br/>

If you start working on javascript without a clear idea about the specifications, you can type javascript code inside the browser console and "hack away" until the code clicks. Rapid has several features to aide you. This command-line approach is also called exploratory programming:
https://en.wikipedia.org/wiki/Exploratory_programming
<br/>

You may instead opt for Test-Driven Development or Behavior-Driven Development methodologies where you rewrite tests until they pass and that creates valid code for your website. You can use Rapid's enhanced debugging that monitors several types of variables. Rapid also has a semantic Rapid.assert() that you might like over Chrome's console.assert(...). There are libraries and frameworks for TDD. Qunit is a simple library for TDD.
<p/>

<p/>
**BEST PRACTICE: EXPLORING SPECIFICATIONS**<br/>
1. Design the layout using Command-Line Bootstrap, placeholders, lorem ipsum and Chrome DevTools as discussed before.
3. Add a tooltip to each view that details on what happens when clicked on (program flow) or how models may change (data flows).
```
<span class="top-text" style="font-weight:bold;" data-detail='{"title":"*TO DO* (checkmark=done)\n_DONE_USER: Sees number of new items from subscribed stores.\n_DONE_SYSTEM: \n\t_num1_Loads store id's from user id.\n\t_num2_Stores items that user clicked and explored.\n_DONE_DATA-FLOW:\nuser id-> most-recent id -> count of new items\nuser id -> last 20 items\n_DONE_API:\nGET /sales/item\nGET /subscribed/?most-recent\nGET /subscribed/?count-new\n_DONE_DATA-JSON: storeID, itemID, category, name, price, date\n_DONE_DATA-ATTR:data-most-recent to store most recent id of item to compare against\n_DONE_DATA-VIEW:Shows number of new items. Shows a list of view templates for the JSON.\n_DONE_EVENTS: Onclick for list of items.\n_DONE_POLL: every 1 sec for most recent item ID that's not been clicked/discovered","pos":"left","bgcolor":"blue","bind":"1","align":"left","font":"15px Helvetica"}'>New Items</span>
```
4. If brainstorming specifications with team members, through Rapid options, narrate about the site layout with key toggleable tooltips that user can press as the narration goes on.
<p/>



<p/>
**FAQs:**<br/> 
*Question:* What are commands or command lines?<br/>
*Answer:* You enter them at the browser console. On Chrome, open the console with CMD+OPT+J (On Mac) or CTRL+SHIFT+J (On PC). For Firefox, replace with the key 'K'. Instructions for other browsers [here](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers#answer-77337)<br/><br/>
You are basically calling functions that have been defined in the webpage's javascript and still available after loading. But because you type them in the console, they are also called commands.<br/>
<p/>
**TROUBLESHOOTING:**<br/> 
*Problem:* Tooltips won't load? Console shows error ".tooltip() is not a function"<br/>
*Solution #1:* Make sure you load jQuery before Bootstrap (or custom build with tooltips).<br/>
*Solution #2:* Make sure you don't load jQuery more than once because that can cause the error as well.<br/>
<p/>

**BRIEF SUMMARY**<br/>
A collection of frontend and backend tools to shorten development time on jQuery/Bootstrap/PHP/mySQL projects. Layouts with placeholders, lorem ipsum, and a command line Bootstrap layouter. Discover specifications while making quick layouts and emulating backend queries to the database. Write code faster with controllers attached to elements. Collaborate better using tooltips and narration

**IN-DEPTH SUMMARY**<br/>
A jquery library and microframework with frontend and backend tools to shorten development time. Attach load and click controllers that refer to external scripts, handlers, or inline javascript. If you use Handlebars JS for templating engine, test templates, contexts, and helpers in one function quickly before investing in the heavy API. Use the Boilerplate files for a new app or static page loaded with common libraries, stylesheets, and fonts you can customize. Rapid can generate Bootstrap code, Ajax code, and PHP mysql code.<br/>

Generate placeholder images and lorem ipsum text by adding class names. Test how some HTML code looks in a floating draggable div with the site's stylesheet before incorporating into the layout (ihtml). Load scripts or stylesheets in the browser console so you can experiment with different css and javascript on the fly (iscript and istyle). Replace the same stylesheet (replaceStylesheet). Rapid also comes with some tools to enhance JSFiddle so you can load the common libraries, stylesheets, and fonts and Rapid. There is also a tool to toggle fullscreen in JSFiddle. Useful if you prefer to fine tune the layout CSS or more nuanced CSS in an online playground first before bringing it to development.<br/>

Create and modify Bootstrap columns on the fly with the browser console. Then you may copy the code over to your source code. Easily see where the Bootstrap columns are by toggling a lightblue border on them (Rapid Bootstrap gridlines). Resize your window to see your site layout change per xs, sm, md, and lg and a status bar tells you which breakpoint you are at (Rapid Bootstrap status). Run javascript code based on those breakpoints. Write media queries using Bootstrap classes rather than the breakpoint pixels and interchangeably generate its breakpoint pixel CSS.<br/>

Access the mysqli database in javascript with a capable API including inserting, deleting, selecting, and looping through records, so you don't have to invest heavily on the interplay of AJAX, JSON, and PHP until later. Also, have Rapid generate all the AJAX and PHP codeas as you use javascript mysqli. Rapid's Ajax uses an uniform API for all REST methods (get, post, put, patch, update, delete, options) so you don't have to remember syntax differences between $.ajax, $.get, and $.post. Use the Boilerplate php file to pick up on those REST requests and read request data with intuitive $_GET, $_POST, $_PATCH, $_UPDATE, etc arrays.<br/>

Rapid enhanced Chrome's debugging tools with several functions that monitor different types of variables. Rapid also enhanced Javascript by allowing you to make enums for some quick constants to use across your app or functions.<p/>

Let teammembers know more about your site layout with explanations in the console and enhanced tooltips that appear over select elements. The tooltips have an assortment of icons like TO-DO list or bugs that can accompany the text. Let teammember developers see your notes about specific elements by having them inside attributes in the source code while loading the page in a browser removes them.<br/>

Fully compatible with Handlebars JS, Crossroads JS, and other libraries. This library and microframework is based in jQuery. Remove what you don't need for faster loading. -Weng Fei Fung*<br/>

**LATEST VERSION**<br/>
-Renamed js/bundle.js => js/rapid.js, js/bundle.css => js/rapid.css to avoid confusion with bundlers<br/>
-Renamed rapid-backend.php to rapid-mysql.php to make the purpose clearer.<br/>
-Removed bootstrap.tooltip.min.js and bootstrap.tooltip.min.css to simplify things and you can custom build bootstrap anyways.<br/>
-Rapid.backend.db is now Rapid.mysql.connect<br/>
-Rapid.ilisten is now Rapid.serverListen (because it matches NodeJS's server.listen notation)<br/>
-Rapid.mysql.testChain is now Rapid.mysqli.simpleChain (because you want a simple Chain API)<br/>
-Rapid.iajax is now Rapid.ajax (because we aren't always going to use ajax interactively or in console. Also, Rapid's unique brand of ajax can just be called Rapid Ajax)<br/>
-Removed bootstrap.tooltip.min.js and bootstrap.tooltip.min.css to simplify things and you can custom build bootstrap anyways.<br/>

**FUTURE VERSIONS**<br/>
-Minified js
-Production essentials version will only contain essentials that are useful outside of development. These are onload, onload-src, onclick, onclick-src, responsive javascript, and Bootstrap-styled media queries.
  