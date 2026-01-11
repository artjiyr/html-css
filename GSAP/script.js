gsap.fromTo(".quadrado", {
    x: -200,
    y:100,
    opacity: 0,
    duration: 1
},
{
    x:100,
    y:-200,
    backgroundColor: "green",
    duration: 5,
    rotation: 0,
    stagger: .5,
    ease: "elastic.out(1,0.3)",
    repeat: -1,
    yoyo: true,
    rotation: 360,
    opacity: 1,
})