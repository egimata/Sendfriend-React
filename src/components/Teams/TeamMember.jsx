import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import { HashLink } from 'react-router-hash-link';

export const TeamMember = ({memmberInfo, teamStyle}) => {
    // const [opacity, setOpacity] = useState(0);

    // const changeOpacity = (opac) => {
    //     setOpacity(opac);
    // }
    // console.log(memmberInfo.link);
  return (
    <div className={memmberInfo.column} >
        <div className={`rn-team ${teamStyle}`}>
            <ScrollAnimation 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
                duration={0.5}
                delay={0}>
                
                    <div className="inner">
                        <figure className="thumbnail">
                        <HashLink smooth to={memmberInfo.link}>
                            <img src={`./img/team/${memmberInfo.image}.jpg`} alt={memmberInfo.name}/>
                        </HashLink>
                        </figure>
                        <figcaption className="content">
                        <HashLink smooth to={memmberInfo.link}>
                            <div className="green-box" >
                                <p className="title">{memmberInfo.name}</p>
                                <p className="under-title">{memmberInfo.designation}</p>
                                <div className="text-box">
                                    <p className="subtitle theme-gradient">{memmberInfo.content}</p>
                                </div>
                            </div>
                            </HashLink>
                        </figcaption>
                    </div>
                
            </ScrollAnimation>
        </div>
    </div>
  )
}
