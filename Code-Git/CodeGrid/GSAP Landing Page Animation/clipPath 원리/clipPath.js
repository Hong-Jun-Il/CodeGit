window.addEventListener("DOMContentLoaded", ()=>{
    gsap.defaults({duration: 1, ease: 'power3.out'});
    const tl = gsap.timeline();

    tl.to(".item-main", {
        scale: .5
    }).to(".item-main", {
        scale: 1,
        duration: .55,
    }).to(".wrapper .item", {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger: .1
    })
})