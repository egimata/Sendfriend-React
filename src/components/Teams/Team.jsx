import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ScrollAnimation from "react-animate-on-scroll";


const teamData = [
    {
        image: 'team-01',
        name: 'David Lighton',
        designation: 'Cofounder/CEO',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        column: 'col-lg-3',
        link: '/leadership#david',
        content: 'David Lighton is SendFriend’s Co-Founder and CEO. David developed the concept for SendFriend in 2017 while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta V Accelerator and Barclays Accelerator TechStars.'
    },
    {
        image: 'team-02',
        name: 'Will Ferrer',
        designation: 'Director of Operation and Strategy',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        column: 'col-lg-3 max-w-20',
        link: '/leadership#david',
        content: 'sashik is SendFriend’s Co-Founder and CEO. David developed the concept for SendFriend in 2017 while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta V Accelerator and Barclays Accelerator TechStars.'
    },
]


const TeamOne = ({column , teamStyle}) => {
    const [opacity, setOpacity] = useState(0);

    const changeOpacity = (opac) => {
        setOpacity(opac);
    }
    return (<>
<div className="third-section bg-dark-two">

        <div class="team7-MaQ2GE">
            <HashLink smooth to="/leadership#satwik">
                <img class="image-3-lfHTtk smart-layers-pointers" src="img/image-3@2x.png" />
            </HashLink>
            <div class="bio-lfHTtk smart-layers-pointers">
                <div class="rectangle-45-NxFrnF"></div>
                <div class="satwik-seshasai-NxFrnF montserrat-semi-bold-white-16px">Satwik Seshasai</div>
                <div class="director-NxFrnF montserrat-normal-white-14px">Director</div>
            </div>
        </div>
        <div class="team6-MaQ2GE">
            <HashLink smooth to="/leadership#sandra">
                <img class="image-5-x60cHe smart-layers-pointers" src="img/image-5@2x.png" />
            </HashLink>
            <div class="bio-x60cHe smart-layers-pointers">
                <div class="rectangle-45-u1Pqxx"></div>
                <div class="sandra-ro-u1Pqxx montserrat-semi-bold-white-16px">Sandra Ro</div>
                <div class="director-u1Pqxx montserrat-normal-white-14px">Director</div>
            </div>
        </div>
        <div class="team5-MaQ2GE">
            <HashLink smooth to="/leadership#will">
                <img class="img_8101-1-1-UJkMtH smart-layers-pointers" src="img/img-8101--1--1-1@2x.png" />
            </HashLink>
            <div class="bio-UJkMtH smart-layers-pointers">
                <div class="rectangle-45-bcVoIv"></div>
                <div class="will-ferrer-bcVoIv montserrat-semi-bold-white-16px">Will Ferrer</div>
                <div class="director-of-operations-and-strategy-bcVoIv montserrat-normal-white-14px">
                    Director of Operations and Strategy
                </div>
            </div>
        </div>
        <div class="team4-MaQ2GE">
            <HashLink smooth to="/leadership#rafal">
                <img class="rafal-1-7t5cul smart-layers-pointers" src="img/rafal-1@2x.png" />
            </HashLink>
            <div class="bio-7t5cul smart-layers-pointers">
                <div class="rectangle-45-4lyrRm"></div>
                <div class="rafal-petsch-4lyrRm montserrat-semi-bold-white-16px">Rafal Petsch</div>
                <div class="general-manager-of-polish-operations-4lyrRm montserrat-normal-white-14px">
                    General Manager of Polish Operations
                </div>
            </div>
        </div>
        <div class="team2-MaQ2GE">
            <HashLink smooth to="/leadership#roy">
                <img class="image-3-H3vWAl smart-layers-pointers" src="img/image-3-1@2x.png" />
            </HashLink>
            <div class="bio-H3vWAl smart-layers-pointers">
                <div class="rectangle-45-dxCGs5"></div>
                <div class="roy-vivasi-dxCGs5 montserrat-semi-bold-white-16px">Roy Vivasi</div>
                <div class="cofoundercto-dxCGs5 montserrat-normal-white-14px">Cofounder/CTO</div>
            </div>
        </div>
        <div class="team1-MaQ2GE">
            <HashLink smooth to="/leadership#david">
                <img class="image-2-x0uKuI smart-layers-pointers" src="img/image-2@2x.png" />
            </HashLink>
            <div class="bio-x0uKuI smart-layers-pointers">
                <div class="rectangle-45-rMTOpx"></div>
                <div class="david-lighton-rMTOpx montserrat-semi-bold-white-16px">David Lighton</div>
                <div class="founderceo-rMTOpx montserrat-normal-white-14px">Cofounder/CEO</div>
            </div>
        </div>

</div>
        <div className="third-section bg-dark-two">
           <div className={`row ${column}`}>
               {teamData.map((data, index) => (
                   <div className={data.column} key={index} onMouseEnter = {()=>changeOpacity(1)} onMouseLeave = {()=>changeOpacity(0)}>
                       <div className={`rn-team ${teamStyle}`}>
                           <ScrollAnimation 
                               animateIn="fadeInUp"
                               animateOut="fadeInOut"
                               animateOnce={true}
                               delay={1000}>
                                   
                               <div className="inner">
                                    <HashLink smooth to={data.link}>
                                        <figure className="thumbnail">
                                            <img src={`./img/team/${data.image}.jpg`} alt={data.name}/>
                                        </figure>
                                   </HashLink>
                                   <figcaption className="content">
                                  
                                       <div class="bio-x0uKuI" style={{opacity: opacity}} >
                                           <div class="rectangle-45-rs3s2b"></div>
                                           <p className="title">{data.name}</p>
                                           <p className="subtitle theme-gradient">{data.designation}</p>
                                       </div>
     
                                       
                                   </figcaption>
                               </div>
                           </ScrollAnimation>
                       </div>
                   </div>
               ))}
           </div>
       </div>
</>
    )
}



export default TeamOne;

