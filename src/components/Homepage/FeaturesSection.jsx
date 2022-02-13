import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Navbar.css";
import '../homepage.css';
import ButtonWhite from  '../Buttons/ButtonWhite'
import '../../assets/css/bootstrap.min.css';
import tabdata from '../../data/tabsdata.json';

const FeaturesSection = ({tabPanel}) => {

    const imgattr = 'SendFriend'
    const data = tabdata.tabslisting
    const box = tabPanel.checkBox;
    
    return (
        <>
        <div className="features-section bg-green-tilt">
            <Tabs>
            <TabList>
                <div className="row justify-content-center">
                    <Tab>
                        <div class="tab-features">
                            <div class="tab-border border-1px-black-2">
                            <img alt={imgattr} class="img-tab animate-enter5" src="img/icons/cheaper.png" />
                            <p class="text-under">CHEAPER</p>
                            </div>
                        </div>
                    </Tab>

                    <Tab>
                        <div class="tab-features">
                            <div class="tab-border border-1px-black-2">
                                <img alt={imgattr} class="img-tab animate-enter5" src="img/icons/faster.png" />
                                <p class="text-under">FASTER</p>
                            </div>
                        </div>
                    </Tab>

                    <Tab>
                        <div class="tab-features">
                            <div class="tab-border border-1px-black-2">
                                <img alt={imgattr} class="img-tab animate-enter5" src="img/icons/multichain.png" />
                                <p class="text-under">MULTICHAIN</p>
                            </div>
                        </div>
                    </Tab>

                    <Tab>
                        <div class="tab-features">
                            <div class="tab-border border-1px-black-2">
                                <img alt={imgattr} class="img-tab animate-enter5" src="img/icons/more-secure.png" />
                                <p class="text-under">MORE SECURE</p>
                            </div>
                        </div>
                    </Tab>

                </div>
            </TabList>
            {data.tabPanel.map( ( item, i ) => 
                <TabPanel>
                <div key={i} className="container">
                    <div className="section-title style-two-custom pd-left-70 width-70">
                        <h3 className="title">{item.main_title1}<span> {item.title_span}</span> {item.main_title2}</h3>
                    </div>
                    <div className="row ">
                        <div className="col-xl-7 col-lg-7 desktop-center-item">
                            <div className="desktop-center-area pd-left-70">
                            
                                <div className="section-title style-two">
                                    <p>
                                        {item.main_subtitle}
                                    </p>
                                </div>
                                
                                <div className="row">
                                    {box.map((item) => 
                                    <div className="col-md-12">
                                        <div className="check-list display-inline">
                                            <img alt={imgattr} src="img/icons/checkbox.svg"/>
                                            <div>
                                                <span>{item.textSpan}</span>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    <div className="col-md-12">
                                        <div className="check-list display-inline">
                                            <img alt={imgattr} src="img/icons/checkbox.svg"/>
                                            <div>
                                                <span>Fewer correspondent and intermediary banks mean lower fees</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="check-list display-inline">
                                            <img alt={imgattr} src="img/icons/checkbox.svg"/>
                                            <div>
                                                <span>No pre-funding burden</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="check-list display-inline">
                                            <img alt={imgattr} src="img/icons/checkbox.svg"/>
                                            <div>
                                            <span>Access to a least-cost routing AI/ML algorithm to optimally select payment route via our multi-chain network</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <Link to="/contact-us">
                                            <ButtonWhite text='LEARN MORE' custom_style="button-cta buttonWhite mg-top-20" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 desktop-center-item">
                            <div className="img-animation">
                                <div className="texts">
                                    <p class="secure">Secure</p>
                                    <p class="multichain">Multichain</p>
                                    <p class="api-connection">1 API<br />Connection</p>
                                    <p class="blockchain">Blockchain</p>
                                    <p class="cost-effective">Cost<br />Effective</p>
                                    <p class="fast-payment">Fast<br />Payment</p>
                                </div>
                                
                                <div class="white-image animate-enter8" >
                                    <img alt={imgattr} class="width" src="img/homepage/white-image.png" />
                                    <div class="group-101-vMHBtP">
                                        <img alt={imgattr} src="img/homepage/backcircle.svg" />
                                    </div>
                                </div>  

                                <div class="uiwsetting-IQUIuZ">
                                    <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
                                    <img alt={imgattr} class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
                                    <div class="ellipse-16-kr4CWH"></div>
                                    </div>
                                    <img alt={imgattr} class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
                                </div>

                                <img alt={imgattr} class="arrow-3-IQUIuZ" show-on-scroll src="img/homepage/arrow-3@2x.png" />
                                <img alt={imgattr} class="arrow-5-IQUIuZ1 animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
                                <img alt={imgattr} class="arrow-2-IQUIuZ" show-on-scroll src="img/homepage/arrow-2@2x.png" />
                                <img alt={imgattr} class="arrow-1-IQUIuZ " show-on-scroll src="img/homepage/arrow-1@2x.png" />
                                <img alt={imgattr} class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
                                <img alt={imgattr} class="x3-IQUIuZ popout" src="img/homepage/3@2x.png" />
                                <img alt={imgattr} class="group-IQUIuZ" src="img/homepage/secureicon.svg" />
                                <img alt={imgattr}
                                    class="eos-iconsblockchain-IQUIuZ"
                                    show-on-scroll
                                    src="img/homepage/multichainicon.svg"
                                />
                                <div class="carbonapi-1-IQUIuZ" show-on-scroll>
                                    <img alt={imgattr} class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
                                    <img alt={imgattr} class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
                                    <img alt={imgattr} class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
                                </div>
                                <img alt={imgattr} class="x2-IQUIuZ" src="img/homepage/clock.svg" />
                                <img alt={imgattr} class="arrow-4-IQUIuZ" show-on-scroll src="img/homepage/arrow-4@2x.png" />
                                <img alt={imgattr} class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
                            </div>
                        </div>
                        
                    
                    
                    
                    </div>
                </div>
                </TabPanel>
            )}  
            </Tabs>
        </div>
       </>
    );
}

export default FeaturesSection;