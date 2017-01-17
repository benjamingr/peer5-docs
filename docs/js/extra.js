(function() {
    var w = window;
    var ic = w.Intercom;
    window.intercomSettings = {
        app_id: "itogxoa0"
    };
    if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', intercomSettings);
    } else {
        var d = document;
        var i = function() {i.c(arguments)};
        i.q = [];
        i.c = function(args) {i.q.push(args)};
        w.Intercom = i;
        function l() {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/itogxoa0';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }

        if (w.attachEvent) {
            w.attachEvent('onload', l);
        } else {
            w.addEventListener('load', l, false);
        }
    }
})();

!function(e, t) {
    var r = 'JacoRecorder';
    !function(e, t, n, o) {
        function c(e, t) {e[t] = function() {e.q.push([t].concat(Array.prototype.slice.call(arguments, 0)))}}

        if (!n.__VERSION) {
            e[r] = n, n.q = [];
            for (var a = ['init', 'identify', 'startRecording', 'stopRecording', 'setUserInfo'], i = 0; i < a.length; i++)c(n, a[i]);
            n.__VERSION = .8, n.__INIT_TIME = 1 * new Date;
            var s = t.createElement('script');
            s.async = !0, s.setAttribute('crossorigin', 'anonymous'), s.src = o;
            var u = t.getElementsByTagName('script')[0];
            u.parentNode.insertBefore(s, u)
        }
    }(e, t, e[r] || [], '//bo.getjaco.com/build/recorder.js')
}(window, document);
window.JacoRecorder.init('4bba8cf4-2bc3-4583-88cf-212c11e7ce65', {});

// auto focus on search input
$(document).ready(function() {
    $("[data-target='#mkdocs_search_modal']").click(function(e) {
        setTimeout(function () {
            $("#mkdocs-search-query").focus()
        }, 0)
    });

    var $navbarBrand = $('.navbar-brand');
    $navbarBrand.html('<img class="nav-logo" src="https://www.peer5.com/images/logo.png">');
    $navbarBrand.attr('href', '//www.peer5.com');
});

/** referrer hack */
(function(){
    var d = document;
    if (d.referrer && d.referrer.indexOf(d.location.origin) === -1) {
        document.cookie = 'referrer=' + d.referrer + '; path=/; expires=Thu, 01 Jan 2030 00:00:00 GMT; domain=.peer5.com';
        if (window.Intercom) window.Intercom('update', {"referrer": d.referrer});
    }
})();
