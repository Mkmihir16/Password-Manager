
var tl=gsap.timeline()
tl.from(".heading h1",{
    
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
        
          
