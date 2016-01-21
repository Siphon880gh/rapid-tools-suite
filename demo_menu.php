<style>
#menu {
    position: fixed;
    padding-top: 0px;
    text-align: center;
    top: 0px;
    left: 0px;
    width:100%;
    height:30px;
    color:red;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 0 5px 10px white;
    transition: all 0.5s ease;
    text-align: center;
}
#menu ul {
    margin-top: 11px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
}
#menu li {
    display: inline-block;
    height: auto;
    vertical-align: top;
    text-align: left;
}
#menu a {
    font-weight: 500;  
    color:red;
    transition: up 500ms;
}
#menu a:visited {
    color:red;
}
#menu a:hover {
    color:black;
}
#menu a:active {
    color:black;
}
#menu ul li:first-child {
    margin-right: 50px;
}
#menu ul li:not(:first-child):not(:last-child) {
    margin-left: 50px;
    margin-right: 50px;
}
#menu ul li:last-child {
    margin-left: 50px;
}
</style>

<script>
$(function() {
    $("#menu a").on("click", function() {
        setTimeout(function() {
            $(this).scrollTop($(this).scrollTop() - 37); 
        }, 200);
    });
    $(window).scroll(function() {
        if($(window).scrollTop()==0) {
            $("#menu").css("backgroundColor", "white");
            $("#menu").css("boxShadow", "0 0 5px 10px white");
        } else {
            $("#menu").css("backgroundColor", "#efefef");
            $("#menu").css("boxShadow", "0 0 5px 10px #efefef");
        }
    });
});
</script>

<div id="menu">
    <ul>
        <li><a class="jump-jump" href="#readme">&raquo;README.md&laquo;</a></li>
        <li><a class="jump-jump" href="#demo">&raquo;Demo&laquo;</a></li>
        <li><b>@Rapid Tools Suite</b></li>
    </ul>
</div> <!-- menu -->