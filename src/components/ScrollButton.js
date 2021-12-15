import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button, ButtonMobile } from './Styles';
import { mediaQueries } from '../responsive';
import { useMediaQuery } from 'react-responsive';
  
const ScrollButton = () =>{

  const isMobile = useMediaQuery( {query: mediaQueries.mobileQuery} );
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  if(isMobile) {
    return(
      <ButtonMobile>
        <FaArrowCircleUp onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
      </ButtonMobile>
    )
  }
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default ScrollButton;