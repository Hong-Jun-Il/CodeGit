const tl = gsap.timeline();
const sec = document.querySelectorAll(".sec");
const li = document.querySelectorAll('li');
let i = 3;
let isAnimating = false;
let currentSection = document.querySelector('.sec1');

li.forEach(e => {
    e.addEventListener("click", () => {
        const dataTarget = e.getAttribute('data-target');
        const target = document.querySelector(`.${dataTarget}`);
        if (currentSection == target || isAnimating) {
            console.log('현재 섹션이거나 애니메이션 중');
            return;
        }
        currentSection = target;
        isAnimating = true;

        tl.fromTo(target, {
            zIndex: i++,
            left: '200%',
            duration: 2,
            scale: .5,
            ease: 'power4.inOut',
        }, {
            duration: 2,
            left: '50%',
            scale: .5,
            transform: 'translateX(-50%)',
            ease: 'power4.inOut',
        })
        .to(target, {
                scale: 1,
                ease: 'power4.inOut',
                duration: 1.5,
                onComplete: ()=>{
                    isAnimating = false;
                }
            })
    })
})