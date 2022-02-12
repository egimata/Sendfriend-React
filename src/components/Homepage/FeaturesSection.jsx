import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Navbar.css";
import '../homepage.css';
import ButtonWhite from  '../Buttons/ButtonWhite'
import '../../assets/css/bootstrap.min.css';

const FeaturesSection =  (props) => {
    
    return (
        <>
        <div className="features-section bg-green-tilt">
            <Tabs>
            <TabList>
            <div className="row justify-content-center">
                <div className="column">
                    <Tab>
                    <div class="tab-cheaper">
                        <div class="cheaper-border border-1px-black-2">
                        <div class="cheaper-kPiyGZ montserrat-bold-ebony-clay-16px">Cheaper</div>
                        <img class="x3-kPiyGZ smart-layers-pointers animate-enter5" src="img/homepage/3@1x.png" />
                        </div>
                    </div>
                    </Tab>

                    <Tab>
                    <div class="faster-zYNucu">
                        <div class="rectangle-102-aADbGy smart-layers-pointers border-1px-black-2">
                        <div class="faster-aADbGy montserrat-bold-ebony-clay-16px">FASTER</div>
                        <img class="x2-aADbGy smart-layers-pointers animate-enter6" src="img/homepage/2@2x.png" />
                        </div>
                    </div>
                    </Tab>

                    <Tab>
                    <div class="multi-chain-zYNucu">
                        <div class="rectangle-103-n8h6Li smart-layers-pointers border-1px-black-2">
                        <div class="multichain-n8h6Li montserrat-bold-ebony-clay-16px">MULTICHAIN</div>
                        <img
                        class="eos-iconsblockchain-n8h6Li smart-layers-pointers animate-enter7"
                        src="img/homepage/eos-icons-blockchain@2x.png"
                        />
                        </div>
                    </div>
                    </Tab>

                    <Tab>
                    <div class="more-secure-zYNucu">
                        <div class="rectangle-104-dSxhqF smart-layers-pointers border-1px-black-2">
                        <div class="more-secure-dSxhqF montserrat-bold-ebony-clay-16px">MORE SECURE</div>
                        <div class="group-dSxhqF smart-layers-pointers">
                        <img class="vector-A0gskj" src="img/homepage/vector-13@2x.png" />
                        <img class="vector-GQyxdx" src="img/homepage/vector-14@2x.png" />
                        </div>
                        </div>
                    </div>
                    </Tab>
                </div>
            </div>
                
            </TabList>

            <TabPanel>
                <div class="section-1-zYNucu">
                <div class="checkbox-1-IQUIuZ">
                    <img class="vector-7ml3I6" src="img/homepage/vector-15@2x.png" />
                    <img class="vector-Ntfv89" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-2-IQUIuZ">
                    <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
                    <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-3-IQUIuZ">
                    <img class="vector-9vlWzS" src="img/homepage/vector-15@2x.png" />
                    <img class="vector-X0jBtO" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-4-IQUIuZ">
                    <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
                    <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
                    <span class="span0-vBeqzr">SendFriend delivers a</span>
                    <span class="span1-vBeqzr montserrat-extra-bold-white-36px-2"> cheaper solution<br /></span>
                    <span class="span2-vBeqzr">for transferring money across borders</span>
                </div>
                <div class="our-on-chain-solutio-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
                    Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees. In
                    short, we leverage blockchain networks and other non-traditional rails for more cost-effective
                    settlement
                </div>
                <div class="lower-fx-costs-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Lower FX costs</div>
                <div class="no-pre-funding-burden-IQUIuZ montserrat-semi-bold-ebony-clay-14px">No pre-funding burden</div>
                <Link to="/contact-us">
                    <ButtonWhite text='LEARN MORE' />
                </Link>
                <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
                <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
                <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
                <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
                <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
                <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
                <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
                    <img
                    class="kisspng-clip-art-cit-vMHBtP"
                    src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
                    />
                    <div class="group-101-vMHBtP">
                    <img src="img/homepage/backcircle.svg" />
                    </div>
                </div>
                <div class="uiwsetting-IQUIuZ">
                    <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
                    <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
                    <div class="ellipse-16-kr4CWH"></div>
                    </div>
                    <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
                </div>
                <img class="arrow-3-IQUIuZ" show-on-scroll src="img/homepage/arrow-3@2x.png" />
                <img class="arrow-5-IQUIuZ1 animate-enter11" show-on-scroll src="img/homepage/arrow-5@2x.png" />
                <img class="arrow-2-IQUIuZ" show-on-scroll src="img/homepage/arrow-2@2x.png" />
                <img class="arrow-1-IQUIuZ " show-on-scroll src="img/homepage/arrow-1@2x.png" />
                <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
                <img class="x3-IQUIuZ popout" src="img/homepage/3@2x.png" />
                <img class="group-IQUIuZ" src="img/homepage/secureicon.svg" />
                <img
                    class="eos-iconsblockchain-IQUIuZ"
                    show-on-scroll
                    src="img/homepage/multichainicon.svg"
                />
                <div class="carbonapi-1-IQUIuZ" show-on-scroll>
                    <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
                    <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
                    <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
                </div>
                <img class="x2-IQUIuZ" src="img/homepage/clock.svg" />
                <img class="arrow-4-IQUIuZ" show-on-scroll src="img/homepage/arrow-4@2x.png" />
                <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
                <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
                <div class="fewer-correspondent-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
                    Fewer correspondent and intermediary banks mean lower fees
                </div>
                <div class="access-to-a-least-co-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
                    Access to a least-cost routing AI/ML algorithm to optimally select payment route via our multi-chain network
                </div>
                </div>
            </TabPanel>
            
            <TabPanel>
                <div class="section-1-zYNucu">
                <div class="checkbox-1-IQUIuZ">
                <img class="vector-7ml3I6" src="img/homepage/vector-15@2x.png" />
                <img class="vector-Ntfv89" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-2-IQUIuZ">
                <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
                <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-3-IQUIuZ">
                <img class="vector-9vlWzS" src="img/homepage/vector-15@2x.png" />
                <img class="vector-X0jBtO" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="checkbox-4-IQUIuZ">
                <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
                <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
                <span class="span0-vBeqzr">SendFriend offers a </span
                ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">speed advantage<br /></span
                ><span class="span2-vBeqzr">to traditional payment rails</span>
                </div>
                <div class="our-on-chain montserrat-semi-bold-ebony-clay-14px">
                Both our on- and off-chain solutions leverage nimble systems to settle payments in nearly real-time
                </div>
                <div class="lower-fx-costs-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Near-instant settlement</div>
                <div class="no-pre-funding-burden-IQUIuZ montserrat-semi-bold-ebony-clay-14px">Money and payment metadata flow over the same systems, ensuring faster settlement</div>
                <Link to="/contact-us">
                    <ButtonWhite text='LEARN MORE' />
                </Link>
                <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
                <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
                <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
                <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
                <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
                <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
                <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
                <img
                    class="kisspng-clip-art-cit-vMHBtP"
                    src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
                />
                <div class="group-101-vMHBtP">
                    <img src="img/homepage/backcircle.svg" />
                </div>
                </div>
                <div class="uiwsetting-IQUIuZ">
                <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
                    <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
                    <div class="ellipse-16-kr4CWH"></div>
                </div>
                <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
                </div>
                <img class="arrow-3-IQUIuZ" show-on-scroll src="img/homepage/arrow-3@2x.png" />
                <img class="arrow-5-IQUIuZ " show-on-scroll src="img/homepage/arrow-5@2x.png" />
                <img class="arrow-2-IQUIuZ" show-on-scroll src="img/homepage/arrow-2@2x.png" />
                <img class="arrow-1-IQUIuZ " show-on-scroll src="img/homepage/arrow-1@2x.png" />
                <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
                <img class="x3-IQUIuZ" src="img/homepage/3@2x.png" />
                <img class="group-IQUIuZ " src="img/homepage/secureicon.svg" />
                <img
                class="eos-iconsblockchain-IQUIuZ"
                show-on-scroll
                src="img/homepage/multichainicon.svg"
                />
                <div class="carbonapi-1-IQUIuZ" show-on-scroll>
                <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
                <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
                <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
                </div>
                <img class="x2-IQUIuZ popout" src="img/homepage/clock.svg" />
                <img class="arrow-4-IQUIuZ1 animate-enter16" show-on-scroll src="img/homepage/arrow-4@2x.png" />
                <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
                <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
                <div class="fewer-correspondent-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
                Blockchain-enabled payments are inherently faster, avoiding cumbersome traditional intermediaries
                </div>
                <div class="access-to-a-least-co-IQUIuZ montserrat-semi-bold-ebony-clay-14px">
                For off-chain solutions, we leverage blockchain to route payment metadata faster
                </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div class="section-1-zYNucu">

                <div class="checkbox-2-IQUIuZ">
                <img class="vector-AUWl73" src="img/homepage/vector-15@2x.png" />
                <img class="vector-cgxaVX" src="img/homepage/vector-19@2x.png" />
                </div>

                <div class="checkbox-4-IQUIuZ1">
                <img class="vector-h1mMVQ" src="img/homepage/vector-15@2x.png" />
                <img class="vector-TyXY7m" src="img/homepage/vector-19@2x.png" />
                </div>
                <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
                <span class="span0-vBeqzr">SendFriend is building  </span
                ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">integrations  <br /></span
                ><span class="span2-vBeqzr">to a multitude of  blockchain-based < br /><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">payment systems</span></span>
                </div>
                <div class="our-on-chain-solutio-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
                We aim to offer multiple blockchain-enabled payment routing options depending on the use case, geography, and least-cost routing method
                </div>
                <Link to="/contact-us">
                    <ButtonWhite text='LEARN MORE' />
                </Link>
                <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
                <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
                <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
                <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
                <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
                <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
                <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
                <img
                    class="kisspng-clip-art-cit-vMHBtP"
                    src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
                />
                <div class="group-101-vMHBtP">
                    <img src="img/homepage/backcircle.svg" />
                </div>
                </div>
                <div class="uiwsetting-IQUIuZ">
                <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
                    <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
                    <div class="ellipse-16-kr4CWH"></div>
                </div>
                <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
                </div>
                <img class="arrow-3-IQUIuZ" show-on-scroll src="img/homepage/arrow-3@2x.png" />
                <img class="arrow-5-IQUIuZ " show-on-scroll src="img/homepage/arrow-5@2x.png" />
                <img class="arrow-2-IQUIuZ" show-on-scroll src="img/homepage/arrow-2@2x.png" />
                <img class="arrow-1-IQUIuZ " show-on-scroll src="img/homepage/arrow-1@2x.png" />
                <img class="arrow-6-IQUIuZ1 animate-enter13" src="img/homepage/arrow-6@2x.png" />
                <img class="x3-IQUIuZ" src="img/homepage/3@2x.png" />
                <img class="group-IQUIuZ" src="img/homepage/secureicon.svg" />
                <img
                class="eos-iconsblockchain-IQUIuZ popout"
                src="img/homepage/multichainicon.svg"
                />
                <div class="carbonapi-1-IQUIuZ" show-on-scroll>
                <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
                <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
                <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
                </div>
                <img class="x2-IQUIuZ" src="img/homepage/clock.svg" />
                <img class="arrow-4-IQUIuZ" show-on-scroll src="img/homepage/arrow-4@2x.png" />
                <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
                <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />
                <div class="fewer-correspondent-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
                RippleNet has been our founding partner and fundamental to our initial cross-border remittance success
                </div>
                <div class="access-to-a-least-co-IQUIuZ1 montserrat-semi-bold-ebony-clay-14px">
                We are building out additional blockchain network integrations so that our solution is chain-agnostic and can support lease-cost routing over time
                </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div class="section-1-zYNucu">

                <div class="send-friend-delivers-IQUIuZ montserrat-extra-bold-white-36px">
                <span class="span0-vBeqzr">SendFriend firmly believes that <br /></span
                ><span class="span1-vBeqzr montserrat-extra-bold-white-36px-2">blockchain-based payment methods <br /></span
                ><span class="span2-vBeqzr">are the future because of the <br />inherent security benefits</span>
                </div>
                <div class="our-on-chain-solutio-IQUIuZ3 montserrat-semi-bold-ebony-clay-14px">
                Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
                </div>
                <Link to="/contact-us">
                    <ButtonWhite text='LEARN MORE' />
                </Link>
                <div class="secure-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Secure</div>
                <div class="multichain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Multichain</div>
                <div class="x1-api-connection-IQUIuZ montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
                <div class="blockchain-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
                <div class="cost-effective-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
                <div class="fast-payment-IQUIuZ montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
                <div class="world-group-IQUIuZ animate-enter8" show-on-scroll>
                <img
                class="kisspng-clip-art-cit-vMHBtP"
                src="img/homepage/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png"
                />
                <div class="group-101-vMHBtP">
                <img src="img/homepage/backcircle.svg" />
                </div>
                </div>
                <div class="uiwsetting-IQUIuZ">
                <div class="group-122-1t5IQi animate-enter9" show-on-scroll>
                <img class="vector-kr4CWH" src="img/homepage/vector-31@2x.png" />
                <div class="ellipse-16-kr4CWH"></div>
                </div>
                <img class="group-48-1t5IQi" src="img/homepage/group-48@1x.png" />
                </div>
                <img class="arrow-3-IQUIuZ" show-on-scroll src="img/homepage/arrow-3@2x.png" />
                <img class="arrow-5-IQUIuZ " show-on-scroll src="img/homepage/arrow-5@2x.png" />
                <img class="arrow-2-IQUIuZ" show-on-scroll src="img/homepage/arrow-2@2x.png" />
                <img class="arrow-1-IQUIuZ1 animate-enter13" show-on-scroll src="img/homepage/arrow-1@2x.png" />
                <img class="arrow-6-IQUIuZ" src="img/homepage/arrow-6@2x.png" />
                <img class="x3-IQUIuZ" src="img/homepage/3@2x.png" />
                <img class="group-IQUIuZ popout" src="img/homepage/secureicon.svg" />
                <img
                class="eos-iconsblockchain-IQUIuZ"
                show-on-scroll
                src="img/homepage/multichainicon.svg"
                />
                <div class="carbonapi-1-IQUIuZ" show-on-scroll>
                <img class="vector-8rmPPA" src="img/homepage/vector-32@2x.png" />
                <img class="vector-6hpN4R" src="img/homepage/vector-33@2x.png" />
                <img class="vector-mMifHY" src="img/homepage/vector-34@2x.png" />
                </div>
                <img class="x2-IQUIuZ" src="img/homepage/clock.svg" />
                <img class="arrow-4-IQUIuZ" show-on-scroll src="img/homepage/arrow-4@2x.png" />
                <img class="blockchain-1-IQUIuZ " show-on-scroll src="img/homepage/blockchain-1@2x.png" />
                <img class="line-13-IQUIuZ smart-layers-pointers" src="img/homepage/line-13@1x.png" />

                </div>
            </TabPanel>

            </Tabs>
        </div>
       </>
    );
}

export default FeaturesSection;