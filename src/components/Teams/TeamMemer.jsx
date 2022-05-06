import React, {useState} from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import { HashLink } from 'react-router-hash-link';



export const TeamMemer = ({memmberInfo, teamStyle}) => {
    const [opacity, setOpacity] = useState(0);

    const changeOpacity = (opac) => {
        setOpacity(opac);
    }
    console.log(memmberInfo.link);
    debugger;
  return (
    <div className={memmberInfo.column} onMouseEnter = {()=>changeOpacity(1)} onMouseLeave = {()=>changeOpacity(0)}>
                       <div className={`rn-team ${teamStyle}`}>
                           <ScrollAnimation 
                               animateIn="fadeInUp"
                               animateOut="fadeInOut"
                               animateOnce={true}
                               delay={1000}>
                                   
                               <div className="inner">
                                    <HashLink smooth to={memmberInfo.link}>
                                        <figure className="thumbnail">
                                            <img src={`./img/team/${memmberInfo.image}.jpg`} alt={memmberInfo.name}/>
                                        </figure>
                                   </HashLink>
                                   <figcaption className="content">
                                  
                                       <div class="bio-x0uKuI" style={{opacity: opacity}} >
                                           <div class="rectangle-45-rs3s2b"></div>
                                           <p className="title">{memmberInfo.name}</p>
                                           <p className="subtitle theme-gradient">{memmberInfo.content}</p>
                                       </div>
     
                                       
                                   </figcaption>
                               </div>
                           </ScrollAnimation>
                       </div>
                   </div>
  )
}
