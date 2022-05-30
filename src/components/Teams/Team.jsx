import React from 'react';
import { TeamMember } from './TeamMember';

const title = "Leadership";
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
    // {
    //     image: 'team-02',
    //     name: 'Will Ferrer',
    //     designation: 'Director of Operation and Strategy',
    //     description: 'Yes, I am a product designer. I have a passion for product design.',
    //     column: 'col-lg-3 max-w-20',
    //     link: '/leadership#will',
    //     content: 'Will Ferrer is SendFriend’s Director of Strategy & Operations, joining the team in late 2021. Will has diverse experience in strategy, finance, and operations across the finance and technology sectors. Prior to SendFriend, he worked at technology firm PTC on their Corporate Strategy team...'
    // },
]
const teamDataDown = [
    {
        image: 'team-03',
        name: 'Sandra Ro',
        designation: 'Director',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        column: 'col-lg-3 max-w-20',
        link: '/leadership#sandra',
        content: 'Sandra Ro is the current CEO of the Global Blockchain Business Council, and a recognized thought leader in the blockchain space, having built blockchain-based products at the Chicago Mercantile Exchange. She holds a BA from Yale and an MBA from the London Business School.'
    },
    {
        image: 'team-04',
        name: 'Satwik Seshasai',
        designation: 'Director',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        column: 'col-lg-3 max-w-20',
        link: '/leadership#satwik',
        content: 'Satwik Seshasai is the head of AI Infrastructure Engineering at Compass. Previously he served as CTO at ShopSpring, an e-commerce business. He is the co-founder of Segovia Technology, an international payments platform, which was backed by Greylock Partners'
    },
    {
        image: 'team-05',
        name: 'Rafal Petsch',
        designation: 'General Manager of Polish Operations',
        description: 'Yes, I am a product designer. I have a passion for product design.',
        column: 'col-lg-3 max-w-20',
        link: '/leadership#rafal',
        content: 'Rafal Petsch is SendFriend’s General Manager of its Polish subsidiary. He boasts over 25 years of experience working in the international banking sector.  He started his career in 1994 in the Treasury Department of the Warsaw branch of ING bank.'
    }
]

const TeamOne = ({column}) => {
  
    return (
        <div style={{zIndex:0}} className="third-section bg-dark-two pd-top-0">
            <div className="row justify-content-center text-center">
                <div className="section-title style-four">
                    <h3 style={{paddingRight: 0}} className="title">{title}</h3>
                </div>
            </div>
           <div className={`row ${column}`}>
               {teamData.map((data, index) => (
                  <TeamMember key={index} memmberInfo={data} teamStyle ='team-style-two' / >
               ))}
           </div>
           <div className={`row ${column}`}>
                {teamDataDown.map((data, index) => (
                  <TeamMember key={index} memmberInfo={data} teamStyle ='team-style-two' / >
               ))}
           </div>
       </div>
    )
}

export default TeamOne;

