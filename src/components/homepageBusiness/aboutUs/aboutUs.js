import React from 'react';
import './aboutUs.scss'


function AboutUs() {
    return (
        <div className="ef-about fadeIn animated"
             data-anijs="if: scroll, on: window, do: fadeIn animated, before: $scrollReveal">

            <div className="container mw-100">
                <div className="row">
                    <div className="col-lg-6 p-0 img-team">
                    </div>

                    <div className="col-lg-6 p-0 ef-bg-white fadeInRight animated"
                         data-anijs="if: scroll, on: window, do: fadeInRight animated, before: $scrollReveal">
                        <div className="ef-container py-5">
                            <div className="ef-title">
                                <h2>About Us</h2>
                            </div>
                            <div className="ef-content">

                                <p>
                                    We are a company in its genesis yet have already <br/>
                                    established a global footprint. With an exciting journey <br/>
                                    ahead, our aim is to improve how fans connect with Sports <br/>
                                    via news, media and content - while simultaneously <br/>
                                    supporting all facets of Sports Media and Live Sport. We <br/>
                                    believe we are the future of sports content management, <br/>
                                    experiences and fan engagement for businesses across all <br/>
                                    sporting codes and continents.</p><br/>
                                <p>
                                    Fans are the lifeblood of all sport, and we will unite <br/>
                                    them from all corners of the globe. STADIUUM will house <br/>
                                    all the action, the people and their stories while <br/>
                                    delivering truly personal sporting experiences. We <br/>
                                    represent the next step forward for sports fans. We will <br/>
                                    partner with all facets of the sport and media industries, <br/>
                                    supporting organisations, teams and individuals in achieving <br/>
                                    their goals. We will become a future-proofed pillar of <br/>
                                    support for sports media and live sport business. Sport is <br/>
                                    at the very heart of STADIUUM &amp; parent company <br/>
                                    STADIUUM Group, the very core of our DNA. We believe in <br/>
                                    always embodying the passion and excitement intrinsic to <br/>
                                    sport in our company, the magic of it is invaluable &amp; <br/>
                                    unmeasurable. We will continue to create and nurture a <br/>
                                    connection between technology &amp; sport - always keeping <br/>
                                    a fixated view on industry problems and applying <br/>
                                    technology &amp; innovation to solve them.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 p-0 d-lg-none d-md-block fadeInLeft animated">
                        <img src="https://stadiuum.com/wp-content/themes/XStadium/template/img/bg/bg-about-mobile.jpg"
                             alt="" className="img-fluid"/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default AboutUs;
