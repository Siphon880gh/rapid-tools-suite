<html>
<head>
<title>Rapid Tools Suite</title>

<?php
    include("ezloader.php");
    load_depends();
    load_main();
?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js"></script>

<script>
    $(function() {
        $.get("readme.md", function(data) {
            var converter = new showdown.Converter();
            converter.setOption("literalMidWordUnderscores", true);
            $("#readme").html(converter.makeHtml(data));
        });
    });
</script>
<script>
    $(function() {
        Rapid.options({
           stories: { array: [
                        {   onKey:"0",
                            story: "Awesome"
                        },
                        {   onKey:"1",
                            story: ["%cBLACK %cGREEN","color:black;","color:green; font-weight:bold;"]
                        }
                    ]}
        });
    });  
</script>
<style>
.container {
    position: absolute;
    top: 30px;
    left: 20%;
    margin-right: 20%;
    width: 60%;
    overflow-x: scroll;
}
@media screen and (min-width:768px) {
    left: 10%;
    margin-right: 10%;
    width: 80%;
}
#demo {
    margin-top: 10px;
    text-align: center;
}
#demo * {
    margin-left: auto;
    margin-right: auto;
}
</style>

</head>
<body>

<?php include("demo_menu.php"); ?>

<div class="container">
    
    <div id="readme" style="display:block;">
    </div> <!-- readme -->
    
    <hr>
    
    <div id="demo">
        <h3>DEMO:</h3>
        <div data-onload-a="_ori.prepend('onloaded text.<p/>');" style="margin-bottom:2em;"> Inspect element to see.</div>
        <div id="target_onloader" data-onloader-a="demo_onloader.js" style="margin-bottom:2em;"> Inspect element to see.</div>
        <div id="target_onclicker" data-onclicker="demo_onclicker.js">Click me</div><br>
        <div class="rapid-rect" style="width:200px; height:200px; margin-bottom: 2em;"></div>
        <div class="rapid-circ" style="width:200px; height:200px; margin-bottom: 2em;"></div>
        <div data-rect='{"title":"Aligned","align":"right"}' data-detail='{"title":"_todo_ rect placeholder\nsome other text","pos":"right", "onKey":"0", "bgcolor":"green", "align":"right"}' style="width:200px; height:200px; margin-bottom:15px;"></div>
        <div data-circ='{"title":"Valid centered text","bgcolor":"orange","top":"120px","font":"16px Helvetica","color":"black"}' data-detail='{"title":"_CIRCLE_ circ placeholder\nsome other text","pos":"right", "onKey":"1", "bgcolor":"blue", "color":"orange", "align":"center"}' style="width:200px; height:200px;"></div>
        <p/>
        <div data-circ='{"title":"Tooltip in Story Mode","bgcolor":"lightblue","font":"16px Helvetica","color":"black"}' data-story-detail='{"title":"another circ","pos":"right", "onKey":"1", "bgcolor":"blue","color":"yellow"}' style="width:200px; height:200px;"></div>
        <br/>
        <div id='example-words' data-lorem='20w'><strong>Lorem ipsum words:</strong></div>
        <div id='example-sentences' data-lorem='8s'></div>
        <div id='example-paragraphs' data-lorem='5'></div>
    </div> <!-- demo -->
</div> <!-- container -->
        
</body>
</html>