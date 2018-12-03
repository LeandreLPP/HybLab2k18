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

if(ws.isMoving){
  //var video = ws.el.getElementsByClass()[0];
  console.log("coucou");
}

ws.slides.forEach(slide => {
  console.log(slide);
  slide.addEventListener("dom:enter", event => console.log(event));
  if(slide !== null){
    slide.addEventListener("dom:enter", event => {
      console.log(event);
    });
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

// Show back previous slide video after it as been hidden
// ws.el.addEventListener('ws:slide-change', function(e) {
//   var num = e.detail.currentSlide0;
//   console.log("Slide : " + num);
//   var section = document.getElementById("section-" + num);
//   if(section !== null){
//     var video = section.querySelector("video");
//     console.log(video);
//     if(video !== null){
//       video.hidden = false;
//     }
//   }
// });