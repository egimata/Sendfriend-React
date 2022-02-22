import React from 'react';
import sectiondata from "../../data/sections.json"
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite'

const SectionThree = () => {

    const data = sectiondata.third_section
    const altimg = "Sendfriend Platform"

    return (
        <>
        <div className="third-section bg-dark-one">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="section-title style-four">
                                <h3 className="title">{data.title1} <span>{data.span}</span></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="section-title z-2">
                                <p>Our API-based platform enables customers to seamlessly gain access to a suite of 
                                    B2B and B2C payment tools. With that in mind, we can offer bespoke solutions for MSB partners</p>
                                <p>In short, we are building a team to develop solutions across a range of use cases, 
                                    where traditional payment rails come up short for small and medium size business with thorny cross-border remittance needs</p>
                            </div>
                        </div>
                        <div className="row z-2">
                            <Link to="/contact-us" className="z-2">
                                <ButtonWhite text='LEARN MORE' custom_style="button-cta buttonWhite style-two mg-top-20" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="platform-img">
                            <img alt={altimg} src="img/homepage/platform-sendfriend.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default SectionThree;