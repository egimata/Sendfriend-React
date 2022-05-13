import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite'
import ScrollAnimation from "react-animate-on-scroll";

const SectionPoland = () => {
    
    const imgattr = 'SendFriend'
    return( 
        <div className="features-section bg-green pd-top-50">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12 pd-top-30">
                        <div className="section-title style-poland">
                            <h3 className="title">SendFriend Poland
                            {/* <span> {texts.span}</span> */}
                            </h3>
                            <p>
                                SendFriend Poland sp. z o.o. based in Katowice 
                                is carrying out a project co-financed by European Funds entitled "SendFriend -
                                an innovative system of cross-border transfers based on blockchain technology and AI/ML algorithms".
                                The aim of the project is to create a global network of international payments, democratizing access to cheaper, 
                                fast and personalized payments 24 hours a day.
                            </p>
                            <h5 className='title'><span>Project value:</span></h5>
                            <h4>14,945,666.00 PLN</h4>
                            <h5 className='title'><span>EU funding for the project:</span></h5>
                            <h4>11,393,696.20 PLN</h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center">
               
                    <div className="col-lg-3">
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0}>
                        <img className='logo-img' src={`./img/client/eu.png`} alt={imgattr}/>
                        </ScrollAnimation>
                    </div>
                    
                    <div className="col-lg-3">
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0.2}>
                        <img className='logo-img' src={`./img/client/polska.png`} alt={imgattr}/>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-3">
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0.4}>
                        <img className='logo-img' src={`./img/client/europejski.png`} alt={imgattr}/>
                        </ScrollAnimation>
                    </div>
             
                </div>
                <div className="row justify-content-center pd-bottom-100 pd-top-40">
                    <Link to="/poland">
                        <ButtonWhite text='Find Out More' custom_style="button-cta buttonWhite mg-top-20 mg-bottom-30" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SectionPoland;