
import { Link } from 'react-router-dom';
import ButtonWhite from '../Buttons/ButtonWhite';
const HeaderTest = ({subtitle, text, green_text, image, under_text, button }) => {

    function ButtonBol(props) {
        const hasBtn = props.hasBtn;
        if (hasBtn) {
          return <Link to="/contact-us">
                    <ButtonWhite text='LEARN MORE' custom_style="button-cta header-button animate-enter4" />
                </Link>
                ;
        }
        return null;
      }
  return ( 
    <>
      <div className="section-header slider-homepage" style={{backgroundImage: `url(${image})`}}>
        <div id="top" className="grey-bg animate-enter" >
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="text-container">
                            <h5 className="upper-title animate-enter3" >
                                {subtitle}
                            </h5>
                            <h2 className="main-title-header animate-enter1">
                                {text} <span className="main-color">{green_text}</span>
                            </h2>
                            <h5 className="main-subtitle-header animate-enter2" >
                                {under_text}
                            </h5>
                            <ButtonBol hasBtn={button}>
                                <Link to="/contact-us">
                                    <ButtonWhite text='LEARN MORE' custom_style="button-cta header-button animate-enter4" />
                                </Link>
                            </ButtonBol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HeaderTest; 
