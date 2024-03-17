function splitText(selector){
    let element = document.querySelector(selector);
    if(element){
        let text = element.innerText;
        let splitedText = text.split('').map(e=>{
            return `<span>${e==" " ? "&nbsp;&nbsp;" : e}</span>`;
        }).join('');

        element.innerHTML = splitedText;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    splitText('.header-text h1');
    splitText('.send h1');

    gsap.to('.header-text h1 span', {
        top: 0,
        duration: 1,
        ease: "power4.out",
        stagger: .075,
    })

    gsap.from('.cta, .nav, .tagline, .links', {
        opacity: 0,
        duration: 1,
        stagger: .1,
        delay: 1
    })
});

document.addEventListener('DOMContentLoaded', ()=>{
    const toggleBtn = document.querySelector('#toggle, #back');
    const toggleBtn2 = document.querySelector('#back');
    let isOpen = false;

    const timeline = gsap.timeline({paused: true});

    timeline.to('.overlay', {
        opacity: 1,
        duration: .3,
        pointerEvents: "all",
        display: 'flex',
    })

    timeline.to('.send h1 span', {
        top: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.075,
    })

    toggleBtn.addEventListener('click', ()=>{
        if(isOpen){
            timeline.reverse();
        }
        else{
            timeline.play();
        }
        isOpen = !isOpen;
    })

    toggleBtn2.addEventListener('click', ()=>{
        if(isOpen){
            timeline.reverse();
        }
        else{
            timeline.play();
        }
        isOpen = !isOpen;
    })
});