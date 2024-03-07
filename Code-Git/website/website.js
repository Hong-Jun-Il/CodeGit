// intro gsap

function introAnimation() {
    gsap.to('.vertical-line1', {
        delay: 1,
        display: 'block',
    });

    gsap.to('.vertical-line2', {
        delay: 1,
        display: 'block',
    });

    gsap.to('.horizontal-line1', {
        delay: 2.25,
        display: 'block',
    });

    gsap.to('.horizontal-line2', {
        delay: 2.25,
        display: 'block',
    });

    gsap.to('.vertical-line1', {
        delay: .5,
        ease: 'power4.inOut',
        duration: 2,
        height: '40vh',
    });

    gsap.to('.vertical-line2', {
        delay: .5,
        ease: 'power4.inOut',
        duration: 2,
        height: '40vh',
    });

    gsap.to('.horizontal-line1', {
        delay: 2,
        ease: 'power4.inOut',
        duration: 2,
        width: '45vw',
    });

    gsap.to('.horizontal-line2', {
        delay: 2,
        ease: 'power4.inOut',
        duration: 2,
        width: '45vw',
    });

    gsap.to('.block-top-text', {
        delay: 3,
        ease: 'power4.inOut',
        duration: 1.5,
        autoAlpha: 1,
    });

    gsap.to('.block-bottom-text', {
        delay: 3.5,
        ease: 'power4.inOut',
        duration: 1.5,
        autoAlpha: 1,
    });

    gsap.to('.center-line', {
        delay: 4,
        ease: 'power4.inOut',
        duration: 2,
        width: '40vw',
    });

    gsap.to('.center-line', {
        delay: 4.2,
        ease: 'power4.inOut',
        duration: 2,
        width: '100%',
    });

    gsap.to('.block-top', {
        top: '-50%',
        ease: 'power3.inOut',
        delay: 6,
        duration: 2,
    });

    gsap.to('.block-bottom', {
        bottom: '-50%',
        delay: 6,
        ease: 'power3.inOut',
        duration: 2,
    });

    gsap.to('.lines', {
        delay: 6.8,
        autoAlpha: 0,
        ease: 'power3.inOut',
        duration: 1,

        onComplete: () => {
            addBoxAnimation();
            addTextAnimation();
        }
    });
}

// section1

function addBoxAnimation() {
    const revealSpan = document.querySelectorAll('#section1 .section-content .text-wrapper .h1-wrapper span');
    let delay = 0.5;

    revealSpan.forEach((span) => {
        span.style.animation = 'text_reveal_box 1s ease forwards';
        span.style.animationDelay = `${delay}s`;
        delay += 1;
    });
}

function addTextAnimation() {
    const revealText = document.querySelectorAll('#section1 .section-content .text-wrapper .h1-wrapper h1');
    let delay = 1;

    revealText.forEach((h1) => {
        h1.style.animation = 'text_reveal 1s ease forwards';
        h1.style.animationDelay = `${delay}s`;
        delay += 1;
    })

}

function jumpingAnimation() {
    const jumps = document.querySelectorAll('.jumping-letters');

    jumps.forEach((jump) => {
        jump.addEventListener('mouseover', () => {
            jump.classList.add('jump');
        });
    });

    jumps.forEach((jump) => {
        jump.addEventListener('animationend', () => {
            jump.classList.remove('jump');
        });
    });
}

// section2

function aboutSecAni() {
    gsap.from('#section2 .letter', {
        duration: .4,
        opacity: 0,
        stagger: .1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .letter',
            start: 'top 95%',
        }
    })

    gsap.to('#section2 .line', {
        duration: 1,
        opacity: 1,
        width: '82%',
        delay: .3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .letter',
            start: 'top 75%',
        }
    })

    gsap.from('#section2 .text-wrapper', {
        duration: 1,
        opacity: 0,
        delay: .15,
        y: 50,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section2 .text-wrapper',
            start: 'top 80%',
        }
    })
}

// section3

function projectSecAni() {
    gsap.from('#section3 .letter', {
        duration: .4,
        opacity: 0,
        stagger: .1,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section3 .letter',
            start: 'top 95%',
        }
    })

    gsap.to('#section3 .line', {
        duration: 1,
        opacity: 1,
        width: '82%',
        delay: .3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '#section3 .letter',
            start: 'top 75%',
        }
    })
    document.querySelectorAll('.project-item').forEach(item => {
        gsap.from(item, {
            opacity: 0,
            duration: .8,
            scale: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: item,
                start: 'top 100%',
            },
            onComplete: selectFunc()
        })
    });
}

function cursorShowImg() {
    const sec3 = document.querySelector('#section3');
    const c = document.querySelector('.project-cursor');
    const projectItem = document.querySelectorAll('#section3 .col .project-item');
    const div = document.querySelectorAll('.project-cursor > div');
    const img = document.querySelectorAll('.bottom img')

    sec3.addEventListener('mousemove', (e) => {
        let x = e.clientX;
        let y = e.clientY;

        c.style.transform = `translate(${x}px, ${y}px)`;

        projectItem.forEach((e) => {
            e.addEventListener('mouseenter', (e) => {
                if (e.target === projectItem[0]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[0].classList.add('visible');
                }
                else if (e.target === projectItem[1]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[1].classList.add('visible');
                }
                else if (e.target === projectItem[2]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[2].classList.add('visible');
                }
                else if (e.target === projectItem[3]) {
                    img.forEach((e) => {
                        e.style.animation = 'an 5s linear infinite';
                        e.style.animationDelay = e.dataset.delay;
                    });
                    div[3].classList.add('visible');
                }
            })

            e.addEventListener('mouseleave', (e) => {
                img.forEach((e) => {
                    e.style.animation = '';
                })
                div.forEach((e) => {
                    e.classList.remove('visible');
                })
            })
        })
    });
}

function selectFunc() {
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach((e) => {
        e.addEventListener('mouseenter', (e) => {
            e.target.style.transform = 'scale(1.03)';
            e.target.style.transition = '.4s';
            e.target.style.filter = 'grayscale(.8)';
            document.querySelectorAll('section').forEach((section) => {
                section.style.backgroundColor = `#${e.target.dataset.color}`;
            });
        })
        e.addEventListener('mouseleave', (e) => {
            e.target.style.transform = 'scale(1.00)';
            e.target.style.transition = '.4s';
            e.target.style.filter = 'grayscale(0)';
            document.querySelectorAll('section').forEach((section) => {
                section.style.background = '#1c1a1a';
            });
        })

    });
}

// introAnimation();
addBoxAnimation();
addTextAnimation();
jumpingAnimation();
aboutSecAni();
projectSecAni();
cursorShowImg();