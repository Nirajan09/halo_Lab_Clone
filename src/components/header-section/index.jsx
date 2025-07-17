import './style.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine } from 'react-icons/ri';
import { useState } from 'react';
import Menu from './Menu';
import { RxCross2 } from "react-icons/rx";

const NavbarSection = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isHamBurgerOpen,setIsHamBurgerOpen]=useState(false)
    return (
        <header
            className={`navbar ${isServicesOpen || isHamBurgerOpen ? 'no-border' : ''}`}
            onMouseLeave={() => setIsServicesOpen(false)}
        >
            <div className="navbar__left">
                <a href="/" className="navbar__logo">
                    <img
                        src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/65142d5754eafa29699ca491_logo.svg"
                        alt="Halo Lab Logo"
                    />
                </a>
            </div>

            <nav className="navbar__nav">
                <ul className="navbar__menu">
                    <li
                        className="navbar__item" id="services"
                        onMouseEnter={() => setIsServicesOpen(true)}
                    >
                        <a href="/" className="navbar__link">
                            Services{' '}
                            {isServicesOpen ? (
                                <RiArrowDropUpLine size={24} />
                            ) : (
                                <RiArrowDropDownLine size={24} />
                            )}
                        </a>
                    </li>

                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Dedicated Team</a></li>

                    <div
                        className="navbar__dropdown-wrapper"
                        onMouseEnter={() => {
                            setIsResourcesOpen(true);
                            setIsServicesOpen(false);
                        }}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                        <li className="navbar__item">
                            <a href="/" className="navbar__link">
                                Resources{' '}
                                {isResourcesOpen ? (
                                    <RiArrowDropUpLine size={24} />
                                ) : (
                                    <RiArrowDropDownLine size={24} />
                                )}
                            </a>
                        </li>
                    </div>

                    <li><a href="/">Pricing</a></li>
                </ul>
            </nav>

            <div className="navbar__right">
                <button className="navbar__contact">Contact Us</button>
            </div>

            <div className="navbar__hamburger" onClick={()=>setIsHamBurgerOpen(!isHamBurgerOpen)}>
                {!isHamBurgerOpen?
                <RxHamburgerMenu size={24} />:<RxCross2 />
                }
            </div>

            {isServicesOpen && (
                <div
                    className="services__dropdown"
                    onMouseEnter={() => {
                        setIsServicesOpen(true);
                        setIsResourcesOpen(false);
                    }}
                    onMouseLeave={() => setIsServicesOpen(false)}
                >
                    <div className="services__dropdown__columns">
                        <h4>Design</h4>
                        <div className="dropdown__column__design">
                            <div className="first">
                                {['UI/UX design', 'Product audit', 'Branding', 'Rebranding'].map((text) => (
                                    <div className="dropdown__column__row" key={text}>
                                        <span>{text}</span>
                                        <RiArrowDropRightLine className="hover-arrow" size={24} />
                                    </div>
                                ))}
                            </div>
                            <div className="first">
                                {['Web design', 'Landing page design', 'Mobile app design', 'Pitch deck design'].map((text) => (
                                    <div className="dropdown__column__row" key={text}>
                                        <div>{text}</div>
                                        <RiArrowDropRightLine className="hover-arrow" size={24} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="services__dropdown__columns">
                        <h4>Development</h4>
                        <div className="dropdown__column__development">
                            <div className="first">
                                {['Web development', 'Webflow development', 'MVP development', 'CMS development'].map((text) => (
                                    <div className="dropdown__column__row" key={text}>
                                        <span>{text}</span>
                                        <RiArrowDropRightLine className="hover-arrow" size={24} />
                                    </div>
                                ))}
                            </div>
                            <div className="first">
                                {['Software development', 'Mobile app development', 'Chatbot development', 'Cloud app development'].map((text) => (
                                    <div className="dropdown__column__row" key={text}>
                                        <span>{text}</span>
                                        <RiArrowDropRightLine className="hover-arrow" size={24} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isResourcesOpen && (
                            <div className="resources__dropdown">
                                <div className="resources__dropdown__columns">
                                    <div className="resources__column">
                                        <div className="first">
                                            {['Our Blog', 'Open Source'].map((text) => (
                                                <div className="dropdown__column__row" key={text}>
                                                    <span>{text}</span>
                                                    <RiArrowDropRightLine className="hover-arrow" size={24} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

            {
                isHamBurgerOpen && <Menu setIsHamBurgerOpen={setIsHamBurgerOpen} setIsServicesOpen={setIsServicesOpen}/>
            }
        </header>
    );
};

export default NavbarSection;
