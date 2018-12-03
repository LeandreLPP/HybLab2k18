function playSaignee(){
    var video = document.getElementById("s3-video");
    if(video.muted){
        video.muted = false;
        console.log("unmuted");
    }else {
        video.muted = true;
        console.log("muted");
    }
}