import './header.css';
const Careers = ({subtitle, text, green_text, image, under_text }) => {

  return ( 
        <div>
            <div className="section-header" style={{backgroundImage: `url(${image})`}}>
                <div className="header-container">
                    <div className="header-row">
                        <div className="col-6"></div>
                        <div className="col-lg-6 col-md-6 col-sm-6 custom-col-sm">
                            <div id="top" className="right-overlay animate-enter" >
                                <div className="text-wrapper">
                                    <h5 className="subtitle-header animate-enter3" >{subtitle}</h5>
                                    <h2 className="title-header animate-enter1">
                                        {text} <span>{green_text}</span>
                                    </h2>
                                    <h5 className="under-text animate-enter2" >
                                        {under_text}
                                    </h5>  
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Careers; 
