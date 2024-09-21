import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scroll-header' : ''}`}>
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Enoch Atuahene
                </a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        {["home", "about", "skills", "services", "portfolio", "contact"].map((item) => (
                            <li className="nav__item" key={item}>
                                <a 
                                    href={`#${item}`} 
                                    onClick={() => setActiveNav(`#${item}`)}
                                    className={activeNav === `#${item}` ? "nav__link active-link" : "nav__link"}
                                >
                                    <i className={`uil uil-${item === "home" ? "estate" : item} nav__icon`}></i> {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;