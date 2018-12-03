const ws = new WebSlides({
    autoslide: false,
    changeOnClick: false,
    loop: false,
    minWheelDelta: 40,
    navigateOnScroll: true,
    scrollWait: 450,
    slideOffset: 50,
    showIndex: false
  });

function _hide(htmlCollection, bool, tag) {
    var videos = htmlCollection.getElementsByTagName(tag);
    console.log(videos);
    for(var i = 0; i < videos.length; i++) {
        videos[i].hidden = bool;
    }
}

function hide(htmlCollection, bool) {
    _hide(htmlCollection, bool, "h1");
    _hide(htmlCollection, bool, "img");
    _hide(htmlCollection, bool, "div");
    _hide(htmlCollection, bool, "video");
}

hide(document, true);
ws.slides.forEach(element => {
    if(element.el.attributes.class.value.includes("current")) {
        hide(element.el, false);
    }
});

// Show back previous slide video after it as been hidden
ws.el.addEventListener('ws:slide-change', function(e) {
    hide(document, true);
    var num = e.detail.currentSlide;
    var section = document.getElementById("section-" + num);
    if(section !== undefined){
        hide(section, false);
    }
});

function playSound(){
    for(var i = 3; i < 8; i++){
        var video = document.getElementById("s" + i + "-video");
        if(video.muted){
            video.muted = false;
            console.log("unmuted");
        } else {
            video.muted = true;
            console.log("muted");
        }
    }
}
