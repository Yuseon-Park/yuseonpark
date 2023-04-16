const toggleVideo = (ev) => {
    const EL = ev.currentTarget;
    const EL_video = EL.querySelector("video");
    const isPlay = ev.type === "mouseenter";
    EL_video[isPlay ? "play" : "pause"]();
};


const ELS_aVid = document.querySelectorAll(".hoverVid");

ELS_aVid.forEach(EL => {
    ["mouseenter", "mouseleave"]
    .forEach(evt => EL.addEventListener(evt, toggleVideo))
});


function openAndClose_drawer(elm) {
    var selected_drawer = elm.nextSibling.nextSibling;

    if (elm.classList.contains("opened")) {
        elm.classList.remove("opened")
        
        if (selected_drawer.classList.contains("closed")) {
        }
        else {
            selected_drawer.classList.add("closed")
        }
    }
    else {
        elm.classList.add("opened")
        selected_drawer.classList.remove("closed")
    }

    var hist_str = "#/temp"
    window.history.pushState(hist_str, 'Title', hist_str);

}
