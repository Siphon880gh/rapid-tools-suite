###Rapid Tools Suite
####*A collection of frontend and backend tools to shorten development time. Layouts with placeholders, lorem ipsum, and a command line Bootstrap layouter. Discover specifications while making quick layouts and emulating backend queries to the database. Write code faster with controllers attached to elements. Collaborate better using tooltips and narration. -Weng Fei Fung*<br/>
**Dependencies:**<br/>
Requires jQuery, Jquery UI, Handlebars, Bootstrap
- jQuery for general functions, jQuery migrate for Chrome debugging functions (if using), Query UI for draggable Bootstrap status and draggable styled ihtml box, Bootstrap css for Bootstrap features, Bootstrap js for detailed tooltips, and Handlebars for itemplate.

**Installation:**<br/>
Upload bundle.js or bundle.production.min.js (Coming soon). The minified production js only contains the essentials that are integral to the website when used with Rapid, namely, semantics/modularity (global, onload, onloader, onclick, onclicker), and responsive bootstrap (mdCSS, mdJS, etc). Placeholders, stories, tooltips, etc. are for earlier in the development stages and are removed.

You can also install via `bower install rts`.
  
**Legal:**
In bundle.js.

**EZLOADER**<br/>
*What:* Use PHP to load scripts easily: Rapid Tools Suite, its dependencies (jquery, jquery migrate, jquery ui, bootstrap, bootstrap tooltips, Handlebars), and other scripts (buzz!, qunit). For qunit, you can also show the qunit div.

```
include("rapid/ezloader.php");

/* The dependencies */
load_jq(); // jQuery
load_jqm(); // jQuery Migrate
load_jqui(); // jQuery UI
load_bs(); // Bootstrap for Command-Line Bootstrap Layouter 
load_bs_tooltip(); // Bootstrap for Detailed Tooltips current directory
load_hb(); // Handlebars

/* Optional scripts */
load_buzz(); // Buzz
load_qunit(); // Qunit
show_qunit(); // Qunit's div in place of <div id=qunit></div>

/* The Rapid Tools Suite script */
load_main();

/* Or the fastest way to load */
include("rapid/ezloader.php");
load_depends();
load_main();
```

If the Rapid folder isn't in the same folder as the webpage, you'll have to pass the relative path of the Rapid folder to load_main(..). And if you are neither loading full Bootstrap nor load_depends() (which loads full Bootstrap), you'll have to pass the relative path to load_bs_tooltip(..) as well.
```
/* Rapid not in current directory: */
load_bs_tooltip("relativePath/");
load_main("relativePath/");
```

**SEMANTICS AND MODULARITY**<br/>
*What:* Add semantics and modularity for more readable code. You get a "global" namespace that's more semantic than "window". Your HTML elements can have attributes to script file controllers or inline javascript controllers. The javascript can refer to the element it is associated to and can transverse in jQuery using parent(), children(), next(), previous(), etc., and on any matched set, first() and last().

Controllers are optional but keeps the code modular so you don't have to scroll up and down and also makes it easier to expand features. You have access to the global scope through "global" or "window."

Rapid Tools Suite controllers don't need to refer to an ID in the element it is associated with, so there's the extra bonus of not having to come up with ID names for elements, speeding up development time. 

jQuery plugins remain available to your controller logic, unlike frameworks out there like Angular JS.

**A. Global**<br/>
You can attach variables to a global namespace called "global".
```
global.someFlag=1;
```

**B. Script file controllers: onloader**
```
<div data-onloader-a="demo_onloader.js"></div>
```
Must use _ori instead of $(this) to refer to same element in that script file:
```
_ori.parent().css("background-color", "green");
```

**C. Inline javascript controllers: onload**
```
<div data-onload-a="alert('this div is loaded and its text is' + _ori.text());"></div>
```

Again, use _ori to refer to same element. When writing inline controller, make sure to end statements with a semicolon like you would in an external script.

**Misc. Controllers for clicking events: onclicker and onclick**
-For onclicks, you can use the attribute onclick that's available on most browsers. You can also refer to a script file with:
```
<div data-onclicker="demo_onclicker.js"></div>
```

