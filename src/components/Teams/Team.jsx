import React from 'react';
import { TeamMember } from './TeamMember';
import teamData from '../../data/team.json';

const title = "Leadership";
const data = teamData.team;
const split = data.slice(0,2);
const teamDataUp = split;
const teamDataDown = data.slice(2, 5);
const teamThree = data.slice(5)


const TeamOne = ({column}) => {
  
    return (
        <div style={{zIndex:0}} className="third-section bg-dark-two pd-top-0">
            <div className="row justify-content-center text-center">
                <div className="section-title style-four">
                    <h3 style={{paddingRight: 0}} className="title">{title}</h3>
                </div>
            </div>
           <div className={`row ${column}`}>
               {teamDataUp.map((data, index) => (
                  <TeamMember key={index} memmberInfo={data} teamStyle ='team-style-two' / >
               ))}
           </div>
           <div className={`row ${column}`}>
                {teamDataDown.map((data, index) => (
                  <TeamMember key={index} memmberInfo={data} teamStyle ='team-style-two' / >
               ))}
           </div>
           <div className={`row ${column}`}>
                {teamThree.map((data, index) => (
                  <TeamMember key={index} memmberInfo={data} teamStyle ='team-style-two' / >
               ))}
           </div>
       </div>
    )
}

export default TeamOne;

