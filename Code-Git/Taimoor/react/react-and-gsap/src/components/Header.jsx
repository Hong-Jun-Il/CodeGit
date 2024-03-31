import React, { useRef, useEffect } from 'react';
import "./Header.css";
import gsap from 'gsap';

const Header = ({ tl, ease }) => {
    let logo = useRef(null);
    let menuItem1 = useRef(null);
    let menuItem2 = useRef(null);
    let menuItem3 = useRef(null);

    useEffect(() => {
        gsap.set(logo.current, {
            opacity: 0,
            y: '100',
        });
        gsap.set([menuItem1.current, menuItem2.current, menuItem3.current], {
            opacity: 0,
            y: -200,
        })

        tl.to(logo.current, {
            opacity: 1,
            y: 0,
            duration: .8,
        })
        .to([menuItem1.current, menuItem2.current, menuItem3.current], {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: ease,
            duration: 1,
        }, '-=.3');
    }, []);

    return (
        <div className='header'>
            <div className="logo" ref={logo}>
                Logo
            </div>
            <div className="menu">
                <div className="menu-item" ref={menuItem1}>About</div>
                <div className="menu-item" ref={menuItem2}>Journal</div>
                <div className="menu-item" ref={menuItem3}>Contact</div>
            </div>
        </div>
    );
};

export default Header;