You may use $(this) or _ori for onclick and onclicker.
To be consistent, data-onclick works too and is interchangeable with the browser's onclick:
```
<div data-onclick="alert('clicked!');"></div>
```

**Misc. a-d**
The onload and onloader scripts are suffixed with letters a-d. There is an order that they run so you can establish dependencies. If you do not wish to take advantage of the sequence, just use data-onload-a  or data-onloader-a for all your controllers.

The order is:
data-onloader-a,
data-onload-a,
*... (continue on) ..*
data-onloader-d,
data-onload-d.

You can have data-onload(s) (inline controller) and data-onloader(s) (script controller) associated to the same element.

**Misc. Functions**
You can define functions in any controllers that can be accessed by other controllers. Even though this violates MVC, you can house functions that's closely associated to a view and keep code readable. To allow this, I had to discard the immutable $(this) in favor of _ori. Now you can pass _ori to a function in another element, and that element's controller can refer to the element that called it.

**Misc. Caching**
Caching onloaders and onclickers mean repeat visitors load the site faster because the same old script files just load from the browser cache rather than completing multiple requests to the server. However, caching is off by default because it's assumed you are going to be fiddling with onloader and onclicker script files during most of your use with Rapid for development purposes. You wouldn't want your scripts to be cached when you need to see the changes you are making.

When you push to production server, you may want to turn on cache for performance:
```
Rapid.options({
    toggle: {
                cache:true
             }
});
```

To turn cache back off for further development, set cache:false or simply remove that option.
            
**PLACEHOLDERS**<br/>
*What:* When designing the website layout, you may want to forgo digging for the actual graphics. You can insert placeholders. There are a few different styles available:

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
ATTRIBUTE: [data-rect], [data-circ]<br/>
JSON KEYS: bgcolor, color, top, align, font, title<br/>
JSON VALUES (E.g.): "title":"Page Container","font":"12px Times New Roman"

**LOREM IPSUM**<br/>
*What:* When laying out the website, you may not want to dig for the text either. You can generate a bunch of random text that fills in the space using Lorem Ipsum.

For five words:
```
<div data-lorem="5w">
```

For five sentences:
```
<div data-lorem="5s">
```

For five paragraphs that take up a lot of the website:
```
<div data-lorem="5">
```

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
*What:* Monitor for changes in Javascript Objects, Javascript Object Keys, HTML attributes, HTML5 data attributes, and HTML/text content. If you want to pause on changes like in a breakpoint, pass "true" to the monitoring function(s) and run the website with Chrome's DevTools opened (must be opened for the pauses to work). If you don't want pauses, skip that parameter or pass "false."<br/>
FUNCTION: Rapid.watchObj("object", [true]);<br/>
FUNCTION: Rapid.watchKey("object", "key", [true]);<br/>
FUNCTION: Rapid.watchArr("array", [true]);<br/>
FUNCTION: Rapid.watchDOM("css-selector(s)", [true]);<br/>
FUNCTION: Rapid.watchDOMOptions({key:value[, key:value, key:value, ..]});<br/>
OPTIONS: {childList: true/false, attributes: true/false, characterData: true/false, subtree: true/false, attributeOldValue: true/false, characterDataOldValue: true/false}<br/>
<p/>

**AJAX AND BACKEND EMULATION**<br/>
*AJAX*: Ajax has many methods: get, post, put, patch, update, delete, head, and options. There are many ways to pass parameters and different ways to setup done callbacks. Rapids.iajax(..) offers a uniform way of making ajax requests regardless of method. Then when the request passes, Rapid gives you the ajax code in the console. You just copy and paste that to your code and be confident it will work!

*Backend:* Don't have external php pages setup for ajax requests to work on? No Problem. You can quickly emulate a php page that queries the database, fetch any associated rows (if it is a query like SELECT), and echo a json as a response to ajax - all in command line. Of course, you need to setup your database credentials in a file rapid-backend.php beforehand and make sure you change the master password (aka Rapid Key) to your own.

Authenticate for the webpage. Then you can start querying the database on the emulated backend (This can be typed in command line or be part your code.)
Rapid.backend.db("../../MX/sandbox/Rapid/js/rapid-backend.php","password123");
		
Now for the actual emulation. We are querying the database with sql injection protection, then echoing the response to AJAX (initScope lets us initialize some PHP variables and that method is totally optional in the chain):

