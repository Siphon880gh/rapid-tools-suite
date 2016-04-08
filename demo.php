<html>
<head>
<title>Rapid Tools Suite</title>

<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="js/rapid.css">
<script src="js/rapid.js"></script>
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
        <div data-onload-a="$(ori).prepend('onloaded text.');" style="margin-bottom:2em;"><p style="font-weight:300;">Inspect element to see</p></div>
        <div id="target_onloader" data-onloader-a="demo_onloader.js" style="margin-bottom:2em;"><p style="font-weight:300;">Inspect element to see</p></div>
        <div id="target_onclick" data-onclick="alert('onclicked!'); console.log($(ori)[0]);">Click me<p style="font-weight:300;">Inspect element to see</p></div><br>
        <div id="target_onclicker" data-onclicker="demo_onclicker.js">Click me too!<p style="font-weight:300;">Inspect element to see</p></div><br>
        <div class="rapid-rect" style="width:200px; height:200px; margin-bottom: 2em;"></div>
        <div class="rapid-circ" style="width:200px; height:200px; margin-bottom: 2em;"></div>
        <div data-rect='{"title":"Aligned","align":"right"}' data-detail='{"title":"_todo_ rect placeholder\nsome other text","pos":"right", "onKey":"0", "bgcolor":"green", "align":"right"}' style="width:200px; height:200px; margin-bottom:15px;"></div>
        <div data-circ='{"title":"Valid centered text","bgcolor":"orange","top":"120px","font":"16px Helvetica","color":"black"}' data-detail='{"title":"_CIRCLE_ circ placeholder\nsome other text","pos":"right", "onKey":"1", "bgcolor":"blue", "color":"orange", "align":"center"}' style="width:200px; height:200px;"></div>
        <p/>
        <div data-circ='{"title":"Tooltip in Story Mode","bgcolor":"lightblue","font":"16px Helvetica","color":"black"}' data-story-detail='{"title":"another circ","pos":"right", "onKey":"1", "bgcolor":"blue","color":"yellow"}' style="width:200px; height:200px;"></div>
        <br/>
        <div id='example-lorem'><strong>Lorem ipsum words: </strong></div>
        <div id='example-words'><span>3 words:</span><br/><span class='lorem-3w'></span></div>
        <div id='example-sentences'><span>8 sentences: </span><br/><span class='lorem-8s'></span></div>
        <div id='example-paragraphs'><span>2 paragraphs: </span><br/><span class='lorem-2p'></span></div>
    </div> <!-- demo -->
</div> <!-- container -->
        
</body>
</html>