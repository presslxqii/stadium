import React from 'react';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div id="ef-header" className="fadeInDown animated ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-3">
                            <a href="https://stadiuum.com" id="ef-logo">
                                <img
                                    src="https://stadiuum.com/wp-content/themes/XStadium/template/img/logo/logo-stadiuum-mini-white.png"
                                    alt="" className="img-fluid ef-logo-white"/>
                                    <img
                                        src="https://stadiuum.com/wp-content/themes/XStadium/template/img/logo/logo-stadiuum-mini-red.png"
                                        alt="" className="img-fluid ef-logo-red"/>
                            </a>
                        </div>
                        <div className="col-lg-9 col-9">
                            <div id="ef-menu-header" className="ef-menu">
                                <ul>
                                    <li>
                                        <a className="ef-link" href=" https://stadiuum.com/socialcast/ ">Sports Partners</a>
                                    </li>
                                    <li>
                                        <a className="ef-link" href=" https://stadiuum.com/coming-soon/ ">Media Partners</a>
                                    </li>
                                    <li>
                                        <a className="ef-link" href=" https://stadiuum.com/coming-soon/ ">Coming Soon</a>
                                    </li>
                                    <li>
                                        <a className="ef-link" href=" https://stadiuum.com/coming-soon/ ">Sign In</a>
                                    </li>
                                    <li><a href="#" id="ef-menu">
                                            <span/>
                                            <span/>
                                            <span/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ef-menu-mobile" className="ef-menu">
                    <ul className="dropdown-menu">
                        <li className="slug-1606 dropdown-item px-2"><a href="https://stadiuum.com/pricing/">Pricing</a>
                        </li>
                        <li className="slug-faqs-intercom dropdown-item px-2">
                            <a href="http://help.stadiuum.com/">FAQs</a>
                        </li>
                        <li className="slug-1580 dropdown-item px-2"><a href="https://stadiuum.com/careers/">Careers</a>
                        </li>
                        <li className="slug-1595 dropdown-item px-2"><a href="https://stadiuum.com/about-us/">About
                            Us</a></li>
                        <li className="slug-1608 dropdown-item px-2"><a href="https://stadiuum.com/socialcast/">SocialCast</a>
                        </li>
                        <li className="slug-1582 dropdown-item px-2"><a href="https://stadiuum.com/contact-us/">
                            Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