```
//BEST EXAMPLE: Querying the database with sql injection protection and echo:
               
Rapid.ilisten(Rapid.backend.Chain("POST ../../MX/sandbox/notifications/").initScope("$arr1=array();").fetchQuery({$arr1:/"SELECT * FROM users WHERE username='" . mysqli_real_escape_string($_POST["var1"]) . "' LIMIT 5"/}).execQuery(/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/).setFinalEcho("echo json_encode($arr1);"));

Rapid.iajax("POST ../../MX/sandbox/notifications/", {var1:"test4", b:2}, function(data) { console.dir(data); });

console.dir(Rapid.ihelpers.listeners["POST ../../MX/sandbox/notifications/"]);
```

For something **simplified**:
```
//Querying the database and echo:
Rapid.ilisten(Rapid.backend.Chain("POST ../../MX/sandbox/notifications/").initScope("$arr1=array();").fetchQuery({$arr1:/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/}).execQuery(/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/).setFinalEcho("echo json_encode($arr1);"));

Rapid.iajax("POST ../../MX/sandbox/notifications/", {var1:"test4", b:2}, function(data) { console.dir(data); });

console.dir(Rapid.ihelpers.listeners["POST ../../MX/sandbox/notifications/"]);
```

Without initScope, even **more simplified**:
```
Rapid.ilisten(Rapid.backend.Chain("POST ../../MX/sandbox/notifications/").fetchQuery({$arr1:/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/}).execQuery(/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/).setFinalEcho("echo json_encode($arr1);"));
               
Rapid.iajax("POST ../../MX/sandbox/notifications/", {var1:"test4", b:2}, function(data) { console.dir(data); });

console.dir(Rapid.ihelpers.listeners["POST ../../MX/sandbox/notifications/"]);
```

