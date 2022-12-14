var ePrivacyCookies, geoIpType;
$(document).ready(function () {
    if (!$("html").data("countrycode") || "" == $("html").data("countrycode"))
        return !1;
    ePrivacyCookies = {
        countrycode: $("html").data("countrycode").toUpperCase(),
        $implicit: document.getElementById("agreeCookie"),
        $explicit: document.getElementById("eprivacyCookie"),
        cookies: [],
        cookieListURL: null,
        isToggleBtn: null,
        bannerType: "N",
        infoHTML: "",
        $focusObj: null,
        geoIpItem: 0 < $(document.getElementById("agreeCookie")).length && 0 < $(document.getElementById("eprivacyCookie")).length,
        bannerV2: !!(0 < $(".cookie-banner").length && $(".cookie-banner").hasClass("cookie-eu")),
        bannerGr: !!(0 < $(".cookie-banner").length && $(".cookie-banner").hasClass("cookie-gr")),
        modalPopUp: document.getElementById("modal_cookie_set"),
        geoIpEuUrl: "/global/mkt/ajax/retrieveGeoIpEuFlag",
        getCookie: function (e) {
            if ($.cookie(e))
                return decodeURIComponent($.cookie(e));
            $.cookie(e)
        },
        setCookie: function (e, o) {
            var t = location.host
                , i = ".lg.com";
            0 <= t.indexOf("lge.com") ? i = ".lge.com" : 0 <= t.indexOf("localhost") && (i = "localhost");
            i = {
                path: "/",
                domain: i,
                expires: 365
            };
            $.cookie(e, encodeURIComponent(o), i)
        },
        setSessionCookie: function (e, o) {
            var t = location.host
                , i = ".lg.com";
            0 <= t.indexOf("lge.com") ? i = ".lge.com" : 0 <= t.indexOf("localhost") && (i = "localhost");
            i = {
                path: "/",
                domain: i
            };
            $.cookie(e, encodeURIComponent(o), i)
        },
        referrerUrlSet: function () {
            var e = this;
            "" == e.getCookie(e.countrycode + "_referrerUrl") || void 0 === e.getCookie(e.countrycode + "_referrerUrl") ? (t = document.referrer).indexOf("/" + e.countrycode.toLowerCase()) < 0 && (_dl.referrer = t) : (t = e.getCookie(e.countrycode + "_referrerUrl"),
                _dl.referrer = t);
            var o = location.host
                , t = ".lg.com";
            0 <= o.indexOf("lge.com") ? t = ".lge.com" : 0 <= o.indexOf("localhost") && (t = "localhost");
            t = {
                path: "/",
                domain: t
            };
            $.removeCookie(e.countrycode + "_referrerUrl", t)
        },
        geoIpEu: function () {
            var o = this;
            ePrivacyCookies.bannerV2 && !ePrivacyCookies.geoIpItem && (ePrivacyCookies.geoIpEuUrl = "/global/mkt/ajax/retrieveGeoIpEuFlag?query_type=gdpr");
            var e, t = ePrivacyCookies.geoIpEuUrl;
            0 <= window.location.href.indexOf("/oauth/") && (t = 0 <= (e = 0 < $(".cookie-banner").length ? $(".cookie-banner").data("cookie-list") : null).indexOf("wdev50.lg.com") ? "https://wdev50.lg.com" + ePrivacyCookies.geoIpEuUrl : 0 <= e.indexOf("wwwstg.lg.com") ? "https://wwwstg.lg.com" + ePrivacyCookies.geoIpEuUrl : 0 <= e.indexOf("www.lg.com") ? "https://www.lg.com" + ePrivacyCookies.geoIpEuUrl : "https://" + window.location.host + ePrivacyCookies.geoIpEuUrl),
                $.ajax({
                    type: "post",
                    url: t,
                    dataType: "json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    success: function (e) {
                        e = e.data[0].geoIpEuFlag;
                        "fr" == o.countrycode.toLowerCase() && (e = "Y"),
                            "_explictArgee" == (geoIpType = "Y" == e ? "_explict" : ePrivacyCookies.bannerV2 && !ePrivacyCookies.geoIpItem ? "_explictArgee" : "_implict") && $(".cookie-banner").css("display", "none"),
                            ePrivacyCookies.init()
                    },
                    error: function (e, o, t) {
                        console.log("status: " + o),
                            console.log("error: " + t)
                    }
                })
        },
        init: function () {
            if ($("body").hasClass("iw-fullscreen-edit"))
                return !1;
            var t = this;
            t.cookieListURL = 0 < $(".cookie-banner").length ? $(".cookie-banner").data("cookie-list") : null,
                !t.geoIpItem && 0 < $(t.$implicit).length || t.geoIpItem && "_implict" == geoIpType ? (t.cookieName = t.countrycode + "_agreeCookie",
                    t.bindCookieBanner("implicit"),
                    t.initCookieBanner("implicit"),
                    "strict" == $(t.$implicit).data("privacy-type") ? t.bannerType = "S" : t.bannerType = "I",
                    t.infoHTML = 0 < $(t.$implicit).find("template").length ? $(t.$implicit).find("template").clone().html() : "",
                    0 < $(t.$implicit).length && 0 < $(t.$explicit).length && $(t.$explicit).remove(),
                    t.referrerUrlSet()) : !t.geoIpItem && 0 < $(t.$explicit).length || t.geoIpItem && "_explict" == geoIpType ? (t.isToggleBtn = !!(0 < $(t.$explicit).find("button.toggle-setting-area,a.toggle-setting-area").length || $(t.$explicit).hasClass("close-more")),
                        $(t.$explicit).find(".more ul li.detail-option-key").each(function () {
                            var e = $(this).attr("class");
                            "it" != t.countrycode.toLowerCase() && "tr" != t.countrycode.toLowerCase() || !$(this).find(".toggle-active-button button").hasClass("hidden") || $(this).addClass("hidden"),
                                -1 != e.indexOf("LGCOM_") && t.cookies.push(t.countrycode + "_" + $.trim(e.replace(/detail-option-key ([A-Z]\w+).*/g, "$1")))
                        }),
                        t.bindCookieBanner("explicit"),
                        t.initCookieBanner("explicit"),
                        t.infoHTML = $(t.$explicit).find("template").clone().html(),
                        t.bannerType = "E",
                        "_explictArgee" == geoIpType && "false" != t.getCookie(t.countrycode + "_eCookieOpenFlag") ? (t.setCookie(t.countrycode + "_referrerUrl", document.referrer),
                            $(t.$explicit).find("button.accept-all").trigger("click")) : t.referrerUrlSet(),
                        null != t.cookieListURL && t.controlCookieList(),
                        0 < $(t.$implicit).length && 0 < $(t.$explicit).length && $(t.$implicit).remove()) : t.referrerUrlSet(),
                console.log("ePrivacy Banner Type", t.bannerType),
                t.loadJS(),
                t.loadIntercomJS(),
                t.loadZendeskJS(),
                $(window).on("resize load", function () {
                    0 < $(".eprivacy-layer").length && $(".eprivacy-layer").remove(),
                        0 < $(".eprivacy-tooltip").length && ($(t.modalPopUp).hide(),
                            $(t.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                            $(".page-cookie-view").unwrap(),
                            $(t.modalPopUp).removeClass("page-cookie-view"),
                            $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                        ePrivacyCookies.setCookieEuHeight()
                });
            var e = $(t.modalPopUp).find(".sec-section ul").clone(!0);
            $(e).find("li").each(function () {
                var e, o = $(this).attr("class");
                -1 != o.indexOf("LGCOM_") && (e = /detail-option-key ([A-Z]\w+).*/g,
                    $(this).attr("data-inx", $(".cookie-eu .more .inner ul").find("li." + $.trim(o.replace(e, "$1"))).index() - $(".cookie-eu .more .inner ul").find("li.hidden").length),
                    $(".cookie-eu .more .inner ul").find("li." + $.trim(o.replace(e, "$1"))).find(".toggle-active-button button").hasClass("hidden") && ($(this).find(".toggle-active-button button").addClass("hidden"),
                        "it" != t.countrycode.toLowerCase() && "tr" != t.countrycode.toLowerCase() || $(this).css("display", "none")))
            });
            var i = $("<ul></ul>");
            $(e).find("li").each(function (e) {
                var o = Number($(this).attr("data-inx")) + 1;
                1 == o ? $(this).prependTo($(i)) : $(i).find("li[data-inx=" + o + "]").length ? $(this).insertBefore($(i).find("li[data-inx=" + o + "]")) : $(this).appendTo($(i))
            }),
                $(t.modalPopUp).find(".sec-section ul").html($(i))
        },
        setCookieEuHeight: function () {
            0 < $(".cookie-eu-get-height").length && 0 < $(".cookie-eu").length && setTimeout(function () {
                $(".cookie-eu-get-height").height($(".cookie-eu").height()),
                    "none" == $(".cookie-eu").css("display") && $(".cookie-eu-get-height").css("height", "0")
            }, 100)
        },
        loadJS: function () {
            var c = this;
            0 < $(".eprivacy-load-js").length && (ePrivacyCookies.get("LGCOM_IMPROVEMENTS") || "ES" == c.countrycode) && $(".eprivacy-load-js").each(function () {
                if ("ES" != c.countrycode || "bvScript" == $(this).attr("id") || ePrivacyCookies.get("LGCOM_IMPROVEMENTS")) {
                    var e, o = $(this).data("url"), t = $(this).attr("data-async"), i = document, a = i.createElement("script"), i = i.body || i.getElementsByTagName("body")[0];
                    for (e in as = void 0 !== t && "true" == t ? {
                        type: "text/javascript",
                        async: "",
                        src: o
                    } : $(this).hasClass("inlineScript") ? (a.text = $(this).text(),
                    {
                        type: "text/javascript"
                    }) : 0 <= $(this).data("url").indexOf("youreko") || 0 <= $(this).data("url").indexOf("bvapi") ? {
                        src: o,
                        defer: ""
                    } : {
                        src: o
                    },
                        as)
                        a.setAttribute(e, as[e]);
                    i.appendChild(a)
                }
            })
        },
        loadIntercomJS: function () {
            var c = this;
            0 < $(".eprivacy-load-intercom").length && ePrivacyCookies.get("LGCOM_IMPROVEMENTS") ? $(".eprivacy-load-intercom").each(function () {
                if (ePrivacyCookies.get("LGCOM_IMPROVEMENTS") && ("cz" != c.countrycode.toLowerCase() || !$(".navigation").hasClass("b2b"))) {
                    var e, o = $(this).data("url"), t = document, i = t.createElement("script"), t = t.body || t.getElementsByTagName("body")[0], a = {
                        src: o
                    };
                    for (e in a)
                        i.setAttribute(e, a[e]);
                    t.appendChild(i)
                }
            }) : 0 < $(".eprivacy-load-traffic").length && ePrivacyCookies.get("LGCOM_ANALYSIS_OF_SITE") ? $(".eprivacy-load-traffic").each(function () {
                if (ePrivacyCookies.get("LGCOM_ANALYSIS_OF_SITE")) {
                    var e, o = $(this).data("url"), t = document, i = t.createElement("script"), t = t.body || t.getElementsByTagName("body")[0], a = {
                        src: o
                    };
                    for (e in a)
                        i.setAttribute(e, a[e]);
                    t.appendChild(i)
                }
            }) : 0 < $(".eprivacy-load-convert").length && ePrivacyCookies.get("LGCOM_ANALYSIS_OF_SITE") && $(".eprivacy-load-convert").each(function () {
                if (ePrivacyCookies.get("LGCOM_ANALYSIS_OF_SITE")) {
                    var e, o = $(this).data("url"), t = document, i = t.createElement("script"), t = t.head || t.getElementsByTagName("head")[0], a = {
                        src: o
                    };
                    for (e in a)
                        i.setAttribute(e, a[e]);
                    t.appendChild(i)
                }
            })
        },
        loadJS_Each: function (e, o) {
            var t, i = document, a = i.createElement("script"), i = o ? $(o).eq(0).get(0) : i.body || i.getElementsByTagName("body")[0], c = {
                src: e
            };
            for (t in c)
                a.setAttribute(t, c[t]);
            i.appendChild(a)
        },
        loadZendeskJS: function () {
            0 < $(".eprivacy-load-js-zendesk").length && ePrivacyCookies.get("LGCOM_IMPROVEMENTS") && $(".eprivacy-load-js-zendesk").each(function () {
                if (ePrivacyCookies.get("LGCOM_IMPROVEMENTS")) {
                    var e = $(this).data("jsurl-pre")
                        , o = document
                        , t = o.createElement("script")
                        , i = o.body || o.getElementsByTagName("body")[0]
                        , a = {
                            src: e
                        };
                    for (s in a)
                        t.setAttribute(s, a[s]);
                    i.appendChild(t);
                    var o = $(this).data("url")
                        , e = document
                        , c = e.createElement("script")
                        , i = e.body || e.getElementsByTagName("body")[0]
                        , n = {
                            id: "ze-snippet",
                            src: o
                        };
                    for (s in n)
                        c.setAttribute(s, n[s]);
                    if (i.appendChild(c)) {
                        for (var s in o = $(this).data("jsurl"),
                            c = (e = document).createElement("script"),
                            i = e.body || e.getElementsByTagName("body")[0],
                            n = {
                                src: o
                            })
                            c.setAttribute(s, n[s]);
                        i.appendChild(c)
                    }
                }
            })
        },
        view: function (e, o, t) {
            var i, a, c, n, s, r = this;
            "click" == e ? ((s = $(event.target) ? $(event.target) : $(":focus")).attr("class") && -1 != s.attr("class").indexOf("active-result") && 0 < s.closest(".chosen-container").length && (s = s.closest(".chosen-container")),
                0 < s.closest(".swatch").length && (s = s.closest(".swatch")),
                0 < s.length && (c = s.offset().left + s.outerWidth() / 2,
                    n = s.offset().top,
                    e = s.offset().top + s.outerHeight(),
                    r.$focusObj = s,
                    0 < $(".eprivacy-layer").length && $(".eprivacy-layer").remove(),
                    0 < $(".eprivacy-tooltip").length && ($(r.modalPopUp).hide(),
                        $(r.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                        $(".page-cookie-view").unwrap(),
                        $(r.modalPopUp).removeClass("page-cookie-view left right"),
                        $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                    (s = r.bannerV2 ? ((a = $(r.modalPopUp).addClass("page-cookie-view center").show()).wrapAll('<div class="eprivacy-tooltip"></div>'),
                        n -= a.height(),
                        $("body").prepend($(".eprivacy-tooltip")),
                        $(".eprivacy-tooltip")) : ($("body").prepend($("<div>" + r.infoHTML + "</div>").find(".eprivacy-layer").get(0).outerHTML),
                            $(".eprivacy-layer"))).css({
                                left: c,
                                top: n - 15
                            }).attr("tabindex", 0).focus(),
                    i = parseInt($(".eprivacy-tooltip").css("top")),
                    s.find(".toggle-setting-area").off("click").on("click", function (e) {
                        e.preventDefault(),
                            $(".sec-section").hasClass("visible") ? ($(".eprivacy-tooltip").animate({
                                top: i
                            }, 200, function () { }),
                                $(".sec-section").slideUp(200),
                                $(".sec-section").removeClass("visible")) : (i - $(".sec-section").outerHeight() - parseInt($(".sec-section").css("margin-top")) < 0 ? $(".eprivacy-tooltip").animate({
                                    top: parseInt($(".eprivacy-tooltip").css("top"))
                                }, 200, function () { }) : $(".eprivacy-tooltip").animate({
                                    top: i - $(".sec-section").outerHeight() - parseInt($(".sec-section").css("margin-top"))
                                }, 200, function () { }),
                                    $(".sec-section").slideDown(200),
                                    $(".sec-section").addClass("visible"))
                    }),
                    s.find(".btn-cover button").on("click", function (e) {
                        e.preventDefault(),
                            $(".eprivacy-layer").remove(),
                            ePrivacyCookies.$focusObj.focus()
                    }).on("blur", function (e) {
                        e.preventDefault(),
                            $(".eprivacy-layer a").eq(0).focus()
                    }),
                    s.find(".description a").on("click", function (e) {
                        e.preventDefault(),
                            $("html, body").stop().animate({
                                scrollTop: 0
                            }, 300, function () {
                                ePrivacyCookies.openCookieBanner()
                            })
                    }),
                    a = r.bannerV2 ? s.find(".page-cookie-view") : s.find(".eprivacy-message-wrap"),
                    r.bannerV2,
                    n = (c = a.offset().left) + a.outerWidth(),
                    s = a.offset().top,
                    a.offset().top,
                    a.outerHeight(),
                    c < 0 ? a.removeClass("center right").addClass("left") : n > $(window).width() && a.removeClass("center left").addClass("right"),
                    s < 0 && a.removeClass("above").addClass("below").parent().css("top", e + 15))) : (r.bannerV2 && (r.infoHTML = $(r.$explicit).find("template").clone().html()),
                        0 < t.length && (t.html($("<div>" + r.infoHTML + "</div>").find(".cookie-permit-msg").get(0).outerHTML),
                            t.find(".cookie-permit-msg").removeClass("small").addClass(o),
                            t.find(".cookie-permit-msg .info-text a").on("click", function (e) {
                                e.preventDefault(),
                                    0 < $(this).closest(".modal").length && $(this).closest(".modal").attr("id") && $("#" + $(this).closest(".modal").attr("id")).modal("hide"),
                                    $("html, body").stop().animate({
                                        scrollTop: 0
                                    }, 300, function () {
                                        ePrivacyCookies.openCookieBanner()
                                    })
                            })))
        },
        get: function (e) {
            var o = this;
            return (o.bannerV2 || o.geoIpItem) && void 0 === geoIpType ? "Y" == o.getCookie(o.countrycode + "_agreeCookie") || "Y" == o.getCookie(o.countrycode + "_" + e) : !!$("body").hasClass("iw-fullscreen-edit") || ("N" == o.bannerType || "I" == o.bannerType || ("S" == o.bannerType ? "Y" == o.getCookie(o.countrycode + "_agreeCookie") : "E" == o.bannerType ? "Y" == o.getCookie(o.countrycode + "_" + e) : void 0))
        },
        initCookieBanner: function (e) {
            var o = this;
            if ("implicit" == e && ("Y" == o.getCookie(o.cookieName) ? ($(o.$implicit).removeClass("active"),
                "strict" == $(o.$implicit).data("privacy-type") && "true" == o.getCookie(o.countrycode + "_implicitStrictOpenFlag") && $(o.$implicit).addClass("active")) : $(o.$implicit).addClass("active")),
                "explicit" == e) {
                for (var t = 0; t < o.cookies.length; t++) {
                    var i = o.cookies[t]
                        , a = $(o.$explicit).find("." + o.cookies[t].replace(o.countrycode + "_", "") + " .toggle-active-button")
                        , c = $(o.modalPopUp).find("." + o.cookies[t].replace(o.countrycode + "_", "") + " .toggle-active-button")
                        , n = $(o.$explicit).find("." + o.cookies[t].replace(o.countrycode + "_", "") + " .checkbox-box")
                        , s = a.data("active-text") || n.data("active-text")
                        , r = a.data("disactive-text") || n.data("disactive-text");
                    "Y" == o.getCookie(i) || o.bannerV2 && a.find("button").hasClass("hidden") || "N" != o.getCookie(i) && a.find("button").hasClass("active") ? (a.find("button").addClass("active").find("> span").text(s),
                        a.find("button").attr("title", s),
                        c.find("button").addClass("active").find("> span").text(s),
                        -1 == o.cookies[t].indexOf("LGCOM_NECESSARY") && n.find(":checkbox").addClass("active").prop("checked", !0)) : (a.find("button").removeClass("active").find("> span").text(r),
                            a.find("button").attr("title", r),
                            c.find("button").removeClass("active").find("> span").text(r),
                            -1 == o.cookies[t].indexOf("LGCOM_NECESSARY") && n.find(":checkbox").removeClass("active").prop("checked", !1))
                }
                "false" == o.getCookie(o.countrycode + "_eCookieOpenFlag") ? o.isToggleBtn ? $(o.$explicit).addClass("ready") : $(o.$explicit).addClass("ready more") : (o.isToggleBtn ? $(o.$explicit).addClass("ready active") : $(o.$explicit).addClass("ready active more"),
                    "_explictArgee" != geoIpType && ePrivacyCookies.setCookieEuHeight(),
                    "strict" == $(o.$explicit).data("privacy-type") && "_explictArgee" != geoIpType && $("body").append('<div class="dimmed" style="position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.5;"></div>'),
                    "fr" == o.countrycode.toLowerCase() && ($("body").css({
                        position: "fixed",
                        width: "100%"
                    }),
                        $("body").on("scroll touchmove mousewheel", function (e) {
                            e.preventDefault()
                        }))),
                    "uk" != o.countrycode.toLowerCase() && "nl" != o.countrycode.toLowerCase() && "be_fr" != o.countrycode.toLowerCase() && "fr" != o.countrycode.toLowerCase() && "ua" != o.countrycode.toLowerCase() && "gr" != o.countrycode.toLowerCase() && "it" != o.countrycode.toLowerCase() && "dk" != o.countrycode.toLowerCase() && "se" != o.countrycode.toLowerCase() && "es" != o.countrycode.toLowerCase() && "cz" != o.countrycode.toLowerCase() && "de" != o.countrycode.toLowerCase() && "at" != o.countrycode.toLowerCase() && "sk" != o.countrycode.toLowerCase() && "ch_de" != o.countrycode.toLowerCase() && "ch_fr" != o.countrycode.toLowerCase() && o.bannerV2 && $(o.$explicit).find(".more ul li").not(".hidden").find(".toggle-active-button button.active").length == $(o.$explicit).find(".detail-option-key").not(".hidden").length && $(o.$explicit).find(".default").css("display", "none"),
                    o.isToggleBtn && $(o.$explicit).find("button.toggle-setting-area,a.toggle-setting-area").attr("aria-expanded", !1),
                    $(o.$explicit).find(".default button").attr("aria-expanded", !1)
            }
        },
        implictClose: function () {
            var e = this;
            e.getCookie(e.countrycode + "_agreeCookie") || "strict" != $(e.$implicit).data("privacy-type") || setTimeout(function () {
                location.reload()
            }, 100),
                $(e.$implicit).removeClass("active"),
                e.setCookie(e.cookieName, "Y"),
                $(".eprivacy-layer").remove(),
                0 < $(".eprivacy-tooltip").length && ($(e.modalPopUp).hide(),
                    $(e.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                    $(".page-cookie-view").unwrap(),
                    $(e.modalPopUp).removeClass("page-cookie-view"),
                    $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                "strict" == $(e.$implicit).data("privacy-type") && e.setCookie(e.countrycode + "_implicitStrictOpenFlag", !1)
        },
        implictStrictClose: function () {
            var e = this;
            e.getCookie(e.countrycode + "_agreeCookie") || "strict" != $(e.$implicit).data("privacy-type") || (document.referrer.indexOf(document.domain) < 0 || document.referrer.indexOf("/" + e.countrycode.toLowerCase()) < 0 ? e.setCookie(e.countrycode + "_referrerUrl", document.referrer) : void 0 !== _dl.referrer && _dl.referrer.indexOf(document.domain) < 0 && e.setCookie(e.countrycode + "_referrerUrl", _dl.referrer),
                setTimeout(function () {
                    location.reload()
                }, 100),
                e.setCookie(e.cookieName, "Y"),
                e.setCookie(e.countrycode + "_implicitStrictOpenFlag", !0))
        },
        bindCookieBanner: function (e) {
            var a = this;
            if ("implicit" == e && ($(a.$implicit).find(".close a").on("click", function (e) {
                e.preventDefault(),
                    a.implictClose()
            }),
                "strict" == $(a.$implicit).data("privacy-type") && $(document).ready(function () {
                    $(window).on("click mousewheel DOMMouseScroll wheel touchmove", function (e) {
                        return null != e.originalEvent && (0 < $(a.$implicit).find(e.target).length || void a.implictStrictClose())
                    })
                })),
                "explicit" == e) {
                var i = $(".toggle-active-button[data-active-text]").eq(0).data("active-text")
                    , c = $(".toggle-active-button[data-disactive-text]").eq(0).data("disactive-text");
                if (ePrivacyCookies.bannerV2 && "_explictArgee" != geoIpType)
                    for (var o = 0; o < a.cookies.length; o++) {
                        var t = a.cookies[o];
                        -1 == a.cookies[o].indexOf("LGCOM_NECESSARY") && $(a.$explicit).find("." + a.cookies[o].replace(a.countrycode + "_", "") + " .toggle-active-button button").hasClass("active") && void 0 === a.getCookie(t) && a.setCookie(t, "Y")
                    }
                $(a.$explicit).find(".default button").on("click", function (e) {
                    e.preventDefault(),
                        $(this).attr("aria-expanded", !0),
                        a.isToggleBtn ? $(a.$explicit).addClass("active") : $(a.$explicit).addClass("active more"),
                        $(".eprivacy-layer").remove(),
                        0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                            $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                            $(".page-cookie-view").unwrap(),
                            $(a.modalPopUp).removeClass("page-cookie-view"),
                            $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                        ePrivacyCookies.setCookieEuHeight()
                }),
                    $(a.$explicit).find(".close a").on("click", function (e) {
                        e.preventDefault(),
                            $(a.$explicit).removeClass("active more"),
                            $(".eprivacy-layer").remove(),
                            ePrivacyCookies.setCookieEuHeight(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                                $(".page-cookie-view").unwrap(),
                                $(a.modalPopUp).removeClass("page-cookie-view"),
                                $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                            a.getCookie(a.countrycode + "_eCookieOpenFlag") || "strict" != $(a.$explicit).data("privacy-type") || setTimeout(function () {
                                location.reload()
                            }, 100),
                            a.setCookie(a.countrycode + "_eCookieOpenFlag", !1)
                    }),
                    "strict" == $(a.$explicit).data("privacy-type") ? ($(a.$explicit).find(".close").remove(),
                        $(a.$explicit).find(".submit button:last").on("blur", function () {
                            a.getCookie(a.countrycode + "_eCookieOpenFlag") || $(a.$explicit).find(":focusable").eq(0).focus()
                        }),
                        $(a.$explicit).find(".open button:last").on("blur", function (e) {
                            return !!$(a.$explicit).hasClass("more") || void (a.getCookie(a.countrycode + "_eCookieOpenFlag") || $(a.$explicit).find(":focusable").eq(0).focus())
                        })) : "it" !== a.countrycode.toLowerCase() && $(a.$explicit).find(".close").remove(),
                    $(a.$explicit).find("button.toggle-setting-area,a.toggle-setting-area").on("click", function (e) {
                        e.preventDefault(),
                            $(".eprivacy-layer").remove(),
                            $(a.$explicit).hasClass("more") ? ($(a.$explicit).removeClass("more"),
                                $(this).addClass("closed"),
                                $(this).attr("aria-expanded", !1)) : ($(a.$explicit).addClass("more"),
                                    $(this).removeClass("closed"),
                                    $(this).attr("aria-expanded", !0)),
                            0 < $(".eprivacy-layer").length && $(".eprivacy-layer").remove(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                                $(".page-cookie-view").unwrap(),
                                $(a.modalPopUp).removeClass("page-cookie-view"),
                                $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                            ePrivacyCookies.setCookieEuHeight()
                    }),
                    $(a.$explicit).find(".toggle-active-button button,.checkbox-box [type=checkbox]").on("click", function (e) {
                        "checkbox" != $(this).prop("type") && e.preventDefault(),
                            $(".eprivacy-layer").remove();
                        var o, e = $(this).closest("li").attr("class");
                        if (-1 != e.indexOf("LGCOM_") && (o = /detail-option-key ([A-Z]\w+).*/g),
                            ("gr" == a.countrycode.toLowerCase() || "pl" == a.countrycode.toLowerCase() || "de" == a.countrycode.toLowerCase() || "at" == a.countrycode.toLowerCase() || "ch_de" == a.countrycode.toLowerCase() || "ch_fr" == a.countrycode.toLowerCase()) && -1 != $.trim(e.replace(o, "$1")).indexOf("LGCOM_NECESSARY"))
                            return !1;
                        $(this).hasClass("active") ? ($(this).removeClass("active").find("> span").text(c),
                            $(this).attr("title", c),
                            $(a.modalPopUp).find("." + $.trim(e.replace(o, "$1")) + " .toggle-active-button button").removeClass("active").find("> span").text(c)) : ($(this).addClass("active").find("> span").text(i),
                                $(this).attr("title", i),
                                $(a.modalPopUp).find("." + $.trim(e.replace(o, "$1")) + " .toggle-active-button button").addClass("active").find("> span").text(i))
                    }),
                    $(a.modalPopUp).find(".toggle-active-button button").on("click", function (e) {
                        var o, t = $(this).closest("li").attr("class");
                        if (("gr" == a.countrycode.toLowerCase() || "pl" == a.countrycode.toLowerCase() || "de" == a.countrycode.toLowerCase() || "at" == a.countrycode.toLowerCase() || "ch_de" == a.countrycode.toLowerCase() || "ch_fr" == a.countrycode.toLowerCase()) && -1 != $.trim(t.replace(o, "$1")).indexOf("LGCOM_NECESSARY"))
                            return !1;
                        $(this).hasClass("active") ? $(this).removeClass("active").find("> span").text(c) : $(this).addClass("active").find("> span").text(i),
                            -1 != t.indexOf("LGCOM_") && (o = /detail-option-key ([A-Z]\w+).*/g,
                                $(a.$explicit).find("." + $.trim(t.replace(o, "$1"))).find(".toggle-active-button button").trigger("click"))
                    }),
                    $(a.$explicit).find(".toggle-open-button button").on("click", function (e) {
                        e.preventDefault(),
                            $(".eprivacy-layer").remove(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                                $(".page-cookie-view").unwrap(),
                                $(a.modalPopUp).removeClass("page-cookie-view"),
                                $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                            $(this).closest("li").toggleClass("active")
                    }),
                    $(a.modalPopUp).find("button.accept-all,a.comment-accept-all").on("click", function (e) {
                        $(a.modalPopUp).find(".detail-option-key").not(".hidden").find(".toggle-active-button button").not(".hidden").each(function () {
                            $(this).addClass("active").find("> span").text(i)
                        }),
                            $(a.$explicit).find("button.accept-all").trigger("click")
                    }),
                    $(a.modalPopUp).find(".submit button,.btn-area .submit").on("click", function (e) {
                        $(a.$explicit).find(".submit button.save-submit,.btn-area .save-submit,.save-submit.submit").trigger("click")
                    }),
                    $(a.$explicit).find("button.accept-all,a.comment-accept-all").on("click", function (e) {
                        e.preventDefault(),
                            $(a.$explicit).find(".detail-option-key").not(".hidden").find(".toggle-active-button button,.checkbox-box [type=checkbox]").not(".hidden").each(function () {
                                "checkbox" == $(this).prop("type") && $(this).prop("checked", !0),
                                    $(this).addClass("active").find("> span").text(i)
                            }),
                            $(".eprivacy-layer").remove(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                                $(".page-cookie-view").unwrap(),
                                $(a.modalPopUp).removeClass("page-cookie-view"),
                                $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                            setTimeout(function () {
                                $(a.$explicit).find(".submit button.save-submit,.btn-area .save-submit,.save-submit.submit").trigger("click")
                            }, 300)
                    }),
                    $(a.$explicit).find("button.reject-all,a.comment-reject-all").on("click", function (e) {
                        e.preventDefault(),
                            $(a.$explicit).find(".detail-option-key").not(".hidden").find(".toggle-active-button button").not(".hidden").each(function () {
                                ("gr" == a.countrycode.toLowerCase() || "pl" == a.countrycode.toLowerCase() || "de" == a.countrycode.toLowerCase() || "at" == a.countrycode.toLowerCase() || "ch_de" == a.countrycode.toLowerCase() || "ch_fr" == a.countrycode.toLowerCase()) && $(this).parents("li.detail-option-key").hasClass("LGCOM_NECESSARY") || ($(this).removeClass("active").find("> span").text(c),
                                    $(this).attr("title", c))
                            }),
                            $(".eprivacy-layer").remove(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(".page-cookie-view").unwrap()),
                            setTimeout(function () {
                                $(a.$explicit).find(".submit button.save-submit,.btn-area .save-submit,.save-submit.submit").trigger("click")
                            }, 300)
                    }),
                    $(a.modalPopUp).find("button.reject-all,a.comment-reject-all").off("click").on("click", function (e) {
                        e.preventDefault(),
                            $(a.modalPopUp).find(".detail-option-key").not(".hidden").find(".toggle-active-button button.active").not(".hidden").each(function () {
                                $(this).click()
                            }),
                            $(a.modalPopUp).find(".submit button,.btn-area .submit").eq(0).trigger("click")
                    }),
                    $(a.$explicit).find(".submit button.apply-all").on("click", function (e) {
                        e.preventDefault(),
                            $(".eprivacy-layer").remove(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(".page-cookie-view").unwrap());
                        var o = $(a.$explicit).find(".detail-option-key").not(".hidden").find(".toggle-active-button button").not(".hidden")
                            , e = o.length
                            , t = 0;
                        o.each(function () {
                            $(this).hasClass("active") && t++
                        }),
                            e == t ? o.each(function () {
                                $(this).removeClass("active").find("> span").text(c)
                            }) : o.each(function () {
                                $(this).addClass("active").find("> span").text(i)
                            })
                    }),
                    $(a.$explicit).find(".submit button.save-submit,.btn-area .save-submit,.save-submit.submit").on("click", function (e) {
                        var o = !1;
                        e.preventDefault(),
                            $(".eprivacy-layer").remove(),
                            document.referrer.indexOf(document.domain) < 0 || document.referrer.indexOf("/" + a.countrycode.toLowerCase()) < 0 ? a.setCookie(a.countrycode + "_referrerUrl", document.referrer) : void 0 !== _dl.referrer && _dl.referrer.indexOf(document.domain) < 0 && a.setCookie(a.countrycode + "_referrerUrl", _dl.referrer),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(".page-cookie-view").unwrap());
                        for (var t = 0; t < a.cookies.length; t++) {
                            var i = a.cookies[t];
                            -1 == a.cookies[t].indexOf("LGCOM_NECESSARY") && ($(a.$explicit).find("." + a.cookies[t].replace(a.countrycode + "_", "") + " .toggle-active-button button").hasClass("active") || $(a.$explicit).find("." + a.cookies[t].replace(a.countrycode + "_", "") + " .checkbox-box [type=checkbox]").hasClass("active") ? a.setCookie(i, "Y") : ("_explictArgee" == geoIpType ? a.setCookie(i, "Y") : a.setCookie(i, "N"),
                                o = !0))
                        }
                        o && ePrivacyCookies.bannerV2 && "fr" != a.countrycode.toLowerCase() ? a.setSessionCookie(a.countrycode + "_eCookieOpenFlag", !1) : a.setCookie(a.countrycode + "_eCookieOpenFlag", !1),
                            null != a.cookieListURL && a.controlCookieList(),
                            DEBUG || setTimeout(function () {
                                location.reload()
                            }, 300)
                    }),
                    $(document).find(".cookie-policy-setting button, .footer-bottom-box [data-link-name=cookie]").on("click", function (e) {
                        e.preventDefault(),
                            0 < $(".eprivacy-tooltip").length && ($(a.modalPopUp).hide(),
                                $(a.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                                $(".page-cookie-view").unwrap(),
                                $(a.modalPopUp).removeClass("page-cookie-view"),
                                $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible")),
                            $("#modal_cookie_set").modal("show"),
                            $("#modal_cookie_set").not(".page-cookie-view").find(".toggle-setting-area").on("click", function (e) {
                                $(".sec-section").toggleClass("more")
                            }),
                            $("body").css("overflow", "auto"),
                            isMobile && $("body").css("position", "static")
                    }),
                    $(a.$explicit).find(".detail-option-collspace button").on("click", function (e) {
                        $(this).removeClass("active").siblings("button").addClass("active"),
                            "btn-open" == $(this).attr("class") ? $("#detail_desc").addClass("active") : $("#detail_desc").removeClass("active")
                    })
            }
        },
        openCookieBanner: function () {
            var e = this;
            0 < $(e.$implicit).length ? $(e.$implicit).addClass("active").attr("tabindex", 0).focus() : 0 < $(e.$explicit).length && (e.isToggleBtn ? $(e.$explicit).addClass("ready active") : $(e.$explicit).addClass("ready active more")).attr("tabindex", 0).focus(),
                0 < $(".eprivacy-layer").length && $(".eprivacy-layer").remove(),
                0 < $(".eprivacy-tooltip").length && ($(e.modalPopUp).hide(),
                    $(e.$explicit).hasClass("alwaysOpen") || $(".sec-section").hide(),
                    $(".page-cookie-view").unwrap(),
                    $(e.modalPopUp).removeClass("page-cookie-view"),
                    $(".sec-section").hasClass("visible") && $(".sec-section").removeClass("visible"))
        },
        oldCookie: "",
        removeCookie: function (e, o, t, i, a) {
            var c;
            "Y" != i && "name" != ePrivacyCookies.oldCookie && (ePrivacyCookies.oldCookie = e,
                i = {
                    path: t,
                    domain: o
                },
                "Y" == a && (i.secure = !0),
                ".lg.com" == o || "lg.com" == o || ".lge.com" == o || "lge.com" == o ? getCookie(e) && "" != getCookie(e) || "undefined" != getCookie(e) ? (a = $.removeCookie(e, i),
                    DEBUG && console.log("- ", e, i, " ... ", "same - ", a, "... check ... ", getCookie(e) ? getCookie(e) : "no-cookie")) : DEBUG && console.log("%c- " + e + " ... same - no-cookie", "color: #999") : window.location.hostname == o || "www.lg.com" == o ? getCookie(e) && "" != getCookie(e) ? (c = $.removeCookie(e, {
                        path: t
                    }),
                        DEBUG && console.log("- ", e, " ... ", "path only (" + t + ") - ", c, "... check ... ", getCookie(e) ? getCookie(e) : "no-cookie")) : DEBUG && console.log("%c- " + e + " ... path only - no-cookie", "color: #999") : ((c = new Date).setDate(c.getDate() - 1),
                            document.cookie = e + "=;expires=" + c.toGMTString() + "; path=" + t + "; domain=" + o,
                            DEBUG && console.log("- ", e, i, c.toGMTString(), "... check ... ", getCookie(e) ? getCookie(e) : "no-cookie")))
        },
        controlCookieList: function () {
            var e = this.cookieListURL;
            0 <= window.location.href.indexOf("/oauth/") ? $.ajax({
                type: "post",
                url: e,
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                success: function (e) {
                    ePrivacyCookies.checkRemoveCookie(e),
                        e.data[0].treasureDataFlag && (treasureDataFlag = e.data[0].treasureDataFlag)
                },
                error: function (e, o, t) {
                    console.log("status: " + o),
                        console.log("error: " + t)
                }
            }) : ajax.call(e, {
                pageUrl: window.location.pathname
            }, "json", function (e) {
                ePrivacyCookies.checkRemoveCookie(e),
                    e.data[0].treasureDataFlag && (treasureDataFlag = e.data[0].treasureDataFlag)
            })
        },
        checkRemoveCookie: function (e) {
            if (DEBUG && console.log("check Cookies ..."),
                e) {
                var o, t = e.data[0];
                for (o in DEBUG && console.log("%c -- Start -- ", "color: #fff; background: #000; font-size:24px;"),
                    t) {
                    var i = "LGCOM_" + o.toUpperCase();
                    if ("LGCOM_HOMEUSECOOKIELIST" != i && "LGCOM_PIXELURLFLAG" != i && "LGCOM_NECESSARY" != i && !ePrivacyCookies.get(i) || DEBUG) {
                        DEBUG && console.log("%c" + i, "color: #008000; font-size:12px; font-weight:bold;");
                        for (var a = t[o].length, c = 0; c < a; c++) {
                            var n = t[o][c].cookieName;
                            if (n && -1 == n.indexOf("_LGCOM_") && -1 == n.indexOf("eCookieOpenFlag") && -1 == n.indexOf("agreeCookie"))
                                if (0 <= n.indexOf("**"))
                                    for (var s = document.cookie.split(";"), r = 0; r < s.length; r++) {
                                        var l = document.cookie.split(";")[r].split("=")[0];
                                        0 <= l.indexOf(n.replace("**", "")) && ePrivacyCookies.removeCookie(l, t[o][c].cookieDomain, t[o][c].path, t[o][c].httpOnlyFlag, t[o][c].secureFlag)
                                    }
                                else
                                    ePrivacyCookies.removeCookie(n, t[o][c].cookieDomain, t[o][c].path, t[o][c].httpOnlyFlag, t[o][c].secureFlag)
                        }
                    }
                }
                DEBUG && console.log("%c -- END -- ", "color: #fff; background: #000; font-size:12px;"),
                    USE_NEW_FBQ = t.pixelUrlFlag.pixelUrlFlag && "Y" == t.pixelUrlFlag.pixelUrlFlag && ePrivacyCookies.get("LGCOM_ADVERTISING") ? (USE_FBQ = !0,
                        void 0 !== t.pixelUrlFlag.pixelUrlType && "" != t.pixelUrlFlag.pixelUrlType ? t.pixelUrlFlag.pixelUrlType : "") : (USE_FBQ = !1,
                            ""),
                    void 0 !== t.homeUseCookieList && (e = t.homeUseCookieList,
                        addHomeCookie(e))
            }
        }
    },
        0 < $(ePrivacyCookies.$implicit).length && 0 < $(ePrivacyCookies.$explicit).length || ePrivacyCookies.bannerV2 ? ePrivacyCookies.geoIpEu() : ePrivacyCookies.init(),
        void 0 === ePrivacyCookies || ePrivacyCookies.get("LGCOM_ADVERTISING") || (fbq = function () {
            return DEBUG && console.log("fbq is not working"),
                !1
        }
            ,
            ttdWTB = function () {
                return DEBUG && console.log("ttdWTB is not working"),
                    !1
            }
        ),
        {
            $button: null,
            $banner: null,
            init: function () {
                this.$button = $("[data-cookie-object=button]"),
                    this.$banner = $("#eprivacyCookie"),
                    this.event()
            },
            event: function () {
                var e = this;
                this.$button.on("click", function () {
                    $("html, body").stop().animate({
                        scrollTop: 0
                    }, 300, function () {
                        e.$banner.addClass("active")
                    })
                })
            }
        }.init();
    var e = getUrlParam("scroll");
    if ("" != e) {
        let t = $("." + e)
            , i = $(".cookie-banner");
        t.length && setTimeout(function () {
            var e = t.offset()
                , o = i.length ? i.outerHeight() : ""
                , o = i.is(":hidden") ? e.top : e.top - Number(o);
            $("html, body").animate({
                scrollTop: o
            })
        }, 500)
    }
}),
    window.addEventListener("load", function (e) {
        var o = null;
        !function e() {
            void 0 === ePrivacyCookies ? o = setTimeout(e, 100) : (null !== o && clearTimeout(o),
                $("[data-lazyload-js-eprivacy]").each(function () {
                    (ePrivacyCookies.get("LGCOM_IMPROVEMENTS") || "es" == COUNTRY_CODE && "bvScript" == $(this).attr("id")) && lazyloadScript($(this).data("lazyload-attr"))
                }))
        }()
    }, !0);
//# sourceMappingURL=maps/e-privacy.min.js.map
