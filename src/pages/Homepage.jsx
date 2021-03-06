import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../components/Navbar.css";
import Nav from '../components/Navs/Nav';
import NavMobile from '../components/Navs/NavMobile';
import Footer from '../components/Footer/Footer';
import FooterMobile from '../components/Footer/FooterMobile';
import Client from '../components/Clients/clients';
import FeaturesSection from '../components/Homepage/FeaturesSection';
import HeaderTest from '../components/Headers/HeaderTest';
import PlatformSection from '../components/Homepage/PlatformSection';
import SectionThree from '../components/Homepage/SectionThree';
import APISection from '../components/Homepage/APISection';


const Homepage = () => {
    const imgattr = 'SendFriend'

    return (
      <div>
       <div class="udaap screen">
         <Nav />
         <HeaderTest 
            text=" Faster, Cheaper Multi-Chain Payments"
            green_text='Service.'
            subtitle='SendFriend'
            image='img/homepage/slider-homepage.jpg'
            under_text='We are cheaper, faster, and more reliable and secure.'
            button={true}
          />
        <FeaturesSection />
        <PlatformSection />
        <SectionThree />
        <APISection />
        <Client />
      <Footer custom_class="footer-section" />
    </div>

    <div class="mobile-homepage screen">
      <NavMobile />
      <Client />
      {/* Header  */}
      <img alt={imgattr} class="slider-homepage-1-qujsfd bp2-animate-enter1" src="img/slider-homepage-1@1x.jpg" />
      <div class="rectangle-126-qujsfd"></div>
      <div class="faster-cheaper-multi-qujsfd bp2-animate-enter2">
        <span class="span0-GBW4Tf">Faster, Cheaper<br />Multi-Chain<br />Payments </span
        ><span class="span1-GBW4Tf montserrat-extra-bold-caribbean-green-30px">Service.</span>
      </div>
      <div class="we-are-cheaper-faste-qujsfd montserrat-semi-bold-white-16px bp2-animate-enter3" >
        We are cheaper, faster, and more reliable and secure.
      </div>
      <div class="contact-us-qujsfd bp2-animate-enter4" >
      <Link to="/contact-us">
        <div class="rectangle-1-kXqD6c smart-layers-pointers"></div>
        <div class="contact-us-kXqD6c valign-text-middle montserrat-bold-eerie-black-11px">CONTACT US</div>
        </Link>
      </div>
      {/* Header End */}
      <img alt={imgattr} class="rectangle-106-qujsfd" src="img/rectangle-106-1@1x.png" />
      
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
      <img alt={imgattr} class="left_image-1-qujsfd" src="img/left-image-1@2x.png" />
      <div class="settling-payments-mo-qujsfd montserrat-bold-ebony-clay-12px">
        Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto
      </div>
      <img alt={imgattr} class="line-15-qujsfd" src="img/line-15@2x.png" />
      <img alt={imgattr} class="right_image-1-qujsfd" src="img/right-image-1@2x.png" />
      <div class="whether-fiat-to-fiat-qujsfd montserrat-bold-ebony-clay-12px">
        Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude of
        B2B and B2C remittance use cases
      </div>
      <img alt={imgattr} class="rectangle-124-qujsfd" src="img/rectangle-124-1@1x.png" />
      <div class="group-122-qujsfd bp2-animate-enter17" >
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
      <img alt={imgattr} class="section-4-nifty-1-qujsfd" src="img/homepage/image-platform.svg" />
      <div class="rectangle-42-qujsfd"></div>
      <img alt={imgattr} class="rectangle-92-qujsfd" src="img/rectangle-92@1x.png" />
      <div class="our-remittance-api-s-qujsfd montserrat-extra-bold-white-21px bp2-animate-enter19" >
        <span class="span0-R3hwcY montserrat-extra-bold-white-21px-2">Our Remittance API </span
        ><span class="span1-R3hwcY montserrat-extra-bold-ebony-clay-21px"
          >Seamlessly Connects Customers to a Suite of Multi-Chain Payment Tools</span
        >
      </div>
      <div class="tabs-qujsfd">
        <img alt={imgattr} class="vector-5-LkwvPL" src="img/vector-5-1@2x.png" />
        <img alt={imgattr} class="vector-6-LkwvPL" src="img/vector-6-1@2x.png" />
        <img alt={imgattr} class="vector-7-LkwvPL" src="img/vector-7-1@2x.png" />
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
          <img alt={imgattr} class="api-async-cdudrr bp2-animate-enter20"  src='img/homepage/api-async-1@2x.png'  />
        </div>
            </TabPanel>
            {/* <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img alt={imgattr} class="api-async-cdudrr bp2-animate-enter20"  src="img/homepage/api-second.jpeg" />
        </div>
            </TabPanel>
            <TabPanel>
            <div class="image-LkwvPL">
          <div class="rectangle-109-cdudrr"></div>
          <img alt={imgattr} class="api-async-cdudrr bp2-animate-enter20"  src='img/homepage/api-third.jpeg'  />
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
        <img alt={imgattr} class="line-2-RBdLCu" src="img/line-2@2x.png" />
        <div class="group-100-RBdLCu">
          <div class="group-44-nrzUja">
            <div class="artboard-1-1-vVV7dw">
              <img alt={imgattr} class="bottom_-ring-ZLM6y5" src="img/bottom-ring-2@2x.png" />
              <img alt={imgattr} class="top_-ring-ZLM6y5" src="img/top-ring-2@2x.png" />
              <img alt={imgattr} class="rings_-overlap-ZLM6y5" src="img/rings-overlap-2@2x.png" />
            </div>
            <div class="rippl-vVV7dw">
              <img alt={imgattr} class="vector-8Jmrad" src="img/homepage/vector-35@2x.png" />
              <img alt={imgattr} class="vector-zQfLsx" src="img/homepage/vector-36@2x.png" />
              <img alt={imgattr} class="vector-nAYXPr" src="img/homepage/vector-37@2x.png" />
              <img alt={imgattr} class="vector-UExn7f" src="img/homepage/vector-38@2x.png" />
              <img alt={imgattr} class="vector-DdwQzm" src="img/homepage/vector-39@2x.png" />
              <img alt={imgattr} class="vector-4yxsnS" src="img/homepage/vector-40@2x.png" />
              <img alt={imgattr} class="vector-h8WzEb" src="img/homepage/vector-41@2x.png" />
            </div>
            <img alt={imgattr} class="celo-vVV7dw" src="img/celo@2x.png" />
            <HashLink smooth to="#top">
            <img alt={imgattr} class="logo_footer-1-vVV7dw" src="img/logo-footer-1@2x.png" />
            </HashLink>
          </div>
          <div class="group-45-nrzUja">
            <img alt={imgattr} class="vector-nW5wWj" src="img/homepage/vector-71@2x.png" />
            <img alt={imgattr} class="d-au1-v-vb-visgik1-y-nW5wWj" src="img/homepage/mitdeltav.png"
            />
            <img alt={imgattr} class="vector-Hygbyv" src="img/homepage/group-45@1x.png" />
            <img alt={imgattr} class="european-funds-1-nW5wWj" src="img/european-funds-1-1@2x.png" />
            <img alt={imgattr} class="en-logo-1-nW5wWj" src="img/enlogo-1-2@2x.png" />
            <img alt={imgattr} class="knick-capital-1-nW5wWj" src="img/knick-capital-1-2@2x.png" />
            <img alt={imgattr} class="coins-ph-1-nW5wWj" src="img/coins-ph-1-2@2x.png" />
            <img alt={imgattr} class="barclays_-accelerator_-logo_16_9medium-1-nW5wWj" src="img/barclays-accelerator-logo-16-9-medium-1-2@2x.png"
            />
          </div>
        </div>
        <div class="we-are-fortunate-to-RBdLCu">
          We are fortunate to be parterned with the following leaders in our space and global influencers of financial
          technology:
        </div>
        <div class="partners-RBdLCu montserrat-extra-bold-caribbean-green-21px">Partners</div>
      </div>
      <div class="send-friend-qujsfd montserrat-bold-caribbean-green-18px bp2-animate-enter21" >
        SendFriend
      </div>
      <FooterMobile custom_class="footer footer-homepage" />
      
        <Tabs>
          <TabList>
            <Tab>
      <div class="group-130-qujsfd">
        <div class="rectangle-101-7awJUp smart-layers-pointers">
        <div class="cheaper-7awJUp montserrat-bold-ebony-clay-6px">CHEAPER</div>
        <img alt={imgattr} class="x4-7awJUp smart-layers-pointers bp2-animate-enter23" src="img/homepage/3@1x.png" />
        </div>
      </div>
      </Tab>

      <Tab>
      <div class="group-131-qujsfd">
        <div class="rectangle-102-7LXeRP smart-layers-pointers">
        <div class="faster-7LXeRP montserrat-bold-ebony-clay-6px">FASTER</div>
        <img alt={imgattr} class="x5-7LXeRP smart-layers-pointers" src="img/5@2x.png" />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-132-qujsfd">
        <div class="rectangle-103-DYvcOX smart-layers-pointers">
        <div class="multichain-DYvcOX montserrat-bold-ebony-clay-6px">MULTICHAIN</div>

        <img alt={imgattr} class="eos-iconsblockchain-DYvcOX smart-layers-pointers bp2-animate-enter25" src="img/homepage/eos-icons-blockchain@2x.png"
        />
        </div>
      </div>
      </Tab>
      <Tab>
      <div class="group-133-qujsfd">
        <div class="rectangle-104-6HuZwK smart-layers-pointers">
        <div class="more-secure-6HuZwK valign-text-middle montserrat-bold-ebony-clay-6px">MORE SECURE</div>
        <div class="group-6HuZwK smart-layers-pointers">
          <img alt={imgattr} class="vector-15vxSa" src="img/homepage/vector-13@2x.png" />
          <img alt={imgattr} class="vector-HFRxah" src="img/homepage/vector-14@2x.png" />
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
      <div class="world-group-qujsfd bp2-animate-enter5" >
        <img alt={imgattr} class="kisspng-clip-art-cit-H6QPKS" src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" >
          <img alt={imgattr} class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img alt={imgattr} class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img alt={imgattr} class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img alt={imgattr} class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img alt={imgattr} class="arrow-5-qujsfd1 bp2-animate-enter8"  src="img/arrow-5@2x.png" />
      <img alt={imgattr} class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img alt={imgattr} class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img alt={imgattr} class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img alt={imgattr} class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img alt={imgattr} class="x3-qujsfd popout" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img alt={imgattr} class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img alt={imgattr} class="eos-iconsblockchain-qujsfd" src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" >
        <img alt={imgattr} class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img alt={imgattr} class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img alt={imgattr} class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img alt={imgattr} class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img alt={imgattr} class="blockchain-1-qujsfd"  src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img alt={imgattr} class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd">
        <img alt={imgattr} class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd">
        <img alt={imgattr} class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd">
        <img alt={imgattr} class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
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
      <div class="group-121-qujsfd bp2-animate-enter15" >
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
      <div class="world-group-qujsfd bp2-animate-enter5" >
        <img alt={imgattr} class="kisspng-clip-art-cit-H6QPKS" src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" >
          <img alt={imgattr} class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img alt={imgattr} class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img alt={imgattr} class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img alt={imgattr} class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img alt={imgattr} class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img alt={imgattr} class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img alt={imgattr} class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img alt={imgattr} class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img alt={imgattr} class="arrow-4-qujsfd1 bp2-animate-enter11" src="img/arrow-4@2x.png" />
      <img alt={imgattr} class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img alt={imgattr} class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img alt={imgattr} class="eos-iconsblockchain-qujsfd" src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" >
        <img alt={imgattr} class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img alt={imgattr} class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img alt={imgattr} class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img alt={imgattr} class="x2-qujsfd popout" src="img/homepage/clock.svg" />
      <img alt={imgattr} class="blockchain-1-qujsfd"  src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd">
        <img alt={imgattr} class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-2-qujsfd1">
        <img alt={imgattr} class="vector-bUpblW" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-ZTqkXo" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-3-qujsfd2">
        <img alt={imgattr} class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
      </div>
      <div class="check-box-4-qujsfd2">
        <img alt={imgattr} class="vector-NBCqUF" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-hh7cSq" src="img/homepage/vector-19@2x.png" />
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
      <div class="group-121-qujsfd bp2-animate-enter15" >
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
      <div class="world-group-qujsfd bp2-animate-enter5" >
        <img alt={imgattr} class="kisspng-clip-art-cit-H6QPKS" src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" >
          <img alt={imgattr} class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img alt={imgattr} class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img alt={imgattr} class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img alt={imgattr} class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img alt={imgattr} class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img alt={imgattr} class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img alt={imgattr} class="arrow-1-qujsfd" src="img/arrow-1@2x.png" />
      <img alt={imgattr} class="arrow-6-qujsfd1 bp2-animate-enter10" src="img/arrow-6@2x.png" />
      <img alt={imgattr} class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img alt={imgattr} class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd"><img alt={imgattr} class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img alt={imgattr} class="eos-iconsblockchain-qujsfd popout" src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" >
        <img alt={imgattr} class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img alt={imgattr} class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img alt={imgattr} class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img alt={imgattr} class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img alt={imgattr} class="blockchain-1-qujsfd"  src="img/blockchain-1-1@2x.png" />
      <div class="check-box-1-qujsfd3">
        <img alt={imgattr} class="vector-w3wMdL" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-zTwIkB" src="img/homepage/vector-19@2x.png" />
      </div>

      <div class="check-box-3-qujsfd">
        <img alt={imgattr} class="vector-oMALaO" src="img/homepage/vector-15@2x.png" />
        <img alt={imgattr} class="vector-nzvjJj" src="img/homepage/vector-19@2x.png" />
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
      <div class="group-121-qujsfd bp2-animate-enter15" >
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
      <div class="world-group-qujsfd bp2-animate-enter5" >
        <img alt={imgattr} class="kisspng-clip-art-cit-H6QPKS" src="img/kisspng-clip-art-cities-skylines-image-frankfurt-how-to-become-a-1@2x.png"
        />
      </div>
      <div class="setting-qujsfd">
        <div class="setting-ipYMsR bp2-animate-enter6" >
          <img alt={imgattr} class="vector-ylfIro" src="img/homepage/vector-31@2x.png" />
          <div class="ellipse-16-ylfIro"></div>
        </div>
        <img alt={imgattr} class="logo-middle-ipYMsR" src="img/logo-middle@1x.png" />
        <div class="circle-ipYMsR">
          <img alt={imgattr} class="vector-0yrvvv" src="img/homepage/backcircle.svg" />
        </div>
      </div>
      <img alt={imgattr} class="arrow-3-qujsfd" src="img/arrow-3@2x.png" />
      <img alt={imgattr} class="arrow-5-qujsfd" src="img/arrow-5@2x.png" />
      <img alt={imgattr} class="arrow-2-qujsfd" src="img/arrow-2@2x.png" />
      <img alt={imgattr} class="arrow-1-qujsfd1 bp2-animate-enter10" src="img/arrow-1@2x.png" />
      <img alt={imgattr} class="arrow-6-qujsfd" src="img/arrow-6@2x.png" />
      <img alt={imgattr} class="arrow-4-qujsfd" src="img/arrow-4@2x.png" />
      <img alt={imgattr} class="x3-qujsfd" src="img/3@2x.png" />
      <div class="more-secure-qujsfd popout"><img alt={imgattr} class="vector-mwnNe7" src="img/homepage/secureicon.svg" /></div>
      <img alt={imgattr} class="eos-iconsblockchain-qujsfd" src="img/homepage/multichainicon.svg"
      />
      <div class="carbonapi-1-qujsfd" >
        <img alt={imgattr} class="vector-gVtUPU" src="img/homepage/vector-32@2x.png" />
        <img alt={imgattr} class="vector-1nNpxD" src="img/homepage/vector-33@2x.png" />
        <img alt={imgattr} class="vector-ptvkUL" src="img/homepage/vector-34@2x.png" />
      </div>
      <img alt={imgattr} class="x2-qujsfd" src="img/homepage/clock.svg" />
      <img alt={imgattr} class="blockchain-1-qujsfd"  src="img/blockchain-1-1@2x.png" />
      
      
      <div class="our-on-chain-solutio-qujsfd4">
      Our blockchain-based approach leverages the added security benefits of sending monies and payment metadata over the same secure system
      </div>
      <div class="group-121-qujsfd1 bp2-animate-enter15" >
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

export default Homepage;


 
