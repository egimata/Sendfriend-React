import React from 'react';
import sectiondata from "../../data/sections.json"

const PlatformSection = () => {

    const data = sectiondata.platform_section
    const altimg = "Sendfriend Platform"

    return (
        <>
        <div className="platform-section" id="platform-section">
            <div className="container">
                <div className="section-title style-two-custom text-center">
                    <h3 className="title-2">{data.title1}<br /> <span>{data.span}</span></h3>
                </div>
                <div className="row justify-content-center pd-top-80">
                    <div className="col-6 text-center">
                        <p className="text1">Servicing international remittance corridors in high-volume regions with traditionally burdensome costs and
                        regulations</p>
                    </div>
                    <div className="col-6 text-center">
                        <p className="text2">Settling payments more seamlessly across a variety of currency exchanges, including fiat and crypto</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div>
                        <img alt={altimg} src="img/homepage/group-128@1x.png" />
                    </div>
                    <div>
                        <img class="vertical-line" alt={altimg} src="img/homepage/line-15@2x.png" />
                    </div>
                    <div>
                        <img className="pd-left-30" alt={altimg} src="img/homepage/group-102@2x.svg" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 text-center">
                        <p className="text1">Our network is expanding as we develop new integrations and financial relationships</p>
                    </div>
                    <div className="col-6 text-center">
                        <p className="text2">Whether fiat-to-fiat, crypto-to-fiat, or fiat-to-crypto, we are developing capabilities to meet a multitude of B2B and B2C remittance use cases</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default PlatformSection;