import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import style from './homepageBusiness.module.scss'
import Col from "react-bootstrap/Col";
import Header from "../header/header";
import Footer from "../footer/footer";
import Team from "./team/team";
import AboutUs from "./aboutUs/aboutUs";
import Blocks from "./blocks/blocks";

function HomepageBuisness () {
    return (
        <div>
            <Header/>
            <div className={`${style["ef-hero"]} ${style.poster}`}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className={style["ef-container"]}>
                                    <h1>
                                        Sport Fan or Sport Business, <br/>
                                        it doesn't matter which <br/>
                                        <span>You</span> are the <span>U</span> in STADIU<span>U</span>M
                                    </h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Blocks/>
            <AboutUs/>
            <Team/>
            <Footer/>
        </div>
    );
}

export default HomepageBuisness;
