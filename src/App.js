import logo from './img/original-logo@2x.svg';
import './App.css';
import { Fragment } from 'react';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';
import testImg from './img/slider-homepage-1@1x.png';
import facebook_icon from './img/bx-bxl-facebook@2x.svg';
import twitter_icon from './img/ant-design-twitter-outlined@2x.svg';
import linkedin_icon from './img/vector-8@2x.svg';
import menu_bg from './img/vector-9@1x.svg';
import logo_title from './img/logo-title@2x.svg';
import rectangle1 from './img/rectangle-92-2@1x.svg';
import rectangle2 from './img/rectangle-88-2@1x.svg';
import cheaper_img from './img/3@1x.png';
import faster_img from './img/2@2x.png';
import black_line from './img/line-13@1x.svg';
import section2_bg from './img/rectangle-106@1x.svg';
import multichain_img from './img/eos-icons-blockchain-1@2x.svg';
import moresecure_img from './img/group-6@2x.svg';
import api_img from './img/carbon-api-1@2x.svg';
import arrow1 from './img/arrow-6@2x.svg';
import arrow2 from './img/arrow-2@2x.svg';
import arrow3 from './img/arrow-3@2x.svg';
import arrow4 from './img/arrow-4@2x.svg';
import arrow5 from './img/arrow-5@2x.svg';
import arrow6 from './img/arrow-1@2x.svg';
import world_img from './img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a@2x.png';
import outlined_circle from './img/ant-design-check-circle-outlined@2x.svg';
import asset_1 from './img/asset-1bg1-1-1@1x.png';
import cost_effective from './img/3@2x.png';
import blockchain from './img/blockchain-1@2x.png';
import section2_logo from './img/group-48@1x.png';
import section2_gear from './img/vector-3@2x.svg';
import section2_group1 from './img/group-101-1@2x.svg';
import section3_ellipse from './img/ellipse-17@2x.svg';
import section3_img_right from './img/right_image.svg';
import section3_world from './img/kisspng-web-development-lincoln-it-solutions-pvt-ltd-netwo-globe@2x.png';
import section4_right_img from './img/asset-1-1@1x.png';
import section5_code from './img/rectangle-110@2x.svg';
import section5_vector1 from './img/vector-5-1@1x.svg';
import section5_vector2 from './img/vector-7@2x.svg';
import section5_vector3 from './img/vector-6-1@2x.svg';
import first_image from './img/api-async@2x.png';
import second_image from './img/api-second.jpeg';
import third_image from './img/api-third.jpeg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



