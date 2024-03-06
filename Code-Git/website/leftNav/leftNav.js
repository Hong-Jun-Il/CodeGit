const hamburger = document.querySelector('.hamburger');
const leftNav = document.querySelector('.left-nav');
const booklet = document.querySelector('.booklet');
const menus = document.querySelectorAll('.left-nav-menu .lnm a');
const bookletATag = document.querySelectorAll('.booklet a');
const home = document.querySelectorAll('.logo, .left-nav-menu > .lnm a');
const tl = gsap.timeline();

hamburger.addEventListener('click', (e) => {
    e.target.classList.toggle('hamburgerClicked');
    leftNav.classList.toggle('hamburgerClicked');
    openAndCloseNavbar();
})

menus.forEach(menu => {
    menu.addEventListener('mouseover', () => {
        leftNav.style.backgroundColor = 'rgb(31, 30, 30)';
        booklet.style.backgroundColor = 'rgb(31, 30, 30)';
        menus.forEach(e => {
            e.style.color = '#dee2e6';
        })
        bookletATag.forEach(e => {
            e.style.color = '#dee2e6';
        })
        document.querySelector('.icon').classList.add('menusHovered');
    })

    menu.addEventListener('mouseout', () => {
        booklet.style.backgroundColor = '#e9ecef';
        leftNav.style.backgroundColor = '#e9ecef';
        menus.forEach(e => {
            e.style.color = '#1c1a1a';
        })
        bookletATag.forEach(e => {
            e.style.color = '#1c1a1a';
        })
        document.querySelector('.icon').classList.remove('menusHovered');
    })
})

home.forEach(e => {
    e.addEventListener('click', () => {
        leftNav.classList.remove('hamburgerClicked');
        hamburger.classList.remove('hamburgerClicked');
        openAndCloseNavbar();
    })
})

function openAndCloseNavbar() {
    if (leftNav.classList.contains('hamburgerClicked')) {
        gsap.to(booklet, {
            left: '95%',
            duration: 1,
            ease: 'Circ.easeInOut',
        })
        tl.to(leftNav, {
            left: '0%',
            duration: 1,
            ease: 'Circ.easeInOut',
        })
            .to(menus, {
                visibility: 'visible',
                ease: 'power3.out',
                duration: 1,
                stagger: .1,
                y: 0,
            })
    }
    else {
        tl.to(menus, {
            ease: 'power3.out',
            duration: 1,
            stagger: .1,
            y: '100%',
        })
            .to(menus, {
                visibility: 'hidden',
            })
            .to(leftNav, {
                left: '-95%',
                duration: 1,
                ease: 'Circ.easeInOut',
            }, '-=.75')
            .to(booklet, {
                left: '0%',
                duration: 1,
                ease: 'Circ.easeInOut',
            }, '-=1')
    }
}