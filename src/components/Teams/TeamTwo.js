import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import 'bootstrap/dist/css/bootstrap.min.css';

const teamData = [
    {
        image: 'team-01',
        name: 'David Lighton',
        designation: 'Sr Product Designer',
        location: 'CO Miego, AD, USA', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
       
    },
    {
        image: 'team-02',
        name: 'Will Ferrer',
        designation: 'App Developer',
        location: 'Bangladesh', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
      
    },
    {
        image: 'team-03',
        name: 'Sandra Ro',
        designation: 'Accounts Manager',
        location: 'Poland', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        
    },
    {
        image: 'team-04',
        name: 'Satwik Seshasai',
        designation: 'Accounts Manager',
        location: 'Poland', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        
    },
    {
        image: 'team-05',
        name: 'Rafal Petsch',
        designation: 'Accounts Manager',
        location: 'Poland', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        
    },
]

const TeamTwo = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./img/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                   
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}

export default TeamTwo;
