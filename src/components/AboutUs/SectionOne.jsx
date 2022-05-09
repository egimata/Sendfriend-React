import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWhite from  '../Buttons/ButtonWhite'
import '../../assets/css/bootstrap.min.css';
import sectionData from '../../data/sections.json';

const SectionOne = () => {

    const imgattr = 'SendFriend'
    const data = sectionData.AboutUs
    
    return (
        <>
        <div className="features-section bg-green-tilt">
            <div className="container">
                <div className="row justify-content-center pd-top-100">
                    <div className="col-lg-4 col-sm-8">
                        <div className="section-title style-two-custom pd-left-15">
                            <h3 className="title"><span>{data.title}</span></h3>
                            <p className="text-under">{data.subtitle}</p>
                        </div>
                        {data.checkBox.map((item, i) =>
                            <div key={i} className="col-md-12">
                                <div className="check-list full-width display-inline pd-right-10">
                                    <img alt={imgattr} src="img/icons/checkbox.svg"/>
                                    <div>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <Link to="/contact-us">
                            <ButtonWhite text='LEARN MORE' custom_style="button-cta buttonWhite mg-top-20" />
                        </Link>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 d-none-mobile">
                        <div className="pd-top-60">
                            <img alt={imgattr} src={data.img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default SectionOne;