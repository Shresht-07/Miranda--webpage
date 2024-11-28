const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page1(){
    var tl = gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0
})
tl.to("#page1",{
    y:"10vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    scale:1,
    rotate:360,
    duration:1,
    delay:0.8
})
}

function page5(){
    var anda = document.querySelector(".anda")
var tl2 = gsap.timeline()

anda.addEventListener("mouseenter",function(){
    tl2.to(".anda h1",{
        x:"150%",
        opacity:0,
        duration:0.3,
        ease: "expoScale(0.5,7,none)"
    })
    tl2.to(".anda img",{
        x:"175%",
        opacity:1,
        duration:0.5,
        ease: "expoScale(0.5,7,none)"
    })
})

anda.addEventListener("mouseleave",function(){
    tl2.to(".anda img",{
        x:"-22%",
        opacity:0,
        duration:0.3,
        ease: "expoScale(0.5,7,none)"

    })
    tl2.to(".anda h1",{
        x:"0%",
        opacity:1,
        duration:0.3,
        ease: "expoScale(0.5,7,none)"
    })
})
}

page1()
page5()

function clip(){
 var div1 = document.querySelector(".div-1")
var div2 = document.querySelector(".div-2")
var div3 = document.querySelector(".div-3")
var div4 = document.querySelector(".div-4")

div1.addEventListener("mouseenter",function(){
    gsap.to(".div-2,.div-3,.div-4",{
        x:"45%",
        duration:0.3
    })
})
div2.addEventListener("mouseenter",function(){
    gsap.to(".div-3,.div-4",{
        x:"35%",
        duration:0.3
    })
})
div3.addEventListener("mouseenter",function(){
    gsap.to(".div-4",{
        x:"35%",
        duration:0.3
    })
})

div1.addEventListener("mouseleave",function(){
    gsap.to(".div-2,.div-3,.div-4",{
        x:0,
        duration:0.3
    })
})
div2.addEventListener("mouseleave",function(){
    gsap.to(".div-3,.div-4",{
        x:0,
        duration:0.3
    })
})
div3.addEventListener("mouseleave",function(){
    gsap.to(".div-4",{
        x:0,
        duration:0.3
    })
})
}

clip()
