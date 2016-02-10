
(function () {
    var d = window.torrentsTime = {};
    d.setup = {
        tmdb_key: "57983e31fb435df4df77afb854740ea9",
        isDeviceSupported: null,
        platform: null,
        browser: null,
        isInstalled: null,
        port: null,
        publisher_id: null,
        querySelector: ".torrentsTime",
        id: null,
        source: null,
        file: null,
        fileType: "video",
        isHidden: !1,
        videoPLayer: !0,
        vpnAlert: !0,
        autoPlay: !1,
        title: null,
        poster: null,
        imdbid: null,
        subtitles: null,
        style: {
            backgroundColor: "#333333",
            textColor: "#ffffff",
            textSize: "14px",
            buttonBgColor: "rgba(0,0,0,0.7)",
            buttonHoverColor: "#2F6FD6",
            barBgColor: "rgba(0,0,0,0.9)"
        },
        installerURL: {
            windows: "https://cdn.torrents-time.com/torrentsTime-download.exe",
            macintosh: "https://cdn.torrents-time.com/torrentsTime-download.pkg"
        },
        localhost_domain: "localhost.ttconfig.xyz"
    };
    d.init = function (a) {
        if (a instanceof Object)for (var b in a)d.setup[b] = a[b];
        if (!n())return d.functions.deviceIsNotSupported();
        m(function () {
            if ((wrappers = document.querySelectorAll(d.setup.querySelector)) && wrappers.length) {
                p();
                for (d.instances = d.instances || {}; 0 < wrappers.length;) {
                    var a = new q(wrappers[0]);
                    a.id = a.setup.id || "i0";
                    d.instances[a.id] = d[a.id] = a;
                    r(a);
                    break
                }
                d.isInstalled(function (a) {
                    a && t();
                    "function" == typeof d.functions.initEnded && d.functions.initEnded()
                }, 10)
            }
        })
    };
    d.functions = {
        deviceIsNotSupported: function () {
            m(function () {
                try {
                    for (var a = document.querySelectorAll(d.setup.querySelector), b = 0; b < a.length; b++)a[b].parentNode.removeChild(a[b])
                } catch (c) {
                }
            })
        }, plugin_loaded: function (a) {
            var b = d.instances[a.id];
            b.plugin.isInitialized = !0;
            d.setup.vpn_state = a.vpn_state;
            "function" == typeof d.functions.initialized && d.functions.initialized(b);
            "function" == typeof d.instances[a.id].loaded && d.instances[a.id].loaded()
        }
    };
    d.isInstalled = function (a, b, c) {
        a = a || function () {
        };
        b = b || 0;
        c = c || 0;
        if (b && c > b)a(!1); else for (var f = ["12400", "11400", "10400", "9400"], g = [], k = setTimeout(function () {
            d.isInstalled(a, b, ++c)
        }, 1E3), h = 0; h < f.length; h++)g[h] = new Image, g[h].onload = function () {
            d.setup.isInstalled = !0;
            d.setup.port = this.getAttribute("data-port");
            a(!0);
            clearTimeout(k)
        }, g[h].onerror = function () {
            e.log(this)
        }, g[h].setAttribute("data-port", f[h]), g[h].src = "https://" + d.setup.localhost_domain + ":" + f[h] + "/check?version=r1"
    };
    d.downloadInstaller = function () {
        var a = document.createElement("iframe");
        a.setAttribute("src", d.setup.installerURL[d.setup.platform]);
        a.style.display = "none";
        document.getElementsByTagName("body")[0].appendChild(a);
        d.setup.autoPlay = !0;
        d.isInstalled(function () {
            for (var a in d.instances)d.instances[a].wrapper.firstChild.className += " installing";
            var b = "chrome" == d.setup.browser ? 1 : 2, g = function (a) {
                var c = new Image;
                c.onload = function () {
                    "firefox" == d.setup.browser && navigator.plugins.refresh();
                    a()
                };
                c.onerror = function () {
                    setTimeout(function () {
                        g(a)
                    }, 800)
                };
                c.src = "https://" + d.setup.localhost_domain + ":" + d.setup.port + "/check_complete?stage=" + b + "&cb=" + Math.random()
            };
            g(d.init)
        });
        for (var b in d.instances)-1 == d.instances[b].wrapper.firstChild.className.indexOf("_tt_setupDownload") && (d.instances[b].wrapper.firstChild.className += " _tt_setupDownload")
    };
    var q = function (a) {
        var b = {}, c = a.getAttribute("data-setup");
        if (c)try {
            b = JSON.parse(c)
        } catch (g) {
            e.log(g)
        }
        this.wrapper = a;
        this.setup = {};
        this.start = u;
        this.beforeStart = {};
        for (var f in d.setup)this.setup[f] = "undefined" != typeof b[f] ? b[f] : d.setup[f]
    }, n = function () {
        if (d.isDeviceSupported)return !0;
        if ("undefined" == typeof document.querySelector)return !1;
        "undefined" == typeof document.querySelectorAll && (document.querySelectorAll = document.querySelector);
        var a = navigator.userAgent, b = a.match(/chrome|firefox|safari|trident/i);
        if (!(b && b instanceof Array))return !1;
        d.setup.browser = b[0].toLowerCase();
        b = a.match(/windows|macintosh/i);
        if (!(b && b instanceof Array) || -1 < a.indexOf("Windows Phone") || -1 < a.indexOf("iemobile"))return !1;
        d.setup.platform = b[0].toLowerCase();
        return "macintosh" == d.setup.platform && "chrome" != d.setup.browser ? !1 : d.setup.isDeviceSupported = !0
    }, p = function () {
        var a = {
            "._tt_wrapper": {
                width: "100%",
                height: "100%",
                "min-height": "250px",
                "min-width": "300px",
                position: "relative",
                background: d.setup.style.backgroundColor,
                overflow: "hidden"
            },
            "._tt_initScreen": {height: "100%", overflow: "hidden", cursor: "pointer"},
            "._tt_initScreen ._tt_topbar": {
                "font-size": d.setup.style.textSize,
                padding: "10px;",
                background: "linear-gradient(to top, rgba(0,0,0,0) 0%, " + d.setup.style.barBgColor + " 100%)",
                "font-weight": "bold",
                position: "relative",
                "z-index": 10
            },
            "._tt_initScreen ._tt_button": {
                position: "absolute",
                width: "120px",
                height: "90px",
                overflow: "hidden",
                margin: "-45px 0 0 -60px",
                top: "50%",
                left: "50%",
                "border-radius": "10px",
                background: d.setup.style.buttonBgColor,
                "z-index": 10
            },
            "._tt_initScreen ._tt_hover": {
                position: "absolute",
                width: "2px",
                height: "2px",
                margin: "-1px 0 0 -1px",
                top: "50%",
                left: "50%",
                "border-radius": "150px",
                background: d.setup.style.buttonHoverColor,
                transition: "all 0.15s ease-out",
                "z-index": 11
            },
            "._tt_initScreen:hover ._tt_hover": {width: "150px", height: "150px", margin: "-75px 0 0 -75px"},
            "._tt_setupDownload ._tt_hover": {display: "none"},
            "._tt_initScreen ._tt_icon": {
                width: "100%",
                height: "100%",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbdJREFUeNrcmu1twjAURZ0oA3QE2IBu0G7QblA2oBMUJqAb0A1gA9ig2YBsABu8+kqxGrVQ3Mhf913JP8iPiBOf+NmxjYjc2baX7xxtezCM+QEyDK5P2GBuZYne0wLj1HvSAsOhnoxLmerJ+EC9Fy0wQ/VmWmBc1tnVk7A5ZVVP4iSPehI3adWT+EmnnqTLZ/QJrKTPJpZ6dYYxB8qh4C5C37jCo8pYGVrbXquqOmiAcfnooc5smkVTr5SeGaazbT5GvdqUF6yXMIPY/nftVCKMC1a2qE1LZs1Gq1cbjnipxwLjpR6LZtfUQ23aaYBxwXv0jIJbG/5gJv6mpWdcprXRk4kmGKMJ5qwF5mBHs1bDAIA10L2F6dh75h2jGEDwoyEulKj+7fAiG8yvKQwrzApa/fWdoCFRau7eC9Y60/UTyEcfkJJ75qZSDDDeSpUM47XGL/2dgUYrCzEN8Yk2Z8/s+prRhbphw6pUbs2CKnUxiTaYtkmOqdBv/SWAOcXYGcsBs8l2UoNWqUgweZSKAJNPqYAw+yJP2FKdWgoIs5bST9FSnfTzgDlSKnUFZtb/cS6lLuRLgAEAzhfjt/6MW6sAAAAASUVORK5CYII=') center center no-repeat",
                "z-index": 12,
                position: "relative"
            },
            "._tt_wrapper._tt_setupDownload ._tt_icon": {
                animation: "fadeInOut 0.4s ease-out 3",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA8CAYAAAA34qk1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAadJREFUeNrs2YFRgzAUBmDgOkBHYARGaDfoBuIGuoFO0G5AncAR0AnqBnYDukF88dKTU3iQhLxQ/N9djl5rePkqySWvWSIUSqk1tVr9REOtTJYWv5Dt2CwJWaj+qCTGkAlZ18xn+ZKg0QNQQAEFFFBAAQUUUEABBRRQQAEFNBLUlC73prJXhazkmVwPErm6Ejcd1byS6bNhqoD1QK5TR58nCWjFDLqcCsogr5GHfnS5BNUU1XeNpIv+AgrHcYgsRl7YkUiRxeglFNYCeU7T9C32PP0zZ8fM0RFzsv3jVJFIhQ12CDpbpAOW+7vTrJEOWJ+IixTCzgMZGDstUm+pqH2am+vrbgZYJ6RZ2NrjeP2+j0F2RUys83+yZ2Frkp4NOrvZDoz1Qe76bppwGSPMWa85yTydKtjBm7Zo93Q5WnS5UNtSv4+bqzBYYIMiRUopI7DBkWI1IwYrgtSxktpQaCytCe/08u561KL2TO+fJfKLQQ32aLlAodwJKKCAAgoooDOI1cCxp74xT967WfE9d+LRBRTQ4NDDP3BeMjo6PS4cq8+72y8BBgDCpsnY/DeynQAAAABJRU5ErkJggg==') center center no-repeat"
            },
            "._tt_wrapper._tt_setupDownload.installing ._tt_icon": {"background-image": "none !important"},
            "._tt_wrapper._tt_setupDownload.installing ._tt_installing": {
                display: "block",
                animation: "fadeInOut 0.4s ease-out 3"
            },
            "._tt_wrapper ._tt_installing": {
                display: "none",
                "text-align": "center",
                "font-size": "13px",
                color: "#fff",
                "line-height": "20px",
                "padding-top": "25%"
            },
            "._tt_wrapper ._tt_ins_prgrsbar": {
                width: "80%",
                height: "10px",
                background: "#fff",
                "border-radius": "3px",
                margin: "0 auto",
                position: "relative",
                "margin-top": "10px"
            },
            "._tt_wrapper ._tt_ins_prgrsbar div": {
                position: "absolute",
                background: d.setup.style.buttonHoverColor,
                "border-radius": "3px",
                left: "1px",
                top: "1px",
                height: "8px",
                width: "20px",
                animation: "sprinter 1s ease-out infinite"
            },
            "._tt_initScreen ._tt_caption": {
                width: "100%",
                padding: "7px",
                background: d.setup.style.buttonBgColor,
                "font-size": "16px",
                "z-index": 12,
                "text-align": "center",
                position: "absolute",
                bottom: "-50px",
                left: 0,
                transition: "bottom 0.2s ease-in-out"
            },
            "._tt_initScreen ._tt_caption u": {"font-weight": "bold", cursor: "pointer"},
            "._tt_wrapper._tt_setupDownload ._tt_caption": {bottom: "0 !important"},
            "._tt_initScreen ._tt_backdrop": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "background-size": "cover",
                transition: "opacity 0.5s ease-in",
                "z-index": 9
            },
            "._tt_initScreen ._tt_backdrop._tt_visible": {opacity: 1},
            "._tt_initScreen ._tt_backdrop._tt_hidden": {opacity: 0},
            "._tt_wrapper._tt_prepared ._tt_embed": {top: "-5000px", left: "-5000px"},
            "._tt_embed": {width: "100%", height: "100%", position: "absolute", left: "0", top: "0", "z-index": 8},
            "._tt_embed.visible": {visibility: "visible"},
            "._tt_pleaseWait": {
                position: "absolute",
                left: 0,
                top: "50%",
                width: "100%",
                "text-align": "center",
                color: "#fff",
                "margin-top": "-55px",
                display: "none"
            },
            "._tt_pleaseWait_box": {
                padding: "15px",
                margin: "0 auto",
                background: "rgba(0,0,0,0.9)",
                "border-radius": "5px",
                width: "80%"
            },
            "._tt_pleaseWait ._tt_s1": {"font-size": "16px", "margin-bottom": "15px;"},
            "._tt_pleaseWait ._tt_s2": {"font-size": "36px", "font-weight": "bold"},
            "._tt_pleaseWait ._tt_progress": {
                height: "8px",
                width: "80%",
                margin: "0 auto",
                border: "1px #fff solid",
                "border-radius": "3px"
            },
            "._tt_pleaseWait ._tt_bar": {
                width: 0,
                height: "4px",
                margin: "2px",
                background: d.setup.style.buttonHoverColor,
                "border-radius": "3px"
            },
            "._tt_wrapper.init ._tt_pleaseWait": {display: "inline", animation: "fadeInOut 2s linear infinite"},
            "@keyframes fadeInOut{0%{opacity: 1} 50%{opacity:0} 100%{opacity:1}} ._tt_null": {},
            "@keyframes sprinter{0%{left: 0} 50%{left:calc(100% - 20px)} 100%{left:0}} ._tt_null": {}
        }, b = "", c;
        for (c in a) {
            var b = b + (c + "{"), f;
            for (f in a[c])b += f + ":" + a[c][f] + ";";
            b += "}"
        }
        e.createElement({
            name: "style",
            props: {innerHTML: b}
        }, document.head || document.body || document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.documentElement)
    }, r = function (a) {
        a.setup.title = a.setup.title || a.setup.source && a.setup.source.match(/\/?[^\/]+\/?$/)[0].replace(/\//g, "") || "Torrents Time";
        var b = {}, c;
        for (c in d.setup.style)b[c] = a.setup.style[c] || d.setup.style[c];
        a.wrapper.innerHTML = '<div class="_tt_wrapper _tt_prepared"></div>';
        if (!a.setup.isHidden)if (b = e.createElement({
                name: "div",
                props: {
                    className: "_tt_initScreen",
                    innerHTML: '<div class="_tt_topbar">' + a.setup.title + '</div><div class="_tt_button"><div class="_tt_hover"></div><div class="_tt_icon"><div class="_tt_installing">Installing...<div class="_tt_ins_prgrsbar"><div></div></div></div></div></div><div class="_tt_caption"><u onclick="torrentsTime.downloadInstaller(1)">Click Here</u> if the download doesn\'t start automatically</div>'
                },
                attrs: {style: "background:" + b.backgroundColor + ";color:" + b.textColor}
            }, a.wrapper.firstChild), e.addListener(b, "click", function () {
                a.start()
            }), a.displayPoster = v, a.setup.poster)a.displayPoster(); else if (a.setup.imdbid) {
            var f = function (b) {
                try {
                    var c = JSON.parse(b);
                    if (c.backdrops instanceof Array) {
                        a.setup.poster = a.setup.poster || [];
                        for (b = 0; b < c.backdrops.length; b++)1920 == c.backdrops[b].width && a.setup.poster.push("//image.tmdb.org/t/p/w1920" + c.backdrops[b].file_path);
                        a.displayPoster()
                    }
                } catch (d) {
                }
            };
            e.xhr("//api.themoviedb.org/3/movie/" + a.setup.imdbid + "/images?api_key=" + a.setup.tmdb_key, function (b) {
                b ? f(b) : e.xhr("//api.themoviedb.org/3/find/" + a.setup.imdbid + "?api_key=" + a.setup.tmdb_key + "&external_source=imdb_id", function (b) {
                    if (b)try {
                        var c = JSON.parse(b);
                        c.tv_results && c.tv_results[0] && c.tv_results[0].id && e.xhr("//api.themoviedb.org/3/tv/" + c.tv_results[0].id + "/images?api_key=" + a.setup.tmdb_key, function (b) {
                            a.setup.poster = a.setup.poster || [];
                            a.setup.poster.push("http://image.tmdb.org/t/p/w1280" + c.tv_results[0].backdrop_path);
                            b && f(b)
                        })
                    } catch (d) {
                    }
                })
            })
        }
    }, v = function (a) {
        var b = this, c = this.wrapper.querySelector("._tt_initScreen");
        if (c && b.setup.poster) {
            "string" == typeof b.setup.poster && (b.setup.poster = [b.setup.poster]);
            a = a ? a >= b.setup.poster.length ? 0 : a : 0;
            var d = c.querySelector("._tt_backdrop._tt_hidden");
            d || (d = e.createElement({name: "div", props: {className: "_tt_backdrop ._tt_hidden"}}, c));
            c = new Image;
            c.onload = function () {
                d.style.backgroundImage = "url(" + b.setup.poster[a] + ")";
                var c = b.wrapper.querySelector("._tt_backdrop._tt_visible");
                c && (c.className = "_tt_backdrop _tt_hidden");
                d.className = "_tt_backdrop _tt_visible";
                1 < b.setup.poster.length && setTimeout(function () {
                    b.displayPoster(++a)
                }, 5E3)
            };
            c.src = b.setup.poster[a]
        }
    }, t = function () {
        var a = {};
        a.explorer = a.firefox = a.safari = a.trident = a.msie = {
            name: "object",
            props: {className: "_tt_embed", width: "100%", height: "100%"},
            attrs: {type: "application/x-ttplugin"}
        };
        a.chrome = {
            name: "embed",
            props: {
                className: "_tt_embed",
                type: "application/x-pnacl",
                name: "nacl_module",
                path: "pnacl/Release",
                src: "https://" + d.setup.localhost_domain + ":" + d.setup.port + "/ttplugin.nmf",
                width: "100%",
                height: "100%"
            },
            attrs: {}
        };
        for (var b in d.instances) {
            var c = d.instances[b];
            if ("undefined" == typeof c.plugin) {
                a[d.setup.browser].attrs["data-src"] = c.setup.source;
                c.plugin = {
                    object: e.createElement(a[d.setup.browser], c.wrapper.firstChild),
                    isInitialized: !1,
                    isReBinded: !1,
                    initialize: function () {
                        c.plugin.isInitialized || ("firefox" == d.setup.browser && !c.plugin.isReBinded && c.plugin.object.pushEvent && (c.plugin.isRebinded = !0, e.log("horey!"), e.addListener(c.plugin.object, "eventHandler", l)), c.plugin.sendMessage('{"command":"initialize", "id":"' + c.id + '", "browser":"' + d.setup.browser + '"}'), setTimeout(c.plugin.initialize, 1E3))
                    },
                    sendMessage: w
                };
                e.addListener(c.plugin.object, "message", l);
                e.addListener(c.plugin.object, "eventHandler", l);
                c.plugin.initialize();
                var f = e.createElement({
                    name: "div",
                    props: {
                        className: "_tt_pleaseWait",
                        innerHTML: '<div class="_tt_pleaseWait_box"><div class="_tt_s1">' + c.setup.title + '</div><div class="_tt_s2">DOWNLOADING</div></div>'
                    }
                }, c.wrapper.firstChild);
                "chrome" == d.setup.browser && (f.querySelector("._tt_bar"), e.addListener(c.plugin.object, "progress", function (a) {
                    a.lengthComputable && 0 < a.total && (f.innerHTML = '<div class="_tt_pleaseWait_box"><div class="_tt_s1">Preparing to stream Torrent...</div><div class="_tt_progress"><div class="_tt_bar" style="width:' + (Math.floor(a.loaded / a.total * 100) - 1 + "%") + '"></div></div></div>')
                }));
                c.setup.autoPlay && c.start()
            }
        }
    }, w = function (a) {
        e.log(a);
        if (this.object)try {
            this.object.postMessage ? this.object.postMessage(a) : this.object.pushEvent ? this.object.pushEvent(a) : e.log("no sendMessage1")
        } catch (d) {
            e.log(d)
        } else if (this.instances instanceof Array)for (var b = 0; b < this.instances; b++)if (this.instances[b].plugin.object)try {
            var c = this.instances[b].plugin.object.postMessage || this.instances[b].plugin.object.pushEvent;
            c ? c(a) : e.log("no sendMessage2")
        } catch (d) {
            e.log(d)
        }
    }, l = function (a) {
        e.log(a);
        a = a.data || a.details || a;
        try {
            var b = JSON.parse(a);
            if (b.triggers instanceof Object)for (var c in b.triggers) {
                a = d;
                for (var f = c.split("."), g = 0; g < f.length; g++)a[f[g]] && (a = a[f[g]]);
                "function" == typeof a && a(b.triggers[c])
            }
            if ("function" == typeof d.functions[b.status])d.functions[b.status](b.params)
        } catch (k) {
            e.log(k.message)
        }
    }, u = function () {
        if (d.setup.isInstalled) {
            this.wrapper.firstChild.className += " init";
            var a = this.wrapper.querySelector("._tt_initScreen");
            a && a.parentNode.removeChild(a);
            var b = this;
            setTimeout(function () {
                b.setup.poster && b.setup.poster.length && (b.wrapper.firstChild.style.background = "#000 url(" + this.setup.poster[0] + ") no-repeat center center", b.wrapper.firstChild.style.backgroundSize = "cover")
            }, 500);
            if (this.isReady) {
                for (var c in this.beforeStart)if (!this.beforeStart[c](this))return;
                this.wrapper.firstChild.className = this.wrapper.firstChild.className.replace(/ init/g, "");
                this.wrapper.firstChild.className = this.wrapper.firstChild.className.replace(/ _tt_prepared/g, "");
                this.plugin.sendMessage('{"command": "' + ("video" == this.setup.fileType && this.setup.videoPLayer ? "open_stream" : "download_link") + '", "url":"' + this.setup.source + '", "id":"' + this.id + '", "file":"' + (this.setup.file || "") + '"}');
                this.plugin.object.className += " visible"
            } else this.ready = this.start
        } else d.downloadInstaller()
    }, m = function (a) {
        if ("complete" == document.readyState)a(); else {
            var b = document;
            b.addEventListener ? b.addEventListener("DOMContentLoaded", a) : window.attachEvent("onload", a)
        }
    }, e = d.utils = {
        addListener: function (a, b, c) {
            a.attachEvent ? "object" == typeof a.attachEvent ? a["on" + b] = c : a.attachEvent("on" + b, c) : a.addEventListener && a.addEventListener(b, c)
        }, removeListener: function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent("on" + b, c)
        }, xhr: function (a, b) {
            var c = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP");
            c.onreadystatechange = function () {
                4 == c.readyState && (200 == c.status ? b(c.responseText) : b(!1))
            };
            c.open("GET", a);
            c.send()
        }, createElement: function (a, b) {
            try {
                var c = document.createElement(a.name);
                if (a.attrs)for (var d in a.attrs)c.setAttribute(d, a.attrs[d]);
                if (a.props)for (var g in a.props)c[g] = a.props[g];
                (b || document.getElementsByTagName("body")[0]).appendChild(c);
                return c
            } catch (k) {
                e.log(k)
            }
        }, log: function (a) {
            "object" == typeof console && "function" == typeof console.log && console.log(a)
        }
    }
})();
