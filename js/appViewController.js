document.addEventListener("DOMContentLoaded", function () {
    function isWebView() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Detect WebView on Android
        let isAndroidWebView = (userAgent.includes("wv") || userAgent.includes("Android") && userAgent.includes("Version"));
        
        // Detect WebView on iOS
        let isIOSWebView = (window.navigator.standalone === false) || (userAgent.includes("iPhone") || userAgent.includes("iPad") && !userAgent.includes("Safari"));

        return isAndroidWebView || isIOSWebView;
    }

    if (isWebView()) {
        document.querySelector(".testimonials").style.display = "none"; // Hide footer in WebView
        document.querySelector(".services").style.display = "none"; // Hide footer in WebView
        document.querySelector(".footer").style.display = "none"; // Hide footer in WebView
    }
});
