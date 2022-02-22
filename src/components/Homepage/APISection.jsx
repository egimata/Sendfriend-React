import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Navbar.css";
import ButtonWhite from  '../Buttons/ButtonWhite'
import '../../assets/css/bootstrap.min.css';
import tabdata from '../../data/tabsdata.json';
import sectiondata from '../../data/sections.json';

const APISection = () => {

    const imgattr = 'SendFriend'
    const data = tabdata.tabImg
    const texts = sectiondata.APISection


    
    return (
        <>
        <div className="features-section bg-green pd-top-190">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 pd-top-30">
                        <div className="section-title style-two">
                            <h3 className="title">{texts.title1}<br /><span> {texts.span}</span></h3>
                        </div>
                        <Link to="/contact-us" className="z-2">
                            <ButtonWhite text='LEARN MORE' custom_style="button-cta buttonWhite mg-top-100" />
                        </Link>
                    </div>
                    <div className="col-lg-5">
                        <Tabs>
                            <TabList>
                            <div className="row">
                                {data.tab.map( ( item, i ) => 
                                    <Tab>
                                        <div class="tab-features style-two">
                                            <div class="tab-border">
                                                <p class="text-under">{item.tabTitle}</p>
                                            </div>
                                        </div>
                                    </Tab>
                                )}
                                </div>
                            </TabList>
                            {data.tabPanel.map( ( item, i ) => 
                                <TabPanel>
                                    <div className="api-img">
                                        <div className="bg-url">

                                        <img class="inner-img animate-enter22" src={`img/homepage/${item.img}`} />
                                        </div>
                                    </div>
                                </TabPanel>
                            )}  
                        </Tabs>
                    </div>
                </div>
                <div className="row justify-content-end">
                {texts.bottom_text.map( ( item, i ) => 
                    <div className="col-lg-3  section-title">
                        <h6>{item.main_text}</h6>
                        <p className="p">{item.p}</p>
                    </div>
                )}
                </div>
            </div>
        </div>
       </>
    );
}

export default APISection;