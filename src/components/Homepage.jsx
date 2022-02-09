import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./Navbar.css";
import './homepage.css';
import Nav from './Navs/Nav';
import NavMobile from './Navs/NavMobile';
import ButtonWhite from  './Buttons/ButtonWhite'
import Header from './Headers/Header';
import Footer from './Footer/Footer';
import FooterMobile from './Footer/FooterMobile';
import Client from './Clients/clients';


 
export const Homepage = () => {

 
    return (
      <div>
       <input type="hidden" id="anPageName" name="page" value="homepage" />
       <div class="homepage main-wrapper">
         <Nav />
         <Header 
            text=" Faster, Cheaper Multi-Chain Payments"
            green_text='Service.'
            subtitle='SendFriend'
            image='img/homepage/slider-homepage-1@1x.jpg'
            under_text='We are cheaper, faster, and more reliable and secure.'
          />
        <Tabs>
          <TabList>
            <Tab>

              <div class="cheaper-zYNucu">
                <div class="rectangle-101-kPiyGZ smart-layers-pointers border-1px-black-2">
                <div class="cheaper-kPiyGZ montserrat-bold-ebony-clay-16px">CHEAPER</div>
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
        <Client />
        
      <div class="platform-section-zYNucu" id="platform-section">
        <div class="a-flexible-cross-bor-ukK2kV montserrat-extra-bold-white-36px animate-enter18" show-on-scroll>
          <span class="span0-MPLrMf">A flexible cross-border payment solution<br /></span
          ><span class="span1-MPLrMf">expanding its international reach</span>
        </div>
        <div class="group-98-ukK2kV">
          <div class="servicing-internatio-hKfoR6 montserrat-bold-ebony-clay-14px">
            Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
            regulations
          </div>
          <div class="our-network-is-expan-hKfoR6 montserrat-bold-ebony-clay-14px">
            Our network is expanding as we develop new integrations and financial relationships
          </div>
          <div class="whether-fiat-to-fiat-hKfoR6 montserrat-bold-ebony-clay-14px">
            Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude
            of B2B and B2C remittance use cases
          </div>
          <div class="settling-payments-mo-hKfoR6 montserrat-bold-ebony-clay-14px">
            Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
          </div>
        </div>
        <img class="group-102-ukK2kV animate-enter19" show-on-scroll src="img/homepage/group-102@2x.svg" />
        <img class="line-15-ukK2kV" src="img/homepage/line-15@2x.png" />
        <img class="group-128-ukK2kV" src="img/homepage/group-128@1x.png" />
      </div>
      <div class="section-3-zYNucu">
        <img class="section-3-hLpjsq" src="img/homepage/section-3@1x.png" />
        <img class="asset-1bg1-1-1-hLpjsq" src="img/homepage/asset-1bg1-1-1@1x.png" />
        <img class="asset-1-1-hLpjsq" src="img/homepage/image-platform.svg" />
        <Link to="/contact-us">
        <div class="button-hLpjsq">
          <div class="learn-more-UCT1KW montserrat-bold-eerie-black-14px">LEARN MORE</div>
        </div>
        </Link>
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
      <img class="rectangle-92-zYNucu" src="img/homepage/rectangle-92@1x.png" />
      <div class="group-99-zYNucu">
        <div class="our-remittance-api-s-h3fqsu montserrat-extra-bold-white-36px animate-enter21" show-on-scroll>
          <span class="span0-nxQf97 montserrat-extra-bold-white-36px-2">Our remittance API </span
          ><span class="span1-nxQf97">seamlessly connects customers to a suite of multi-chain payment tools</span>
        </div>
        <Link to="/contact-us">
        <div class="rectangle-108-h3fqsu smart-layers-pointers">
        <div class="learn-more-h3fqsu montserrat-bold-ebony-clay-14px">LEARN MORE</div>
        </div>
        </Link>
      </div>
      <div class="group-104-zYNucu">
        
        <img class="vector-5-c0Knzr" src="img/homepage/vector-5-1@1x.png" />
        <img class="vector-6-c0Knzr" src="img/homepage/vector-6-1@2x.png" />
        <img class="vector-7-c0Knzr" src="img/homepage/vector-7-1@2x.png" />
        <Tabs>
                  <TabList>

                      <Tab>
                      <div class="rectangle-110-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                        <div class="code-c0Knzr montserrat-bold-ebony-clay-14px">Code Sample</div>
                      </div>
                    </Tab>

                      {/* <Tab>
                      <div class="rectangle-111-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                        <div class="get-fx-rate-c0Knzr montserrat-bold-ebony-clay-14px">Get FX Rate</div>
                    </div>
                    </Tab>

                      <Tab>
                      <div class="rectangle-112-c0Knzr smart-layers-pointers border-1px-black-2">
                        <div class="smart-layers-pointers bp1-animate-enter22" />
                         <div class="get-price-c0Knzr montserrat-bold-ebony-clay-14px">Get Price</div>
                      </div>
                    </Tab> */}

                  </TabList>

                  <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src='img/homepage/api-async-1@2x.png' />
                  </TabPanel>

                  {/* <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src="img/homepage/api-second.jpeg" />
                  </TabPanel>

                  <TabPanel>
                  <img class="api-async-c0Knzr animate-enter22" show-on-scroll src='img/homepage/api-third.jpeg' />
                  </TabPanel> */}

                </Tabs>
        
        
       
      </div>
      <div class="bottom-texts-zYNucu">
        <div class="our-api-architecture-aBc0W1 montserrat-bold-ebony-clay-14px">
          Our API architecture follows the latest technologies and code standards to be robust.
        </div>
        <div class="robust-aBc0W1 montserrat-bold-ebony-clay-18px">Robust</div>
        <div class="scalable-aBc0W1 montserrat-bold-ebony-clay-18px">Scalable</div>
        <div class="secure-aBc0W1 montserrat-bold-ebony-clay-18px">Secure</div>
        <div class="serve-millions-of-us-aBc0W1 montserrat-bold-ebony-clay-14px">
          Serve millions of users and clients worldwide with an easy integration of our API.
        </div>
        <div class="following-latest-sec-aBc0W1 montserrat-bold-ebony-clay-14px">
          Following the latest security standards, tested by time, our API is ready to handle millions of transactions per second.
        </div>
      </div>
      <div id="partners" class="section-5-zYNucu">
        <img class="section-5-ZmCudT" src="img/homepage/section-5@1x.png" />
        <div class="partnerships-ZmCudT">
          <div class="rectangle-91-5wTBPE"></div>
          <img class="line-2-5wTBPE" src="img/homepage/line-clock.svg" />
          <div class="group-100-5wTBPE">
            <div class="group-44-mivLU6">
              <div class="artboard-1-1-g5uSpk">
                <img class="bottom_-ring-DVJBLo" src="img/homepage/bottom-ring@2x.png" />
                <img class="top_-ring-DVJBLo" src="img/homepage/top-ring@2x.png" />
                <img class="rings_-overlap-DVJBLo" src="img/homepage/rings-overlap@2x.png" />
              </div>
              <div class="rippl-g5uSpk">
                <img class="vector-xsjmk9" src="img/homepage/vector-35@2x.png" />
                <img class="vector-NvxEFn" src="img/homepage/vector-36@2x.png" />
                <img class="vector-qwgDDp" src="img/homepage/vector-37@2x.png" />
                <img class="vector-jfLCTN" src="img/homepage/vector-38@2x.png" />
                <img class="vector-7GW01x" src="img/homepage/vector-39@2x.png" />
                <img class="vector-LpMtpk" src="img/homepage/vector-40@2x.png" />
                <img class="vector-0jSUdx" src="img/homepage/vector-41@2x.png" />
              </div>
              <div class="celo-g5uSpk">CELO</div>
            </div>
            <img class="group-45-mivLU6" src="img/group-partnerships.png" />
          </div>
          <div class="we-are-fortunate-to-5wTBPE montserrat-medium-white-14px">
            We are fortunate to be parterned with the following leaders in our space and global influencers of financial
            technology:
          </div>
          <div  class="partners-5wTBPE">Partners</div>
        </div>
      </div>
      
      <Footer custom_class="section footer-section" />
    </div>

    <div class="mobile-homepage screen">
      <img class="slider-homepage-1-qujsfd bp2-animate-enter1" src="img/slider-homepage-1@1x.jpg" />
      <div class="rectangle-126-qujsfd"></div>
      <NavMobile />
      <Client />
      <div class="faster-cheaper-multi-qujsfd bp2-animate-enter2">
        <span class="span0-GBW4Tf">Faster, Cheaper<br />Multi-Chain<br />Payments </span
        ><span class="span1-GBW4Tf montserrat-extra-bold-caribbean-green-30px">Service.</span>
      </div>
      <div class="we-are-cheaper-faste-qujsfd montserrat-semi-bold-white-16px bp2-animate-enter3" show-on-scroll>
        We are cheaper, faster, and more reliable and secure.
      </div>
      <div class="contact-us-qujsfd bp2-animate-enter4" show-on-scroll>
      <Link to="/contact-us">
        <div class="rectangle-1-kXqD6c smart-layers-pointers"></div>
        <div class="contact-us-kXqD6c valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </Link>
      </div>
      <img class="rectangle-106-qujsfd" src="img/rectangle-106-1@1x.png" />
      
      <div id="platform-section-mobile" class="a-flexible-cross-bor-qujsfd montserrat-extra-bold-white-21px bp2-animate-enter16" >
        <span class="span0-okPgZq montserrat-extra-bold-caribbean-green-21px"
          >A flexible cross-border payment solution<br /></span
        ><span class="span1-okPgZq montserrat-extra-bold-ebony-clay-21px">expanding its international reach</span>
      </div>
      <div class="servicing-internatio-qujsfd montserrat-bold-ebony-clay-12px">
        Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
        regulations
      </div>
      <div class="our-network-is-expan-qujsfd montserrat-bold-ebony-clay-12px">
        Our network is expanding as we develop new integrations and financial relationships
      </div>
      <img class="left_image-1-qujsfd" src="img/left-image-1@2x.png" />
      <div class="settling-payments-mo-qujsfd montserrat-bold-ebony-clay-12px">
        Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
      </div>
      <img class="line-15-qujsfd" src="img/line-15@2x.png" />
      <img class="right_image-1-qujsfd" src="img/right-image-1@2x.png" />
      <div class="whether-fiat-to-fiat-qujsfd montserrat-bold-ebony-clay-12px">
        Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude of
        B2B and B2C remittance use cases
      </div>
      <img class="rectangle-124-qujsfd" src="img/rectangle-124-1@1x.png" />
      <div class="group-122-qujsfd bp2-animate-enter17" show-on-scroll>
        <HashLink to="/contact-us">
        <div class="rectangle-1-0LGubN smart-layers-pointers"></div>
        <div class="learn-more-0LGubN valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </HashLink>
      </div>
      <div class="servicing-a-variety-qujsfd valign-text-middle montserrat-extra-bold-white-21px bp2-animate-enter18">
        <span
          ><span class="span0-UWyt2t montserrat-extra-bold-caribbean-green-21px"
            >Servicing a variety of cross-border payment use cases, </span
          ><span class="span1-UWyt2t montserrat-extra-bold-white-21px-2">while adapting to customer needs</span>
        </span>
      </div>
      <div class="our-api-based-platfo-qujsfd">
        Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools. With
        that in mind, we can offer bespoke solutions for MSB partners
      </div>
      <div class="in-short-we-are-buil-qujsfd">
        In short, we are building a team to develop solutions across a range of use cases, where traditional payment
        rails come up short for small and medium size business with thorny cross-border remittance needs
      </div>
      <img class="section-4-nifty-1-qujsfd" src="img/homepage/image-platform.svg" />
      <div class="rectangle-42-qujsfd"></div>
      <img class="rectangle-92-qujsfd" src="img/rectangle-92@1x.png" />
      <div class="our-remittance-api-s-qujsfd montserrat-extra-bold-white-21px bp2-animate-enter19" show-on-scroll>
        <span class="span0-R3hwcY montserrat-extra-bold-white-21px-2">Our Remittance API </span
        ><span class="span1-R3hwcY montserrat-extra-bold-ebony-clay-21px"
          >Seamlessly Connects Customers to a Suite of Multi-Chain Payment Tools</span
        >
      </div>
      <div class="tabs-qujsfd">
        <img class="vector-5-LkwvPL" src="img/vector-5-1@2x.png" />
        <img class="vector-6-LkwvPL" src="img/vector-6-1@2x.png" />
        <img class="vector-7-LkwvPL" src="img/vector-7-1@2x.png" />
        <Tabs>
            <TabList>
              <Tab>
              <div class="code-LkwvPL">
                
                <div class="code-rpFmxG valign-text-middle">Code Sample</div>
              </div>
              </Tab>
              {/* <Tab>
              <div class="get-fx-LkwvPL">
               
                <div class="get-fx-rate-O4lNUx valign-text-middle">Get FX Rate</div>
              </div>
              </Tab>
              <Tab>
              <div class="get-price-LkwvPL">
                
                <div class="get-price-kUWRox valign-text-middle">Get Price</div>
              </div>
              </Tab> */}
            </TabList>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src='img/homepage/api-async-1@2x.png'  />
        </div>
            </TabPanel>
            {/* <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src="img/homepage/api-second.jpeg" />
        </div>
            </TabPanel>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img class="api-async-cdudrr bp2-animate-enter20" show-on-scroll src='img/homepage/api-third.jpeg'  />
        </div>
            </TabPanel> */}
          </Tabs>
        
        
       
       
      </div>
      <div class="bottom-texts-qujsfd">
        <div class="our-api-architecture-cvev6f montserrat-bold-ebony-clay-12px">
          Our API architecture follows the latest technologies and code standards to be robust.
        </div>
        <div class="robust-cvev6f montserrat-bold-ebony-clay-16px">Robust</div>
        <div class="secure-cvev6f montserrat-bold-ebony-clay-16px">Secure</div>
        <div class="following-latest-sec-cvev6f montserrat-bold-ebony-clay-12px">
          Following the latest security standards, tested by time, our API is ready to handle millions of transactions per second.
        </div>
        <div class="scalable-cvev6f montserrat-bold-ebony-clay-16px">Scalable</div>
        <div class="serve-millions-of-us-cvev6f montserrat-bold-ebony-clay-12px">
          Serve millions of users and clients world wide with an easy integration of our API.
        </div>
      </div>
      <div id="partners-mobile" class="partnerships-qujsfd">
        <div class="rectangle-91-RBdLCu"></div>
        <img class="line-2-RBdLCu" src="img/line-2@2x.png" />
        <div class="group-100-RBdLCu">
          <div class="group-44-nrzUja">
            <div class="artboard-1-1-vVV7dw">
              <img class="bottom_-ring-ZLM6y5" src="img/bottom-ring-2@2x.png" />
              <img class="top_-ring-ZLM6y5" src="img/top-ring-2@2x.png" />
              <img class="rings_-overlap-ZLM6y5" src="img/rings-overlap-2@2x.png" />
            </div>
            <div class="rippl-vVV7dw">
              <img class="vector-8Jmrad" src="img/homepage/vector-35@2x.png" />
              <img class="vector-zQfLsx" src="img/homepage/vector-36@2x.png" />
              <img class="vector-nAYXPr" src="img/homepage/vector-37@2x.png" />
              <img class="vector-UExn7f" src="img/homepage/vector-38@2x.png" />
              <img class="vector-DdwQzm" src="img/homepage/vector-39@2x.png" />
              <img class="vector-4yxsnS" src="img/homepage/vector-40@2x.png" />
              <img class="vector-h8WzEb" src="img/homepage/vector-41@2x.png" />
            </div>
            <img class="celo-vVV7dw" src="img/celo@2x.png" />
            <HashLink smooth to="#top">
            <img class="logo_footer-1-vVV7dw" src="img/logo-footer-1@2x.png" />
            </HashLink>
          </div>
          <div class="group-45-nrzUja">
            <img class="vector-nW5wWj" src="img/homepage/vector-71@2x.png" />
            <img
              class="d-au1-v-vb-visgik1-y-nW5wWj"
              src="img/homepage/mitdeltav.png"
            />
            <img class="vector-Hygbyv" src="img/homepage/group-45@1x.png" />
            <img class="european-funds-1-nW5wWj" src="img/european-funds-1-1@2x.png" />
            <img class="en-logo-1-nW5wWj" src="img/enlogo-1-2@2x.png" />
            <img class="knick-capital-1-nW5wWj" src="img/knick-capital-1-2@2x.png" />
            <img class="coins-ph-1-nW5wWj" src="img/coins-ph-1-2@2x.png" />
            <img
              class="barclays_-accelerator_-logo_16_9medium-1-nW5wWj"
              src="img/barclays-accelerator-logo-16-9-medium-1-2@2x.png"
            />
          </div>
        </div>
        <div class="we-are-fortunate-to-RBdLCu">
          We are fortunate to be parterned with the following leaders in our space and global influencers of financial
          technology:
        </div>
        <div class="partners-RBdLCu montserrat-extra-bold-caribbean-green-21px">Partners</div>
      </div>
      <div class="send-friend-qujsfd montserrat-bold-caribbean-green-18px bp2-animate-enter21" show-on-scroll>
        SendFriend
      </div>
      <FooterMobile custom_class="footer footer-homepage" />
      
        <Tabs>
          <TabList>
            <Tab>
      <div class="group-130-qujsfd">
        <div class="rectangle-101-7awJUp smart-layers-pointers">
        <div class="cheaper-7awJUp montserrat-bold-ebony-clay-6px">CHEAPER</div>
        <img class="x4-7awJUp smart-layers-pointers bp2-animate-enter23" src="img/homepage/3@1x.png" />
        </div>
      </div>
      </Tab>

      <Tab>
      <div class="group-131-qujsfd">
        <div class="rectangle-102-7LXeRP smart-layers-pointers">
        <div class="faster-7LXeRP montserrat-bold-ebony-clay-6px">FASTER</div>
        <img class="x5-7LXeRP smart-layers-pointers" src="img/5@2x.png" />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-132-qujsfd">
        <div class="rectangle-103-DYvcOX smart-layers-pointers">
        <div class="multichain-DYvcOX montserrat-bold-ebony-clay-6px">MULTICHAIN</div>

        <img
          class="eos-iconsblockchain-DYvcOX smart-layers-pointers bp2-animate-enter25"
          src="img/homepage/eos-icons-blockchain@2x.png"
        />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-133-qujsfd">
        <div class="rectangle-104-6HuZwK smart-layers-pointers">
        <div class="more-secure-6HuZwK valign-text-middle montserrat-bold-ebony-clay-6px">MORE SECURE</div>
        <div class="group-6HuZwK smart-layers-pointers">
          <img class="vector-15vxSa" src="img/homepage/vector-13@2x.png" />
          <img class="vector-HFRxah" src="img/homepage/vector-14@2x.png" />
        </div>
        </div>
      </div>
      </Tab>
      </TabList>
      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend delivers a</span
        ><span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> cheaper solution<br /></span
        ><span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">for transferring money across borders</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd1 bp2-animate-enter8" show-on-scroll src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd popout" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img
        class="eos-iconsblockchain-qujsfd"
        show-on-scroll
        src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img class="blockchain-1-qujsfd" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd">
        <img class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd">
        <img class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="frame-132-qujsfd">
        <div class="lower-fx-costs-y3OOEg montserrat-semi-bold-ebony-clay-12px">Lower FX costs</div>
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
          Fewer correspondent and intermediary banks mean lower fees
        </div>
        <div class="no-pre-funding-burden-y3OOEg montserrat-semi-bold-ebony-clay-12px">No pre-funding burden</div>
        <div class="access-to-a-least-co-y3OOEg montserrat-semi-bold-ebony-clay-12px">
          Access to a least-cost routing AI/ML algorithm to optimally select payment route via our multi-chain network
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd">
        Our on-chain solutions avoid traditional payment rails that carry high FX and other transaction fees. In short,
        we leverage blockchain networks and other non-traditional rails for more cost-effective settlement
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <Link to="/contact-us">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </Link>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend offers a</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> speed advantage<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">to traditional payment rails</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd1 bp2-animate-enter11" src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img
        class="eos-iconsblockchain-qujsfd"
        src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd popout" src="img/homepage/clock.svg" />
      <img class="blockchain-1-qujsfd" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd1">
        <img class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd2">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd2">
        <img class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="frame-132-qujsfd">
        <div class="lower-fx-costs-y3OOEg montserrat-semi-bold-ebony-clay-12px">Near-instant settlement</div>
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        Blockchain-enabled payments are inherently faster, avoiding cumbersome traditional intermediaries
        </div>
        <div class="no-pre-funding-burden-y3OOEg1 montserrat-semi-bold-ebony-clay-12px">Money and payment metadata flow over the same systems, ensuring faster settlement</div>
        <div class="access-to-a-least-co-y3OOEg2 montserrat-semi-bold-ebony-clay-12px">
        For off-chain solutions, we leverage blockchain to route payment metadata faster
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd6">
      Both our on- and off-chain solutions leverage nimble systems to settle payments in nearly real-time
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <Link to="/contact-us">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </Link>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend is building
</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> integrations<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px">to a multitude of blockchain-based
payment systems</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd1 bp2-animate-enter10" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img
        class="eos-iconsblockchain-qujsfd popout"
        src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img class="blockchain-1-qujsfd" show-on-scroll src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd3">
        <img class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>

      <div class="check-box-3-qujsfd">
        <img class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>

      <div class="frame-132-qujsfd1">
        
        <div class="fewer-correspondent-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        RippleNet has been our founding partner and fundamental to our initial cross-border remittance success
        </div>
        <div class="access-to-a-least-co-y3OOEg montserrat-semi-bold-ebony-clay-12px">
        We are building out additional blockchain network integrations so that our solution is chain-agnostic and can support lease-cost routing over time
        </div>
      </div>
      <div class="our-on-chain-solutio-qujsfd">
      We aim to offer multiple blockchain-enabled payment routing options depending on the use case, geography, and least-cost routing method
      </div>
      <div class="group-121-qujsfd bp2-animate-enter15" show-on-scroll>
        <Link to="/contact-us">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </Link>
      </div>
      </TabPanel>

      <TabPanel>
      <div class="send-friend-delivers-qujsfd montserrat-extra-bold-white-21px">
        <span class="span0-CoUivr montserrat-extra-bold-eerie-black-21px">SendFriend firmly believes that</span>
        <span class="span1-CoUivr montserrat-extra-bold-white-21px-2"> blockchain-based payment methods<br /></span>
        <span class="span2-CoUivr montserrat-extra-bold-eerie-black-21px"> are the future because of the inherent security benefits</span>
      </div>
      <div class="secure-qujsfd montserrat-semi-bold-ebony-clay-10px">Secure</div>
      <div class="multichain-qujsfd montserrat-semi-bold-ebony-clay-10px">Multichain</div>
      <div class="x1-api-connection-qujsfd montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
      <div class="blockchain-qujsfd montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
      <div class="cost-effective-qujsfd montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
      <div class="fast-payment-qujsfd montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
      <div class="world-group-qujsfd bp2-animate-enter5" show-on-scroll>
        <img
          class="kisspng-clip-art-cit-H6QPKS"
          src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" show-on-scroll>
          <img class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img class="arrow-1-qujsfd1 bp2-animate-enter10" src="img/arrow-1@2x.png" />
      <img class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd popout"><img class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img
        class="eos-iconsblockchain-qujsfd"
        show-on-scroll
        src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" show-on-scroll>
        <img class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img class="blockchain-1-qujsfd" show-on-scroll src="img/blockchain-1-1@2x.png" />
      
      
      <div class="our-on-chain-solutio-qujsfd4">
      Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
      </div>
      <div class="group-121-qujsfd1 bp2-animate-enter15" show-on-scroll>
        <Link to="/contact-us">
        <div class="rectangle-1-dolwXC smart-layers-pointers"></div>
        <div class="learn-more-dolwXC valign-text-middle montserrat-bold-eerie-black-11px">LEARN MORE</div>
        </Link>
      </div>
      </TabPanel>
      </Tabs>

    </div>             
        </div>
        
        )
        
    }




 
