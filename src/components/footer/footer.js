import React from 'react';
import './footer.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faTumblr, faPinterest } from '@fortawesome/free-brands-svg-icons'
import logo from '../../img/Logo.svg'

class Footer extends React.Component {
    render() {
        return (
            <div id="hp-footer" data-anijs="if: scroll, on: window, do: fadeIn animated, before: $scrollReveal"
                 className="fadeIn animated">
                <div className="container">
                    <div className="row d-flex align-items-end">
                        <div className="col-md-1 p-0 order-md-1 order-3">
                            <div id="hp-social">
                                <a href="https://www.facebook.com/Stadiuum-HQ-2616801705060983" target="_blank">
                                    <FontAwesomeIcon  icon={faFacebookF}/>
                                </a>
                                <a href="https://www.instagram.com/stadiuumgroup/?hl=en" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </a>
                                <a href="https://twitter.com/StadiuumHQ" target="_blank">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                                <a href="https://www.pinterest.com.au/stadiuum/" target="_blank">
                                    <FontAwesomeIcon icon={faPinterest}/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCTfH_3sMrAMN2-ZBB6L-25g?" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                                <a href="https://www.linkedin.com/company/stadiuum" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn}/>
                                </a>
                                <a href="https://stadiuumhq.tumblr.com/" target="_blank">
                                    <FontAwesomeIcon icon={faTumblr}/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6 border-right pt-md-3 pt-0 order-md-2 order-2">
                            <div className="row">
                                <div className="col-lg-4 col-md-3"/>
                                <div className="col-md-4 p-0 col-7">
                                    <div id="ef-menu-footer-a" className="ef-links">
                                        <ul>
                                            <li><a className="ef-link  "
                                                   href=" https://stadiuum.com/pricing/ ">Pricing</a></li>
                                            <li><a className="ef-link  " href=" https://stadiuum.com/coming-soon/ ">Coming
                                                Soon</a></li>
                                            <li><a className="ef-link  " href=" https://stadiuum.com/media-partners/ ">Media
                                                Partners</a></li>
                                            <li><a className="ef-link  " href=" https://stadiuum.com/sports-partners/ ">Sports
                                                Partners</a></li>
                                            <li><a className="ef-link  "
                                                   href=" https://stadiuum.commedia-partners#sign-up ">Media Partners
                                                Sign Up</a></li>
                                            <li><a className="ef-link  "
                                                   href=" https://stadiuum.comsport-partners#sign-up ">Sports Partners
                                                Sign Up</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 p-0 col-5">
                                    <div id="ef-menu-footer-b" className="ef-links">
                                        <ul>
                                            <li><a className="ef-link  " href=" http://help.stadiuum.com/ ">FAQs</a>
                                            </li>
                                            <li><a className="ef-link  "
                                                   href=" https://stadiuum.com/careers/ ">Careers</a></li>
                                            <li><a className="ef-link  " href=" https://stadiuum.com/about-us/ ">About
                                                Us</a></li>
                                            <li><a className="ef-link  "
                                                   href=" https://stadiuum.com/socialcast/ ">SocialCast</a></li>
                                            <li><a className="ef-link  " href=" https://stadiuum.com/contact-us/ ">Contact
                                                Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-3"/>
                                <div className="col-md-8 p-0 d-md-block d-none">
                                    <div className="hp-logo">
                                        <img
                                            src={logo}
                                            alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="hp-offices" className="col-lg-4 col-md-5 order-md-3 order-1">
                            <div className="row">
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">
                                        <div className="hp-title">
                                            USA Office
                                        </div>
                                        <div className="hp-description">

                                            <div className="hp-address">
                                                1007 N Orange St., Wilmington, Delaware, 19801
                                            </div>

                                            <div className="hp-country">
                                                USA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">

                                        <div className="hp-title">
                                            Main Office
                                        </div>

                                        <div className="hp-description">

                                            <div className="hp-address">
                                                2 Innovation Parkway, Birtinya, Sunshine Coast, QLD, 4575
                                            </div>

                                            <div className="hp-country">
                                                Australia
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">

                                        <div className="hp-title">
                                            UK Office
                                        </div>

                                        <div className="hp-description">

                                            <div className="hp-address">
                                                20-22 Wenlock Rd. Hoxton, London. N1 7GU
                                            </div>

                                            <div className="hp-country">
                                                England
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">

                                        <div className="hp-title">
                                            Canadian Office
                                        </div>

                                        <div className="hp-description">

                                            <div className="hp-address">
                                                First Canadian Place, 100 King St W #5700, Toronto, ON M5X 1C7
                                            </div>

                                            <div className="hp-country">
                                                Canada
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">

                                        <div className="hp-title">
                                            European Office
                                        </div>

                                        <div className="hp-description">

                                            <div className="hp-address">
                                                30 Tkaczy St. 01-346 Warsaw
                                            </div>

                                            <div className="hp-country">
                                                Poland
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="hp-office">

                                        <div className="hp-title">
                                            Australian Office
                                        </div>

                                        <div className="hp-description">

                                            <div className="hp-address">
                                                903/50 Clarence St, Sydney, NSW, 2000
                                            </div>

                                            <div className="hp-country">
                                                Australia
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 d-md-none d-block order-5">
                            <div className="hp-logo mx-auto">
                                <img
                                    src={logo}
                                    alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="hp-copyright" className="d-flex align-items-end">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4  col-12 order-1 d-md-block d-none">
                                <p className="text-md-left text-center">STADIUUM Group Pty Ltd All Rights Reserved</p>
                            </div>
                            <div className="col-md-2 col-4 order-md-2 order-4">
                                <p className="text-center">Copyright 2019</p>
                            </div>

                            <div className="col-md-2 col-4 order-md-4 order-2">
                                <p className="text-center">
                                    <a href="https://stadiuum.com/terms-of-use">Terms of use</a>
                                </p>
                            </div>

                            <div className="col-md-2 col-4 order-5">
                                <p className="text-center">
                                    <a href="https://stadiuum.com/privacy-policy">Privacy Policy</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
