import React from 'react';
import sectiondata from '../../data/jobdata.json';

const JobApplyForm = ({job}, props) => {

    const data = sectiondata.JobAplly
    const jobtitle = sectiondata.joblisting
    
    const handleFocus = e => {
        e.target.nextSibling.classList.add("active");
    };
    const handleBlur = e => {
        e.target.nextSibling.classList.remove("active");
    };

    const handleFileSubmit = e => {
        const fileName = e.target.value.split("\\").pop();
        e.target.nextSibling.classList.add("selected");
        e.target.nextSibling.innerText = fileName;

    }
    return ( 
        <div className= { "job-listing-page pd-top-120 pd-bottom-60" } >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center">
                            <h3 className="title career main-color">{ data.sectiontitle }</h3>
                            <p className='career'>{ data.sectionsubtitle }</p>
                        </div>
                        <div className="job-apply-area">
                            <form className="riyaqas-form-wrap" action="https://formspree.io/f/xgedavpk" method="POST" encType="multipart/form-data">
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="single-input-wrap">
                                    <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" className="single-input" name="Full Name" required />
                                    <label>Full Name</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-input-wrap">
                                    <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="email" className="single-input" name="Email" required />
                                    <label>E-mail</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-input-wrap">
                                    <input onFocus={handleFocus} onBlur={handleBlur} onChange={props.changed} type="text" className="single-input" name="Country"  required/>
                                    <label>Country</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-input-wrap mg-bottom-50">
                                    <select defaultValue={job.jobtitle} className="form-select custom-dropdown" name="Job-Selected" required>
                                    { jobtitle.job.map(( item, i )=>
                                        <option key={i} value={item.jobtitle}>{item.jobtitle}</option>
                                    )}
                                    </select>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="custom-file riyaqas-file-input-wrap">
                                    <input onChange={handleFileSubmit} type="file" className="riyaqas-file-input" name="resume" id="sb-file-input" required />
                                    <label className="custom-file-label" htmlFor="sb-file-input">Upload Resume</label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="job-apply-btn mg-bottom-50 mg-top-50" type="submit">Submit</button>
                                </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobApplyForm