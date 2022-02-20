import React from 'react';
import sectiondata from "../../data/sections.json"
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite'

const APISection = () => {

    const data = sectiondata.third_section
    const altimg = "Sendfriend Platform"

    return (
      
        <div className="third-section bg-dark-one">
            <div className="container">
                <div className="row">

                    <div className="col-6 justify-content-center">
                        <div className="row">
                            <div className="section-title style-four text-center">
                                <h3 className="title">{data.title1}<br /> <span>{data.span}</span></h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="section-title">
                                <p>Our API-based platform enables customers to seamlessly gain access to a suite of 
                                    B2B and B2C payment tools. With that in mind, we can offer bespoke solutions for MSB partners</p>
                                <p>In short, we are building a team to develop solutions across a range of use cases, 
                                    where traditional payment rails come up short for small and medium size business with thorny cross-border remittance needs</p>
                            </div>
                        </div>
                        <div className="row">
                        <Link to="/contact-us">
                            <ButtonWhite text='LEARN MORE' custom_style="button-cta buttonWhite mg-top-20" />
                        </Link>
                        </div>
                        
                    </div>
                    <div className="col-6 justify-content-center">
                        <div>
                            <img alt={altimg} src="img/homepage/group-128@1x.png" />
                        </div>
                    </div>

                </div>
                <div class="section-3-zYNucu">
                    {/* <img class="asset-1bg1-1-1-hLpjsq" src="img/homepage/asset-1bg1-1-1@1x.png" />
                    <img class="asset-1-1-hLpjsq" src="img/homepage/image-platform.svg" /> */}
                    
                    <div class="group-97-hLpjsq">
                    <div class="our-api-based-platfo-kSsxZv">
                        Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
                        With that in mind, we can offer bespoke solutions for MSB partners
                    </div>
                    <div class="in-short-we-are-buil-kSsxZv">
                        In short, we are building a team to develop solutions across a range of use cases, where traditional payment
                        rails come up short for small and medium size business with thorny cross-border remittance needs
                    </div>
                    </div>
                    <div class="group-106-hLpjsq">
                    <div class="servicing-a-variety-1TtheY montserrat-extra-bold-white-36px animate-enter20">
                        <span class="span0-GtZLxa">Servicing a variety of cross-border payment use cases, </span
                        ><span class="span1-GtZLxa montserrat-extra-bold-white-36px-2">while adapting to customer needs</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
}

export default APISection;