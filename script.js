var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        icon.src = "../assets/img/sun.png";
    }else{
        icon.src = "../assets/img/moon.png";
    }
}

let suggestions = [

]

const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data = ''
        })
    }
}