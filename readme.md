###Rapid Tools Suite
####*Discover specifications, write faster code, and collaborate better using HTML5 data attributes.*<br/>
<p/>
**DEPENDENCIES**<br/>
Jquery and Bootstrap Tooltips.<br/>
<p/>
**LEGAL**<br/>
Open bundle.js and read comments.<br/>
<p/>
**SOURCER**<br/>
*What:* Easily load jquery, bootstrap tooltips, mustache.js, and the Rapid Tools Suite by including src.php and calling php functions.<br/>
*How:* Open src.php and read function names.
<p/>
**ON-LOAD**<br/>
*What:* Load inline javascript or jquery code in any element.<br/>
ATTRIBUTE: [data-onload-a], [data-onload-b], [data-onload-c], [data-onload-d]<br/>
<p/>
**PLACEHOLDER**<br/>
*What:* Placeholder of sections and elements for quick wireframing<br/>
ATTRIBUTE: [data-rect], [data-circ]<br/>
JSON KEYS: bgcolor, color, top, font, title<br/>
JSON VALUES: "12px Times New Roman"<br/>
<p/>
**LOREM IPSUM**<br/>
*What:* Generate Lorem Ipsum words, sentences, and paragraphs.<br/>
ATTRIBUTE: [data-lorem]<br/>
VALUE: 5w, 5s, 5<br/>
<p/>
**DETAILED TOOLTIP**<br/>
*What:* Tooltip for more details on an element that's customizable and bindable to key<br/>
ATTRIBUTE: [data-detail]<br/>
JSON KEYS: bgcolor, color, top, font, title<br/>
JSON VALUES: "12px Times New Roman"<br/>
<p/>
**MORE SETTINGS**<br/>
*What:* Add more settings like a storytelling of the tooltips explaining how the elements work together or what needs to be done.<br/>
FORMAT: `id="rapid-options" data-binds='[["0","%cRed %cOrange","color:red;","color:orange; font-weight:bold;"],["1","Black"]]'`<br/>
<p/>
**BEST PRACTICES**<br/>
Open bundle.js and read comments.<br/>
<p/>
**TROUBLESHOOTING**<br/> 
*Problem:* Tooltips won't load? Console shows error ".tooltip() is not a function"<br/>
*Solution:* Make sure a) Jquery loads before Bootstrap tooltips or get_min_depends, and b) Jquery not loaded more than once.<br/>
<p/>
**COLLABORATION INSTRUCTIONS**<br/>
<pre>
There is an interactive demo or "story" on top of the website that explains/shows/_____
1. Open the webpage on Chrome or Firefox.
2. We must open your web browser's console:

A. If you are on Chrome:
On PC, press CTRL+SHIFT+J.
On Mac, press CMD+Opt+J.

B. If you are on Firefox:
On PC, press CTRL+SHIFT+K
On Mac, press CMD+Opt+K

3. Click anywhere on the website without going to another page so that the focus is not on the console.
4. Press  the backquote (\`) key found left of the number keys. You will see "Storyboard Mode" is turned on at the console.
5. Soon you will see the interactive demo or story that highlights parts of the webpage with tooltips and an explanation on how they work together or what needs to be done (for upper management, programmer, designer, or tester).  Each story is shown by pressing:
__
</pre>