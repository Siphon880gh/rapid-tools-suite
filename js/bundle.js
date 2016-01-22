/*!
 * RAPID TOOLS SUITE
 * A collection of frontend and backend tools to shorten development time. Layouts with placeholders, lorem ipsum, and a command line Bootstrap layouter. Discover specifications while making quick layouts and emulating backend queries to the database. Write code faster with controllers attached to elements. Collaborate better using tooltips and narration.
 * By Weng Fei Fung
 *
 * The Lorem Ipsum code in the development js is open source under GNU Lesser General Public License. The production minified JS does not have layout features such as Lorem Ipsum. I forked the copy from F/LoremJS by Brian Grinstead. There was an array of 1272 strings that took up filesize so I adapted an algorithm in place of it that generated Lorem Ipsum words. They are not perfectly Latin words, but at least they act to fill in a spot with words like Lorem Ipsum does. The algorithm was changed from Braden Best's "Nonsense Password Generator" available to public domain through JSFiddle. 
 *
 * All other portions of the code in this JS file is licensed under Apache License to Weng Fei Fung. 
 * You may alter the code in this file but alterations must carry prominent notices stating that 
 * You changed the files or code where they occured.
 *
 * Requires jQuery, Jquery UI, Handlebars, Bootstrap
 * - jQuery for general functions, jQuery migrate for Chrome debugging functions (if using), Query UI for draggable Bootstrap status and draggable styled ihtml box, Bootstrap css for Bootstrap features, Bootstrap js for detailed tooltips, and Handlebars for itemplate
 * Date: 2015-04-28 T16:19Z
 * Version: 2
 */


