import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const PolandInfo = () => {
    const imgattr = "SendFriend Poland";
    return( <>
        <div className="features-section bg-green pd-top-190">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 pd-top-30">
                        <div className="section-title">
                            <h3 className="title title-poland">SendFriend Poland sp. z o.o. z <span>siedzibą w Katowicach</span></h3>
                            <br />
                            <h4 className="title title-poland">realizuje projekt dofinansowany z Funduszy Europejskich pt. „SendFriend - innowacyjny system przelewów transgranicznych oparty na technologii blockchain oraz algorytmach AI/ML”.
                               Celem projektu jest stworzenie globalnej sieci płatności międzynarodowej, demokratyzującej dostęp do tańszych, szybkich i spersonalizowanych płatności przez 24 godziny na dobę.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row pd-top-50 pd-bottom-50 justify-content-center text-center">
            <div className="col-lg-3">
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0}>
                    <img className='logo-img poland' src={`./img/client/eu.png`} alt={imgattr}/>
                </ScrollAnimation>
            </div>

            <div className="col-lg-3">
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0.2}>
                    <img className='logo-img poland' src={`./img/client/polska.png`} alt={imgattr}/>
                </ScrollAnimation>
            </div>

            <div className="col-lg-3">
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                    duration={0.5}
                    delay={0.4}>
                        <img className='logo-img poland' src={`./img/client/europejski.png`} alt={imgattr}/>
                </ScrollAnimation>
            </div>
        </div>
    </>
    )
}

export default PolandInfo;