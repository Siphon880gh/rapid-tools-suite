/*!
 * RAPID TOOLS SUITE
 * Discover specifications, write faster code, and collaborate better using HTML5 data attributes.
 * By Weng Fei Fung
 *
 * The Lorem Ipsum code is open source under GNU Lesser General Public License. This iteration was 
 * forked from F/LoremJS by Brian Grinstead then forked from him. Because it included 1272 x Lorem
 * words, the code was large. I condensed the code by adapting Braden Best's "Nonsense Password
 * Generator" from JSFiddle that originally generated Katakana or Japanese words into generating
 * Latin words. Then I minified the code. JSFiddle has no enforceable licenses, but the Lorem Ipsum
 * Generator is licensed under GNU LGPL.
 *
 * All other portions of the code in this JS file is licensed under Apache License to Weng Fei Fung. 
 * You may alter the code in this file but alterations must carry prominent notices stating that 
 * You changed the files or code where they occured.
 * 
 * These copyrights only cover the works in this file. It does not include works separable from, or 
 * merely linked by interface. This is a library that people use on web projects and websites, and 
 * those works' licenses remain seperable.
 *
 * Requires Jquery, Bootstrap Tooltips
 * Date: 2015-04-28T16:19Z
 * Version: 1
 */


    /**
    * INLINE JS
    * Write javascript or jquery inside the elements so you don't have to jump between head and
    * body and you don't have to come up with ID's for DOM or Jquery manipulation.
    * ------------------------------------------------------------------------------------------
    * Best practices: 
    *	  To write inline JS code inside an element, use data-onload-a="your_code"
    *	  To prioritize the order of which element's JS code runs, data-onload-a's run first,
    *          data-onload-b's next, data-onload-c's after that, and data-onload-d last.
    *     To refer to same element, use $(this)
    *     To refer to first child, use $(this).children().first();
    *     To refer to second child, use $(this).children().first().next();
    *     To refer to next element, use $(this).next();
    *     To refer to previous element, use $(this).prev();
    *     To set/get variables across elements, attach variables to the "global" namespace
    *          eg. global.foobar = "some string here"
    *          eg. global.baz = 1+2;
    *     The data-onload's run after the webpage finishes loading. You do not have to worry
    *          about manipulating elements that don't exist.
    *
    */
    
    //IJS-1. Global namespace
    var global = window;
    
    //IJS-1. HTML5 data attributes lack support for inline JS, so add attributes like onclick
    function init1() {
    $("[data-onload-a]").each(function() { $(this)[0].setAttribute("onabort",$(this).data("onload-a")) });
    $("[data-onload-b]").each(function() { $(this)[0].setAttribute("onblur",$(this).data("onload-b")) });
    $("[data-onload-c]").each(function() { $(this)[0].setAttribute("onfocus",$(this).data("onload-c")) });
    $("[data-onload-d]").each(function() { $(this)[0].setAttribute("onselect",$(this).data("onload-d")) });
    
    //IJS-2. Fire all inline JS from a to d
	ev = ["abort", "blur", "focus", "select"];
    for(var i=0; i<ev.length; i++)
		$("[on" + ev[i] + "]").each(function() { 
        	$(this).triggerHandler(ev[i]);
    	});
    
    //IJS-3. Then prevent accidental firings in the future
    $("[onabort],[onblur],[onfocus],[onselect]").attr('onabort','').attr('onblur','').attr('onfocus','').attr('onselect','');
    }
    
    /**
    * PLACEHOLDERS
    * Generate div's for wireframing in HTML. Colored, labeled, and choice of rectangle or circle.
    * ----------------------------------------------------------------------------------------------------
    * Best practices: 
    *     -You initiate a placeholder with either a data-rect or data-circ attribute.
    *     -It will fill to the width and height of the div or element.
    *     -All settings are optional. Just include or exclude that particular JSON key/value.
    *     -The placeholder will use the default settings if you don't set them (E.g. gray placeholder).
    *
    */
    
    function init2() {
    $("[data-rect]").each(function () {
        var json=$(this).data("rect")!==undefined?$(this).data("rect"):{};
        if(json.font===undefined) json.font = "16px Helvetica";
        if(json.top===undefined) json.top = ($(this).height()/2 + parseInt(json.font.replace(/[^\d]/g, ''))/2).toString() + "px";
        rect = $("<canvas width=" + $(this).width() + " height= " + $(this).height() + ">HTML5 Unsupported</canvas>").appendTo($(this));
        context = rect[0].getContext("2d");
        context.fillStyle = json.bgcolor===undefined?'#efefef':json.bgcolor;
        context.fillRect(0, 0, $(this).width(), $(this).height());
        context.fillStyle = json.color===undefined?'#000':json.color;
        context.font = json.font; // defaultable font
        if(json.align===undefined || json.align=="center") {
            context.textAlign = "center";
            context.fillText(json.title===undefined?'':json.title, $(this).width()/2, parseInt(json.top.replace("px", ""))); // defaultable top
        } else if(json.align=="left") { 
            context.textAlign = json.align;
            context.fillText(json.title===undefined?'':json.title, 0, parseInt(json.top.replace("px", ""))); // defaultable top
        } else if(json.align=="right") { 
            context.textAlign = json.align;
            context.fillText(json.title===undefined?'':json.title, $(this).width(), parseInt(json.top.replace("px", ""))); // defaultable top
        } // else
    });


    $("[data-circ]").each(function () {
        var json=$(this).data("circ")!==undefined?$(this).data("circ"):{};
        if(json.font===undefined) json.font = "16px Helvetica";
        if(json.top===undefined) json.top = ($(this).height()/2 + parseInt(json.font.replace(/[^\d]/g, ''))/2).toString() + "px";
        rect = $("<canvas width=" + $(this).width() + " height= " + $(this).height() + ">HTML5 Unsupported</canvas>").appendTo($(this));
        context = rect[0].getContext("2d");
        context.fillStyle = json.bgcolor===undefined?'#efefef':json.bgcolor;
		context.arc($(this).width() / 2, $(this).width() / 2, $(this).width() / 2, 0, 2 * Math.PI);
        context.fill();
        context.fillStyle = json.color===undefined?'#000':json.color;
        context.font = json.font; // defaultable font
        if(json.align===undefined || json.align=="center") {
            context.textAlign = "center";
            context.fillText(json.title===undefined?'':json.title, $(this).width()/2, parseInt(json.top.replace("px", ""))); // defaultable top
        } else if(json.align=="left") { 
            context.textAlign = json.align;
            context.fillText(json.title===undefined?'':json.title, 0, parseInt(json.top.replace("px", ""))); // defaultable top
        } else if(json.align=="right") { 
            context.textAlign = json.align;
            context.fillText(json.title===undefined?'':json.title, $(this).width(), parseInt(json.top.replace("px", ""))); // defaultable top
        } // else
    });
    }
        
    /**
    * TOOLTIPS
    * A bubble with info appears when you move your mouse over the element.
    * The tooltip also has easily customizable background color and font color.
    * ------------------------------------------------------------------------------------------
    * Best practices: 
    *     -To add a mouseover tooltip to an element, use: data-detail.
    *     -When customizing bgcolor or color, use full words for color such
    *      as: blue. Avoid using Hex, RGB, and RGBA. This limitation is only 
    *      for tooltips (OK in placeholders).
    *     -If you want the tooltip to appear in Storyboard Mode only, use: 
    *      data-hidden-detail.
    *
    */
    
    function init3() {
        $("[data-detail], [data-hidden-detail]").each(function (i) {
        var tip = $(this).data("detail")!=undefined?$(this).data("detail"):$(this).data("hidden-detail");
        $(this).attr("data-toggle", "tooltip");
        if (typeof (tip.title) != 'undefined') $(this).attr("title", tip.title);
        if (typeof (tip.pos) != 'undefined') $(this).attr("data-placement", tip.pos);
        if (typeof (tip.bind) != 'undefined') $(this).attr("data-bind", tip.bind);
            
        if (typeof (tip.color) != 'undefined') {
        	$('<style type="text/css">.tooltip-' + tip.color + ' + .tooltip > .tooltip-inner {color: ' + tip.color + ';}</style>').appendTo($('head'));
            $(this).addClass('tooltip-' + tip.color);
        }
        if (typeof (tip.bgcolor) != 'undefined') {
        	$('<style type="text/css">.tooltip-bg' + tip.bgcolor + ' + .tooltip > .tooltip-inner {background-color: ' + tip.bgcolor + ';}</style>').appendTo($('head'));
            $(this).addClass('tooltip-bg' + tip.bgcolor);
            
            if(typeof (tip.pos) != 'undefined' && tip.pos == "right") {
        	   $('<style type="text/css">.tooltip-rightbg' + tip.bgcolor + ' + .tooltip > .tooltip-arrow { border-right-color: ' + tip.bgcolor + '; }</style>').appendTo($('head'));
                $(this).addClass('tooltip-rightbg' + tip.bgcolor);
            }
            else if(typeof (tip.pos) != 'undefined' && tip.pos == "left") {
        	   $('<style type="text/css">.tooltip-leftbg' + tip.bgcolor + ' + .tooltip > .tooltip-arrow { border-left-color: ' + tip.bgcolor + '; }</style>').appendTo($('head'));
                $(this).addClass('tooltip-leftbg' + tip.bgcolor);
            }
            else if(typeof (tip.pos) != 'undefined' && tip.pos == "top") {
        	   $('<style type="text/css">.tooltip-topbg' + tip.bgcolor + ' + .tooltip > .tooltip-arrow { border-top-color: ' + tip.bgcolor + '; }</style>').appendTo($('head'));
                $(this).addClass('tooltip-topbg' + tip.bgcolor);
            }
            else if(typeof (tip.pos) != 'undefined' && tip.pos == "bottom") {
        	   $('<style type="text/css">.tooltip-bottombg' + tip.bgcolor + ' + .tooltip > .tooltip-arrow { border-bottom-color: ' + tip.bgcolor + '; }</style>').appendTo($('head'));
                $(this).addClass('tooltip-bottombg' + tip.bgcolor);
            } // else
        } // there's a bgcolor
        $(this).tooltip();
        if($(this).data("hidden-detail")!=undefined) $(this).tooltip("disable");
    });
    }
    
    /**
    * STORYBOARDS
    * Highlight parts of the webpage with tooltips and an explanation at the console on how they
    * work together or what needs to be done (for upper management, programmer, designer, or tester). 
    * --------------------------------------------------------------------------------------------
    * Best practices: 
    *     -You can bind a key (0-9 or a-z) to multiple tooltips and have them appear with an
    *      explanation in the console after activating Storyboard Mode (by pressing the 
    *      backquote ` key found left of the number keys) and then pressing the binded key.
    *      You must activate Storyboard Mode to press a key to show tooltip(s) because it's
    *      normally disruptive for user to type into a website's textfield and have tooltips
    *      appear as they are typing.
    * 
    */
    
    //SB-1. Storyboards Mode On/Off
    $(function() {
    window.showing=[];
    window.storytelling=[];
    $("body").on("keypress", function(e) {
       if(e.keyCode==96 && window.showable===undefined) { 
           console.log("%cON - Storyboard Mode. %cThe developer gave you keyboard button(s) to press after pressing backquote (`) found left of the number keys. Pressing the button(s) will highlight parts of the webpage with tooltips and an explanation here on how they work together or what needs to be done (for upper management, programmer, designer, or tester). Press any buttons provided to you now.","color:red;font-weight:bold;","color:red; font-weight:normal;"); 
           window.showable="";
           return;
       } else if(e.keyCode==96) {
           console.log("%cOFF - %cStoryboard Mode. %cYou can now type on the webpage without triggering tooltip or console text behaviors.","color:gray; font-weight:bold;","color:red;font-weight:bold;","color:red; font-weight:normal;");
           $("[data-detail],[data-hidden-detail]").trigger("mouseout");
           delete window.showable;
           return;
       } // else
       if(window.showable===undefined) return;
        
    //SB-2. Show story about opened tooltips
       var input = String.fromCharCode(event.keyCode).toLowerCase();
       $('[data-detail]').each(function() {
           if($(this).data("detail").bind!==undefined) {
               if(input==$(this).data("detail").bind) {
                   
                   //what's pressed matches what's binded, so show bubbles:
                	if(window.showing[input]===undefined) {
                        $('[data-toggle="tooltip"][data-bind="' + input + '"]').each(function() {
					        if($(this).data("hidden-detail")!=undefined) $(this).tooltip("enable");
                    		$(this).trigger('mouseenter'); });
                        console.log.apply(console, window.storytelling[input]);
                        window.showing[input]="";
                    } else {
                        $('[data-toggle="tooltip"][data-bind="' + input + '"]').each(function() {
					        if($(this).data("hidden-detail")!=undefined) $(this).tooltip("disable");
                    		$(this).trigger('mouseout'); });
                        delete window.showing[input];
                    }
                   
                   //check if there's a story attached to what's binded:
                   if($('#rapid-options')!==undefined && $('#rapid-options').data('binds')!==undefined) {
                        for(var i = 0; i<$('#rapid-options').data('binds').length; i++) {
                            window.storytelling[ $('#rapid-options').data('binds')[i][0] ] = $('#rapid-options').data('binds')[i].slice(1);
                        }
                        //console.dir(window.storytelling);
                   }
                   
               } // pressed char
           } // tooltip binded to a char
       }); // tooltip 
    }); // keypress
    });
    
    function init_rapid() {
        //alert("reint");
        init1();
        init2();
        init3();
    }
    
    $(function() {
        init_rapid();
    });


    /**
    * LOREM IPSUM
    * Generate Lorem Ipsum words, sentences, or paragraphs easily with a data attribute.
    * --------------------------------------------------------------------------------------------
    * Best practices: 
    *     E.g. For 20 words, data-lorem='20w'
    *     E.g. For 8 sentences, data-lorem='8s'
    *     E.g. For 5 paragraphs, data-lorem='5'
    *
    */

    var Lorem;(function(){function randw(){var s=Math.floor(Math.random()*3)+1,c=['b','d','f','g','h','j','k','m','n','p','r','s','sh','t','ts','ll','qu','sc','gr','en','ad','ip','am','eg','ph','al','el','urn','fr','rh','pr','ul','et','gn','er','ult','odo','oro','ti','l','v','w','z','tr','ch','bl','pl','cr'],v=['a','e','i','o','u','au','ou','ae','us','ui'],i=0,str='';while(i<s){str+=c[Math.floor(Math.random()*(c.length-1))]+v[Math.floor(Math.random()*(v.length-1))];i++;} return str + (Math.random()*10 < 3 ? c[Math.floor(Math.random()*(c.length-1))]:'');}Lorem=function(){this.type=null;this.query=null;this.data=null};Lorem.IMAGE=1;Lorem.TEXT=2;Lorem.TYPE={PARAGRAPH:1,SENTENCE:2,WORD:3};Lorem.WORDS=[];var a=0;while(a<1272){Lorem.WORDS.push(randw());a++}Lorem.prototype.randomInt=function(c,b){return Math.floor(Math.random()*(b-c+1))+c};Lorem.prototype.createText=function(f,h){switch(h){case Lorem.TYPE.PARAGRAPH:var k=new Array;for(var d=0;d<f;d++){var j=this.randomInt(10,20);var c=this.createText(j,Lorem.TYPE.SENTENCE);k.push(c)}return k.join("\n");break;case Lorem.TYPE.SENTENCE:var l=new Array;for(var d=0;d<f;d++){var m=this.randomInt(5,10);var g=this.createText(m,Lorem.TYPE.WORD).split(" ");g[0]=g[0].substr(0,1).toUpperCase()+g[0].substr(1);var e=g.join(" ");l.push(e)}return(l.join(". ")+".").replace(/(\.\,|\,\.)/g,".");break;case Lorem.TYPE.WORD:var b=this.randomInt(0,Lorem.WORDS.length-f-1);return Lorem.WORDS.slice(b,b+f).join(" ").replace(/\.|\,/g,"");break}};Lorem.prototype.createLorem=function(d){var h=new Array;var g=parseInt(this.query);var e=Lorem.TYPE.PARAGRAPH;if(/\d+p/.test(this.query)){e=Lorem.TYPE.PARAGRAPH}else{if(/\d+s/.test(this.query)){e=Lorem.TYPE.SENTENCE}else{if(/\d+w/.test(this.query)){e=Lorem.TYPE.WORD}}}h.push(this.createText(g,e));h=h.join(" ");if(d){if(this.type==Lorem.TEXT){var f=h.split("\n");for(var c=0;c<f.length;c++){f[c]="<p>"+f[c]+"</p>"}d.innerHTML+=f.join("")}else{if(this.type==Lorem.IMAGE){var j="";var b=this.query.split(" ");if(b[0]=="gray"){j+="/g";b[0]=""}if(d.getAttribute("width")){j+="/"+d.getAttribute("width")}if(d.getAttribute("height")){j+="/"+d.getAttribute("height")}j+="/"+b.join(" ").replace(/(^\s+|\s+$)/,"");d.src="http://lorempixum.com"+j.replace(/\/\//,"/")}}}if(d==null){return h}};if(typeof jQuery!="undefined"){(function(b){b.fn.lorem=function(){b(this).each(function(){var c=new Lorem;c.type=b(this).is("img")?Lorem.IMAGE:Lorem.TEXT;c.query=b(this).data("lorem");c.createLorem(this)})};b(document).ready(function(){b("[data-lorem]").lorem()})})(jQuery)}else{if(document.querySelectorAll){!function(d,c){typeof define=="function"?define(c):typeof module!="undefined"?module.exports=c():this[d]=this.domReady=c()}("domready",function(x){function m(b){n=1;while(b=w.shift()){b()}}var w=[],v,u=!1,t=document,s=t.documentElement,r=s.doScroll,q="DOMContentLoaded",p="addEventListener",o="onreadystatechange",n=/^loade|c/.test(t.readyState);t[p]&&t[p](q,v=function(){t.removeEventListener(q,v,u),m()},u),r&&t.attachEvent(o,v=function(){/^c/.test(t.readyState)&&(t.detachEvent(o,v),m())});return x=r?function(b){self!=top?n?b():w.push(b):function(){try{s.doScroll("left")}catch(c){return setTimeout(function(){x(b)},50)}b()}()}:function(b){n?b():w.push(b)}});domReady(function(){var d=document.querySelectorAll("[data-lorem]");for(var b=0;b<d.length;b++){var c=d[b];var e=new Lorem;e.type=c.tagName=="IMG"?Lorem.IMAGE:Lorem.TEXT;e.query=c.getAttribute("data-lorem");e.createLorem(c)}})}}})();