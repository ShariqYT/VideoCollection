var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "assets/img/sun.png";
    }else{
        icon.src = "assets/img/moon.png";
    }
}

let listVideo = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
    };
});