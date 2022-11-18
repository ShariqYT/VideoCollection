var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "assets/img/sun.png";
    }else{
        icon.src = "assets/img/moon.png";
    }
}