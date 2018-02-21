(function App() {

    "use strict";

    const APP_TITLE = "BlackPWA";

    /**
     * Toggles full screen mode.
     * @see {@link https://developers.google.com/web/fundamentals/native-hardware/fullscreen/}
     * @returns {void}
     */
    function toggleFullScreen() {
        const doc = window.document;
        const docEl = doc.documentElement;
        const requestFullScreen =
            docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const exitFullscreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            exitFullscreen.call(doc);
        }
    }

    document.body.addEventListener("dblclick", () => {
        toggleFullScreen();
        document.title = APP_TITLE;
    });

    // Disable context menu
    document.addEventListener("contextmenu", event => event.preventDefault());

}());
