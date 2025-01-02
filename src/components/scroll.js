import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Scroll = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


  return (
    <div className="fixed bottom-4 right-4">
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="bg-accent text-black p-2 rounded-xl shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition text-transform: uppercase"
            >
                <FaArrowUp size={30} />
            </button>
        )}
    </div>
  )
}

export default Scroll
