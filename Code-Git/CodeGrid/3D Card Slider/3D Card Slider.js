CustomEase.create("cubic", "0.83, 0, 0.17, 1");
let isAnimating = false;

// 그냥 문자열 분리하는 함수
function splitTextIntoSpans(selector){
    let elements = document.querySelectorAll(selector);
    elements.forEach(element=>{
        let text = element.innerText;
        let splitText = text.split("").map(function(char){
            return `<span>${char == " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
        element.innerHTML = splitText;
    });
}

function initializeCards(){
    let cards = Array.from(document.querySelectorAll('.card'));
    gsap.to(cards, {
        y: (i) => -15 + 15 * i + '%',
        z: (i) => 15 * i,
        duration: 1,
        ease: "cubic",
        stagger: -.1,
    })
}

document.addEventListener('DOMContentLoaded', function(){
    splitTextIntoSpans(".copy h1");
    initializeCards();

    gsap.set("h1 span", {y: -200});
    gsap.set(".slider .card:last-child h1 span", {y: 0});
})

document.querySelector('.container').addEventListener('mousewheel', ()=>{
    if (isAnimating){
        return;
    }

    isAnimating = true;

    let slider = document.querySelector('.slider');
    let cards = Array.from(slider.querySelectorAll('.card'));
    let lastCard = cards.pop();
    console.log(cards);
    let nextCard = cards[cards.length - 1];

    gsap.to(lastCard.querySelectorAll('h1 span'), {
        y: 200,
        duration: 0.75,
        ease: 'cubic',
    });

    gsap.to(lastCard, {
        y: "+=150%",
        duration: 0.75,
        ease: "cubic",
        onComplete: () =>{
            slider.prepend(lastCard);
            initializeCards();
            gsap.set(lastCard.querySelectorAll("h1 span"), {y : -200});
            setTimeout(()=>{
                isAnimating = false;
            }, 1000)
        }
    })
    gsap.to(nextCard.querySelectorAll("h1 span"), {
        y: 0,
        duration: 1,
        ease: "cubic",
        stagger: 0.05,
    })
})