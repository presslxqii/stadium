import React from 'react';
import './blocks.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Blocks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedBlock: 'block1'
        }
    }
    toggleHover = (e) => {
        this.setState({selectedBlock: e.target.id})
    };
    toggleLeave = () =>{
        this.setState({selectedBlock: 'block1'})
    };
    render() {
        return (
            <div className="ef-blocks fadeIn animated"
                 data-anijs="if: scroll, on: window, do: fadeIn animated, before: $scrollReveal">
                <Container className={'mw-100'}>
                    <Row>
                        <Col xs={2} className={'box-football'}/>
                        <Col xs={4}>
                            <div>
                                <div className="row">
                                    <div className="col-12 p-0">
                                        <div className="ef-box-group">
                                            <div
                                                id={'block1'}
                                                onMouseEnter={this.toggleHover}
                                                onMouseLeave={this.toggleLeave}
                                                className={`bg-red-dark ${this.state.selectedBlock === 'block1' ? 'selectedBlock' : 'ef-box'}`}
                                                data-anijs="if: scroll, on: window, do: fadeInLeft animated, before: $scrollReveal">
                                                <div>
                                                    <div className="ef-img">
                                                        <img
                                                            src="https://stadiuum.com/wp-content/themes/XStadium/template/img/icons/icon-briefcase.png"
                                                            alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="ef-title">
                                                        <h2>Sports Business</h2>
                                                    </div>
                                                    <p>
                                                        The holy grail for sports business <br/>
                                                        is here. Find out about our <br/>
                                                        partnership options.
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                               id={'block2'}
                                               onMouseEnter={this.toggleHover}
                                               onMouseLeave={this.toggleLeave}
                                               className={`bg-red-dark align-content-center
                                               fadeInUp animated ${this.state.selectedBlock === 'block2' ? 'selectedBlock' : 'ef-box'}`}
                                               data-anijs="if: scroll, on: window, do: fadeInUp animated, before: $scrollReveal"
                                               href="https://stadiuum.com/sports-partners">
                                                <div>

                                                    <div className="ef-img">
                                                        <img
                                                            src="https://stadiuum.com/wp-content/themes/XStadium/template/img/icons/icon-trophy.png"
                                                            alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="ef-title">
                                                        <h2>Sports</h2>
                                                    </div>
                                                    <p>
                                                        Teams, Clubs, Organisations <span
                                                        className="efi ef-16 ef-icon-arrow"/>
                                                    </p>

                                                </div>
                                            </a>
                                            <a id={'block3'}
                                                onMouseEnter={this.toggleHover}
                                               onMouseLeave={this.toggleLeave}
                                               className={`bg-red-black align-content-center d-flex align-items-center
                                               fadeInUp animated ${this.state.selectedBlock === 'block3' ? 'selectedBlock' : 'ef-box'}`}
                                               data-anijs="if: scroll, on: window, do: fadeInUp animated, before: $scrollReveal"
                                               href="https://stadiuum.com/media-partners">
                                                <div>
                                                    <div className="ef-img">
                                                        <img
                                                            src="https://stadiuum.com/wp-content/themes/XStadium/template/img/icons/icon-media.png"
                                                            alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="ef-title">
                                                        <h2>Media</h2>
                                                    </div>
                                                    <p>
                                                        Journalists, Publishers, Businesses <span
                                                        className="efi ef-16 ef-icon-arrow"/>
                                                    </p>
                                                </div>
                                            </a>
                                        </div>

                                        <div className="d-md-none d-block">
                                            <img
                                                src="https://stadiuum.com/wp-content/themes/XStadium/template/img/bg/bg-home-gamer.jpg"
                                                alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Row className={'h-100'}>
                                <Col xs={12} className={'box-esport h-50'}/>
                                <Col xs={12} className={'h-50'}>
                                    <Row className={'h-100'}>
                                        <Col xs={6}>
                                            <div
                                                className="ef-box bg-black align-content-center d-flex align-items-center fadeInRight animated"
                                                data-anijs="if: scroll, on: window, do: fadeInRight animated, before: $scrollReveal">
                                                <div id="x-newslletter">
                                                    <div className="ef-img">
                                                        <img
                                                            src="https://stadiuum.com/wp-content/themes/XStadium/template/img/icons/icon-cursor.png"
                                                            alt="" className="ef-fluid"/>
                                                    </div>
                                                    <div className="ef-title">
                                                        <h2>Sport <br/>Fans</h2>
                                                    </div>
                                                    <p>
                                                        The holy grail for sports fans <br/>
                                                        globally is coming soon.
                                                    </p>
                                                    <p className="ef-sign-up">
                                                        Sign up <a href="#" className="x-newsletter"
                                                                   data-href="ef-newsletter">here</a> to stay informed of
                                                        our launch
                                                    </p>
                                                </div>
                                                <div id="ef-newsletter" className="d-none">
                                                    <div role="form" className="wpcf7" id="wpcf7-f1567-p1527-o1"
                                                         lang="en-US" dir="ltr">
                                                        <div className="screen-reader-response"/>
                                                        <form action="/#wpcf7-f1567-p1527-o1" method="post"
                                                              className="wpcf7-form"
                                                              noValidate="novalidate">
                                                            <div>
                                                                <input type="hidden" name="_wpcf7" value="1567"/>
                                                                <input type="hidden" name="_wpcf7_version" value="5.1.3"/>
                                                                <input type="hidden" name="_wpcf7_locale" value="en_US"/>
                                                                <input type="hidden" name="_wpcf7_unit_tag"
                                                                       value="wpcf7-f1567-p1527-o1"/>
                                                                <input type="hidden" name="_wpcf7_container_post"
                                                                       value="1527"/>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12"><b>Sign up here to stay informed of
                                                                    our
                                                                    launch</b></div>
                                                                <div className="col-12">
                                                    <span
                                                        className="wpcf7-form-control-wrap your-name">
                                                    <input type="text"
                                                           name="your-name"
                                                           value=""
                                                           size="40"
                                                           className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                                                           id="your-name"
                                                           aria-required="true"
                                                           aria-invalid="false"
                                                           placeholder="NAME"/>
                                                    </span>
                                                                </div>
                                                                <div className="col-12"><span
                                                                    className="wpcf7-form-control-wrap your-email">
                                                    <input type="email"
                                                           name="your-email"
                                                           value=""
                                                           size="40"
                                                           className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                                                           id="your-email"
                                                           aria-required="true"
                                                           aria-invalid="false"
                                                           placeholder="EMAIL"/>
                                                    </span>
                                                                </div>
                                                                <div className="col-12 mt-2">
                                                                    <button type="submit">Notify Me</button>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div
                                                                        className="wpcf7-response-output wpcf7-display-none"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <a href="#" className="text-center" id="ef-close-newsletter">[CLOSE]</a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={6} className={'box-basketball'}/>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Blocks;
