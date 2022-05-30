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
                <img alt={altimg} className="vertical-line-mobile" src="img/evolution/vertical-line.svg" />
                <div className="line-dots">
                    <div className="ellipse1"></div>
                    <div className="ellipse2"></div>
                    <div className="ellipse3"></div>
                    <div className="ellipse4"></div>
                    <div className="ellipse5"></div>
                </div>
                <div className="line-texts-logos">

                    <div className='row' style={{paddingBottom: 5}}>
                        <h6>2017</h6>
                        <p>
                            Incorporated in 2017 within the context of MIT Sloan's Full-time MBA program. Participated in
                            MIT's delta V NYC summer start-up accelerator
                        </p>
                        <img alt={altimg} className="mit-delta" src="img/partners/mit.png" />
                    </div>

                    <div className="row pd-bottom-30">
                        <h6>2018</h6>
                        <p>
                            Participated in Barclays' Techstars accelerator. Partnered with Ripple to co-develop P2P remittance
                            application. Raised pre-seed round
                        </p>
                        <img alt={altimg} className="ripple-img" src="img/partners/ripple.svg" />
                        <img alt={altimg} className="barclays" src="img/partners/barclays.png"/>
                        <img alt={altimg} className="mit-media-lab" src="img/partners/mit-media.svg" />
                    </div>
                    
                    <div className="row" style={{paddingBottom: 22}} >
                        <h6>2019</h6>
                        <p>
                            Launched beta test of P2P remittance platform servicing US-Phillipine corridor. Continued pre-seed funding
                            with 8 Decimal Capital and Knickerbocker Capital.
                        </p>
                        <img alt={altimg} className="decimal" src="img/partners/8decimal.svg" />
                        <img alt={altimg} className="knick" src="img/partners/knick.png" />
                        <img alt={altimg} className="coins" src="img/partners/coins.png" />
                    </div>
                    
                    <div className="row pd-bottom-40">
                        <h6>2020</h6>
                        <p>
                            Pivoted business model to focus on business-to-business cross-border remittances. Secured European Union
                            Growth Funds grant to develop B2B technology
                        </p>
                        <img alt={altimg} className="celo" src="img/partners/celo.svg" />
                    </div>

                    <div className="row" >
                        <h6>2021</h6>
                        <p>
                            Re-launching SendFriend B2B / B2C cross-border remittance platform. Securing new payment infrastructure
                            partners and onboarding initial customers
                        </p>
                        <img alt={altimg} className="european" src="img/partners/european-funds.png" />
                        <img alt={altimg} className="en-logo" src="img/partners/enlogo.png" />
                    </div>
                    
                </div> 
            </div>
        </div>
    );
}
export default EvolutionSectionMobile;
