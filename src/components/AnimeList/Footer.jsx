"use client"
import { useEffect, useState } from 'react';
import 'animate.css/animate.min.css';

const Button = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than 0
            const isScrolled = window.scrollY > 0;
            setShowButton(isScrolled);
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div >
            {/* HANDLE TOP PAGE SCROLL */}
            {showButton && (
                <section
                    className="fixed bottom-2 right-2 shadow-inner shadow-color-accent bg-color-hitam rounded-md border  hover:bg-color-accent hover:border-color-dark duration-500 transition-all animate__animated animate__slideInLeft  animate__delay-6s"
                    style={{
                        transition: 'opacity 0.4s ease-in-out',
                        opacity: 1,
                    }}
                >
                    <button onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" className="hover:fill-color-hitam duration-500 transition-all" fill="#fff" viewBox="0 0 256 256">
                            <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path>
                        </svg>
                    </button>
                </section>
            )}
            {/* HANDLE TOP PAGE SCROLL END */}
        </div>
    );
};

export default Button;