function App() {
  return (
    <div>
      <input type="hidden" id="anPageName" name="page" value="homepage" />
    <div class="container-center-horizontal">
      <div class="iphone-8-1 screen">
        <div class="frame-8-TZ6asu">
          <img class="group-46-8LCNNa" src={testImg} />
          <img class="friend-8LCNNa" src="img/friend@2x.svg" />
          <img class="send-8LCNNa" src="img/send@2x.svg" />
          <a href="javascript:ShowOverlay('mobile-menu', 'animate-appear');"
            ><img class="hamburger-8LCNNa" src="img/hamburger@2x.svg" />
          </a>
        </div>
      </div>
    </div>
    <div class="container-center-horizontal">
      <div class="homepage screen">
        <div class="rectangle-42-zYNucu"></div>
        <img class="rectangle-92-zYNucu" src={rectangle1} />
        <img class="rectangle-88-zYNucu" src={rectangle2} />
        <div class="bottom-texts-zYNucu">
          <div class="our-api-architecture-aBc0W1 montserrat-bold-ebony-clay-14px">
            Our API architecture follows latest technologies and code standards to be robust.
          </div>
          <div class="robust-aBc0W1 montserrat-bold-ebony-clay-18px">Robust</div>
          <div class="scalable-aBc0W1 montserrat-bold-ebony-clay-18px">Scalable</div>
          <div class="secure-aBc0W1 montserrat-bold-ebony-clay-18px">Secure</div>
          <div class="serve-millions-of-us-aBc0W1 montserrat-bold-ebony-clay-14px">
            Serve millions of users and clients world wide with an easy integration of our API.
          </div>
          <div class="following-latest-sec-aBc0W1 montserrat-bold-ebony-clay-14px">
            Following latest security standards, tested by time, our API is ready to handle million transactions per
            sec.
          </div>
        </div>

        <div class="advance-tab-button advance-tab-button-1 right-top">
            <Tabs>
              <TabList>
                <Tab>
                  <div class="rectangle-101-Ap9U61 smart-layers-pointers border-1px-black-2">
                    <img class="x3-Ap9U61 smart-layers-pointers bp1-animate-enter22" src={cheaper_img} />
                    <div class="cheaper-Ap9U61">CHEAPER</div>
                  </div>
                </Tab>
                <Tab>
                <div class="rectangle-102-Ap9U61 smart-layers-pointers border-1px-black-2">
                  <div class="faster-Ap9U61 montserrat-bold-ebony-clay-16px">FASTER</div>
                  <img class="x2-Ap9U61 smart-layers-pointers bp1-animate-enter23" src={faster_img} />
                </div>
                </Tab>
                <Tab>
                <div class="rectangle-103-Ap9U61 smart-layers-pointers border-1px-black-2">
                  <img class="eos-iconsblockchain-Ap9U61 smart-layers-pointers bp1-animate-enter24" src={multichain_img}/>
                  <div class="multichain-Ap9U61 montserrat-bold-ebony-clay-16px">MULTICHAIN</div>
                </div>
                </Tab>
                <Tab>
                <div class="rectangle-104-Ap9U61 smart-layers-pointers border-1px-black-2">
                  <div class="more-secure-Ap9U61 montserrat-bold-ebony-clay-16px">MORE SECURE</div>
                  <img class="group-Ap9U61 smart-layers-pointers" src={moresecure_img} />
                </div>
                </Tab>
              </TabList>

              <TabPanel>
                    <div>
                <img class="rectangle-106-zYNucu" src={section2_bg}/>
                <div class="group-92-zYNucu">
                  <img class="ant-designcheck-circle-outlined-pMVTHP" src={outlined_circle} />
                  <img class="ant-designcheck-circle-outlined-LiPxAv" src={outlined_circle} />
                  <img class="ant-designcheck-circle-outlined-VgymmD" src={outlined_circle} />
                  <div class="send-friend-delivers-pMVTHP montserrat-extra-bold-white-36px bp1-animate-enter20">
                    <span class="span0-BMjjiJ">SendFriend delivers a</span
                    ><span class="span1-BMjjiJ montserrat-extra-bold-white-36px-2"> cheaper method<br /></span
                    ><span class="span2-BMjjiJ">of transferring money for SMEs</span>
                  </div>
                  <div class="our-on-chain-solutio-pMVTHP bp1-animate-enter20">
                    Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees.
                    In short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
                    settlement
                  </div>
                  <div class="lower-fx-costs-fewer-pMVTHP bp1-animate-enter20">
                    Lower FX costs<br /><br />Fewer correspondent and intermediary banks mean lower fees<br /><br />No
                    pre-funding burden<br /><br />Access to a least-cost routing AI/ML algorithm to optimally select payment
                    route via our multi-chain network
                  </div>
                  <a style={{color: '#000000'}} href="/contact">
                  <div class="rectangle-1-pMVTHP smart-layers-pointers"></div>
                  <div class="rectangle-2-pMVTHP smart-layers-pointers"></div>
                  <div class="learn-more-pMVTHP montserrat-bold-eerie-black-14px">LEARN MORE</div>
                  <div class="learn-more-LiPxAv montserrat-bold-eerie-black-14px">LEARN MORE</div>
                </a>
                </div>
                <img class="ant-designcheck-circle-outlined-zYNucu" src={outlined_circle} />
                <div class="secure-zYNucu montserrat-semi-bold-ebony-clay-10px">Secure</div>
                <div class="multichain-zYNucu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
                <div class="x1-api-connection-zYNucu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
                <div class="blockchain-zYNucu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
                <div class="cost-effective-zYNucu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
                <div class="fast-payment-zYNucu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
                <div class="group-97-zYNucu">
                  <div class="servicing-a-variety-5BiD38 montserrat-extra-bold-white-36px bp1-animate-enter">
                    <span class="span0-Rijsq8">Servicing a Variety of Cross-Border Payment Use Cases, </span
                    ><span class="span1-Rijsq8 montserrat-extra-bold-white-36px-2">while Adapting to Customer Needs</span>
                  </div>
                  <div class="our-api-based-platfo-5BiD38">
                    Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
                    With that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
                  </div>
                  <div class="in-short-we-are-buil-5BiD38">
                    In short, we are building a team to develop solutions across a range of use cases, where traditional payment
                    rails come up short for small and medium size business with thorny cross-border remittance needs
                  </div>
                </div>
                <img class="asset-1bg1-1-1-zYNucu" src={asset_1} />
                <div class="world-group-zYNucu bp1-animate-enter1" show-on-scroll>
                  <img
                    class="kisspng-clip-art-cit-8iKLl4"
                    src={world_img}
                  />
                  <img class="group-101-8iKLl4" src={section2_group1} />
                </div>
                <div class="uiwsetting-zYNucu">
                  <div class="group-122-PZ1dm1 bp1-animate-enter2" show-on-scroll>
                    <img class="vector-FFxYwU" src={section2_gear} />
                    <div class="ellipse-16-FFxYwU"></div>
                  </div>
                  <img class="group-48-PZ1dm1" src={section2_logo} />
                </div>
                <img class="arrow-3-zYNucu bp1-animate-enter3" show-on-scroll src={arrow3} />
                <img class="arrow-5-zYNucu bp1-animate-enter4" show-on-scroll src={arrow4} />
                <img class="arrow-2-zYNucu bp1-animate-enter5" show-on-scroll src={arrow2} />
                <img class="arrow-1-zYNucu bp1-animate-enter6" show-on-scroll src={arrow6} />
                <img class="arrow-6-zYNucu" src={arrow1} />
                <img class="x3-zYNucu" src={cost_effective} />
                <img class="group-zYNucu" src={moresecure_img} />
                <img class="eos-iconsblockchain-zYNucu bp1-animate-enter7" show-on-scroll src={multichain_img} />
                <img class="carbonapi-1-zYNucu bp1-animate-enter8" show-on-scroll src={api_img} />
                <img class="x2-zYNucu" src={faster_img} />
                <img class="arrow-4-zYNucu bp1-animate-enter9" show-on-scroll src={arrow5} />
              </div>
              </TabPanel>
              <TabPanel>
                  <div>
              <img class="rectangle-106-zYNucu" src={section2_bg}/>
              <div class="group-92-zYNucu">
                <img class="ant-designcheck-circle-outlined-pMVTHP" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-LiPxAv" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-VgymmD" src={outlined_circle} />
                <div class="send-friend-delivers-pMVTHP montserrat-extra-bold-white-36px bp1-animate-enter20">
                  <span class="span0-BMjjiJ">SendFriend delivers MODE 2a</span
                  ><span class="span1-BMjjiJ montserrat-extra-bold-white-36px-2"> cheaper method<br /></span
                  ><span class="span2-BMjjiJ">of transferring money for SMEs</span>
                </div>
                <div class="our-on-chain-solutio-pMVTHP">
                  Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees.
                  In short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
                  settlement
                </div>
                <div class="lower-fx-costs-fewer-pMVTHP">
                  Lower FX costs<br /><br />Fewer correspondent and intermediary banks mean lower fees<br /><br />No
                  pre-funding burden<br /><br />Access to a least-cost routing AI/ML algorithm to optimally select payment
                  route via our multi-chain network
                </div>
                <a style={{color: '#000000'}} href="/contact">
                <div class="rectangle-1-pMVTHP smart-layers-pointers"></div>
                <div class="rectangle-2-pMVTHP smart-layers-pointers"></div>
                <div class="learn-more-pMVTHP montserrat-bold-eerie-black-14px">LEARN MORE</div>
                <div class="learn-more-LiPxAv montserrat-bold-eerie-black-14px">LEARN MORE</div>
              </a>
              </div>
              <img class="ant-designcheck-circle-outlined-zYNucu" src={outlined_circle} />
              <div class="secure-zYNucu montserrat-semi-bold-ebony-clay-10px">Secure</div>
              <div class="multichain-zYNucu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
              <div class="x1-api-connection-zYNucu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
              <div class="blockchain-zYNucu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
              <div class="cost-effective-zYNucu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
              <div class="fast-payment-zYNucu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
              <div class="group-97-zYNucu">
                <div class="servicing-a-variety-5BiD38 montserrat-extra-bold-white-36px bp1-animate-enter">
                  <span class="span0-Rijsq8">Servicing a Variety of Cross-Border Payment Use Cases, </span
                  ><span class="span1-Rijsq8 montserrat-extra-bold-white-36px-2">while Adapting to Customer Needs</span>
                </div>
                <div class="our-api-based-platfo-5BiD38">
                  Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
                  With that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
                </div>
                <div class="in-short-we-are-buil-5BiD38">
                  In short, we are building a team to develop solutions across a range of use cases, where traditional payment
                  rails come up short for small and medium size business with thorny cross-border remittance needs
                </div>
              </div>
              <img class="asset-1bg1-1-1-zYNucu" src={asset_1} />
              <div class="world-group-zYNucu bp1-animate-enter1" show-on-scroll>
                <img
                  class="kisspng-clip-art-cit-8iKLl4"
                  src={world_img}
                />
                <img class="group-101-8iKLl4" src={section2_group1} />
              </div>
              <div class="uiwsetting-zYNucu">
                <div class="group-122-PZ1dm1 bp1-animate-enter2" show-on-scroll>
                  <img class="vector-FFxYwU" src={section2_gear} />
                  <div class="ellipse-16-FFxYwU"></div>
                </div>
                <img class="group-48-PZ1dm1" src={section2_logo} />
              </div>
              <img class="arrow-3-zYNucu bp1-animate-enter3" show-on-scroll src={arrow3} />
              <img class="arrow-5-zYNucu bp1-animate-enter4" show-on-scroll src={arrow4} />
              <img class="arrow-2-zYNucu bp1-animate-enter5" show-on-scroll src={arrow2} />
              <img class="arrow-1-zYNucu bp1-animate-enter6" show-on-scroll src={arrow6} />
              <img class="arrow-6-zYNucu" src={arrow1} />
              <img class="x3-zYNucu" src={cost_effective} />
              <img class="group-zYNucu" src={moresecure_img} />
              <img class="eos-iconsblockchain-zYNucu bp1-animate-enter7" show-on-scroll src={multichain_img} />
              <img class="carbonapi-1-zYNucu bp1-animate-enter8" show-on-scroll src={api_img} />
              <img class="x2-zYNucu" src={faster_img} />
              <img class="arrow-4-zYNucu bp1-animate-enter9" show-on-scroll src={arrow5} />
            </div>
              </TabPanel>
              <TabPanel>
                  <div>
              <img class="rectangle-106-zYNucu" src={section2_bg}/>
              <div class="group-92-zYNucu">
                <img class="ant-designcheck-circle-outlined-pMVTHP" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-LiPxAv" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-VgymmD" src={outlined_circle} />
                <div class="send-friend-delivers-pMVTHP montserrat-extra-bold-white-36px bp1-animate-enter20">
                  <span class="span0-BMjjiJ">SendFriend delivers MODE 4 a</span
                  ><span class="span1-BMjjiJ montserrat-extra-bold-white-36px-2"> cheaper method<br /></span
                  ><span class="span2-BMjjiJ">of transferring money for SMEs</span>
                </div>
                <div class="our-on-chain-solutio-pMVTHP">
                  Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees.
                  In short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
                  settlement
                </div>
                <div class="lower-fx-costs-fewer-pMVTHP">
                  Lower FX costs<br /><br />Fewer correspondent and intermediary banks mean lower fees<br /><br />No
                  pre-funding burden<br /><br />Access to a least-cost routing AI/ML algorithm to optimally select payment
                  route via our multi-chain network
                </div>
                <a style={{color: '#000000'}} href="/contact">
                <div class="rectangle-1-pMVTHP smart-layers-pointers"></div>
                <div class="rectangle-2-pMVTHP smart-layers-pointers"></div>
                <div class="learn-more-pMVTHP montserrat-bold-eerie-black-14px">LEARN MORE</div>
                <div class="learn-more-LiPxAv montserrat-bold-eerie-black-14px">LEARN MORE</div>
              </a>
              </div>
              <img class="ant-designcheck-circle-outlined-zYNucu" src={outlined_circle} />
              <div class="secure-zYNucu montserrat-semi-bold-ebony-clay-10px">Secure</div>
              <div class="multichain-zYNucu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
              <div class="x1-api-connection-zYNucu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
              <div class="blockchain-zYNucu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
              <div class="cost-effective-zYNucu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
              <div class="fast-payment-zYNucu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
              <div class="group-97-zYNucu">
                <div class="servicing-a-variety-5BiD38 montserrat-extra-bold-white-36px bp1-animate-enter">
                  <span class="span0-Rijsq8">Servicing a Variety of Cross-Border Payment Use Cases, </span
                  ><span class="span1-Rijsq8 montserrat-extra-bold-white-36px-2">while Adapting to Customer Needs</span>
                </div>
                <div class="our-api-based-platfo-5BiD38">
                  Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
                  With that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
                </div>
                <div class="in-short-we-are-buil-5BiD38">
                  In short, we are building a team to develop solutions across a range of use cases, where traditional payment
                  rails come up short for small and medium size business with thorny cross-border remittance needs
                </div>
              </div>
              <img class="asset-1bg1-1-1-zYNucu" src={asset_1} />
              <div class="world-group-zYNucu bp1-animate-enter1" show-on-scroll>
                <img
                  class="kisspng-clip-art-cit-8iKLl4"
                  src={world_img}
                />
                <img class="group-101-8iKLl4" src={section2_group1} />
              </div>
              <div class="uiwsetting-zYNucu">
                <div class="group-122-PZ1dm1 bp1-animate-enter2" show-on-scroll>
                  <img class="vector-FFxYwU" src={section2_gear} />
                  <div class="ellipse-16-FFxYwU"></div>
                </div>
                <img class="group-48-PZ1dm1" src={section2_logo} />
              </div>
              <img class="arrow-3-zYNucu bp1-animate-enter3" show-on-scroll src={arrow3} />
              <img class="arrow-5-zYNucu bp1-animate-enter4" show-on-scroll src={arrow4} />
              <img class="arrow-2-zYNucu bp1-animate-enter5" show-on-scroll src={arrow2} />
              <img class="arrow-1-zYNucu bp1-animate-enter6" show-on-scroll src={arrow6} />
              <img class="arrow-6-zYNucu" src={arrow1} />
              <img class="x3-zYNucu" src={cost_effective} />
              <img class="group-zYNucu" src={moresecure_img} />
              <img class="eos-iconsblockchain-zYNucu bp1-animate-enter7" show-on-scroll src={multichain_img} />
              <img class="carbonapi-1-zYNucu bp1-animate-enter8" show-on-scroll src={api_img} />
              <img class="x2-zYNucu" src={faster_img} />
              <img class="arrow-4-zYNucu bp1-animate-enter9" show-on-scroll src={arrow5} />
            </div>
              </TabPanel>
              <TabPanel>
                  <div>
              <img class="rectangle-106-zYNucu" src={section2_bg}/>
              <div class="group-92-zYNucu">
                <img class="ant-designcheck-circle-outlined-pMVTHP" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-LiPxAv" src={outlined_circle} />
                <img class="ant-designcheck-circle-outlined-VgymmD" src={outlined_circle} />
                <div class="send-friend-delivers-pMVTHP montserrat-extra-bold-white-36px bp1-animate-enter20">
                  <span class="span0-BMjjiJ">SendFriend delivers MODE 3 a </span>
                  <span class="span1-BMjjiJ montserrat-extra-bold-white-36px-2"> cheaper method<br /></span>
                  <span class="span2-BMjjiJ">of transferring money for SMEs</span>
                </div>
                <div class="our-on-chain-solutio-pMVTHP">
                  Our on-chain solutions avoid traditional payment rails that <br />carry high FX and other transaction fees.
                  In short, we leverage blockchain networks and other non-traditional rails&nbsp;&nbsp;for more cost-effective
                  settlement
                </div>
                <div class="lower-fx-costs-fewer-pMVTHP">
                  Lower FX costs<br /><br />Fewer correspondent and intermediary banks mean lower fees<br /><br />No
                  pre-funding burden<br /><br />Access to a least-cost routing AI/ML algorithm to optimally select payment
                  route via our multi-chain network
                </div>
                <a style={{color: '#000000'}} href="/contact">
                <div class="rectangle-1-pMVTHP smart-layers-pointers"></div>
                <div class="rectangle-2-pMVTHP smart-layers-pointers"></div>
                <div class="learn-more-pMVTHP montserrat-bold-eerie-black-14px">LEARN MORE</div>
                <div class="learn-more-LiPxAv montserrat-bold-eerie-black-14px">LEARN MORE</div>
              </a>
              </div>
              <img class="ant-designcheck-circle-outlined-zYNucu" src={outlined_circle} />
              <div class="secure-zYNucu montserrat-semi-bold-ebony-clay-10px">Secure</div>
              <div class="multichain-zYNucu montserrat-semi-bold-ebony-clay-10px">Multichain</div>
              <div class="x1-api-connection-zYNucu montserrat-semi-bold-ebony-clay-10px">1 API<br />Connection</div>
              <div class="blockchain-zYNucu montserrat-semi-bold-ebony-clay-10px">Blockchain</div>
              <div class="cost-effective-zYNucu montserrat-semi-bold-ebony-clay-10px">Cost<br />Effective</div>
              <div class="fast-payment-zYNucu montserrat-semi-bold-ebony-clay-10px">Fast<br />Payment</div>
              <div class="group-97-zYNucu">
                <div class="servicing-a-variety-5BiD38 montserrat-extra-bold-white-36px bp1-animate-enter">
                  <span class="span0-Rijsq8">Servicing a Variety of Cross-Border Payment Use Cases, </span
                  ><span class="span1-Rijsq8 montserrat-extra-bold-white-36px-2">while Adapting to Customer Needs</span>
                </div>
                <div class="our-api-based-platfo-5BiD38">
                  Our API-based platform enables customers to seamlessly gain access to a suite of B2B and B2C payment tools.
                  With that in mind, we can offfer&nbsp;&nbsp;bespoke solutions for MSB partners
                </div>
                <div class="in-short-we-are-buil-5BiD38">
                  In short, we are building a team to develop solutions across a range of use cases, where traditional payment
                  rails come up short for small and medium size business with thorny cross-border remittance needs
                </div>
              </div>
              <img class="asset-1bg1-1-1-zYNucu" src={asset_1} />
              <div class="world-group-zYNucu bp1-animate-enter1" show-on-scroll>
                <img
                  class="kisspng-clip-art-cit-8iKLl4"
                  src={world_img}
                />
                <img class="group-101-8iKLl4" src={section2_group1} />
              </div>
              <div class="uiwsetting-zYNucu">
                <div class="group-122-PZ1dm1 bp1-animate-enter2" show-on-scroll>
                  <img class="vector-FFxYwU" src={section2_gear} />
                  <div class="ellipse-16-FFxYwU"></div>
                </div>
                <img class="group-48-PZ1dm1" src={section2_logo} />
              </div>
              <img class="arrow-3-zYNucu bp1-animate-enter3" show-on-scroll src={arrow3} />
              <img class="arrow-5-zYNucu bp1-animate-enter4" show-on-scroll src={arrow4} />
              <img class="arrow-2-zYNucu bp1-animate-enter5" show-on-scroll src={arrow2} />
              <img class="arrow-1-zYNucu bp1-animate-enter6" show-on-scroll src={arrow6} />
              <img class="arrow-6-zYNucu" src={arrow1} />
              <img class="x3-zYNucu" src={cost_effective} />
              <img class="group-zYNucu" src={moresecure_img} />
              <img class="eos-iconsblockchain-zYNucu bp1-animate-enter7" show-on-scroll src={multichain_img} />
              <img class="carbonapi-1-zYNucu bp1-animate-enter8" show-on-scroll src={api_img} />
              <img class="x2-zYNucu" src={faster_img} />
              <img class="arrow-4-zYNucu bp1-animate-enter9" show-on-scroll src={arrow5} />
            </div>
              </TabPanel>
            </Tabs>
          </div>

        <div class="platform-section-zYNucu" id="platform-section">
          <div class="a-flexible-cross-bor-ukK2kV montserrat-extra-bold-white-36px bp1-animate-enter10" show-on-scroll>
            <span class="span0-MPLrMf">A flexible cross-border payment solution<br /></span
            ><span class="span1-MPLrMf">expanding its international reach</span>
          </div>
          <div class="group-98-ukK2kV">
            <div class="servicing-internatio-hKfoR6 montserrat-bold-ebony-clay-14px">
              Servicing international remittance corridors in high-volume regions with traditionally burdensome costs
              and regulations
            </div>
            <div class="our-network-is-expan-hKfoR6 montserrat-bold-ebony-clay-14px">
              Our network is expanding as we develop new integrations and financial relationships
            </div>
            <div class="whether-fiat-to-fiat-hKfoR6 montserrat-bold-ebony-clay-14px">
              Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a
              multitude of B2B and B2C remittance use cases
            </div>
            <div class="settling-payments-mo-hKfoR6 montserrat-bold-ebony-clay-14px">
              Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
            </div>
          </div>
          <img
            class="kisspng-web-developm-ukK2kV bp1-animate-enter11"
            show-on-scroll
            src={section3_world}
          />
          <img class="ellipse-17-ukK2kV" src={section3_ellipse} />
          <div class="group-102-ukK2kV bp1-animate-enter12" show-on-scroll>
            <img
              class="kisspng-colosseum-la-z2RTyM" src={section3_img_right}
            />
           
          </div>
          
        </div>
        <div class="group-105-zYNucu">
          <div class="group-99-Af8LZk">
            <div
              class="our-remittance-api-s-iU7JjP montserrat-extra-bold-white-36px bp1-animate-enter13"
              show-on-scroll
            >
              <span class="span0-J1gvkl montserrat-extra-bold-white-36px-2">Our Remittance API </span
              ><span class="span1-J1gvkl">Seamlessly Connects Customers to a Suite of Multi-Chain Payment Tools</span>
            </div>
            <a style={{color: '#000000'}} href="/contact">
              <div class="rectangle-108-iU7JjP smart-layers-pointers"></div>
             <div class="learn-more-iU7JjP montserrat-bold-ebony-clay-14px">LEARN MORE</div>
          </a>
          </div>
        </div>
        <div class="group-104-zYNucu">
          <div class="rectangle-109-c0Knzr"></div>
          <img class="vector-5-c0Knzr" src={section5_vector1} />
          <img class="vector-6-c0Knzr" src={section5_vector2} />
          <img class="vector-7-c0Knzr" src={section5_vector3} />
            <Tabs>
              <TabList>
                  <Tab>
                  <div class=" selected rectangle-110-c0Knzr smart-layers-pointers border-1px-black-2">
                    <div class="smart-layers-pointers bp1-animate-enter22" />
                    <div class="code-c0Knzr montserrat-bold-white-14px">Code</div>
                  </div>
                </Tab>
                  <Tab>
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
                </Tab>
              </TabList>

              <TabPanel>
              <img class="api-async-c0Knzr bp1-animate-enter14" show-on-scroll src={first_image} />
              </TabPanel>
              <TabPanel>
              <img class="api-async-c0Knzr bp1-animate-enter14" show-on-scroll src={second_image} />
              </TabPanel>
              <TabPanel>
              <img class="api-async-c0Knzr bp1-animate-enter14" show-on-scroll src={third_image} />
              </TabPanel>
            </Tabs>
          
         


          <img class="line-14-c0Knzr" src="img/line-14@2x.svg" />
        </div>
        <img class="asset-1-1-zYNucu" src={section4_right_img} />
        <img class="blockchain-1-zYNucu bp1-animate-enter15" show-on-scroll src={blockchain} />
        <div class="footer-zYNucu">
          <div class="rectangle-89-bUVegb"></div>
          <div class="x-bUVegb montserrat-medium-white-14px">|</div>
          <div class="x2021-send-friend-all-rights-reserved-bUVegb montserrat-medium-white-14px">
            © 2021 SendFriend. All Rights Reserved
          </div>
          <div class="text-bUVegb montserrat-medium-white-14px"></div>
          <a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><div class="linked-in-bUVegb montserrat-medium-white-14px">| LinkedIn</div> </a
          ><a href="https://twitter.com/sendfriendinc" target="_blank"
            ><div class="twitter-bUVegb montserrat-medium-white-14px">Twitter</div> </a
          ><a href="https://www.facebook.com/sendfriendinc/" target="_blank"
            ><div class="facebook-bUVegb montserrat-medium-white-14px">Facebook</div> </a
          ><img class="group-84-bUVegb" src="img/group-84@1x.svg" />
          <img class="line-1-bUVegb" src="img/line-1@1x.svg" />
          <img class="asset-1bg1-1-2-bUVegb" src="img/asset-1bg1-1-2@2x.png" />
          <img class="friend-bUVegb" src="img/friend@2x.svg" />
          <img class="send-bUVegb" src="img/send@2x.svg" />
          <img class="original-logo-bUVegb" src={logo} />
        </div>
        <div class="slider-homepage-1-zYNucu bp1-animate-enter16" ><img src={testImg} />
        <div class="slider-zYNucu">
          <div class="rectangle-87-Ap9U61 bp1-animate-enter17" show-on-scroll></div>
          <div class="header-text-Ap9U61">
            <div class="faster-cheaper-multi-WSGfxf bp1-animate-enter18">
              <span class="span0-DYNvxS">Faster, Cheaper<br />Multi-Chain<br />Payments </span
              ><span class="span1-DYNvxS">Service.</span>
            </div>
            <div class="we-are-cheaper-faste-WSGfxf bp1-animate-enter19" show-on-scroll>
              We are cheaper, faster, and more reliable and secure.
            </div>
            <div class="send-friend-WSGfxf bp1-animate-enter20" show-on-scroll>SendFriend</div>
            <div class="group-120-WSGfxf bp1-animate-enter21" show-on-scroll>
              <a style={{color: '#000000'}} href="/contact">
              <div class="rectangle-1-PVUN6o smart-layers-pointers"></div>
              <div class="contact-us-PVUN6o montserrat-bold-eerie-black-14px">CONTACT US</div>
            </a>
            </div>
          </div>
          <img class="line-13-Ap9U61 smart-layers-pointers" src={black_line} />
          
          
          

        </div>
        <div class="top-header-zYNucu">
          <div class="rectangle-97-BtVIxE"></div>
          <a href="https://www.facebook.com/sendfriendinc/" target="_blank">
          <img class="bxbxl-facebook-BtVIxE" src={facebook_icon} /></a>
          <a href="https://twitter.com/sendfriendinc" target="_blank"
            ><img class="ant-designtwitter-outlined-BtVIxE" src={twitter_icon} /> </a
          ><a href="https://www.linkedin.com/company/sendfriend/" target="_blank"
            ><img class="vector-BtVIxE" src={linkedin_icon} />
          </a>
        </div>
        <div class="partnerships-zYNucu" id="partnerships">
          <div class="rectangle-91-4kxDw7"></div>
          <img class="line-2-4kxDw7" src="img/line-2@1x.svg" />
          <div class="group-100-4kxDw7">
            <div class="group-44-N30Bml">
              <img class="artboard-1-1-8CnJFc" src="img/artboard-1-1@2x.svg" />
              <img class="black-logo-2-8CnJFc" src="img/black-logo-2@2x.svg" />
              <img class="rippl-8CnJFc" src="img/rippl@2x.svg" />
              <div class="celo-8CnJFc">CELO</div>
            </div>
            <img class="group-45-N30Bml" src="img/group-45-1@1x.svg" />
          </div>
          <div class="we-are-fortunate-to-4kxDw7 montserrat-medium-white-14px">
            We are fortunate to be parterned with the following leaders in our space and global influencers of financial
            technology:
          </div>
          <div class="partnerships-4kxDw7">Partnerships</div>
        </div>
        <div class="group-121-zYNucu">
          <img class="vector-nccVGg" src={menu_bg} />
          <a href="javascript:ShowOverlay('dropdown-menu', 'animate-appear');">
            <div class="company-dropdown-nccVGg">
              <img class="vector-1kE7iM" src="img/vector-16@2x.svg" />
              <div class="company-1kE7iM montserrat-bold-white-14px">COMPANY</div>
            </div></a
          ><a href="javascript:ShowOverlay('frame-6', 'animate-appear');">
            <div class="login-button-default-nccVGg smart-layers-pointers">
              <div class="rectangle-100-UvC0Wk smart-layers-pointers"></div>
              <div class="login-UvC0Wk montserrat-bold-white-14px">LOGIN</div>
            </div></a
          ><img class="original-logo-nccVGg" src={logo} />
          <img class="logo-title-nccVGg" src={logo_title} />
          <a href="#platform-section"><div class="platform-nccVGg montserrat-bold-white-14px">PLATFORM</div> </a
          ><a href="#partnerships"><div class="partners-nccVGg montserrat-bold-white-14px">PARTNERS</div> </a>
          <a style={{color: '#000000'}} href="/contact">
          <div class="contact-us-nccVGg montserrat-bold-white-14px">CONTACT US</div></a>
        </div>
      </div>
    </div>
    <div id="overlay-mobile-menu" class="overlay" style={{minHeight: '5881px'}}>
      <div class="container-center-horizontal">
        <div class="mobile-menu screen">
          <div class="login-button-mobile-jxzQz0">
            <div class="group-123-tg1hNG">
              <div class="rectangle-100-UNPDgx smart-layers-pointers"></div>
              <div class="login-UNPDgx montserrat-bold-white-8px">LOGIN</div>
            </div>
          </div>
          <div class="platform-jxzQz0 montserrat-bold-white-8px">Platform</div>
          <div class="partnership-jxzQz0 montserrat-bold-white-8px">Partnership</div>
          <div class="company-jxzQz0 montserrat-bold-white-8px">Company</div>
          <div class="contact-jxzQz0 montserrat-bold-white-8px"> <a href="/contact">Contact</a>Contact</div>
          <a href="javascript:HideOverlay('mobile-menu', 'animate-disappear');">
            <div class="close-jxzQz0">
              <img class="line-17-6rcJjs" src="img/line-17-1@2x.svg" />
              <img class="line-18-6rcJjs" src="img/line-18-1@2x.svg" /></div
          ></a>
        </div>
      </div>
    </div>
    </div>
    <ScrollButton />
    </div>
    
  );
  
}

export default App;
