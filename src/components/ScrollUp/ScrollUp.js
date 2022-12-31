import React from 'react';
import "./ScrollUp.css";
const ScrollUp = () => {
    function scrollUp() {
        const scrollUp = document.getElementById("scroll-up");
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollUp);
    return (
        <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
        // <a href="#" className="scrollup">
        //     <i className="uil uil-arrow-up scrollup__icon"></i>
        // </a>
    );
};

export default ScrollUp;