const top_bar = document.querySelector(".top-bar");

function scrollEvent(){
    if(document.documentElement.scrollTop > 0){
        top_bar.classList.add("top-bar-down");
    }else{
        top_bar.classList.remove("top-bar-down");
    }
}

function init(){
    document.addEventListener("scroll", scrollEvent);
}

init();