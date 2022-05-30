import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
                                        <div key={i} className="tab-features style-two">
                                            <div className="tab-border">
                                                <p className="text-under">{item.tabTitle}</p>
                                            </div>
                                        </div>
                                    </Tab>
                                )}
                                </div>
                            </TabList>
                            {data.tabPanel.map( ( item, i ) => 
                                <TabPanel>
                                    <div key={i} className="api-img">
                                        <div className="bg-url">
                                            <img alt={imgattr} className="inner-img animate-enter22" src={`img/homepage/${item.img}`} />
                                        </div>
                                    </div>
                                </TabPanel>
                            )}  
                        </Tabs>
                    </div>
                </div>
                <div className="row justify-content-center">
                {texts.bottom_text.map( ( item, i ) => 
                    <div key={i} className="col-lg-3 section-title">
                        <h6>{item.main_text}</h6>
                        <p className="p">{item.p}</p>
                    </div>
                )}
                </div>
            </div>
            <img alt={imgattr} className="bottom-image" src="img/homepage/dark-bg-tilted.png" />
            <div id="partners" className="partners-section">
                <div className="partnerships-table">
                    <h3 className="partners-text">Partners</h3>
                    <p className="partners-sub">
                        We are fortunate to be parterned with the following leaders in our space and global influencers of financial
                        technology:
                    </p>
                    <div className="bg-border"></div>
                    <div className="group-icons">
                        <img alt={imgattr} src="img/homepage/partners-group.svg" />
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default APISection;