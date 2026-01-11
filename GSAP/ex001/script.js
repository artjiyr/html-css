gsap.fromTo(".quadrado", {
    x: -200,
    y:100,
    duration: 1
},
{
    x:100,
    y:-200,
    backgroundColor: "green",
    duration: 3,
    rotation: 0,
    stagger: .5,
    ease: "back.out(1.7)",
    repeat: -1,
    yoyo: true,
    rotation: 360,
    opacity: 1,
})