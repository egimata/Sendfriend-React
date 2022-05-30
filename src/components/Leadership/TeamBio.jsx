import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const TeamBio = () => {
    const teamData = [
      {
        image: 'team-01',
        name: 'David Lighton',
        designation: 'Cofounder/CEO',
        description: 'David Lighton is SendFriend’s Co-Founder and CEO. David developed the concept for SendFriend in 2017 while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta V Accelerator and Barclays Accelerator TechStars. In the process, he sourced pre-seed funding for the venture from leading sources including the European Union Smart Growth fund, Ripple, MIT Media Lab, Knick Capital, and 8 Decimal Capital. Prior to SendFriend and Sloan, David was an analyst for five years at the World Banks Haiti desk in Washington, DC, where he served on the Special Envoy’s staff overseeing an $800M investment portfolio for earthquake reconstruction.Since 2019, David has been a Yale Global Justice Fellow, appointed to conduct and advise on research related to cross-border payments and blockchain. He also sits on the Johns Hopkins University Dean’s Advisory Board. Additionally, David is a Co-Founder of Lithium Finance, a blockchain platform designed to value private assets via the wisdom of crowds and algorithms. David holds his MBA from MIT Sloan, MA from John Hopkins School of International Studies (SAIS) with honors, and BA in International Studies from Johns Hopkins University.',
        column: 'col-lg-3',
        id: 'david',
        content: 'David Lighton is SendFriend’s Co-Founder and CEO. David developed the concept for SendFriend in 2017 while getting his MBA from MIT Sloan’s full-time program. David stewarded his early team into MIT’s delta V Accelerator and Barclays Accelerator TechStars.'
      },
      {
        image: 'team-03',
        name: 'Sandra Ro',
        designation: 'Director',
        description: ' Sandra Ro is the current CEO of the Global Blockchain Business Council, and a recognized thought leader in the blockchain space, having built blockchain-based products at the Chicago Mercantile Exchange. She holds a BA from Yale and an MBA from the London Business School.',
        column: 'col-lg-3',
        id: 'sandra',
        content: 'Sandra Ro is the current CEO of the Global Blockchain Business Council, and a recognized thought leader in the blockchain space, having built blockchain-based products at the Chicago Mercantile Exchange. She holds a BA from Yale and an MBA from the London Business School.'
      },
      {
        image: 'team-04',
        name: 'Satwik Seshasai',
        designation: 'Director',
        description: 'Satwik Seshasai is the head of AI Infrastructure Engineering at Compass. Previously he served as CTO at ShopSpring, an e-commerce business. He is the co-founder of Segovia Technology, an international payments platform, which was backed by Greylock Partners and was recently acquired by Crown Agents Bank and Helios Partners. He holds a PhD from MIT.',
        column: 'col-lg-3',
        id: 'satwik',
        content: 'Satwik Seshasai is the head of AI Infrastructure Engineering at Compass. Previously he served as CTO at ShopSpring, an e-commerce business. He is the co-founder of Segovia Technology, an international payments platform, which was backed by Greylock Partners'
      },
      {
        image: 'team-05',
        name: 'Rafal Petsch',
        designation: 'General Manager of Polish Operations',
        description: 'Rafal Petsch is SendFriend’s General Manager of its Polish subsidiary. He boasts over 25 years of experience working in the international banking sector. He started his career in 1994 in the Treasury Department of the Warsaw branch of ING bank. Afterwards, he spent 5 years with Bank of America Group, where, he co-founded the BOA Warsaw branch, held the positions of Chief Trader, Treasurer and Member of the Management Board. At BoA in London, Rafal was the head of the Exotic Currencies team, and later managed PLN currency positions at Citibank N.A.&nbsp;&nbsp;After returning to Poland, he was appointed Director of the Treasury Department at DZ Bank Polska. In 2004, he became Head of the Treasury and Investment Finance Department at the newly established Dexia Kommunalredit Bank.&nbsp;&nbsp;The remainder of his banking career was spent developing the Pekao S.A. group (Unicredit), the largest corporate bank in Poland.&nbsp;&nbsp;Since 2009, he has held the position of Managing Director of the Financial Institutions and Public Sector Department, Managing Director of the Strategic Clients Department, as well as was a member of the Management Board of Pekao Investement Banking S.A.&nbsp;&nbsp;He was also the head of two strategic projects (Go Poland and Agromania), and was an active member of the banks credit committee. Since January 2021, he has been a Managing Director at Ipopema Securities. Rafal is also one of the founding members of PLUS Connector - a platform that supports innovative US companies with their expansion into Polish and European Markets. He also holds a Board Member position at Sendfriend Polska Sp. z o.o. He is a graduate of INSEAD, as well as the Warsaw School of Economics.',
        column: 'col-lg-3',
        id: 'rafal',
        content: 'Rafal Petsch is SendFriend’s General Manager of its Polish subsidiary. He boasts over 25 years of experience working in the international banking sector.  He started his career in 1994 in the Treasury Department of the Warsaw branch of ING bank.'
      }
  ]
    return (
      <div className="third-section bg-dark-two pd-top-40">
        <div className="row justify-content-center text-center">
            <div className="section-title style-four">
                <h3 style={{paddingRight: 0}} className="title"><span>Our expert </span>team</h3>
            </div>
        </div>
        <div className='rn-team team-style-two'>
        
          {teamData.map((data, index) => (
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
                            <p className="under-title">{data.designation}</p>
                            <div className="text-box">
                                <p className="subtitle theme-gradient">{data.content}</p>
                            </div>
                        </div>
                      </figcaption>
                  </div>
                
              </div>
              <div className='col-lg-5'>
                <p className='leadership-p'>
                  {data.description}
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