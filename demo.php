<?php
include("./src.php");
get_jq();
get_min_depends();
get_suite();
?>

<div class="container">
    <h4>Rapid Tools Suite</h4>
    <p>Discover specifications, write faster code, and collaborate better using HTML5 data attributes.</p>
    <ul>
        <li><i>Inline JS:</i> Write code inside the elements rather than having to jump between head and element, or having to come up with ID's for DOM manipulation.</li>
        <li><i>Placeholders:</i> Generate div's for practical wireframing in HTML. Colored, labeled, and choice of rectangle/circle.</li>
        <li><i>Tooltips:</i> A bubble with info appears when moving mouse over element or pressing a key binded to it. The tooltip also has easily customizable background color and font color.</li>
        <li><i>Storyboards:</i> Simultaneously, grouped webpage elements popout their tooltips while the console shows an explanation how those elements work together. Or, it can explain those elements in any way, really, such as what elements the designer has to focus on, or what the functionalities are as a rough wireframe.</li>
        <li><i>Lorem Ipsum:</i> Generate Lorem Ipsum words, sentences, or paragraphs easily with a data attribute.<br></li>
    </ul>
    <p/>

<div id="rapid-options" data-binds='[["0","%cRed %cOrange","color:red;","color:orange; font-weight:bold;"],["1","Black"]]'>
<div data-onload-a="$(this).text('onloaded');"></div>
<div data-rect='{"title":"Aligned","align":"right"}' style="width:200px; height:200px;" data-detail='{"title":"rect placeholder","pos":"right", "bind":"0", "bgcolor":"green"}'></div>
<div data-circ='{"title":"Valid centered text","bgcolor":"orange","top":"120px","font":"16px Helvetica","color":"black"}' style="width:200px; height:200px;" data-detail='{"title":"circ placeholder","pos":"right", "bind":"1", "bgcolor":"blue", "color":"orange"}'></div>
<p/>
<div data-circ='{"title":"Tooltip on Storyboard key","bgcolor":"lightblue","font":"16px Helvetica","color":"black"}' style="width:200px; height:200px;" data-hidden-detail='{"title":"another circ","pos":"right", "bind":"1", "bgcolor":"blue","color":"yellow"}'></div>
<br/>
<div id='example-words' data-lorem='20w'>Words:</div>
<div id='example-sentences' data-lorem='8s'></div>
<div id='example-paragraphs' data-lorem='5'></div>