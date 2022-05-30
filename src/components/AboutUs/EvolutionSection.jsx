import React from 'react';
import sectionData from '../../data/sections.json';
    
const EvolutionSection = () => {
    
    const data = sectionData.evolution
    const altimg = "Sendfriend Platform"

    return (
        <div className="platform-section pd-bottom-60">
            <div className="container">
                <div className="row justify-content-center pd-top-100">
                    <div className="col-9">
                        <div className="section-title style-two-custom">
                            <h3 className="title-2"> <span>{data.span}</span> {data.title1}</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center text-center years pd-top-60">
                    {data.years.map((item, key) =>
                        <div key={key} className="col-2 ">
                            <h3>{item.year}</h3>
                        </div>
                    )}
                    <div className="container">
                        <img alt={altimg} src="img/icons/years-horizontal-line.svg"></img>
                    </div>
                </div>
                <div className="row justify-content-center text-center years pd-top-30">
                    {data.year_text.map((item, key) =>
                        <div key={key} className="col-2">
                            <p>{item.text}</p>
                        </div>
                    )}
                </div>
                <div className="row justify-content-center text-center pd-top-40">
                    <div className="col-2 place-center">
                        <img alt={altimg} src="img/partners/mit.png" />
                    </div>
                    <img className="vertical-line" alt={altimg} src="img/homepage/vertical-line.png" />
                    <div className="col-2 place-center">
                        <img alt={altimg} className="evo-img" src="img/partners/ripple.svg" />
                        <img alt={altimg} className="evo-img" src="img/partners/barclays.png" />
                        <img alt={altimg} className="evo-img" src="img/partners/mit-media.svg" />
                    </div>
                    <img className="vertical-line" alt={altimg} src="img/homepage/vertical-line.png" />
                    <div className="col-2 place-center">
                        <img alt={altimg} className="evo-img" src="img/partners/8decimal.svg" />
                        <img alt={altimg} className="evo-img" src="img/partners/knick.png" />
                        <img alt={altimg} className="evo-img" src="img/partners/coins.png" />
                    </div>
                    <img className="vertical-line" alt={altimg} src="img/homepage/vertical-line.png" />
                    <div className="col-2 place-center">
                        <img alt={altimg} className="evo-img" src="img/partners/celo.svg" />
                    </div>
                    <img className="vertical-line" alt={altimg} src="img/homepage/vertical-line.png" />
                    <div className="col-2 place-center">
                        <img alt={altimg} className="evo-img" src="img/partners/european-funds.png" />
                        <img alt={altimg} className="evo-img" src="img/partners/enlogo.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EvolutionSection;