As you see in the above examples, you can make the iajax call and see the result from calling the emulated php (as if you are actually calling an external php page that's setup). If successful, Rapid gives you the php code. You can copy that into an external php page and make the iajax call for reals. No more headache about why your php isn't working.

After setting up the actual php page, you would have to turn off listening to the emulated php page (or refresh the page):
```
Rapid.ilisten("POST ../../MX/sandbox/notifications/"); // turns off listening to emulated php
```

*What if you just want the php code immediately after writing the querying the database? You don't want to have to call iajax successfully for the php code. The least cumbersome way is using a testChain that short-circuits ilisten to be called immediately (Notice you don't have to pass a request line like "GET somePage.php/somePath/" to testChain because we aren't listening for iajax):

```
Rapid.ilisten(Rapid.backend.testChain().fetchQuery({$arr1:/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/}).execQuery(/"SELECT * FROM users WHERE username='" . $_POST["var1"] . "' LIMIT 5"/).setFinalEcho("echo json_encode($arr1);"))); // turns off listening to emulated php
```

*What if you just want to test that the plumbing is working between the ajax that's going to change the webpage with the data returned by an external page? Ajax would request the php page, get the json in a response, and then print that to console or manipulate some javascript or html. Simply omit the database queries.

```
Rapid.ilisten(Rapid.backend.Chain("POST ../../MX/sandbox/notifications/").setFinalEcho("echo json_encode($arr1);"));

Rapid.iajax("POST ../../MX/sandbox/notifications/", {var1:"test4", b:2}, function(data) { console.dir(data); });
```

**COMMAND-LINE BOOTSTRAP LAYOUTER**<br/>
*What:* Find that Bootstrap is too much typing? Have Rapid type the code for you. You can add "container", "well", "row", "col", "colxs", "colsm", "colmd", "collg", or any column class from "col-xs-1" to "col-lg-12".
```
$(".container").append(add("row"));
```
You can also use .html, .prepend, etc.

Rapid.add also lets you assign classes, styles, add attributes, and add inner html or text.
```
$(".container").append(add("row"), {style:"text-align:center;", class:"someClass", attr:"someAttr someOtherAttr='value'", inner:"someTextOrHTML"});
```
 
A quick reminder of what Rapid.add does:
```
Rapid.addHelp();
```

Each Bootstrap div that Rapid makes is given an unique id so you can select it in jQuery to do further html changes.

You might forget what the unique id is and don't feel like scrolling up the console to hunt for it. Get the last generated id with
```
Rapid.latest();
```

Let's say you wanted to add another column after the last column you made. You would have to hunt for the row's id so you can `$("#bidX").append(add("col-xs-4"))`. You can get the parent row's id easily with (and it goes up to three levels in case you are calling from an element inside a column):
```
Rapid.parentRow($("#bid2"));
```

Messed up on the column sizes? You can select a row and change all their children column sizes with one swoop in command line:
```
Rapid.parentRow($("#bid2"), [4, 4, 4]); // give col1-3 sizes 4,4,4
Rapid.parentRow($("#bid2"), [3, 3, 3]); // give col1-4 sizes 3,3,3,3. Notice that additional columns follow the last value in the array.
Rapid.parentRow($("#bid2"), 4); // give all columns the same size 4
```

Can't see where all the Bootstrap div's made by Rapid are at? Chrome has Cmd+Shift+C then you mouseover the webpage to see an element highlighted on the screen. Well, Rapid can toggle on borderlines for all rows and columns (do this in command line or have it as part of your code):
```
Rapid.options({
    bootstrap: {
                    gridlines: true,
                }
});
```

What to know if you are in mobile, tablet, desktop, or large desktop (equivalent to xs, sm, md, lg)? When you zoom and/or resize the browser window, you could go between them. Rapid lets you toggle a device status on the screen.
```
Rapid.options({
    bootstrap: {
                    status: true,
                }
});
```

When using the Bootstrap layouter, you may unintentionally nest a .row inside another .row which causes unpredictable layout changes like the container being off center or taking more than full width. By default, Rapid detects it whenever the page loads or Rapid.add(..) is called, then returns the parent row in question. But if you know what you are doing and the nesting is intentional, add a .rapid-bootstrap-nested to the parent row. To disable all future warnings on the webpage, there is a Rapid bootstrap option for that, nestedWarning:false.

```
<!-- Ignore specific warning: -->
<div class="row rapid-bootstrap-nested"><div class="row"></div></div>
```


```
/* Ignore all future warnings: */
Rapid.options({bootstrap:{nestedWarning:false}});
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
            
To apply the same responsive javascript to one screen resolution to another, just call within the options:
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
ihtml("a");
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

**COMMAND-LINE SCRIPT LOADING**<br/>
*What:* Are you trying code in the console before copying them over to the code? When you have to type a code that is too long in command line, just put it into a a script file and eval with iscript:
```
Rapid.iscript("temp_script.js");
```

**SHORTEN COMMANDS**<br/>
Typing commands like Rapid.backend.iajax(..) sure is a lot to type. Shorten that command to iajax(..). Shorten many commands, in fact, by calling this function (which may be typed in command line or be part your code.)
```
Rapid.i(); //interactive commands
```


**TROUBLESHOOTING:**<br/> 
*Problem:* Tooltips won't load? Console shows error ".tooltip() is not a function"<br/>
*Solution #1:* If not using EZLOADER's load_depends, then make sure you load jQuery before Bootstrap tooltips. Or just call load_depends().<br/>
*Solution #2:* Make sure you don't load jQuery more than once because that can cause the same error.<br/>
<p/>
**SEND TO TEAM MEMBERS:**<br/>
There is a narration that explains the website layout. And as you read the narration, it may tell you to press a key to highlight the part of the website it's talking about.<br/>
1. Open the webpage on Chrome/Firefox.<br/>
2. The story appears in the console:<br/>
<p/>
    A. On Chrome, to open the console:<br/>
       CTRL+SHIFT+J on PC<br/>
       CMD+Opt+J on mac<br/>
<p/>
    B. On Firefox, to open the console:<br/>
       CTRL+SHIFT+K on PC<br/>
       CMD+Opt+K on mac<br/>
<p/>
3. Press  the backquote ` key (aka tilde key). You will see "Story Mode" is turned on at the console. If you don't see this message, please click a blank area on the website and press the backquote key again since the website's javascript wasn't able to hear for the key press with the focus on another part of the browser.<br/>
4. Now press these keys for narrations that explain the website layout (again, make sure the focus is on the website before pressing the keys):<br/>