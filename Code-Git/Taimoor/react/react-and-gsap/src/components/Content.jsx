import React, { useEffect, useRef } from 'react';
import './Content.css';
import gsap from 'gsap';

const Content = ({tl}) => {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(()=>{
        gsap.set(h1.current, {
            y: 100,
            skewY: 10,
            opacity: 0,
        })

        gsap.set(pText.current, {
            y: 100,
            skewY: 10,
            opacity: 0,
        })

        gsap.set(btn.current, {
            y: 100,
            skewY: 10,
            opacity: 0,
        })

        tl.to([h1.current, pText.current, btn.current], {
            y: 0,
            skewY: 0,
            stagger: .4,
            duration: .7,
            opacity: 1,
            ease: "power4.Out",
        }, "-=1");
    }, [])
    return (
        <div className='content'>
            <h1 className="content-inner-bold" ref={h1}>
                <div>Hard Work beats talent</div>
                <br />
                <div>When talent doesn't work hard.</div>
            </h1>
            <p ref={pText}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia expedita, deserunt, unde cupiditate id temporibus obcaecati in voluptatibus maxime, reprehenderit nisi nesciunt fugiat sapiente beatae. Maiores fugit nam sapiente perspiciatis.
            </p>
            <button ref={btn}>Explore</button>
        </div>
    );
};

export default Content;