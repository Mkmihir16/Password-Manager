var tl=gsap.timeline()
tl.from(".heading h1",{
    
    opacity:0.2,
    stagger:1
})
tl.from(".heading h1 span img",{
x:150,
opacity:0,
duration:0.8
})
tl.from(".img2",{
    x:-150,
    opacity:0,
    duration:1,
    
    })

gsap.from(".scrolldown p",{
    y:-30,
    yoyo:true,
    repeat:-1,
    duration:0.5
    })

