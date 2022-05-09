import React from 'react';
import sectionData from '../../data/sections.json';

const EvolutionSectionMobile = () => {

    const altimg = "Sendfriend Platform"
    const data = sectionData.evolution

    return(
        <div className="evolution-section">
            <div className="white-wrapper">
                <div className="send-friends-evolution-P2zxrg">
                    <div className="section-title style-two-custom">
                        <h5 className="title-2"><span>{data.span}</span> {data.title1}</h5>
                    </div>
                </div>
                <img alt={altimg} className="vertical-line-mobile" src="img/rectangle-114-1@1x.png" />
                <div className="line-dots">
                    <div className="ellipse-59-ZB3txP"></div>
                    <div className="ellipse-57-ZB3txP"></div>
                    <div className="ellipse-60-ZB3txP"></div>
                    <div className="ellipse-58-ZB3txP"></div>
                    <div className="ellipse-61-ZB3txP"></div>
                </div>
                <div className="line-texts-logos">
                    <div className="x2017-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2017</div>
                    <div className="incorporated-in-2017-hGV2f8 montserrat-normal-ebony-clay-12px">
                        Incorporated in 2017 within the context of MIT Sloan’s Full-time MBA program.&nbsp;&nbsp;Participated in
                        MIT&#39;s delta V NYC summer start-up accelerator
                    </div>
                    <div className="x2018-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2018</div>
                    <div className="participated-in-barc-hGV2f8 montserrat-normal-ebony-clay-12px">
                        Participated in Barclays’ Techstars accelerator.&nbsp;&nbsp;Partnered with Ripple to co-develop P2P remittance
                        application. Raised pre-seed round
                    </div>
                    <div className="x2019-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2019</div>
                    <div className="launched-beta-test-o-hGV2f8 montserrat-normal-ebony-clay-12px">
                        Launched beta test of P2P remittance platform servicing US-Phillipine corridor. Continued pre-seed funding
                        with 8 Decimal Capital and Knickerbocker Capital.
                    </div>
                    <img alt={altimg} className="mit-delta-v-1-hGV2f8" src="img/mit-delta-v-1@2x.png" />
                    <div className="rippl-hGV2f8">
                        <img alt={altimg} className="vector-qLdkJR" src="img/rippl.svg" />
                    </div>
                    <img alt={altimg} className="barclays_-accelerator_-logo_16_9medium-1-hGV2f8" src="img/barclays-accelerator-logo-16-9-medium-1@2x.png"/>
                    <img alt={altimg} className="vector-hGV2f8" src="img/vector-6@2x.png" />
                    <img alt={altimg} className="vector-4gUhW6" src="img/vector-7@2x.png" />
                    <img alt={altimg} className="knick-capital-1-hGV2f8" src="img/knick-capital-1@2x.png" />
                    <img alt={altimg} className="coins-ph-1-hGV2f8" src="img/coins-ph-1@2x.png" />
                    <div className="x2020-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2020</div>
                    <div className="pivoted-business-mod-hGV2f8 montserrat-normal-ebony-clay-12px">
                    Pivoted business model to focus on business-to-business cross-border remittances. Secured European Union
                    Growth Funds grant to develop B2B technology
                    </div>
                    <div className="x2021-hGV2f8 montserrat-semi-bold-ebony-clay-21px">2021</div>
                    <div className="re-launching-send-fr-hGV2f8 montserrat-normal-ebony-clay-12px">
                    Re-launching SendFriend B2B / B2C cross-border remittance platform. Securing new payment infrastructure
                    partners and onboarding initial customers
                    </div>
                    <div className="celo-hGV2f8">
                    <div className="artboard-1-1-uxDftm">
                        <img alt={altimg} className="bottom_-ring-2QXmxx" src="img/bottom-ring@2x.png" />
                        <img alt={altimg} className="top_-ring-2QXmxx" src="img/top-ring@2x.png" />
                        <img alt={altimg} className="rings_-overlap-2QXmxx" src="img/rings-overlap@2x.png" />
                    </div>
                    <div className="celo-uxDftm">CELO</div>
                    </div>
                    <img alt={altimg} className="european-funds-hGV2f8" src="img/european-funds@2x.png" />
                    <img alt={altimg} className="en-logo-1-hGV2f8" src="img/enlogo-1@2x.png" />
                </div> 
            </div>
        </div>
    );
}
export default EvolutionSectionMobile;
