const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation() {
    let pageelem = document.querySelector(".page3");
    let fixedimg = document.querySelector(".fixed-image");
    pageelem.addEventListener("mouseenter", function () {
        fixedimg.style.display = "block";
    });
    pageelem.addEventListener("mouseleave", function () {
        fixedimg.style.display = "none";
    });

    let elem = document.querySelectorAll(".elem");
    elem.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let img = e.getAttribute("data-image");
            fixedimg.style.backgroundImage = `url(${img})`;
        })
    })
}

function navMenu(){
    let menu = document.querySelector("nav h3");
let navimg = document.querySelector("nav img")
let fullscr = document.querySelector(".full-scr");
let flag = 0;
menu.addEventListener("click",function(){
    if(flag == 0){
    fullscr.style.top = 0;
     navimg.style.opacity = 0;
    flag = 1;
    }else{
    fullscr.style.top = "-100%";
     navimg.style.opacity = 1;
    flag = 0;
    }
})
}

function intro(){
    let intro = document.querySelector(".intro");
setTimeout(function(){
    intro.style.top = "-110%";
},3000);
}

page3Animation();
navMenu();
intro();

