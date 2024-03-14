const splitText = () =>{
    const test = document.querySelector('.test');
    const splitedText = Array.from(test.innerText).map(e=>{
        return `<span>${e==' ' ? '&nbsp;&nbsp' : e}</span>`;
    }).join('');

    test.innerHTML = splitedText;
}

splitText();

document.addEventListener('DOMContentLoaded', ()=>{
    gsap.set('span', {
        y: 200,
        opacity: 0,
        rotation: 60,
    })
})

gsap.to('span', {
    y: 0,
    stagger: .1,
    opacity: 1, 
    ease: 'expo.inOut',
    duration: 1,
    rotation: 0,
})