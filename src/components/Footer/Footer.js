import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sha Neoyaj</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.linkedin.com/in/sha-neoyaj-alam-khondaker-9a9ab7206/ " className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/roccorizz" className="footer__social-link" target="_blank"><i class="uil uil-github"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; Sha Neoyaj Alam. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;