//@formatter:off
// Intercom
(function() {var w = window;var ic = w.Intercom;window.intercomSettings = {app_id: "itogxoa0"};if (typeof ic === "function") {ic('reattach_activator');ic('update', intercomSettings);} else {var d = document;var i = function() {i.c(arguments)};i.q = [];i.c = function(args) {i.q.push(args)};w.Intercom = i;function l() {var s = d.createElement('script');s.type = 'text/javascript';s.async = true;s.src = 'https://widget.intercom.io/widget/itogxoa0';var x = d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);}if (w.attachEvent) {w.attachEvent('onload', l);} else {w.addEventListener('load', l, false);}}})();

// Jaco
(function(e,r){function n(e,r){e[r]=function(){e.push([r].concat(Array.prototype.slice.call(arguments,0)))}}function o(){var e=r.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),n=e?e[0]:null,o="; domain=."+n+"; path=/";r.cookie=r.referrer&&-1===r.referrer.indexOf(n)?"jaco_referer="+r.referrer+o:"jaco_referer="+t+o}var a="JacoRecorder",t="none";!function(e,r,t,i){if(!t.__VERSION){e[a]=t;for(var c=["init","identify","startRecording","stopRecording","removeUserTracking","setUserInfo"],s=0;s<c.length;s++)n(t,c[s]);o(),t.__VERSION=2.1,t.__INIT_TIME=1*new Date;var f=r.createElement("script");f.async=!0,f.setAttribute("crossorigin","anonymous"),f.src=i;var d=r.getElementsByTagName("head")[0];d.appendChild(f)}}(e,r,e[a]||[],"https://recorder-assets.getjaco.com/recorder_v2.js")}).call(window,window,document);
window.JacoRecorder.init("4bba8cf4-2bc3-4583-88cf-212c11e7ce65");
//@formatter:on

// auto focus on search input
$(document).ready(function() {
    $("[data-target='#mkdocs_search_modal']").click(function(e) {
        setTimeout(function() {
            $("#mkdocs-search-query").focus()
        }, 0)
    });

    var $navbarBrand = $('.navbar-brand');
    $navbarBrand.html('<img class="nav-logo" src="https://www.peer5.com/images/logo.png">');
    $navbarBrand.attr('href', '//www.peer5.com');
});

/** referrer hack */
(function() {
    var d = document;
    var isNonPeer5Referrer = !/(\/|\.)peer5\.com\//.test(d.referrer);
    var hasCookie = /(^|;?\s+)referrer=\w+/.test(d.cookie);
    if (!hasCookie && isNonPeer5Referrer) {
        d.cookie = 'referrer=' + d.referrer + '; path=/; expires=Thu, 01 Jan 2050 00:00:00 GMT; domain=.peer5.com';
        if (window.Intercom) window.Intercom('update', {"referrer": d.referrer});
    }
})();
