import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Navbar.css";
import ButtonWhite from  '../Buttons/ButtonWhite'
import '../../assets/css/bootstrap.min.css';
import tabdata from '../../data/tabsdata.json';

const FeaturesSection = () => {

    const imgattr = 'SendFriend'
    const data = tabdata.tabslisting
    function CheckBoxLoop(props) {
        const key = props.key;
        const textSpan = props.textSpan;
        return <div key={key} className="col-md-12">
                    <div className="check-list display-inline">
                        <img alt={imgattr} src="img/icons/checkbox.svg"/>
                        <div>
                            <span>{textSpan}</span>
                        </div>
                    </div>
                </div>
    }
    
    return (
        <>
        <div className="features-section bg-green-tilt">
            <Tabs>
            <TabList>
                <div className="row justify-content-center">
                {data.tab.map( ( item, i ) => 
                    <Tab>
                        <div class="tab-features style-one">
                            <div class="tab-border style-one border-1px-black-2">
                            <img alt={imgattr} class="img-tab animate-enter5" src={`img/icons/${item.icon}`} />
                            <p class="text-under">{item.tabTitle}</p>
                            </div>
                        </div>
                    </Tab>
                )}
                </div>
            </TabList>
            {data.tabPanel.map( ( item, i ) => 
                <TabPanel>
                <div key={i} className="container pd-left-140-xl">
                    <div className="section-title style-two-custom pd-left-70 width-70">
                        <h3 className="title">{item.main_title1}<span> {item.title_span}</span> {item.main_title2} <span>{item.title_span_2}</span></h3>
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
                                    <checkBoxBol hasCheckBox={item.checkBoxBol} >
                                            { item.checkBox.map( (i, k) => 

                                                <CheckBoxLoop key={k} textSpan={i.textSpan}  />

                                                )}
                                    </checkBoxBol>
                                    
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
                                    <img alt={imgattr} className="backCircle" src="img/homepage/backcircle.svg" />
                                </div>  

                                <div class="middle-img ">
                                    <img alt={imgattr} class="inner animate-enter9" src="img/icons/setting.svg" />
                                    <img alt={imgattr} class="logo" src="img/icons/sf-icon.svg" />
                                </div>
                                
                                <img alt={imgattr} class={`arrow-1 ${item.animation1}`} src="img/icons/arrow-1.svg" />
                                <img alt={imgattr} class="arrow-2" src="img/icons/arrow-2.svg" />
                                <img alt={imgattr} class="arrow-3" src="img/icons/arrow-3.svg" />
                                <img alt={imgattr} class={`arrow-4 ${item.animation4}`} src="img/icons/arrow-4.svg" />
                                <img alt={imgattr} class={`arrow-5 ${item.animation5}`} src="img/icons/arrow-5.svg" />
                                <img alt={imgattr} class={`arrow-6 ${item.animation6}`} src="img/icons/arrow-6.svg" />

                                <div className="world-icons">
                                    <img alt={imgattr} class={`cheaper ${item.popout1}`} src="img/icons/cheaper-black.png" />
                                    <img alt={imgattr} class={`faster ${item.popout2}`} src="img/icons/faster-black.svg" />
                                    <img alt={imgattr} class={`multichain ${item.popout3}`} src="img/icons/multchain-black.svg" />
                                    <img alt={imgattr} class={`secure ${item.popout4}`} src="img/icons/more-secure-black.svg" />
                                    <img alt={imgattr} class="api" src="img/icons/api.svg" />
                                    <img alt={imgattr} class="blockchain"  src="img/icons/blockchain-black.png" />
                                </div>
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