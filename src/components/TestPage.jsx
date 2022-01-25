import React from 'react';
import SEO from './common/SEO';
import Separator from "./Separator";
// import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
// import SectionTitle from "../sectionTitle/SectionTitle";


import TeamOne from "./Teams/TeamOne";
import TeamTwo from "./Teams/TeamTwo";
import TeamThree from "./Teams/TeamThree";
import TeamFour from "./Teams/TeamFour";

const Team = () => {
    return (
        <>
            <SEO title="Team" />

                {/* <BreadcrumbOne 
                    title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Team"
                /> */}
                <div className="main-content">

                    {/* Start Elements Area  */}
                    {/* <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        <h1>Team</h1>
                                </div>
                            </div>
                            <TeamOne column="col-lg-4 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
                        </div>
                    </div> */}
                    {/* End Elements Area  */}
                    
                    <Separator />
                     {/* Start Elements Area  */}
                     {/* <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                        
                                </div>
                            </div>
                            <TeamTwo column="col-lg-4 col-md-6 col-12 mt--10" teamStyle="team-style-default style-two" />
                        </div>
                    </div> */}
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    {/* <div className="rwt-team-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--15">
                                        
                                </div>
                            </div>
                            <TeamThree column="col-lg-3 col-md-6 col-12 mt--30" teamStyle="team-style-two" />
                        </div>
                    </div> */}
                    {/* End Elements Area  */}
                    <Separator />

                    {/* Start Elements Area  */}
                    <div className="rwt-team-area rn-section-gap">
                        <div className="wrapper plr--65 plr_sm--15">
                            <div className="row mb--20">
                                <div className="col-lg-12">
                                        
                                </div>
                            </div>
                            <TeamFour index="2" column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                        </div>
                    </div>
                    {/* End Elements Area  */}


                </div>

        </>
    )
}
export default Team;