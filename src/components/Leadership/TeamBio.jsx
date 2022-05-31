import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import teamData from '../../data/team.json';

const TeamBio = () => {
  const data = teamData.team;
  return (
    <div className="third-section bg-dark-two pd-top-40">
      <div className="row justify-content-center text-center">
          <div className="section-title style-four">
              <h3 style={{paddingRight: 0}} className="title"><span>Our expert </span>team</h3>
          </div>
      </div>
      <div className='rn-team team-style-two'>
      
        {data.map((data, index) => (
          <ScrollAnimation 
          animateIn="fadeInUp"
          animateOut="fadeInOut"
          animateOnce={true}
          duration={0.5}
          delay={0}>
          <div key={index} className='row justify-content-center text-center pd-top-50'>
            <div className='col-lg-3' id={data.id}>
              
                <div className="inner">
                    <figure className="thumbnail">
                      <img src={`./img/team/${data.image}.jpg`} alt={data.name}/>
                    </figure>
                    <figcaption className="content">
                      <div className="green-box" >
                          <p className="title">{data.name}</p>
                          <p className="under-title">{data.position}</p>
                          <div className="text-box">
                              <p className="subtitle theme-gradient">{data.description}</p>
                          </div>
                      </div>
                    </figcaption>
                </div>
              
            </div>
            <div className='col-lg-5'>
              <p className='leadership-p'>
                {data.bio}
              </p>
            </div>
          </div>
        </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default TeamBio;