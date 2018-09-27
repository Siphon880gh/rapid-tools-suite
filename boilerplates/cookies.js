    function setCookie(obj, days)
    {
        var date=new Date();
        var exdays = days*24*60*60*1000;
        date.setDate(date.getDate() + exdays);


        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              var value = obj[key];
              var c_value=escape(value) + ((days==null) ? "" : "; expires="+date.toUTCString());
              document.cookie=key + "=" + c_value;
          }
        }
    } // setCookie >setCookie({foo:"bar"}, 4);

    function getCookie(c_name)
    {
        if(arguments.length==0) {
            return document.cookie;
        }
        var i,x,y,ARRcookies=document.cookie.split(';');
        for (i=0; i < ARRcookies.length;i++)
        {
          x=ARRcookies[i].substr(0,ARRcookies[i].indexOf('='));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
            return unescape(y);
          }
        }
          return null;
    } // getCookie >getCookie("foo"); >getCookie(); [return value or null]

    function eraseCookie(c_name) {
        document.cookie = c_name + '=; Max-Age=0'
    } // eraseCookie >eraseCookie("foo");

    function getAllCookies() {
        return document.cookie;
    }  