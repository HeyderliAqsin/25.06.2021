var slideritems=document.querySelectorAll(".slider-item")

var next=document.querySelector(".next")
var prev=document.querySelector(".prev")


var currentSlider=0;

next.onclick=function(){  
currentSlider++
for(var i=0; i<slideritems.length;i++){
    slideritems[i].classList.remove("active")
}
if(currentSlider==slideritems.length){
    currentSlider=0
}
slideritems[currentSlider].classList.add("active")

}

prev.onclick=function(){  
currentSlider--
for(var i=0; i<slideritems.length;i++){
    slideritems[i].classList.remove("active")
}
if(currentSlider==-1){
    currentSlider=slideritems.length-1
}
slideritems[currentSlider].classList.add("active")

}