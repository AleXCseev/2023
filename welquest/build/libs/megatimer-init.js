(function() {

    var path = $("body").data("path");
    var _id = "32570bd45f799f44454b95cb5922a80d";
    while (document.getElementById("timer" + _id))
        _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:540px;height:120px;'></div>");
    var _t = document.createElement("script");
    _t.src = path + "/libs/megatimer.js";
    var _f = function(_k) {
        var l = new MegaTimer(_id,{
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "1",
                "params": {
                    "usertime": true,
                    "tz": "3",
                    "utc": 1682020800000
                }
            },
            "design": {
                "type": "circle",
                "params": {
                    "width": "5",
                    "radius": "54",
                    "line": "solid",
                    "line-color": "#ffffff",
                    "background": "solid",
                    "background-color": "rgba(255,255,255,0.07)",
                    "direction": "direct",
                    // "number-font-family": {
                    //     "family": "Roboto",
                    //     "link": "<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    // },
                    "number-font-size": "36",
                    "number-font-color": "#ffffff",
                    "separator-margin": "10",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    // "text-font-family": {
                    //     "family": "Roboto",
                    //     "link": "<link href='//fonts.googleapis.com/css?family=Roboto&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    // },
                    "text-font-size": "16",
                    "text-font-color": "#ffffff"
                }
            },
            "designId": 7,
            "theme": "black",
            "width": 540,
            "height": 120
        });
        if (_k != null)
            l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function() {
        if (_t.readyState == "loaded")
            _f(1);
    }
    ;
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}
).call(this);
