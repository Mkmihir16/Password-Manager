
var tl=gsap.timeline()
function time()
{
    var a=0;
      setInterval(function(){
       a+=Math.floor(Math.random()*20);
       if(a<100)
       {
       document.querySelector(".loader h1").innerHTML=a+"%";
       }
       else{
        a=100;
        document.querySelector(".loader h1").innerHTML=a+"%"
       }
    }
    ,150)
}
gsap.from(".loader img",{
    top:"-150vh",
    scale:0,
    repeat:-1,
    duration:1.5
})

tl.to(".loader",{
    top:"-100vh",
    duration:2,
    delay:2
   
})
tl.to(".loader h1",{
    
    duration:1,
    delay:1,
    onStart:time()
})
gsap.from(".heading h1",{
    delay:2.2,
    opacity:0.2,
    stagger:1
})
tl.from(".heading h1 span img ,.img2",{
x:250,
opacity:0,
duration:0.8
})
// tl.from(".img2",{
//     x:-150,
//     opacity:0,
//     duration:1,
    
//     })
    tl.from(".btn",{
        opacity:0,
        rotation:360,
        scale:0,
        duration:1
    })

gsap.from(".scrolldown p",{
    y:-30,
    yoyo:true,
    repeat:-1,
    duration:0.5
    })
    gsap.from(" .main1 .box1",{
        scale:0,
        opacity:0,
        duration:1,
        stagger:1,
        scrollTrigger:{
            trigger:".box1",
            scroller:"body",
            // markers:true
        }    
        })
        gsap.from(".left-pos",{
            x:-30,
            opacity:0,
            duration:1.5,
            stagger:1,
            scrollTrigger:{
                trigger:".left-pos",
                scoller:"body",
                // markers:true,
                start:"top 40%"
            }
            
        })
        gsap.from(".right-pos",{
            x:30,
                opacity:0,
                duration:1.5,
            scrollTrigger:{
                trigger:".right-pos",
                scoller:"body",
                start:"top 40%"
            }
        })
        gsap.from(".right1 img",
        {
        scale:0,
        duration:1,
        rotation:360,
        scrollTrigger:{
            trigger:".right1 img",
            scroller:"body",
            // markers:true
        }
        })
        gsap.from(".left img",
        {
        scale:0,
        duration:1,
        stagger:1,
        rotation:360,
        scrollTrigger:{
            trigger:".left img",
            scroller:"body",
            // markers:true
        }
        })
        
          
