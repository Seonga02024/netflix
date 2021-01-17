const nextbtn = document.querySelector(".next");
const nav = document.querySelector(".nav");
const column = document.querySelector(".column");
const prevbtn = document.querySelector(".prev");
var chatnumber = document.querySelectorAll(".chatnumber");
var chatnum=0;

function changeChat(){
    for(var i=0; i<chatnumber.length; i++){
        var item = chatnumber.item(i);
        if(i == chatnum){
            item.classList.add("current-chat");
        }
        else{
            item.classList.remove("current-chat");
            //item.hasAttribute("current-chat")
        }
    }
}

function changeBtn(){
    if(chatnum == 0){
        prevbtn.classList.add("btn-none");
    }else{
        prevbtn.classList.remove("btn-none");
    }
}

function nextBtnClick(){
    nav.scrollLeft += 2780;
    chatnum++;
    changeChat();
    changeBtn();
}

function prevBtnClick(){
    nav.scrollLeft -= 2780;
    chatnum--;
    changeChat();
    changeBtn();
}

function init(){
    nextbtn.addEventListener("click",nextBtnClick);
    prevbtn.addEventListener("click",prevBtnClick);
}

init();

/*const dots = document.querySelectorAll(`.column`);
let slideIndex = 0;
showSlide();

const nav = document.querySelector(`.nav`);
const prev = document.querySelector(`.prev`);
const next = document.querySelector('.next');

next.addEventListener('click', ()=>{
    nav.scrollLeft += dots[0].offsetWidth;
    alert('aaa');
})
alert('11');

var btn = document.getElementsByClassName('')*/