/*     
*	BOOTSTRAP
*   ------------------------------------------------------------------------------------------ 
*/

    function initB() {
        //Check if Bootstrap exists before showing optional status
        if(typeof $().emulateTransitionEnd == 'function') {

            //Status needed for responsive scripts
            if($("#rapid-bootstrap-status").length==0) {
                $('<div id="rapid-bootstrap-status" class="rapid-drags" style="background-color:gray; position:fixed;bottom:30px;right:2px;opacity:.7;display:none; width:130px !important; border-radius: 4px; cursor:all-scroll;"><div id="rapid-lg" class="visible-lg">&nbsp;<i class="fa fa-desktop fa-6"></i>&nbsp;Large Screen (lg)</div> <div id="rapid-md" class="visible-md">&nbsp;<i class="fa fa-desktop fa-5"></i>&nbsp;Desktop (md)</div><div id="rapid-sm" class="visible-sm">&nbsp;<i class="fa fa-tablet fa-5"></i>&nbsp;Tablets (sm)</div><div id="rapid-xs" class="visible-xs">&nbsp;<i class="fa fa-mobile fa-5 fa-inverse"></i>&nbsp;Mobile (xs)</div></div>').appendTo("body");
            } // if
            if (typeof jQuery.ui != "undefined") {
                $("#rapid-bootstrap-status").draggable();
            }
        }
        
        //Check for responsive scripts and css media queries
        $(function() {
            Rapid.bootstrap.helpers.pollRearrange();
            Rapid.bootstrap.helpers.pollRearrange();
            $("#rapid-bootstrap-status").offset({ left: $(window).width()-132 });
        }); // after DOM. Minimal layout disruptions
        $(window).on("load", function() {
            Rapid.bootstrap.helpers.pollRearrange();
        }); // after DOM, images, frames, scripts
        $(window).resize(function() {
            Rapid.bootstrap.helpers.pollRearrange();
            $("#rapid-bootstrap-status").offset({ left: $(window).width()-132 });
        }); // on resizing
        
        //Bring bid up to speed if adding Bootstrap elements from a previous code
        (function() {
            var arrBID = [];
            $('[id^="bid"]').each(function() { 
                var bid = $(this).attr("id").substr(3);
                if($.isNumeric(parseInt(bid))) arrBID.push(bid);
            });
            arrBID.push(-1); // in case empty array
            Rapid.bootstrap.helpers.htmlCount = Math.max.apply(Math, arrBID) + 1;
        })();
        
        //Gridline visibility
        if(Rapid.bootstrap.gridlines)
            $('[class^="col-"]').each(function() {
                if( !$(this).hasClass("rapid-bootstrap-gridlines") )
                    $(this).addClass("rapid-bootstrap-gridlines");
            }); // gridlines
        else
            $('[class^="col-"]').each(function() {
                $(this).removeClass("rapid-bootstrap-gridlines");
            }); // gridlines
            
        //Status visibility
        if(Rapid.bootstrap.status)
            $("#rapid-bootstrap-status").css("display", "block");
        else
            $("#rapid-bootstrap-status").css("display", "none");
        // status
        
        //Nested Warning
        if(Rapid.bootstrap.nestedWarning) {
            Rapid.bootstrap.helpers.pollNested();
        }
        
        $.extend(true, Rapid, { 
            ibootstrap: {
                latest: function() {
                    var report ="";
                    if(Rapid.bootstrap.helpers.htmlCount==0) {
                        report="Rapid.ibootstrap.latest: You haven't added any Bootstrap divs thru Rapid yet.";
                        console.info(report);
                    } else {
                        report="$(\"%c#bid" + (Rapid.bootstrap.helpers.htmlCount-1).toString() + "%c\")";
                        arr=[report];
                        arr.push("font-weight:bold;","font-weight:normal;");
                        console.info.apply(console, arr);
                    }
                },
                staticCSS: function() {
                  console.info("Rapid.bootstrap.staticCSS:\n-These media queries are combined from xsCSS, smCSS, mdCSS, and lgCSS.\n-To validate the code, copy this to CSS Lint.\n-If your page has elements that grow or shrink while the page is loading, copy this to a style block. This would make sure the CSS media queries run before inline styles rather than the other way around, which causes two sets of style changes, hence the growing and shrinking during loading.\n\n");
                    return $("#rapid-bootstrap-css-media-queries").text();
                },
                mod: function(sel, mode, widths) {
                    var jqObj;
                    if(sel instanceof jQuery)
                        jqObj = sel;
                    else
                        jqObj = $(sel);
                    
                  var paramColIndex = 0;
                  if($(jqObj).length==0) console.error("Rapid.ibootstrap.mod: Selector matched no element.");
                  $(jqObj).children().each(function() {
                    $(this).removeClass("col-" + mode + "-1")
                           .removeClass("col-" + mode + "-2")
                           .removeClass("col-" + mode + "-3")
                           .removeClass("col-" + mode + "-4")
                           .removeClass("col-" + mode + "-5")
                           .removeClass("col-" + mode + "-6")
                           .removeClass("col-" + mode + "-7")
                           .removeClass("col-" + mode + "-8")
                           .removeClass("col-" + mode + "-9")
                           .removeClass("col-" + mode + "-10")
                           .removeClass("col-" + mode + "-11")
                           .removeClass("col-" + mode + "-12");

                    if (typeof widths.length!='undefined') {
                        $(this).addClass("col-" + mode + "-" + widths[paramColIndex]);
                        if (paramColIndex < widths.length-1) paramColIndex++;
                    } else {
                        $(this).addClass("col-" + mode + "-" + widths);
                    }
                    //console.log(paramColIndex);
                  }); // each child
                }, // mod
                add: function(preset, objParam) {
                    //Validation against required parameter
                    if(typeof preset!="string") {
                        console.error("Rapid.ibootstrap.add: Must pass a string for the first parameter that is \"container\", \"well\", \"row\", \"col\", \"colxs\", \"colsm\", \"colmd\", \"collg\", or any column class from \"col-xs-1\" to \"col-lg-12\".");
                        return "";
                    }
                    
                    // Assign html preset:
                    var html="";
                    preset = preset.toLowerCase();
                    switch(preset) {
                        case "container":
                            html = Rapid.constants.ibootstrapAddContainer;
                            break;
                        case "row":
                            html = Rapid.constants.ibootstrapAddRow;
                            break;
                        case "well":
                            html = Rapid.constants.ibootstrapAddWell;
                            break;
                        case "col":
                            html = Rapid.constants.ibootstrapAddCol;
                            break;
                        case "colxs":
                            html = Rapid.constants.ibootstrapAddColXs;
                            break;
                        case "colsm":
                            html = Rapid.constants.ibootstrapAddColSm;
                            break;
                        case "colmd":
                            html = Rapid.constants.ibootstrapAddColMd;
                            break;
                        case "collg":
                            html = Rapid.constants.ibootstrapAddColLg;
                            break;
                        case "column":
                            html = Rapid.constants.ibootstrapAddCol;
                            break;
                        default:
                            if( (preset.indexOf("-")==3) && (preset.lastIndexOf("-")==6) && (preset.length>7) ) {
                                html = Rapid.constants.ibootstrapAddSpecol;
                                html = html.replace(new RegExp("\\$_SPECOL_\\$", "i"), preset);
                                //console.log("+++" + html + "\n" + preset)
                            } else {
                                console.error("Rapid.ibootstrap.add: Could not create Bootstrap div. Please pass one of these as the first parameter: \"container\", \"well\", \"row\", \"col\", \"colxs\", \"colsm\", \"colmd\", \"collg\", or any column class from \"col-xs-1\" to \"col-lg-12\". Eg. Rapid.ibootstrap.add(\"row\", \"bg-primary center-block\", \"data-lorem='5w'\")");
                                return "";
                            }
                    } // switch
                    
                    // Assign ID:
                    html = html.replace(new RegExp('id=""',"g"), 'id="' + 'bid' + Rapid.bootstrap.helpers.htmlCount + '"');
                    Rapid.bootstrap.helpers.htmlCount++;

                    //Assign Class(es), Style(s), Text
                    if(arguments.length>1 && typeof arguments[1] == "object") {
                      for(var key in objParam) {
                          switch (key) {
                            case "class":
                                html = html.replace(new RegExp('class="(.*?)"', 'g'), function(html, $1) { return "class=\"" + $1 + " $_CLASS_$\""});
                                html = html.replace(/\$_CLASS_\$/i, objParam[key]); // this way keeps track of spacing
                                break;
                            case "style":
                                html = html.replace(/style="(.*?)"/i, "style=\"" + objParam[key] + "\"");
                                break;
                            case "attr":
                                html = html.replace(new RegExp('data-rapid-target',"g"), objParam[key]);
                                break;
                            case "inner":
                                html = html.replace(/><\//i, ">" + objParam[key] + "<\/");
                                break;
                          } //switch statements for html regexp
                      } // for
                    } // if
                    else if(arguments.length>1 && typeof arguments[1] != "object") {
                        console.error("Rapid.ibootstrap.add: 2nd parameter must be an object that further specifies the Bootstrap div being created. Eg. {class:\"bg-primary text-center\", style:\"color:gray; font-weight: 600\", attr:\"data-here data-also\", inner:\"Created.\"}");
                        return;
                    } // object provided to further specify the Bootstrap div
                    
                    // Add gridlines if option on
                    if(Rapid.bootstrap.gridlines) {
                        html = html.replace(new RegExp('class="(.*?)"', 'g'), function(html, $1) { return "class=\"" + $1 + " $_CLASS_$\""});
                        html = html.replace(/\$_CLASS_\$/i, "rapid-bootstrap-gridlines");
                    } // if
                    
                    // Remove non-filled attributes:
                    html = html.replace(/ style=""/i, "");
                    html = html.replace(new RegExp(' data-rapid-target',"g"), '');
                    
                    // Formatted html to console
                    var consoleHTML = html;
                    consoleHTML = consoleHTML.replace(new RegExp('id="(.*?)"', 'g'), 'id="%c$1%c"');
                    var arrHTML = ["Rapid.bootstrap.add: Your html is\n" + consoleHTML];
                    arrHTML.push("font-weight:bold;","font-weight:normal;");
                    console.info.apply(console, arrHTML);

                    //Nested Warning
                    if(Rapid.bootstrap.nestedWarning) {
                        setTimeout(Rapid.bootstrap.helpers.pollNested, 5);
                    }
                    
                    return html;
                }, // add
                addHelp: function() {
                    console.info("Rapid.ibootstrap.addHelp: The correct syntax for adding bootstrap elements is\n%c\tRapid.ibootstrap.add(type, classes, styles, attributes, text)\n%cNote: To create a Bootstrap div, the first parameter requires \"container\", \"well\", \"row\", \"col\", \"colxs\", \"colsm\", \"colmd\", \"collg\", or any column class from \"col-xs-1\" to \"col-lg-12\". All other parameters optional. You can omit parameters that trail. If you want to skip a parameter between two other parameters you are passing, you must pass one of these: blank string \"\", false, null, undefined, or 0.\nTo add HTML to the actual page, pass the function to jQuery's html, append, prepend, insertBefore, or insertAfter with it selecting the unique bid.\nCMD+SHIFT+C to quickly see the bid's of each element on mouseover. CMD+SHIFT+C again to toggle off the mouseover and resume normal browser behavior. CMD+# or Escape with the window focus on DevTools to switch back to Console. Or you can find the bid of nearby elements using jQuery's parent, prev, next, or children.", "font-style:italic;", "font-style:normal;");
                }, // addHelp
                parentRow: function(sel) {
                    var jqObj;
                    if(sel instanceof jQuery)
                        jqObj = sel;
                    else
                        jqObj = $(sel);
                    
                    if(jqObj.parent().hasClass("row"))
                        return jqObj.parent();
                    
                    else if(jqObj.parent().parent().hasClass("row"))
                        return jqObj.parent().parent();
                    
                    else if(jqObj.parent().parent().parent().hasClass("row"))
                        return jqObj.parent().parent().parent();
                }, // parentRow
            } // ibootstrap
        }); // extend
        
        
    } // initB

/*     
*	DEFAULTS
*   ------------------------------------------------------------------------------------------ 
*/
    //S-1. Rapid Tools Suite's defaults
    if(typeof Rapid=='undefined') var Rapid = {};

    //For ilisten - optional function to prevent SQL injection
    function mysqli_real_escape_string(str) {
        str = str.replace(new RegExp("1=1", 'g'), "");
        str = str.replace(/(<([^>]+)>)/ig,"");
        return str;
    }
    function real_escape_string(str) {
        return mysqli_real_escape_string(str);
    }
    //For semantics - easily add enums in javascript
    function enumer() {
        return ++Rapid.constants.itrEnum;
    }

    $.extend(true, Rapid, 
        {
            i: function() {
                console.info("Rapid.i: Shortened many interactive commands for faster typing.\nAvailable commands: options, staticCSS, addHelp, add, mod, latest, parentRow, ihtml, itemplate, iajax, db, ilisten, Chain, testChain \n");
                
                window.options = function() {
                    return Rapid.options.apply(this, arguments);
                };
                window.staticCSS = function() {
                    return Rapid.ibootstrap.staticCSS.apply(this, arguments);
                };
                window.addHelp = function() {
                    return Rapid.ibootstrap.addHelp.apply(this, arguments);
                };
                window.add = function() {
                    return Rapid.ibootstrap.add.apply(this, arguments);
                };
                window.mod = function() {
                    return Rapid.ibootstrap.mod.apply(this, arguments);
                };
                window.latest = function() {
                    return Rapid.ibootstrap.latest.apply(this, arguments);
                };
                window.parentRow = function() {
                    return Rapid.ibootstrap.parentRow.apply(this, arguments);  
                };
                window.ihtml = function() {
                    return Rapid.ihtml.apply(this, arguments);
                };
                window.itemplate = function() {
                    return Rapid.itemplate.apply(this, arguments);
                };
                window.iajax = function() {
                    return Rapid.iajax.apply(this, arguments);
                };
                window.db = function() {
                    return Rapid.backend.db.apply(this, arguments);
                };
                window.ilisten = function() {
                    return Rapid.ilisten.apply(this, arguments);
                };
                window.Chain = function() {
                    return Rapid.backend.Chain.apply(this, arguments);
                };
                window.testChain = function() {
                    return Rapid.backend.testChain.apply(this, arguments);  
                };
            }, // i for shortening interactive commands
            toggle: {
              cache: false
            },
            constants: { // internal use only
                phpEmulate: "phpEmulate", 
                ibootstrapAddContainer: '<div id="" class="container" style="" data-rapid-target></div>',
                ibootstrapAddWell: '<div id="" class=well" style="" data-rapid-target></div>',
                ibootstrapAddRow: '<div id="" class="row" style="" data-rapid-target></div>',
                ibootstrapAddCol: '<div id="" class="col-md-1" style="" data-rapid-target></div>',
                ibootstrapAddColXs: '<div id="" class="col-xs-1" style="" data-rapid-target></div>',
                ibootstrapAddColSm: '<div id="" class="col-sm-1" style="" data-rapid-target></div>',
                ibootstrapAddColMd: '<div id="" class="col-md-1" style="" data-rapid-target></div>',
                ibootstrapAddColLg: '<div id="" class="col-lg-1" style="" data-rapid-target></div>',
                ibootstrapAddSpecol: '<div id="" class="$_SPECOL_$" style="" data-rapid-target></div>',
                itrEnum: -1
            },
            ihelpers: {
              listeners: {},
              validateRequestLine: function(id, requestLine) {
                if(requestLine.indexOf(" ")==-1) {
                    console.error(id + ": Missing a space in the parameter. You need to pass 'METHOD some-url'. For example, 'GET list/'.");
                    return false;
                } // if
                return true;
              },
              validateResponse: function(id, data) {
                if(typeof data=='undefined') { console.log(id); }
                if(data.length==0) {
                    console.info(id + ": Blank response text.");
                    
                    // Rationale: A blank response text is not necessarily an error, so do not block the caller from continuing
                    return true;
                } else if(data.substr(0,3).indexOf("<")!=-1) { // found
                    console.error(id + ": Not the expected response text. Detected '<' in the first few characters. Likely a HTML was returned. Check the URL because it could be a custom 404 page.");
                    console.dir(data);
                    return false;
                } else if(data.length<3) {
                    console.error(id + ": Blank json.");
                    console.dir(data);
                    return false;
                }
                  
                  
                try {
                    JSON.parse(data);
                } catch (e) {
                    console.error(id + ": Not correct JSON in response text. Check the URL because it could be a custom 404 page. Or if you echoed the literal JSON string rather than echo json_encode($arr), double check your JSON text.");
                    console.dir(data);
                    return false;
                }
                  
                return true;
              } // validateResponse
            },
        	itemplate: function(lang, data /*polymorphic*/) {
                if(typeof Handlebars==="undefined") {
                    console.error("Rapid.itemplate: Make sure to load Handlebars JS before Rapid Tools Suite if you want to use this function to validate Handlebars code with a javascript object.");
                    return;   
                }
                error_incorrect_parameters = "Rapid.itemplate: Make sure to pass a string Handlebars template code (Eg. \"{{#wrapper}} {{row}} {{/wrapper}}\") and a context Javascript object (Eg. {wrapper: [{row:1},{row:2},{row:3}]}). Third parameter is optional and if provided, must be an array of one or more Handlebars helpers.";
                if(arguments.length<2) {
                    console.error(error_incorrect_parameters);
                    return; 
                }
                if(typeof arguments[0]!="string" || typeof arguments[1]!="object") {
                    console.error(error_incorrect_parameters);
                    return; 
                }
                
                if(arguments.length>2) {
                  for(var i=2; i<arguments.length; i++) {
                        var fxnName = arguments[i][0],
                      fxn = arguments[i][1];
                      Handlebars.registerHelper(fxnName, fxn);
                  } // for
                } // if provided helpers

                console.info("Validated: " + Handlebars.compile(lang)(data));
            }, //itemplate
            ihtml: function() {
                //toggling ihtml canvas
                if(arguments.length==0)
                    if($("#rapid-html").length>0) {
                        $("#rapid-html").remove();
                        return;
                    }
                //creating ihtml canvas on demand
                if($("#rapid-html").length==0) {
                    $('<div id="rapid-html" class="rapid-resizable ui-widget-content" style="z-index: 1000; position: fixed; overflow-x:hidden; overflow-y:scroll; word-break: break-all; padding-top: 2em; padding-left:.2em; border: 1px solid black; min-width: 170px; min-height: 100px; width: 170px; height: 100px; max-width: 100%; max-height: 100%;"><h4 class="ui-widget-header" style="position:absolute; top:0px; left:0px; margin-top: 0px; padding: .2em .5em;">Rapid HTML</h4><div id="controls" style="position:absolute; bottom:2px; left:2px"><small><a id="fade" href="javascript:void(0)" style="text-decoration:none;">Fade</a> / <a id="normal" href="javascript:void(0)" style="text-decoration:none;">Normal</a></small></div></div>').prependTo("body");
                if (typeof jQuery.ui != "undefined") {
                    $(".rapid-resizable").resizable(
                    {
                        stop: function(event, ui)
                        {                        
                            var top = getTop(ui.helper);
                            ui.helper.css('position', 'fixed');
                            ui.helper.css('top', top+"px");            
                        }        
                    });

                    $("#rapid-html").draggable(
                        {
                            stop: function(event, ui)
                            {            
                                var top = getTop(ui.helper);
                                ui.helper.css('position', 'fixed');
                                ui.helper.css('top', top+"px");
                            }
                        });
                        function getTop(ele)
                        {
                            var eTop = ele.offset().top;
                            var wTop = $(window).scrollTop();
                            var top = eTop - wTop;

                            return top;    
                        }
                 } // if jQuery UI loaded
                $("#rapid-html a#fade").click(function() {
                        if($("#rapid-html").css("opacity")>.1) 
                            $("#rapid-html").css("opacity", $("#rapid-html").css("opacity")-.1);
                    });

$("#rapid-html a#normal").click(function() {
                        if($("#rapid-html").css("opacity")<1) 
                            $("#rapid-html").css("opacity", 1);
                    });
                } // if creating ihtml
                
                
                if(arguments.length>0)
                    $("#rapid-html").prepend(arguments[0]);
            },
            iajax: function(/*polymorphic*/) { 
                
                //Validation:
                if(arguments.length==0) {
                    console.error("Rapid.iajax: Missing parameter. You need to pass 'METHOD some-url'. For example, 'GET list/'.");
                    return;
                }
                if(!Rapid.ihelpers.validateRequestLine("Rapid.iajax", arguments[0])) {
                    return;
                }
                if(typeof arguments[arguments.length-1]!=="function" && arguments[arguments.length-1]!=null) {
                    console.error("Rapid.iajax: Last parameter should be a done callback that handles the responseText on the client side. If you do not want to bother with a done callback, pass null. The console will still return a console.dir but the ajax code it gives you will exclude any done callback.");
                    return;
                }
                             
                //Model:
                var requestLine = arguments[0], // VALUE: GET http..
                requestLine_arr = requestLine.split(" "),
                method = requestLine_arr[0].toUpperCase(), // VALUE: GET
                url = requestLine_arr[1].toLowerCase(), // VALUE: http..
                cbClientDone = arguments[arguments.length-1], // TYPE: function vs null
                params = arguments.length>=2?arguments[1]:{};
                
                //Listeners overriding Ajax, part 1:
                var internalDone = {
                    forGet: function(data) { // done wrapper
                            var strJS="";
                            if(data!==Rapid.constants.phpEmulate) {
                                if(!Rapid.ihelpers.validateResponse("Rapid.iajax", data)) return;
                                if(data.length)
                                    data = JSON.parse(data);
                                else
                                    data = "";
                            }
                            strJS+='$.' + method.toLowerCase() + '("' + url + '"';
                            if(params==null);
                            else if(params.length==0);
                            else if(typeof params=="string") strJS+=", " + params;
                            else if(typeof params=="object") { if(typeof params.rapidKey!='undefined') delete params.rapidKey; strJS+=", " + JSON.stringify(params); }
                            if(typeof cbClientDone == "function") strJS+=")\n\t.done(" + cbClientDone.toString() + ");"
                            else strJS+=")\n\t.done(function(data) {\n\t\tconsole.dir(data);\n\t});"

                            console.group("Called get");
                            console.log("Your js code would be:\n");
                            console.log(strJS);
                            console.log("Evaluating the done callback passed to iajax...");
                            if(typeof data!='undefined') console.log("data: ", data);
                            console.groupEnd();
                    },
                    forPost: function(data) { // done wrapper
                            var strJS="";
                            if(data!=Rapid.constants.phpEmulate) {
                                if(!Rapid.ihelpers.validateResponse("Rapid.iajax", data)) return;
                                if(data.length)
                                    data = JSON.parse(data);
                                else
                                    data = "";
                            }
                            strJS+='$.' + method.toLowerCase() + '("' + url + '"';
                            if(params==null);
                            else if(params.length==0);
                            else if(typeof params=="string") strJS+=", " + params;
                            else if(typeof params=="object") { if(typeof params.rapidKey!='undefined') delete params.rapidKey; strJS+=", " + JSON.stringify(params); }
                            if(typeof cbClientDone == "function") strJS+=")\n\t.done(" + cbClientDone.toString() + ");"
                            else strJS+=")\n\t.done(function(data) {\n\t\tconsole.dir(data);\n\t});"

                            console.group("Called post");
                            console.log("Your js code would be:\n");
                            console.log(strJS);
                            //alert("reached cbClientDone");
                            console.log("Evaluating the done callback passed to iajax...");
                            if(typeof data!='undefined') console.log("data: ", data);
                            console.groupEnd();
                            
                    
                    },
                    forMiscMethod: function(data) { // done wrapper
                            var strJS="";
                            if(data!==Rapid.constants.phpEmulate) {
                                if(!Rapid.ihelpers.validateResponse("Rapid.iajax", data)) return;
                                if(data.length)
                                    data = JSON.parse(data);
                                else
                                    data = "";
                            }
                            strJS+='$.ajax({\n\turl:"' + url + '",\n';
                            if(params==null);
                            else if(params.length==0);
                            else if(typeof params=="string");
                            else if(typeof params=="object") { if(typeof params.rapidKey!='undefined') delete params.rapidKey; strJS+='\tdata:' + JSON.stringify(params) + ',\n'; }
                            strJS+='\tmethod:"' + method + '"\n}';
                            if(typeof cbClientDone == "function") strJS+=")\n\t.done(" + cbClientDone.toString() + ");"
                            else strJS+=")\n\t.done(function(data) {\n\t\tconsole.dir(data);\n\t});"
                            console.group("Called " + method.toLowerCase());
                            console.log("Your js code would be:\n");
                            console.log(strJS);
                            console.log("Evaluating the done callback passed to iajax...");
                            if(typeof data!='undefined') console.log("data: ", data);
                            console.groupEnd();
                    }
                    
                } // done
                var fail = function(jsxhr, textStatus, errorThrown) {
                    console.error("Rapid.iajax: " + method + " " + textStatus + " with " + errorThrown);
                }; // fail
                
                
                //Listeners overriding Ajax, part 2:
                    if(typeof Rapid.ihelpers.listeners[requestLine]!='undefined') {
                        switch (method) {
                            case "GET":
                                cbInternalDone = internalDone.forGet;
                                break;
                            case "POST":
                                cbInternalDone = internalDone.forPost;
                                break;
                            case "PUT": //nobreak's
                            case "PATCH":
                            case "UPDATE":
                            case "DELETE":
                            case "HEAD":
                            case "OPTIONS":
                                cbInternalDone = internalDone.forMiscMethod;
                                break;
                            default:
                                console.log("Rapid.iajax: Wrong method.");
                        } // switch
                        Rapid.ihelpers.listeners[requestLine].curParams=params;
                        Rapid.ihelpers.listeners[requestLine].cbInternalDone=cbInternalDone;
                        Rapid.ihelpers.listeners[requestLine].cbClientDone=cbClientDone;
                        //console.log("here I am here I am!")
                        var jsExecAjaxStart = Rapid.ihelpers.listeners[requestLine].jsExecAjax;
                        if(jsExecAjaxStart.length>0) { // start async sequence over at ilisten
                            Rapid.ihelpers.listeners[requestLine].jsExecAjaxStarter();
                        } else { // no ajax response over at ilisten so just echo manually
                            Rapid.ihelpers.listeners[requestLine].runFinalEcho();
                        }
                        return;
                    } // if overridden by ilisten
                
                //No listeners, use Ajax:
                switch (method) {
                    case "GET":
                            $.get(url, $.extend(params, {rapidKey: Rapid.backend.ihelpers.rapidKey}))
                                .done(function(data) {
                                    internalDone.forGet(data);
                                }) // done
                                .fail(function(jqXHR, textStatus, errorThrown) {
                                    fail(jqXHR, textStatus, errorThrown);
                                }); // fail
                        break;
                    case "POST":
                            $.post(url, $.extend(params, {rapidKey: Rapid.backend.ihelpers.rapidKey}))
                                .done(function(data) {
                                    internalDone.forPost(data);
                                }) // done
                                .fail(function(jqXHR, textStatus, errorThrown) {
                                    fail(jqXHR, textStatus, errorThrown);
                                }); // fail
                            break;
                    case "PUT":
                            //nobreak
                    case "PATCH":
                            //nobreak
                    case "UPDATE":
                            //nobreak
                    case "DELETE":
                            //nobreak
                    case "HEAD":
                            //nobreak
                    case "OPTIONS":
                            $.ajax({
                                url : url,
                                data: $.extend(params, {rapidKey: Rapid.backend.ihelpers.rapidKey}),
                                method: method,
                                }).done(function(data) {
                                        internalDone.forMiscMethod(data);
                                }) // done
                                .fail(function(jqXHR, textStatus, errorThrown) {
                                
                                    fail(jqXHR, textStatus, errorThrown);
                                }); // fail
                            break;
                    default:
                        console.log("Rapid.iajax: Wrong method.");
                } // switch
            }, // iajax
            backend:{
                testChain: function() {
                  return $.extend(Chain.call(this, "POST null"), {testingChain: true});  
                },
                Chain: function(requestLine) { 
                    
                        //Validation
                        if(arguments.length==0) {
                            console.error("Rapid.backend's Chain: Missing parameter. You need to pass 'METHOD uri' to start a Chain object of the backend code. For example, 'GET list/'.");
                            return;
                        }
                        if(!Rapid.ihelpers.validateRequestLine("Rapid.backend.Chain constructor", arguments[0]))
                            return;
                    
                        return {
                            chainer: true,
                            requestLine: requestLine,
                            curParams:{},
                            jsBeforeAjax: "",
                            jsExecAjax: [], // DONE
                            cbInternalDone: function(data) { console.dir(data) },
                            cbClientDone: function(data) { console.dir(data) },
                            ajaxMax: 0, // DONE
                            ajaxCounter: 0,
                            jsExecBottom: "",
                            phpSrcHTTP: "", // DONE
                            phpSrcInitScope: "",
                            phpSrcMysqli: "",
                            phpSrcEcho: "",
                            responseHolderVals: [],
                            responseHolderKeys: [],
                            initScope:function(php) {
                                this.phpSrcInitScope+=php;
                                return this;
                            }, // initScope
                            execQuery: function(reg) {                                                
                                if(typeof this._error!='undefined') {
                                    //Already shown error
                                    return this;
                                }
                                
                                if(!(reg instanceof RegExp)) {
                                    console.error("Rapid.backend.Chain()'s execQuery: Must pass a regular expression and that regular expression represents exactly what you would type into mysqli_query in PHP with or without: string quotes, escape quotes, method parameters (eg. $_POST[\"someVar\"]), sql injection functions, and query string. Regular expression escapes the javascript parser so that PHP syntax can be allowed.");
                                    return $.extend(this, {_error:true});
                                }
                                
                                this.fetchQuery($.extend({}, {$rapidNull: reg})); // $rapidNull = flag for don't save mysqli results
                                return this;
                            },
                            fetchQuery: function(objFetcher) {                                                
                                if(typeof this._error!='undefined') {
                                    //Already shown error
                                    return this;
                                }
                                
                                if(Rapid.backend.ihelpers.rapidKey.length==0) {
                                    console.error("Rapid.backend.Chain's fetchQuery/execQuery: Access denied. Did not authenticate with Rapid.backend.db(path, rapidKey)");
                                    return $.extend(this, {_error:true});
                                }
                                
                                
                                error_obj_key_reg = "Rapid.backend.Chain()'s fetchQuery: Must pass an object with a key name preceded with \$ and assigned a regular expression. The key name represents the PHP array that stores the fetch assocs before echoing. Therefore, the key name must be preceded with a \$. The regular expression represents what you would type into mysqli_query in PHP with or without: string quotes, escape quotes, method parameters (eg. $_POST[\"someVar\"]), sql injection functions, and query string. Regular expression escapes the javascript parser so that PHP syntax can be allowed.\nEg. fetchQuery(\$arr: /\"SELECT * from users\"/) ";
                                var _getArrayName="";
                                var asIsQuery="";
                                if(typeof objFetcher != "object") {
                            		console.error(error_obj_key_reg);
                                    return $.extend(this, {_error: true});
                                }
                                else if (objFetcher instanceof RegExp) {
                                    console.error(error_obj_key_reg);
                                    return $.extend(this, {_error: true});
                                }
                                
                                if(typeof objFetcher == "object")
                                    for(var arrName in objFetcher) {
                                        _getArrayName = arrName;
                                        if(arrName.length==0 || arrName[0]!='$') {
                                            console.error(error_obj_key_reg);
                                            return $.extend(this, {_error: true});
                                        }
                                            
                                        var reg = objFetcher[_getArrayName];
                                        if(!(reg instanceof RegExp)) {
                                            console.error(error_obj_key_reg);
                                            return $.extend(this, {_error: true});
                                        } // if
                                        
                                        var str = reg.toString();
                                        var strStr = str.substr(1, str.length-2);
                                        asIsQuery = strStr;
                                        console.log("When you call .run(), will run mysqli query: ", asIsQuery);
                                    } // for
                                
                                if(_getArrayName.indexOf("$rapidNull")==0)
                                    _getArrayName="";

                                this.ajaxMax++;
                                //console.dir(this.jsExecAjax);
                                //PROBLEM:
                                this.jsExecAjax.push("eval(Rapid.ihelpers.listeners[\"" + requestLine + "\"].jsBeforeAjax); $.post(\"" + Rapid.backend.ihelpers.path + "\", $.extend({rapidKey:\"" + Rapid.backend.ihelpers.rapidKey + "\", cacheBuster:" + $.now() + ", rapidMysqli:" + asIsQuery.replace(/\./g, '+') + "}, Rapid.ihelpers.listeners[\"" + requestLine + "\"].curParams)).done(function(data) { var curRequest = Rapid.ihelpers.listeners[\"" + requestLine + "\"]; curRequest.responseHolderKeys.push(\"" + _getArrayName + "\"); curRequest.responseHolderVals.push(data); if(curRequest.ajaxCounter<curRequest.jsExecAjax.length) { curRequest.ajaxCounter++; eval(Rapid.ihelpers.listeners[\"" + requestLine + "\"].jsExecAjax[curRequest.ajaxCounter]); } if(curRequest.ajaxCounter==curRequest.jsExecAjax.length) { curRequest.ajaxCounter=0; curRequest.runFinalEcho();} });");
                                
                                var requestLine_arr = requestLine.split(" ");
                                var method = requestLine_arr[0].toUpperCase();
                                
                                this.jsBeforeAjax="var $_" + method + "={}; $.extend($_" + method + ", Rapid.ihelpers.listeners[\"" + requestLine + "\"].curParams);";
                                //console.log(this.jsBeforeAjax);
                                
                                if(method!="GET" && method!="POST") {
                                    this.phpSrcHTTP+="$_" + method + "=array();\n";
                                    this.phpSrcHTTP+="if (($stream = fopen('php://input', \"r\")) !== FALSE) {\n";
                                    this.phpSrcHTTP+="\t$str_prm = stream_get_contents($stream);\n";
                                    this.phpSrcHTTP+="\tparse_str($str_prm, $_" + method + ");\n";
                                    this.phpSrcHTTP+="}";
                                }
                                
                                this.phpSrcMysqli+="\n$rsQuery = mysqli_query($lnk1, " + asIsQuery + ");";
                                if(_getArrayName.length>0) {
                                    this.phpSrcMysqli+=(_getArrayName.length!=0)?("\n" + _getArrayName + " = array();"):"";
                                    this.phpSrcMysqli+="\nwhile($row = mysqli_fetch_assoc($rsQuery)) {";
                                    this.phpSrcMysqli+="\n\tarray_push(" + _getArrayName + ", $row);";
                                    this.phpSrcMysqli+="\n}";
                                } // if

                                //console.log(this.phpSrcHTTP);
                                
                                //eval(this.jsExecAjax[0]);
                                //console.dir(this.jsExecAjax);
                                
                                return this;
                            }, // fetchQuery
                            setFinalEcho: function(str) {
                                this.phpSrcEcho+="\n"+str;
                                return this;
                            },
                            
                            
                             jsExecAjaxStarter: function() {
                                //alert("reached!");
                                requestLine = this.requestLine;
                                cbInternalDone = this.cbInternalDone;
                                if(Rapid.ihelpers.listeners[requestLine].jsExecAjax.length>0) {
                                   console.info("Your php code would be:");
                                   var str = Rapid.ihelpers.listeners[requestLine].phpSrcInitScope + Rapid.ihelpers.listeners[requestLine].phpSrcMysqli + Rapid.ihelpers.listeners[requestLine].phpSrcEcho;
                                   console.log(str);
                                   eval(Rapid.ihelpers.listeners[requestLine].jsExecAjax[0]);
                                } else {
                                    // has been handled earlier in the stack
                                }
                            }, // jsExecAjaxStart

                            runFinalEcho: function() {
                                var curRequest = Rapid.ihelpers.listeners[requestLine];
                                var rsObj = {};
                                var cbClientDone = curRequest.cbClientDone;

                                for(index in curRequest.responseHolderKeys) {
                                    if(curRequest.responseHolderKeys[index].length!=0) {
                                        console.log(curRequest.responseHolderVals[index]);
                                        eval("$.extend(rsObj, {" + curRequest.responseHolderKeys[index] + ": " + curRequest.responseHolderVals[index] + "});");
                                    } // if
                                } // for
                                // rsObj values
                                var requestLine_arr = curRequest.requestLine.split(" ");
                                var method = requestLine_arr[0].toUpperCase(); // VALUE: GET
                                //-

                                if(typeof this.testingChain=='undefined')
                                    $.post(Rapid.backend.ihelpers.path, {rapidKey: Rapid.backend.ihelpers.rapidKey, 
                                                                         rapidEcho: curRequest.phpSrcEcho, 
                                                                         rapidMethod: method, 
                                                                         rapidParams: typeof curRequest.curParams=="object"?JSON.stringify(curRequest.curParams):JSON.stringify({"_error":"Can't echo a method without parameters."}), 
                                                                         rapidMultiFetchAssocs: $.isEmptyObject(rsObj)?"":rsObj})
                                        .done(function(data) { 
                                            if(curRequest.jsExecAjax.length>0)
                                                console.info("Emulated Server -> Actual Database -> Echo -> Ajax Done Callback:"); 
                                            else
                                                console.info("Emulated Server -> Echo -> Ajax Done Callback:"); 
                                            cbClientDone(data); 
                                    }); // done
                            }, // runFinalEcho
                            
                            run: function() {
                                var requestLine = "POST null";
                                var params = arguments.length && typeof arguments[0]=="object" ? arguments[0] : {};
                                console.dir(params);
                                if(this.requestLine!="POST null") {
                                    console.error("Rapid.backend.Chain: Do not chain the run function to a regular Chain. Run should receive optional parameter object and be chained to a Test Chain. Regular Chain needs to be passed to ilisten so that it is ready to run the backend chain when iajax triggers it.");
                                    return this;
                                }
                                else if(!this.phpSrcMysqli.length) {
                                    console.error("Rapid.backend.testChain: You must perform a valid execQuery or a fetchQuery for testChain.");
                                    return this;    
                                }
                                
                                //Rapid.ihelpers.listeners[requestLine] = this;
                                this.curParams=params;
                                //this.cbInternalDone=cbInternalDone;
                                //this.cbClientDone=cbClientDone;
                                var jsExecAjaxStart = this.jsExecAjax;
                                Rapid.ihelpers.listeners[requestLine] = this;
                                if(jsExecAjaxStart.length>0) { // start async sequence over at ilisten
                                    this.jsExecAjaxStarter();
                                } else { // no ajax response over at ilisten so just echo manually
                                    this.runFinalEcho();
                                }
                            } // run if not waiting for iajax (doing a testChain)
                          }; // return 
                        }, // ChainBuilder with implicit build                
                ihelpers: {
                  path: "", // path to backend with access to mysql database
                  rapidKey: "" // the password that grants access to backend
                },
                db: function(path, rapidKey) {
                    //eg. path = "../sandbox/rapid/js/rapid-backend.php"
                    
                    if(arguments.length!=2 || typeof arguments[0]!= "string" || typeof arguments[1]!= "string") {
                        console.error('Rapid.backend.db: Must pass a string path of the backend config file and a string access key that matches rapidKey defined in the backend config file. Eg. Rapid.backend.db(\"some-folder/rapid-backend-or-some-other-filename.php\", \"your-configured-password\")');
                        return false;
                    } // if
                    
                    try {
                        $.post(path, {rapidKey: rapidKey, authenticating: true})
                            .done(function(data) {
                                if(!Rapid.ihelpers.validateResponse("Rapid.backend.db", data)) return false;
                                if(typeof JSON.parse(data).authenticated!='undefined') {
                                    Rapid.backend.ihelpers.path=path;
                                    Rapid.backend.ihelpers.rapidKey=rapidKey;
                                    console.info("Rapid.idb: " + JSON.parse(data).status);
                                    console.info("Your php code would be: " + JSON.parse(data).phpSrc);
                                } else {
                                    console.error("Rapid.idb: " + JSON.parse(data).status);
                                    return true;
                                }
                                    
                            }) // done
                            .fail(function() {
                                console.error("Rapid.idb: Can't authenticate. Path to backend file is probably incorrect.");
                                return false;
                            });
                    } catch (e) {
                            if(e instanceof SyntaxError) {
                                console.error("Rapid.idb: Can't authenticate. Path to backend file is probably incorrect.");
                                return false;
                            }
                    } // catch
                }
            },
            ilisten: function() {
                function error_bad_chain() {
                    console.error("Chain object instructs how the backend is emulated. You can initiate variables before calling database or outputting, then call mysqli (the db is live), and echo the results. Or you can choose not to call mysqli and just echo fake mock data. But you must always set the final echo.\n Example:%c\nRapid.ilisten(Rapid.backend.Chain(\"GET /some-path/\").initScope(\"$arr=array();\").fetchQuery({arr0:/\"SELECT * FROM tbl WHERE col1='\" . mysqli_real_escape_string($POST[\"var\"]) . \"' LIMIT 5;\"/}).execQuery(/\"another-sql-query-in-reg-exp-here\"/).setFinalEcho(\"echo json_encode($arr1);\"));", "font-style:italic;");
                } // error_bad_chain
                
                // Validation
                if(arguments.length==0) {
                    console.error("Rapid.ilisten: Missing first parameter. You need to pass 'METHOD uri' to disable an active listener or a Chain object to enable one. For example, 'GET list/'.");
                    error_bad_chain()
                    return;
                }
                
                //Listener unsetting
                if(typeof arguments[0] == "string") {
                    var requestLine = arguments[0];
                    
                    //Validation
                    if(!Rapid.ihelpers.validateRequestLine("Rapid.ilisten", requestLine)) return;

                    //Unset
                    if(typeof Rapid.ihelpers.listeners[requestLine]!='undefined') {
                        delete Rapid.ihelpers.listeners[requestLine];
                        console.info("Rapid.ilisten: Listener unset. Iajax requests to this URI will be made to external pages.");
                        return;
                    } else {
                        console.error("Rapid.ilisten: You tried disabling a listener that does not exist. Enable a listener by passing a Chain object.");
                        error_bad_chain();
                        return;
                    }
                    
                    return;
                } // if
                
                
                //Going down chain with error
                if(typeof arguments[0].testingChain!='undefined') {
                    console.error("Rapid.backend.ilisten: A test chain does not belong to ilisten because you are not listening for iajax to perform a backend chain. The purpose of test chain is to validate your query code without the boilerplate of a regular Chain with ilisten. Just run it standalone and finish the chain with .run(). Eg. (Rapid.backend.testChain()).fetchQuery({results:/\"SELECT * FROM tbl1 LIMIT 5\"}).run();");
                    return null;
                }
                
                if(typeof arguments[0]._error!='undefined') {
                    return this;
                }
                var phpSrcEcho = arguments[0].phpSrcEcho;
                if(phpSrcEcho.length==0) {
                    console.error("Rapid.backend.Chain's fetchQuery/execQuery: You did not instruct the chain on what to output from the server PHP. Iajax will call the request line supplied to it without rerouting to an emulated backend.");     
                    error_bad_chain();
                    return;
                }
                
                var requestLine = arguments[0].requestLine;
                Rapid.ihelpers.listeners[requestLine] = {};
                $.extend(true, Rapid.ihelpers.listeners[requestLine], arguments[0]); // ChainBuilder returns an object representing JS and PHP code 
                
                console.info("Rapid.ilisten: Listener set.\nIajax requests will be made to your chain of emulated backend code.\nTo unset, pass the same request line to ilisten.");
                    
            }, // ilisten
            iscript: function(src) {
                //Because jQuery's ajax overrides arguments
                var argsParent = arguments;
                
                //Call jQuery ajax
                $.get(src, {cacheBuster: $.now()})
                    .done(function(data) {
                        //if(!Rapid.ihelpers.validateResponse("Rapid.iscript", data)) return;
                        console.group("Called script at " + src);
                        console.dir({script:data});
                    
                        //console.dir(argsParent);
                        var strExtra="";
                        if(argsParent.length>1) {
                          for(var i = 1; i<argsParent.length; i++) {
                            strExtra += "\n" + argsParent[i];
                          } // for
                        } // if

                    
                        $("head").append("<script>" + data + strExtra + "</script>");
                    
                        //eval is not worth it because a lack of error messages
                        /*var ret = eval(data);
                        if(typeof ret!=="undefined")
                            console.info("Returned " + typeof ret + ": " + ret);*/
                    
                        console.groupEnd(); 
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                                console.log("Rapid.iscript:" + textStatus + " with " + errorThrown);
                                //console.log("Rapid.iscript: Error", jqXHR);
                    });
            },
            stories: {
                helpers: {
                    showStoryAndTooltip: function(input, story) {
                        var arr = []; 
                        if(typeof story=="string") arr.push(story);
                        story = arr;
        
                        if(typeof window.showing[input]=='undefined') {
                            $('[data-toggle="tooltip"][data-onKey="' + input + '"]').each(function() {
                            $(window).scrollTop(Math.floor($('[data-onKey=' + input + ']').offset().top));
                            if(typeof $(this).data("story-detail")!='undefined') $(this).tooltip("enable");
                            $(this).trigger('mouseenter'); });
                            console.log.apply(console, story);
                            window.showing[input]="";
                        } else {
                            $('[data-toggle="tooltip"][data-onKey="' + input + '"]').each(function() {
                            if(typeof $(this).data("story-detail")!='undefined') $(this).tooltip("disable");
                            $(this).trigger('mouseout'); });
                            delete window.showing[input];
                        } // else
                    }, // showStoryAndTooltip    
                }, // stories helpers
                array: []
            }, // stories
            bootstrap: {
                lgCSS: "",
                mdCSS: "",
                smCSS: "",
                xsCSS: "",
                lgJS: function() {},
                mdJS: function() {},
                smJS: function() {},
                xsJS: function() {},
                gridlines: false,
                status: false,
                nestedWarning: true,
                helpers: {
                    htmlCount: 0,
                    pollNested: function() {
                        $(".row").each(function() {
                            if($(this).hasClass("rapid-bootstrap-nested")) return;
                            else if($(this).find(".row").length) {
                                console.error("Rapid: Found nested .row. Most likely you wanted to nest columns inside a column. Nesting rows inside a row could cause unpredictable results like the container being off center or taking more than full width. If you know what you are doing and the nesting was intentional, add a .rapid-bootstrap-nested to the parent row. To disable all future warnings on the webpage, there is a Rapid bootstrap option for that, nestedWarning:false. Eg. Rapid.options({bootstrap:{nestedWarning:false}});", $(this)[0]);
                            }
                        }); // check each row  
                    },
                    pollRearrange: function() {
                        
                        // First, if given bootstrap CSS media query options, then insert the style block
                        if((Rapid.bootstrap.xsCSS+Rapid.bootstrap.smCSS+Rapid.bootstrap.mdCSS+Rapid.bootstrap.lgCSS).length) {
                            var reinsertCSS = "\n@media (max-width: 767px) {\n" + Rapid.bootstrap.xsCSS + "\n}\n";
                            reinsertCSS += "@media (min-width: 768px) {\n" + Rapid.bootstrap.smCSS + "\n}\n";
                            reinsertCSS += "@media (min-width: 992px) {\n" + Rapid.bootstrap.mdCSS + "\n}\n";
                            reinsertCSS += "@media (min-width: 1200px) {\n" + Rapid.bootstrap.lgCSS + "\n}\n";

                            if(reinsertCSS.indexOf("!important")!=-1) {
                                console.error("Rapid bootstrap options: Bootstrap restyling aborted. Do not add !important to xsCSS, smCSS, mdCSS, or lgCSS!");
                                return;
                            }
                            reinsertCSS = reinsertCSS.replace(new RegExp(";", "ig"), "!important;"); //prevents inline styles from being more important than css media queries
                            $("#rapid-bootstrap-css-media-queries").remove();
                            $("<style id='rapid-bootstrap-css-media-queries' type='text/css'>" + reinsertCSS + "</style>").appendTo("head");
                        }
                        
                        //Then JS because there may be alerts blocking the layout change
                        if($("#rapid-lg").css("display")=="block")
                            Rapid.bootstrap.lgJS();
                        else if($("#rapid-md").css("display")=="block")
                            Rapid.bootstrap.mdJS();
                        else if($("#rapid-sm").css("display")=="block")
                            Rapid.bootstrap.smJS();
                        else if($("#rapid-xs").css("display")=="block")
                            Rapid.bootstrap.xsJS();
                    } // pollRearrange
                } // helpers
            }, //bootstrap defaults
            options: function(obj) { 
                if(typeof Rapid=="undefined") console.error("Rapid: Please set options on DOM ready or windows loaded. Options ignored.");
                var script = "";
                $.extend(true, Rapid, obj);
                      
                for (var key in obj) {
                      if(key=="stories")
                          script+="initSM(); ";
                      else if(key=="bootstrap")
                          script+="initB(); ";
                } // for
                if(script.length>0) eval(script);
            } // options
    }); // extend

    //S-2. Global namespace
    if(typeof global=='undefined') var global = window;

    //S-3. Controllers
    var countScript=-1, countAsync=-1, elAsync = []; // next script
    var always=0, alwaysMax=0; // $.get(...).always(...)
    function initS() {
        var scripts = [], scripts2 = [];
        //global.scripts = scripts;
        //Rapid.watchArr("global.scripts", true);
        
        //Notes are only for developer eyes in development environment:
        $("[data-notes],[data-note]").removeAttr("data-notes").removeAttr("data-note");

        //A:
        $("[data-onloader-a]").each(function() {
            if(typeof $(this).attr("data-async-id")!='undefined') return;
            filename=$(this).data("onloader-a");
            alwaysMax++;
            elAsync.push($(this));
            $.get(filename+(Rapid.toggle.cache?"?v="+$.now():""), function(data) { 
                countAsync = ++countAsync;
                elAsync[countAsync].attr("data-async-id", countAsync);  
                data = data.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-async-id=' + countAsync + ']");\n');
                //console.log(data);
                scripts.push('\nvar _ori = $("[data-async-id=' + countAsync + ']");\n'+data);
                always++;
                }, "text");
        });
        $("[data-onload-a]").each(function() {
            if(typeof $(this).attr("data-script-id")!='undefined') return;
            code=$(this).data("onload-a");
            countScript++;
            $(this).attr("data-script-id", countScript);
            code = code.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-script-id=' + countScript + ']");\n');
            scripts.push('\nvar _ori = $("[data-script-id=' + countScript + ']");\n'+code);
        });

        
        //B:
        $("[data-onloader-b]").each(function() {
            if(typeof $(this).attr("data-async-id")!='undefined') return;
            filename=$(this).data("onloader-b");
            alwaysMax++;
            elAsync.push($(this));
            $.get(filename+(Rapid.toggle.cache?"?v="+$.now():""), function(data) { 
                countAsync = ++countAsync;
                elAsync[countAsync].attr("data-async-id", countAsync);  
                data = data.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-async-id=' + countAsync + ']");\n');
                //console.log(data);
                scripts.push('\nvar _ori = $("[data-async-id=' + countAsync + ']");\n'+data);
                always++;
                }, "text");
        });
        $("[data-onload-b]").each(function() {
            if(typeof $(this).attr("data-script-id")!='undefined') return;
            code=$(this).data("onload-b");
            countScript++;
            $(this).attr("data-script-id", countScript);
            code = code.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-script-id=' + countScript + ']");\n');
            scripts.push('\nvar _ori = $("[data-script-id=' + countScript + ']");\n'+code);
        });

        
        //C:
        $("[data-onloader-c]").each(function() {
            if(typeof $(this).attr("data-async-id")!='undefined') return;
            filename=$(this).data("onloader-c");
            alwaysMax++;
            elAsync.push($(this));
            $.get(filename+(Rapid.toggle.cache?"?v="+$.now():""), function(data) { 
                countAsync = ++countAsync;
                elAsync[countAsync].attr("data-async-id", countAsync);  
                data = data.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-async-id=' + countAsync + ']");\n');
                //console.log(data);
                scripts.push('\nvar _ori = $("[data-async-id=' + countAsync + ']");\n'+data);
                always++;
                }, "text");
        });
        $("[data-onload-c]").each(function() {
            if(typeof $(this).attr("data-script-id")!='undefined') return;
            code=$(this).data("onload-c");
            countScript++;
            $(this).attr("data-script-id", countScript);
            code = code.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-script-id=' + countScript + ']");\n');
            scripts.push('\nvar _ori = $("[data-script-id=' + countScript + ']");\n'+code);
        });

        
        //D:
        $("[data-onloader-d]").each(function() {
            if(typeof $(this).attr("data-async-id")!='undefined') return;
            filename=$(this).data("onloader-d");
            alwaysMax++;
            elAsync.push($(this));
            $.get(filename+(Rapid.toggle.cache?"?v="+$.now():""), function(data) { 
                countAsync = ++countAsync;
                elAsync[countAsync].attr("data-async-id", countAsync);  
                data = data.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-async-id=' + countAsync + ']");\n');
                //console.log(data);
                scripts.push('\nvar _ori = $("[data-async-id=' + countAsync + ']");\n'+data);
                always++;
                }, "text");
        });
        $("[data-onload-d]").each(function() {
            if(typeof $(this).attr("data-script-id")!='undefined') return;
            code=$(this).data("onload-d");
            countScript++;
            $(this).attr("data-script-id", countScript);
            code = code.replace(new RegExp("\\)[\s\n\r ]*\\{"), ') {\nvar _ori=$("[data-script-id=' + countScript + ']");\n');
            scripts.push('\nvar _ori = $("[data-script-id=' + countScript + ']");\n'+code);
        });
                            
        //S-4. Jquery has deprecated async, so let's mock async:
        var intvI = setInterval(function() {
            if(always==alwaysMax) {
                var str="";
                $.each(scripts, function(i, v) { str+=v; });
                $('<script>' + str + '</script>').appendTo("head");
                //console.dir(scripts);
                //console.log("Running I");
                clearInterval(intvI);
                scripts=[];
            }
            }, 1);
        
        //S-5. The onclick, data-onclick, data-onclicker:
        
        //Desc: Keep _ori use consistent in onclick too
        $("[onclick]").each(function() {
            $(this).attr("onclick", "var _ori = $(this); "+$(this).attr("onclick"));
        });
        
        //Desc: Keep data- convention consistent. May interchangeably use onclick or data-onclick
        $("[data-onclick]").each(function() {
            eval('$(this).click(function() { ' + $(this).data("onclick") + '});');
            $(this).removeAttr("data-onclick");
        });
         
        //Desc: data-onclicker refers to external script
        $("[data-onclicker]").each(function() {
            if(typeof $(this).attr("data-async-id")!='undefined') return;
            filename=$(this).data("onclicker");
            alwaysMax++;
            elAsync.push($(this));
            $.get(filename+(Rapid.toggle.cache?"?v="+$.now():""), function(data) {
                countAsync = ++countAsync;
                elAsync[countAsync].attr("data-async-id", countAsync); 
                //console.log(data);
                scripts2.push('\n$("[data-async-id=' + countAsync + ']").click(function() {\nvar _ori=$("[data-async-id=' + countAsync + ']");\n' + data + '});');
                always++;
            }, "text");
        });  
        
        var intvJ = setInterval(function() {
            if(always==alwaysMax) {
                var str="";
                $.each(scripts2, function(i, v) { str+=v; });
                $('<script>' + str + '</script>').appendTo("head");
                //console.log("Running J");
                //console.dir(scripts2);
                clearInterval(intvJ);
                scripts2=[];
            }
            }, 1); 
        
    } //initS

    /**
    * PLACEHOLDERS
    * Placeholders of sections and elements for quick wireframing. Colored, labeled, and choice of rectangle/circle.
    * If you dynamically loaded new elements, their placeholders may need to be re-initialized calling initP().
    * ---------------------------------------------------------------------------------------------------------------
    * Best practices: 
    *     -You initiate a placeholder with either a data-rect or data-circ attribute.
    *     -It will fill to the width and height of the div or element.
    *     -All settings are optional. Just include or exclude that particular JSON key/value.
    *     -The placeholder will use the default settings if you don't set them (E.g. gray placeholder).
    *
    */
    
    function initP() {
        //for plain placeholders, that's based on bundle.css
        
        //for fully customizable placeholders
        $("[data-rect]").each(function () {
            var json=typeof $(this).data("rect")!='undefined'?$(this).data("rect"):{};
            if(typeof json.font=='undefined') json.font = "16px Helvetica";
            if(typeof json.top=='undefined') json.top = ($(this).height()/2 + parseInt(json.font.replace(/[^\d]/g, ''))/2).toString() + "px";
            rect = $("<canvas width=" + $(this).width() + " height= " + $(this).height() + ">HTML5 Unsupported</canvas>").appendTo($(this));
            context = rect[0].getContext("2d");
            context.fillStyle = typeof json.bgcolor=='undefined'?'#efefef':json.bgcolor;
            context.fillRect(0, 0, $(this).width(), $(this).height());
            context.fillStyle = typeof json.color=='undefined'?'#000':json.color;
            context.font = json.font; // defaultable font
            if(typeof json.align=='undefined' || json.align=="center") {
                context.textAlign = "center";
                context.fillText(typeof json.title=='undefined'?'':json.title, $(this).width()/2, parseInt(json.top.replace("px", ""))); // defaultable top
            } else if(json.align=="left") { 
                context.textAlign = json.align;
                context.fillText(typeof json.title=='undefined'?'':json.title, 0, parseInt(json.top.replace("px", ""))); // defaultable top
            } else if(json.align=="right") { 
                context.textAlign = json.align;
                context.fillText(typeof json.title=='undefined'?'':json.title, $(this).width(), parseInt(json.top.replace("px", ""))); // defaultable top
            } // else
        });


        $("[data-circ]").each(function () {
            var json=typeof $(this).data("circ")!='undefined'?$(this).data("circ"):{};
            if(typeof json.font=='undefined') json.font = "16px Helvetica";
            if(typeof json.top=='undefined') json.top = ($(this).height()/2 + parseInt(json.font.replace(/[^\d]/g, ''))/2).toString() + "px";
            rect = $("<canvas width=" + $(this).width() + " height= " + $(this).height() + ">HTML5 Unsupported</canvas>").appendTo($(this));
            context = rect[0].getContext("2d");
            context.fillStyle = typeof json.bgcolor=='undefined'?'#efefef':json.bgcolor;
            context.arc($(this).width() / 2, $(this).width() / 2, $(this).width() / 2, 0, 2 * Math.PI);
            context.fill();
            context.fillStyle = typeof json.color=='undefined'?'#000':json.color;
            context.font = json.font; // defaultable font
            if(typeof json.align=='undefined' || json.align=="center") {
                context.textAlign = "center";
                context.fillText(typeof json.title=='undefined'?'':json.title, $(this).width()/2, parseInt(json.top.replace("px", ""))); // defaultable top
            } else if(json.align=="left") { 
                context.textAlign = json.align;
                context.fillText(typeof json.title=='undefined'?'':json.title, 0, parseInt(json.top.replace("px", ""))); // defaultable top
            } else if(json.align=="right") { 
                context.textAlign = json.align;
                context.fillText(typeof json.title=='undefined'?'':json.title, $(this).width(), parseInt(json.top.replace("px", ""))); // defaultable top
            } // else
        });
    } // initP
        
    /**
    * TOOLTIPS
    * A bubble with info appears when moving mouse cursor over element. Or when in Story 
    * Mode, it appears when pressing the key binded to it. The tooltip also has customizable 
    * background color and font color. It also has icons that indicate to-do tasks or bugs.
    * If you dynamically loaded new elements, their placeholders may need to be re-initialized 
    * calling initT().
    * ------------------------------------------------------------------------------------------
    * Best practices: 
    *     -To add a mouseover tooltip to an element, use: data-detail.
    *     -Add icons into the tooltip with _BUG_, _TODO_, etc.
    *     -Newlines and tabs with \n abd \t.
    *     -When customizing bgcolor or color, use full words for color such
    *      as: blue. Avoid using Hex, RGB, and RGBA. This limitation is only 
    *      for tooltips (OK in placeholders).
    *     -If you want the tooltip to appear in Story Mode only, use: 
    *      data-story-detail.
    *     -The tooltip can be used as a to-do list for developers, listing requirements of the
    *      user, the website and/or the system (anything other than the user such as the app or
    *      website frontend, database, JS code, PHP code, etc), the flow of data (what info 
    *      is received, any intermediate variables, and the final data that gets used), the 
    *      RESTful API's request method and URI, the JSON data from/to API, the HTML5 data 
    *      attributes (if used to store info on client side), the HTML element's presentation 
    *      of any data, events (onclick, onmouseover, etc), and poll (aka setInterval).
    *      Eg.
    *      *TO DO*\n_DONE_USER: Sees list of clickable addresses.\n_TODO_SYSTEM: \n\t_num1_Load 
    *      list of home addresses.\n\t_DONE__num2_Mark home addresses that are sold within 5 years
    *      of putting on market\n_TODO_DATA-FLOW: inputs -> intermediates -> outputs\n_DONE_API: 
    *      GET /addresses/\n_TODO_DATA-JSON:...\n_DONE_DATA-ATTR: data-addresses-count\n_TODO_DATA-VIEW:
    *      ...\n_DONE_EVENTS: None.\n_TODO_POLL: every 1 sec
    *
    */    

    function initT() {
        $("[data-detail], [data-story-detail]").each(function (i) {
            var tip;
            if(typeof $(this).data("detail")!='undefined') tip = $(this).data("detail");
            else tip = $(this).data("story-detail");
            //console.log(tip);

        if($("#rapid-hidden").length==0) $('<div id="rapid-hidden" style="display:none;"></div>').appendTo("body");
            if($("#rapid-hidden").length==0) $('<div id="rapid-hidden" style="display:none;"></div>').appendTo("body");
            var strTitle = tip.title;
            if(tip.title.indexOf("_")!=-1) 
                strTitle = 
                    tip.title.replace(/_todo_/g, $("#rapid-hidden").html("&#x274f;").text())
                    .replace(/_TODO_/g, $("#rapid-hidden").html("&#x25a2;").text())
                    .replace(/_done_/g, $("#rapid-hidden").html("&#x9745;").text())
                    .replace(/_DONE_/g, $("#rapid-hidden").html("&#10004;").text())
                    .replace(/_skipped_/g, $("#rapid-hidden").html("&#x2612;").text())
                    .replace(/_SKIPPED_/g, $("#rapid-hidden").html("&#x2718;").text())
                    .replace(/_bug_/g, $("#rapid-hidden").html("&#x1f50e;").text())
                    .replace(/_BUG_/g, $("#rapid-hidden").html("&#x1f41e;").text())
                    .replace(/_point_/g, $("#rapid-hidden").html("&#x261B;").text())
                    .replace(/_POINT_/g, $("#rapid-hidden").html("&#x261E;").text())
                    .replace(/_stop_/g, $("#rapid-hidden").html("&#x270b;").text())
                    .replace(/_walk_/g, $("#rapid-hidden").html("&#x1f6b6;").text())
                    .replace(/_run_/g, $("#rapid-hidden").html("&#x1f3c3;").text())
                    .replace(/_biceps_/g, $("#rapid-hidden").html("&#x1f4aa;").text())
                    .replace(/_scissor_/g, $("#rapid-hidden").html("&#x2702;").text())
                    .replace(/_SCISSOR_/g, $("#rapid-hidden").html("&#x2704;").text())
                    .replace(/_phone_/g, $("#rapid-hidden").html("&#x2706;").text())
                    .replace(/_airplane_/g, $("#rapid-hidden").html("&#x2708;").text())
                    .replace(/_letter_/g, $("#rapid-hidden").html("&#x2709;").text())
                    .replace(/_edit_/g, $("#rapid-hidden").html("&#x270D;").text())
                    .replace(/_EDIT_/g, $("#rapid-hidden").html("&#x270E;").text())
                    .replace(/_check_/g, $("#rapid-hidden").html("&#x2713;").text())
                    .replace(/_CHECK_/g, $("#rapid-hidden").html("&#x2714;").text())
                    .replace(/_x_/g, $("#rapid-hidden").html("&#x2715;").text())
                    .replace(/_X_/g, $("#rapid-hidden").html("&#x2716;").text())
                    .replace(/_ix_/g, $("#rapid-hidden").html("&#x2717;").text())
                    .replace(/_IX_/g, $("#rapid-hidden").html("&#x2718;").text())
                    .replace(/_spokes_/g, $("#rapid-hidden").html("&#x2722;").text())
                    .replace(/_SPOKES_/g, $("#rapid-hidden").html("&#x2723;").text())
                    .replace(/_bspokes_/g, $("#rapid-hidden").html("&#x2724;").text())
                    .replace(/_BSPOKES_/g, $("#rapid-hidden").html("&#x2725;").text())
                    .replace(/_ninja_/g, $("#rapid-hidden").html("&#x2726;").text())
                    .replace(/_NINJA_/g, $("#rapid-hidden").html("&#x2727;").text())
                    .replace(/_star1_/g, $("#rapid-hidden").html("&#x2729;").text())
                    .replace(/_star2_/g, $("#rapid-hidden").html("&#x272A;").text())
                    .replace(/_star3_/g, $("#rapid-hidden").html("&#x272B;").text())
                    .replace(/_star4_/g, $("#rapid-hidden").html("&#x272C;").text())
                    .replace(/_star5_/g, $("#rapid-hidden").html("&#x272D;").text())
                    .replace(/_star6_/g, $("#rapid-hidden").html("&#x272E;").text())
                    .replace(/_star7_/g, $("#rapid-hidden").html("&#x272F;").text())
                    .replace(/_star8_/g, $("#rapid-hidden").html("&#x2730;").text())
                    .replace(/_star9_/g, $("#rapid-hidden").html("&#x2739;").text())
                    .replace(/_ASTER_/g, $("#rapid-hidden").html("&#x273D;").text())
                    .replace(/_aster_/g, $("#rapid-hidden").html("&#x274B;").text())
                    .replace(/_biohazard_/g, $("#rapid-hidden").html("&#x2756;").text())
                    .replace(/_Num1_/g, $("#rapid-hidden").html("&#x2776;").text())
                    .replace(/_Num2_/g, $("#rapid-hidden").html("&#x2777;").text())
                    .replace(/_Num3_/g, $("#rapid-hidden").html("&#x2778;").text())
                    .replace(/_Num4_/g, $("#rapid-hidden").html("&#x2779;").text())
                    .replace(/_Num5_/g, $("#rapid-hidden").html("&#x277A;").text())
                    .replace(/_Num6_/g, $("#rapid-hidden").html("&#x277B;").text())
                    .replace(/_Num7_/g, $("#rapid-hidden").html("&#x277C;").text())
                    .replace(/_Num8_/g, $("#rapid-hidden").html("&#x277D;").text())
                    .replace(/_Num9_/g, $("#rapid-hidden").html("&#x277E;").text())
                    .replace(/_Num0_/g, $("#rapid-hidden").html("&#x277F;").text())
                    .replace(/_NUM1_/g, $("#rapid-hidden").html("&#x2780;").text())
                    .replace(/_NUM2_/g, $("#rapid-hidden").html("&#x2781;").text())
                    .replace(/_NUM3_/g, $("#rapid-hidden").html("&#x2782;").text())
                    .replace(/_NUM4_/g, $("#rapid-hidden").html("&#x2783;").text())
                    .replace(/_NUM5_/g, $("#rapid-hidden").html("&#x2784;").text())
                    .replace(/_NUM6_/g, $("#rapid-hidden").html("&#x2785;").text())
                    .replace(/_NUM7_/g, $("#rapid-hidden").html("&#x2786;").text())
                    .replace(/_NUM8_/g, $("#rapid-hidden").html("&#x2787;").text())
                    .replace(/_NUM9_/g, $("#rapid-hidden").html("&#x2788;").text())
                    .replace(/_NUM0_/g, $("#rapid-hidden").html("&#x2789;").text())
                    .replace(/_num1_/g, $("#rapid-hidden").html("&#x278A;").text())
                    .replace(/_num2_/g, $("#rapid-hidden").html("&#x278B;").text())
                    .replace(/_num3_/g, $("#rapid-hidden").html("&#x278C;").text())
                    .replace(/_num4_/g, $("#rapid-hidden").html("&#x278D;").text())
                    .replace(/_num5_/g, $("#rapid-hidden").html("&#x278E;").text())
                    .replace(/_num6_/g, $("#rapid-hidden").html("&#x278F;").text())
                    .replace(/_num7_/g, $("#rapid-hidden").html("&#x2790;").text())
                    .replace(/_num8_/g, $("#rapid-hidden").html("&#x2791;").text())
                    .replace(/_num9_/g, $("#rapid-hidden").html("&#x2792;").text())
                    .replace(/_num0_/g, $("#rapid-hidden").html("&#x2793;").text())
                    .replace(/_lock_/g, $("#rapid-hidden").html("&#x1f513;").text())
                    .replace(/_LOCK_/g, $("#rapid-hidden").html("&#x1f512;").text())
                    .replace(/_diamond_/g, $("#rapid-hidden").html("&#x25c6").text())
                    .replace(/_DIAMOND_/g, $("#rapid-hidden").html("&#x25c7;").text())
                    .replace(/_sparks_/g, $("#rapid-hidden").html("&#x2728;").text())
                    .replace(/_loop_/g, $("#rapid-hidden").html("&#x27BF;").text())
                    .replace(/_lefthalf_/g, $("#rapid-hidden").html("&#x25E7;").text())
                    .replace(/_righthalf_/g, $("#rapid-hidden").html("&#x25E8;").text())
                    .replace(/_tlhalf_/g, $("#rapid-hidden").html("&#x25E9;").text())
                    .replace(/_brhalf_/g, $("#rapid-hidden").html("&#x25EA;").text())
                    .replace(/_tlcorner_/g, $("#rapid-hidden").html("&#x25F0;").text())
                    .replace(/_blcorner_/g, $("#rapid-hidden").html("&#x25F1;").text())
                    .replace(/_brcorner_/g, $("#rapid-hidden").html("&#x25F2;").text())
                    .replace(/_trcorner_/g, $("#rapid-hidden").html("&#x25F3;").text())
                    .replace(/_clock_/g, $("#rapid-hidden").html("&#x1f550;").text())
                    .replace(/_CLOCK_/g, $("#rapid-hidden").html("&#x23f0;").text())
                    .replace(/_rdquo_/g, $("#rapid-hidden").html("&#x8221;").text())
                    .replace(/_ldquo_/g, $("#rapid-hidden").html("&#x8220;").text())
                    .replace(/_rsquo_/g, $("#rapid-hidden").html("&#x2019;").text())
                    .replace(/_lsquo_/g, $("#rapid-hidden").html("&#x2018;").text())
                    .replace(/_lsaquo_/g, $("#rapid-hidden").html("&#x2039;").text())
                    .replace(/_rsaquo_/g, $("#rapid-hidden").html("&#x203A;").text())
                    .replace(/_laquo_/g, $("#rapid-hidden").html("&#xAB;").text())
                    .replace(/_raquo_/g, $("#rapid-hidden").html("&#xBB;").text())
                    .replace(/_ldaquo_/g, $("#rapid-hidden").html("&#xAB;").text())
                    .replace(/_rdaquo_/g, $("#rapid-hidden").html("&#xBB;").text())
                    .replace(/_dash_/g, $("#rapid-hidden").html("&#x2013;").text())
                    .replace(/_DASH_/g, $("#rapid-hidden").html("&#x2014;").text())
                    .replace(/_circle_/g, $("#rapid-hidden").html("&#x2022;").text())
                    .replace(/_CIRCLE_/g, $("#rapid-hidden").html("&#x25CB;").text())
                    .replace(/_triang_/g, $("#rapid-hidden").html("&#x2023;").text())
                    .replace(/_TRIANG_/g, $("#rapid-hidden").html("&#x25B9;").text())
                    .replace(/_square_/g, $("#rapid-hidden").html("&#x25A0;").text())
                    .replace(/_SQUARE_/g, $("#rapid-hidden").html("&#x25A1;").text())
                    .replace(/_point0_/g, $("#rapid-hidden").html("&#x27A7;").text())
                    .replace(/_point1_/g, $("#rapid-hidden").html("&#x279B;").text())
                    .replace(/_point2_/g, $("#rapid-hidden").html("&#x279D;").text())
                    .replace(/_point3_/g, $("#rapid-hidden").html("&#x2799;").text())
                    .replace(/_point4_/g, $("#rapid-hidden").html("&#x279E;").text())
                    .replace(/_point5_/g, $("#rapid-hidden").html("&#x2794;").text())
                    .replace(/_point6_/g, $("#rapid-hidden").html("&#x279C;").text())
                    .replace(/_point7_/g, $("#rapid-hidden").html("&#x27A1;").text())
                    .replace(/_point8_/g, $("#rapid-hidden").html("&#x27A8;").text())
                    .replace(/_point9_/g, $("#rapid-hidden").html("&#x27B2;").text())
                    .replace(/_trends_/g, $("#rapid-hidden").html("&#x219D;").text())
                    .replace(/_spoint1_/g, $("#rapid-hidden").html("&#x21A6;").text())
                    .replace(/_spoint2_/g, $("#rapid-hidden").html("&#x21A3;").text())
                    .replace(/_spoint3_/g, $("#rapid-hidden").html("&#x21A0;").text())
                    .replace(/_spoint4_/g, $("#rapid-hidden").html("&#x27B3;").text())
                    .replace(/_spoint5_/g, $("#rapid-hidden").html("&#x27B8;").text())
                    .replace(/_spoint6_/g, $("#rapid-hidden").html("&#x27BC;").text())
                    .replace(/_spoint7_/g, $("#rapid-hidden").html("&#x27BD;").text())
                    .replace(/_spoint8_/g, $("#rapid-hidden").html("&#x27B5;").text())
                    .replace(/_spoint9_/g, $("#rapid-hidden").html("&#x27BB;").text())
                    .replace(/_3darrowhead_/g, $("#rapid-hidden").html("&#x27A2;").text())
                    .replace(/_3DARROWHEAD_/g, $("#rapid-hidden").html("&#x27A3;").text())
                    .replace(/_arrowhead_/g, $("#rapid-hidden").html("&#x27A4;").text())
                    .replace(/_return_/g, $("#rapid-hidden").html("&#x27A5;").text())
                    .replace(/_RETURN_/g, $("#rapid-hidden").html("&#x27A6;").text())
                    .replace(/_POINT0_/g, $("#rapid-hidden").html("&#x27A9;").text())
                    .replace(/_POINT1_/g, $("#rapid-hidden").html("&#x27AA;").text())
                    .replace(/_POINT2_/g, $("#rapid-hidden").html("&#x27AF;").text())
                    .replace(/_POINT3_/g, $("#rapid-hidden").html("&#x27B1;").text())
                    .replace(/_POINT4_/g, $("#rapid-hidden").html("&#x27AD;").text())
                    .replace(/_POINT5_/g, $("#rapid-hidden").html("&#x27AE;").text())
                    .replace(/_POINT6_/g, $("#rapid-hidden").html("&#x27AB;").text())
                    .replace(/_POINT7_/g, $("#rapid-hidden").html("&#x27AC;").text())
                    .replace(/_POINT8_/g, $("#rapid-hidden").html("&#x21E8;").text())
                    .replace(/_POINT9_/g, $("#rapid-hidden").html("&#x21FE;").text());

            if (typeof (tip.title) != 'undefined') $(this).attr("title", strTitle);
            $(this).attr("data-toggle", "tooltip");

            if (typeof (tip.align) != 'undefined') {
                if($('tooltip-' + tip.align).length==0)
                   $('<style type="text/css">.tooltip-' + tip.align + ' + .tooltip > .tooltip-inner {text-align: ' + tip.align + ';}</style>').appendTo($('head'));
                $(this).addClass('tooltip-' + tip.align);
            }
            if (typeof (tip.pos) != 'undefined') $(this).attr("data-placement", tip.pos);
            if (typeof (tip.onKey) != 'undefined') $(this).attr("data-onKey", tip.onKey);

            if (typeof (tip.color) != 'undefined') {
                $('<style type="text/css">.tooltip-' + tip.color + ' + .tooltip > .tooltip-inner {color: ' + tip.color + ';}</style>').appendTo($('head'));
                $(this).addClass('tooltip-' + tip.color);
            }
            if (typeof (tip.font) != 'undefined') {
                var strFont = tip.font;
                var selFontSize = String.fromCharCode(65+Number(strFont.substr(0, strFont.indexOf("px "))));
                var selFontFamily = strFont.substr(strFont.indexOf(" ")+1).split(" ").join("");
                var propFontSize = strFont.substr(0, strFont.indexOf(" "));
                var propFontFamily = strFont.substr(strFont.indexOf(" ")+1);
                
                $('<style type="text/css">.tooltip-' + selFontSize + selFontFamily + ' + .tooltip > .tooltip-inner { font-size: ' + propFontSize + '; font-family: ' + propFontFamily + '; }</style>').appendTo($('head'));
                $(this).addClass('tooltip-' + selFontSize + selFontFamily);
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
            if(typeof $(this).data("story-detail")!='undefined') $(this).tooltip("disable");
        });
    } // initT
    
    /**
    * STORYBOARDS
    * Add more settings like a storytelling of the tooltips explaining how the elements work 
    * together or further to do's.
    * --------------------------------------------------------------------------------------------
    * Best practices: 
    *     -You can bind a key (0-9 or a-z) to multiple tooltips and have them appear with an
    *      explanation in the console after activating Story Mode (by pressing the 
    *      backquote ` key found left of the number keys) and then pressing the binded key.
    *      You must activate Story Mode to press a key to show tooltip(s) because it's
    *      normally disruptive for user to type into a website's textfield and have tooltips
    *      appear as they are typing.
    * 
    */
    
    //SB-1. Storys Mode On/Off
    function initSM() {
        window.showing=[];
        window.storytelling=[];
        $("body").off("keypress"); // to prevent multiple firings if stories are set through Rapid.options
        $("body").on("keypress", function(e) {
           if(e.keyCode==96 && typeof window.showable=='undefined') { 
               console.log("%cON - Story %cPress the keys the developer gave you to read some stories or to see some tooltips.","color:red;font-weight:bold;","color:red; font-weight:normal;"); 
               window.showable="";
               return;
           } else if(e.keyCode==96) {
               console.log("%cOFF - Stories %cTyping on the website produces normal behavior again.","color:gray; font-weight:bold;","font-weight:normal;");
               $("[data-detail],[data-story-detail]").trigger("mouseout"); // close all current tooltips
               delete window.showable;
               return;
           } // else
           if(typeof window.showable=='undefined') return;

            //SB-2. Show story about opened tooltips

           //check if there's a story attached to what's binded:
            var input = String.fromCharCode(event.keyCode).toLowerCase();
            var currentKey = "";
            var currentStory = "";
            var found=false;
            if(typeof Rapid.stories!="undefined") {
                $.each(Rapid.stories.array, function( index, value )
                {
                    if(input==value.onKey) {
                        Rapid.stories.helpers.showStoryAndTooltip(input, value.story);
                        found=true;
                        return false;
                    } // look for a story whose onKey is triggered
                }); // then look through stories
                
                //Triggering tooltips is independent of storyboard
                if(!found) {
                    Rapid.stories.helpers.showStoryAndTooltip(input, []);
                }
            } // if user defined stories

        }); // keypress
    } // initSM

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

    var Lorem;
    function initL() {
        $("[data-lorem]").html("");
        (function(){function randw(){var s=Math.floor(Math.random()*3)+1,c=['b','d','f','g','h','j','k','m','n','p','r','s','sh','t','ts','ll','qu','sc','gr','en','ad','ip','am','eg','ph','al','el','urn','fr','rh','pr','ul','et','gn','er','ult','odo','oro','ti','l','v','w','z','tr','ch','bl','pl','cr'],v=['a','e','i','o','u','au','ou','ae','us','ui'],i=0,str='';while(i<s){str+=c[Math.floor(Math.random()*(c.length-1))]+v[Math.floor(Math.random()*(v.length-1))];i++;} return str + (Math.random()*10 < 3 ? c[Math.floor(Math.random()*(c.length-1))]:'');}Lorem=function(){this.type=null;this.query=null;this.data=null};Lorem.IMAGE=1;Lorem.TEXT=2;Lorem.TYPE={PARAGRAPH:1,SENTENCE:2,WORD:3};Lorem.WORDS=[];var a=0;while(a<1272){Lorem.WORDS.push(randw());a++}Lorem.prototype.randomInt=function(c,b){return Math.floor(Math.random()*(b-c+1))+c};Lorem.prototype.createText=function(f,h){switch(h){case Lorem.TYPE.PARAGRAPH:var k=new Array;for(var d=0;d<f;d++){var j=this.randomInt(10,20);var c=this.createText(j,Lorem.TYPE.SENTENCE);k.push(c)}return k.join("\n");break;case Lorem.TYPE.SENTENCE:var l=new Array;for(var d=0;d<f;d++){var m=this.randomInt(5,10);var g=this.createText(m,Lorem.TYPE.WORD).split(" ");g[0]=g[0].substr(0,1).toUpperCase()+g[0].substr(1);var e=g.join(" ");l.push(e)}return(l.join(". ")+".").replace(/(\.\,|\,\.)/g,".");break;case Lorem.TYPE.WORD:var b=this.randomInt(0,Lorem.WORDS.length-f-1);return Lorem.WORDS.slice(b,b+f).join(" ").replace(/\.|\,/g,"");break}};Lorem.prototype.createLorem=function(d){var h=new Array;var g=parseInt(this.query);var e=Lorem.TYPE.PARAGRAPH;if(/\d+p/.test(this.query)){e=Lorem.TYPE.PARAGRAPH}else{if(/\d+s/.test(this.query)){e=Lorem.TYPE.SENTENCE}else{if(/\d+w/.test(this.query)){e=Lorem.TYPE.WORD}}}h.push(this.createText(g,e));h=h.join(" ");if(d){if(this.type==Lorem.TEXT){var f=h.split("\n");for(var c=0;c<f.length;c++){f[c]="<p>"+f[c]+"</p>"}d.innerHTML+=f.join("")}else{if(this.type==Lorem.IMAGE){var j="";var b=this.query.split(" ");if(b[0]=="gray"){j+="/g";b[0]=""}if(d.getAttribute("width")){j+="/"+d.getAttribute("width")}if(d.getAttribute("height")){j+="/"+d.getAttribute("height")}j+="/"+b.join(" ").replace(/(^\s+|\s+$)/,"");d.src="http://lorempixum.com"+j.replace(/\/\//,"/")}}}if(d==null){return h}};if(typeof jQuery!="undefined"){(function(b){b.fn.lorem=function(){b(this).each(function(){var c=new Lorem;c.type=b(this).is("img")?Lorem.IMAGE:Lorem.TEXT;c.query=b(this).data("lorem");c.createLorem(this)})};b(document).ready(function(){b("[data-lorem]").lorem()})})(jQuery)}else{if(document.querySelectorAll){!function(d,c){typeof define=="function"?define(c):typeof module!="undefined"?module.exports=c():this[d]=this.domReady=c()}("domready",function(x){function m(b){n=1;while(b=w.shift()){b()}}var w=[],v,u=!1,t=document,s=t.documentElement,r=s.doScroll,q="DOMContentLoaded",p="addEventListener",o="onreadystatechange",n=/^loade|c/.test(t.readyState);t[p]&&t[p](q,v=function(){t.removeEventListener(q,v,u),m()},u),r&&t.attachEvent(o,v=function(){/^c/.test(t.readyState)&&(t.detachEvent(o,v),m())});return x=r?function(b){self!=top?n?b():w.push(b):function(){try{s.doScroll("left")}catch(c){return setTimeout(function(){x(b)},50)}b()}()}:function(b){n?b():w.push(b)}});domReady(function(){var d=document.querySelectorAll("[data-lorem]");for(var b=0;b<d.length;b++){var c=d[b];var e=new Lorem;e.type=c.tagName=="IMG"?Lorem.IMAGE:Lorem.TEXT;e.query=c.getAttribute("data-lorem");e.createLorem(c)}})}}})();
    }; // initL


    /**
    * CHROME DEBUGGER ENHANCED
    * Monitor for changes in Javascript Objects, Javascript Object Keys, HTML attributes,
    * HTML5 data attributes, and HTML/text content.
    * If you want to pause on changes like in a breakpoint, pass "true" to the monitoring
    * function(s) and run the website with Chrome's DevTool opened (must be opened for
    * the pauses to work). If you don't want pauses, skip that parameter or pass "false."
    * ------------------------------------------------------------------------------------------
    * Examples: 
    *
    *   var fooObj = {foo:13,baz:"42",bar:"33"};
    *   var fooObj2 = {a:1, b:"2"};
    *   Rapid.watchLit(var);
    *   Rapid.watchObj("fooObj2");
    *   Rapid.watchKey("fooObj", "baz");
    *   Rapid.watchArr("arr");
    *   Rapid.watchDOMOptions({subtree:false});
    *   Rapid.watchDOM("#target");
    *   Rapid.watchDOM("#target2", true);
    *
    * What could trigger alerts in the console:
    *
    *   foo.bar=30;   
    *   $("#target").text("inserted");
    *   $("#target").html("<b>changed</b>");
    *   $("#target").data("attr","2");
    *   $("#target2").data("attr","3");
    *
    */

    //CD-1. Check if on Chrome
    if(typeof window.chrome !== "object" || !Object.observe) {
        $.extend(true, Rapid, {
                        watchLit: function() {
                            this.notCompatible();
                        },
                        watchObj: function() {
                            this.notCompatible();
                        }, // watchObj
                        watchKey: function() {
                            this.notCompatible();
                        }, // watchKey
                        watchArr: function() {
                            this.notComptible();
                        }, //watchArr
                        watchDOMOptions: function() {
                            this.notCompatible();
                        }, // watchDOM Options
                        watchDOM: function() {
                            this.notCompatible();
                        }, // watchDOM
                        assert: function() {
                            this.notCompatible();
                        }, // assert
                        notCompatible: function() {
                            console.error("Chrome Debugger Enhanced: Can't load. This feature only works on Chrome v36 and up.");
                        }
                    });
    } else {
        
    //CD-2. Convenience function to get selector from object to pass to monitoring function(s)
    jQuery.fn.sSel = function () {
        var path, node = this;
        if (node.length > 1) node = node[0];
        if (node.length == 0) console.error("sSel: No node selected for getting string selector.");
        if (typeof node[0]!='undefined' && typeof node[0].id!='undefined') return "#" + node[0].id;
        while (node.length) {
            var realNode = node[0],
                name = realNode.localName;
            if (!name) break;
            name = name.toLowerCase();
            var parent = node.parent();
            var siblings = parent.children(name);
            if (siblings.length > 1) {
                name += ':eq(' + siblings.index(realNode) + ')';
            }
            path = name + (path ? '>' + path : '');
            node = parent;
        }
        return path;
    };
        
    //CD-3. Monitor changes in Javascript Objects
    //Implemented in the last section as Rapid.watchObj(..)

    //CD-4. Monitor changes in Javascript Object Keys
    console.watch = function(oObj, sProp) {
       sPrivateProp = "$_"+sProp+"_$"; // to minimize the name clash risk
       oObj[sPrivateProp] = oObj[sProp];

       // overwrite with accessor
       Object.defineProperty(oObj, sProp, {
           get: function () {
               return oObj[sPrivateProp];
           },

           set: function (value) {
                 Rapid.count++;
                 console.group("Observation " + Rapid.count);
                 var oldType = typeof oObj["$_" + sProp + "_$"];
                 var newType = typeof value;
                 console.log(oObj.$_name_$+" %cchanged:%c { \"" + sProp + "\" : " + (oldType==="number"?"":"\"") + oObj["$_" + sProp + "_$"] + (oldType==="number"?"":"\"") + " ➜ " + (newType==="number"?"":"\"") + value + (newType==="number"?"":"\"")  + " ..}","font-style:italic;","font-style:normal;", oObj);
             if(typeof oObj.$_debugger_pause_$!='undefined') { console.log("PAUSED"); debugger; }

                 console.groupEnd();
               oObj[sPrivateProp] = value;
           }
       });
    }

    //CD-5. Monitor changes in DOM
    //Changes caused by: $().text, $().html, $().attr
    var observer = new MutationObserver(function(mutations) {
        //console.log('OBSERVED', mutations);
        Rapid.count++;
        console.group('Observation ' + Rapid.count);
        mutations.forEach(function(mutation) {
            //console.dir(mutation.target);
            var extraInfo = ((typeof mutation.target.attributes!='undefined')&&(typeof mutation.target.attributes["data-debugger-path"]!='undefined')?mutation.target.attributes["data-debugger-path"]["value"]:"");
            var extraInfo2 = "";
            switch (mutation.type) {
                case "attributes":
                    extraInfo2 = "[" + mutation.attributeName + " = '" + mutation.oldValue + "'";
                    if(typeof mutation.target.attributes!='undefined' && typeof mutation.target.attributes[mutation.attributeName]!='undefined')
                        extraInfo2+=" ➜ '" + mutation.target.attributes[mutation.attributeName]["value"]+"']";
                    break;
                case "characterData":
                    extraInfo2 = "'" + mutation.oldValue + "' ➜ '" + mutation.target.data + "'";
                    break;
            } // switch
                    
            console.log('%s %cchanged:%c %s %s', mutation.target.nodeName.toLowerCase() + extraInfo,  'font-style:italic', 'font-style:normal', mutation.type, extraInfo2, mutation);
             if((typeof mutation.target.attributes!='undefined')&&(typeof mutation.target.attributes["data-debugger-pause"]!='undefined')) { console.log("PAUSED"); debugger; }
        });
        console.groupEnd();
    });

    //CD-6. Monitor changes in DOM's HTML5 data
    //Changes caused by: $().data
    (function($) {
        // maintain a reference to the existing function
        var oldfxn = $.fn.data;
        // ...before overwriting the jQuery extension point
        $.fn.data = function(key, val)
        {
            // original behavior - use function.apply to preserve context
            var ret = oldfxn.apply(this, arguments);
            $(this).attr("data-"+key,val);
            //console.dir(arguments);
            //$(this).attr("data-"+key,val);

            // preserve return value (probably the jQuery object...)
            return ret;
        };
    })(jQuery);
        
    //CD-7. Expose monitoring and assert methods to global scope 
    $.extend(true, Rapid, {
                    config: {childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true },
                    count: 0, // for observation number
                    arrCount: 0,
                    arrs: {}
                });
    $.extend(true, Rapid, {
                    watchObj: function(sObj) {
                        var oObj = {};
                        try {
                            oObj = eval(sObj);
                        } catch(e) {
                            console.error("Rapid.watchObj: The object passed to watchObj as a first parameter string cannot be found, most likely due to that object not being in the global scope because watchObj was implemented in global scope. You have two options. You can pass the object instead of the name of the object, wherein the console will show the name as [Object object] rather than its object name during reported changes. Or you can (1) create a global reference to that object and (2) make sure to pass the global string name (1. global.var=var; 2. Then pass \"global.var\")");
                            return;
                        }
                        if(arguments.length>1 && arguments[1]==true)
                            oObj.$_debugger_pause_$ = "T";
                        if(typeof sObj !== "string") oObj.$_name_$ = "[object Object]";
                        else oObj.$_name_$ = sObj;
                        //console.watch(oObj, sKey);
                        Object.observe(oObj, function(changes) {
                            //console.log('observed ' + changes.length + " changes:", changes);
                            
                            var isStr1 = false;
                            var isStr2 = false;
                            var extraInfo = "";
                            var longName = "";
                            if(typeof sObj==="string") {
                                //alert("string!");
                                longName = oObj.$_name_$; // may be global.foo
                                extraInfo = eval(longName + "." + changes[0]["name"])!=undefined?(eval(longName + "." + changes[0]["name"])):"";
                            } else { //
                                for(var key in oObj)
                                    if(key==changes[0]["name"])
                                        extraInfo = oObj[key];
                            }
                            
                            if(typeof changes[0]["oldValue"]!='undefined' && typeof changes[0]["oldValue"] === "string")
                                isStr1=true;
                            if(extraInfo.length>0 && typeof extraInfo === "string")
                                isStr2=true;

                            
                            if(changes[0].type=="delete")
                                console.log(oObj.$_name_$+" %cchanged:%c { \"" + changes[0]["name"] + "\" : (deleted) ..}", "font-style:italic;", "font-style:normal", changes, oObj);
                            else if(typeof changes[0]["oldValue"]!='undefined')
                                console.log(oObj.$_name_$+" %cchanged:%c { \"" + changes[0]["name"] + "\" : " + (isStr1?"\"":"") + changes[0]["oldValue"] + (isStr1?"\"":"") + " ➜ " + (isStr2?"\"":"") + extraInfo + (isStr2?"\"":"") + " ..}", "font-style:italic;", "font-style:normal", changes, oObj);
                            else
                                console.log(oObj.$_name_$+" %cchanged:%c { \"" + changes[0]["name"] + "\" : " + (isStr2?"\"":"") + extraInfo + (isStr2?"\"":"") + " ..}", "font-style:italic;", "font-style:normal", changes, oObj);
                            
                            
                            if(typeof oObj.$_debugger_pause_$!='undefined') { console.log("PAUSED"); debugger; }
                        }); // observe
                    } // watchObj
                });
    $.extend(true, Rapid, {
                    watchLit: function(lit) {
                        //TODO: keep track of variable name and value
                        //setInterval
                        //how to know when it's out of scope / undefined, to end it
                    },
                    watchKey: function(sObj, sKey) {
                        var oObj = {};
                        try {
                            oObj = eval(sObj);
                        } catch(e) {
                            console.error("Rapid.watchKey: The object passed to watchKey as a first parameter string cannot be found, most likely due to that object not being in the global scope because watchKey was implemented in global scope. You have two options. You can pass the object instead of the name of the object, wherein the console will show the name as [Object object] rather than its object name during reported changes. Or you can (1) create a global reference to that object and (2) make sure to pass the global string name (1. global.var=var; 2. Then pass \"global.var\")");
                            return;
                        }
                      if(arguments.length>2 && arguments[2]==true) oObj.$_debugger_pause_$ = "T";
                        if(typeof sObj !== "string") oObj.$_name_$ = "[object Object]";
                        else oObj.$_name_$ = sObj;
                        console.watch(oObj, sKey);
                    }, // watchKey
                    watchArr: function(sArr) {
                        var oArr = {};
                        try {
                            oArr = eval(sArr);
                        } catch(e) {
                            console.error("Rapid.watchArr: The array passed to watchArr as a first parameter string cannot be found, most likely due to that array not being in the global scope because watchArr was implemented in global scope. You have two options. You can pass the array instead of the name of the array, wherein the console will show the name as [Array array] rather than its array name during reported changes. Or you can (1) create a global reference to that array and (2) make sure to pass the global string name (1. global.arr=arr; 2. Then pass \"global.arr\")");
                            return;
                        }
                        Rapid.arrCount++;
                        if(typeof sArr !== "string") { eval('Rapid.arrs.arrN' + Rapid.arrCount + '="[Array array]";');
                                                     }
                        else {
                              var pause=false;
                              if (arguments.length>1)
                                    if(arguments[1]!=true && arguments[1]!=false)
                                        console.error("Rapid.watchArr is passed a second parameter that wasn't true or false.");
                              else pause=arguments[1];

                              var holderInfoArray = "Rapid.arrs.arrN" + Rapid.arrCount; // eg. Rapid.arrs.arrN0, etc
                              eval(holderInfoArray + '={}; ' + holderInfoArray + '.name="' + sArr + '";')
                              if(pause) eval(holderInfoArray + '.debuggerPause=""');
		                      //for a quick reminder, use this function at this point: console.dir(Rapid.arrs);
                        } // else
                        Array.observe(oArr, function(changes) {
                            Rapid.count++;
                            console.group("Observation " + Rapid.count);
                            console.log(eval("Rapid.arrs.arrN" + Rapid.arrCount) + " %cchanged:%c " + changes[0].type + " from i=" + changes[0].name + (changes[0].oldValue!==undefined?", value "+changes[0].oldValue:""), "font-style:italic;", "font-style:normal;", oArr);
                            if(eval("Rapid.arrs.arrN" + Rapid.arrCount + ".debuggerPause")!=undefined) { console.log("PAUSED"); debugger; }
                            console.groupEnd();
});
                    },
                    watchDOMOptions: function(oObj) {
                      $.extend( Rapid.config, oObj );
                      console.group("Observation Options");
                      console.log("Set: ", Rapid.config);
                      console.groupEnd();
                      //console.log(Rapid.config)
                    }, // watch Options
                    watchDOM: function() {
                      var sSel = arguments[0];
                      if(arguments.length>1 && arguments[1]==true) $(sSel).data("debugger-pause","T");
                      $(sSel).data("debugger-path", sSel);
                      try {
                        observer.observe(document.querySelector(sSel), this.config);
                      } catch(e) {
                        if(e.name=="NotFoundError")
                            console.error("Rapid.watchDOM: " + sSel + " not found! Either you misspelled or you started monitoring that element before the DOM is ready. Wrap your monitoring code in $(function() {..});, $(document).ready(function() {..});, or any variation for DOM Ready.");
                      }
                    }, // watchDOM
                    assert: function() {
                        if(arguments.length==0) {
                                console.error("Rapid.assert: You must pass three parameters: value (mixed), comparison operator (string), and value (mixed). Optionally, pass a last parameter (string) that shows a message if the assertion fails.");
                            return false;
                        }
                        console.assert(arguments[0], arguments.length>2&&arguments[2]==true?eval(arguments[1]):arguments[1]);
                    } // assert
                }); // extend
    } // else is Chrome


    //CD-8. If you want to test monitoring functions, uncomment this block, view demo.php, and open Chrome Console:
    /*$(function() {
        var aa = {a:1, b:2};
        global.aa = aa;
        $("#demo").attr("attr","blahblah");
        Rapid.watchDOMOptions({subtree:true});
        Rapid.watchDOM("#demo", false);
        $("#demo").attr("attr","gahgah");
        Rapid.watchKey("global.aa", "a");
        aa.a=3;
    });*/

    $(function() {
        (function init_rapid() {
            initS(); // Semantics incl. global, controllers (as inline js or external script)
            initP(); // Placeholders incl. rect and circles
            initT(); // Tooltips
            initSM(); // Storymode that combines tooltips with a console narrative
            initL(); // Lorem Ipsum
            initB();
            
            // Autoruns on appropriate browser: 
            // Chrome's debugger enhanced
        })();
    });