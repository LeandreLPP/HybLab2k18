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

var videos = document.getElementsByTagName("video");
for(var i = 0; i < videos.length; i++) {
  videos[i].hidden = true;
}

// Show back previous slide video after it as been hidden
ws.el.addEventListener('ws:slide-change', function(e) {
  var videos = document.getElementsByTagName("video");
  for(var i = 0; i < videos.length; i++) {
    videos[i].hidden = true;
  }
  var num = e.detail.currentSlide;
  var section = document.getElementById("section-" + num);
  if(section !== null){
    var video = section.getElementsByTagName("video")[0];
    if(video !== undefined){
      video.hidden = false;
    }
  }
});

function playSound(){
  for(var i = 3; i < 8; i++){
    var video = document.getElementById("s" + i + "-video");
    if(video.muted){
        video.muted = false;
        console.log("unmuted");
    }else {
        video.muted = true;
        console.log("muted");
    }
  }
}