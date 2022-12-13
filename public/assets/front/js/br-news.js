! function(e) {
    e.fn.ticker = function(t) {
        var n = e.extend({}, e.fn.ticker.defaults, t);
        if (0 == e(this).length) return window.console && window.console.log ? window.console.log("Element does not exist in DOM!") : alert("Element does not exist in DOM!"), !1;
        var o = "#" + e(this).attr("id"),
            i = e(this).get(0).tagName;
        return this.each(function() {
            var t = (new Date).getTime(),
                r = {
                    position: 0,
                    time: 0,
                    distance: 0,
                    newsArr: {},
                    play: !0,
                    paused: !1,
                    contentLoaded: !1,
                    dom: {
                        contentID: "#ticker-content-" + t,
                        tickerID: "#ticker-" + t,
                        wrapperID: "#ticker-wrapper-" + t,
                        revealID: "#ticker-swipe-" + t,
                        revealElem: "#ticker-swipe-" + t + " SPAN",
                        controlsID: "#ticker-controls-" + t,
                        prevID: "#prev-" + t,
                        nextID: "#next-" + t
                    }
                };
            if ("UL" != i && "OL" != i) return a("Cannot use <" + i.toLowerCase() + "> type of element for this plugin - must of type <ul> or <ol>"), !1;

            function d(e) {
                var t, n = 0;
                for (t in e) e.hasOwnProperty(t) && n++;
                return n
            }

            function a(e) {
                n.debugMode && (window.console && window.console.log ? window.console.log(e) : alert(e))
            }

            function c() {
                r.contentLoaded = !0, e(r.dom.contentID).html(r.newsArr["item-" + r.position].content), r.position == d(r.newsArr) - 1 ? r.position = 0 : r.position++, distance = e(r.dom.contentID).width(), time = distance / n.speed,
                    function() {
                        if (e(r.dom.contentID).css("opacity", "1"), !r.play) return !1;
                        "reveal" == n.displayType ? e(r.dom.revealElem).show(0, function() {
                            e(r.dom.contentID).show(), animationAction = "ticker-dir-right" == n.direction ? {
                                marginRight: distance + "px"
                            } : {
                                marginLeft: distance + "px"
                            }, e(r.dom.revealID).css("margin-" + n.direction, "0px").delay(20).animate(animationAction, time, "linear", s)
                        }) : (e(r.dom.revealID).hide(), "flipY" == n.displayType ? e(r.dom.contentID).fadeIn(n.fadeInSpeed, function() {
                            setTimeout(function() {
                                s()
                            }, 10)
                        }) : e(r.dom.contentID).velocity("stop").velocity("transition." + n.displayType + "In", {
                            duration: n.fadeInSpeed,
                            complete: function() {
                                setTimeout(function() {
                                    s()
                                }, 10)
                            }
                        }))
                    }()
            }

            function s() {
                r.play ? "reveal" == n.displayType ? (e(r.dom.contentID).delay(n.pauseOnItems).fadeOut(n.fadeOutSpeed), e(r.dom.revealID).hide(0, function() {
                    e(r.dom.contentID).fadeOut(n.fadeOutSpeed, function() {
                        e(r.dom.wrapperID).find(r.dom.revealElem + "," + r.dom.contentID).hide().end().find(r.dom.tickerID + "," + r.dom.revealID).show().removeAttr("style"), c()
                    })
                })) : "flipY" == n.displayType ? e(r.dom.contentID).delay(n.pauseOnItems).fadeOut(n.fadeOutSpeed, function() {
                    c()
                }) : e(r.dom.contentID).velocity("stop").velocity("transition." + n.displayType + "Out", {
                    delay: n.pauseOnItems,
                    duration: n.fadeOutSpeed,
                    complete: c
                }) : e(r.dom.revealElem).hide()
            }

            function l() {
                r.play = !1, r.pause = !0, "reveal" != n.displayType ? ($content = e(r.dom.wrapperID).find(r.dom.contentID), $content.removeAttr("style").show(), e.Velocity.hook($content, "translateY", "0"), e.Velocity.hook($content, "translateX", "0"), e.Velocity.hook($content, "perspective", "0"), e.Velocity.hook($content, "rotateY", "0"), e.Velocity.hook($content, "rotateX", "0")) : (e(r.dom.tickerID + "," + r.dom.revealID + "," + r.dom.revealElem + "," + r.dom.contentID).stop(!0, !0), e(r.dom.revealID + "," + r.dom.revealElem).hide(), e(r.dom.wrapperID).find(r.dom.contentID).show())
            }

            function p() {
                r.play = !0, r.paused = !1, s()
            }

            function m(t) {
                switch (l(), t) {
                    case "prev":
                        0 == r.position ? r.position = d(r.newsArr) - 2 : 1 == r.position ? r.position = d(r.newsArr) - 1 : r.position = r.position - 2, e(r.dom.contentID).html(r.newsArr["item-" + r.position].content);
                        break;
                    case "next":
                        e(r.dom.contentID).html(r.newsArr["item-" + r.position].content)
                }
                r.position == d(r.newsArr) - 1 ? r.position = 0 : r.position++, p()
            }
            "rtl" == n.direction ? n.direction = "ticker-dir-right" : n.direction = "ticker-dir-left", null != n.displayType && null != n.displayType && "" != n.displayType || (n.displayType = "flipY"),
                function() {
                    (function() {
                        if (0 == r.contentLoaded) {
                            if (!(e(o + " LI").length > 0)) return a("Couldn't find HTML any content for the ticker to use!"), !1;
                            e(o + " LI").each(function(t) {
                                r.newsArr["item-" + t] = {
                                    content: e(this).html()
                                }
                            })
                        }
                    })(), e(o).wrap('<div id="' + r.dom.wrapperID.replace("#", "") + '"></div>'), e(r.dom.wrapperID).children().remove(), e(r.dom.wrapperID).append('<div id="' + r.dom.tickerID.replace("#", "") + '" class="ticker"><p id="' + r.dom.contentID.replace("#", "") + '" class="ticker-content"></p><div id="' + r.dom.revealID.replace("#", "") + '" class="ticker-swipe"><span>\x3c!-- --\x3e</span></div></div>'), e(r.dom.wrapperID).removeClass("no-js").addClass("ticker-wrapper has-js " + n.direction), e(r.dom.tickerElem + "," + r.dom.contentID).hide(), n.controls && (e(document).on("click", e(r.dom.controlsID), function(e) {
                        var t = e.target.id;
                        switch (t) {
                            case r.dom.prevID.replace("#", ""):
                                m("prev");
                                break;
                            case r.dom.nextID.replace("#", ""):
                                m("next")
                        }
                    }), e(r.dom.wrapperID).append('<ul id="' + r.dom.controlsID.replace("#", "") + '" class="breaking-news-nav slider-arrow-nav "><li id="' + r.dom.prevID.replace("#", "") + '" class="jnt-prev controls"></li><li id="' + r.dom.nextID.replace("#", "") + '" class="jnt-next controls"></li></ul>'));
                    "reveal" == n.displayType && e(r.dom.contentID).mouseenter(function() {
                        l()
                    }).mouseleave(function() {
                        p()
                    });
                    c()
                }()
        })
    }, e.fn.ticker.defaults = {
        speed: .2,
        debugMode: !1,
        controls: !1,
        direction: "ltr",
        pauseOnItems: 2e3,
        fadeInSpeed: 600,
        fadeOutSpeed: 300,
        displayType: "reveal"
    }
}(jQuery);
jQuery(document).ready(function() {
    'use strict';
    var $breakingNews = jQuery('.breaking-news');
    if ($breakingNews.length) {
        $breakingNews.each(function() {
            var $this = jQuery(this);
            if ($this.find('li').length) {
                $this.ticker({
                    speed: 0.2,
                    pauseOnItems: ($this.data('speed')) ? $this.data('speed') : 2000,
                    fadeInSpeed: 600,
                    fadeOutSpeed: 300,
                    controls: ($this.data('arrows')) ? true : false,
                    direction: is_RTL ? 'rtl' : 'ltr',
                    displayType: ($this.data('type')) ? $this.data('type') : 'reveal',
                });
            }
        });
    }
});