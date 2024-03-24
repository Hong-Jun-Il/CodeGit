import React, { useEffect, useRef } from 'react';
import "./Images.css"
import gsap from 'gsap';

const Images = ({tl, ease}) => {
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    useEffect(()=>{
        gsap.set([box1.current, box2.current, box3.current], {
            y: 1000,
            scale: 2,
            opacity: 0,
        });

        tl.to([box1.current, box2.current, box3.current], {
            y: 0,
            duration: 1.2,
            ease: ease,
            scale: 1,
            opacity: 1,
            stagger: .4
        }, '-=1')
    }, []);

    return (
        <div className='imgs'>
            <div className="box1" ref={box1}></div>
            <div className="box2" ref={box2}></div>
            <div className="box3" ref={box3}></div>
        </div>
    );
};

export default Images;