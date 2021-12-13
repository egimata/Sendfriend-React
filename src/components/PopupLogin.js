import React from 'react';
import logo from '../img/original-logo@2x.svg';
import overlay_line from '../img/line-16@2x.svg';
import overlay_send from '../img/send-2@2x.svg';
import overlay_friend from '../img/friend-2@2x.svg';
import Popup from 'reactjs-popup';

const PopupLogin = () => {

return (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        
        <div className="header"> SendFriend </div>
        <div className="content">
          {' '}
          <div id="overlay-frame-6" class="overlay" style={{minHeight: '5881px'}}>
            <div class="container-center-horizontal">
            <div class="frame-6 screen">
                <div class="frame-6-MzyH1D">
                <div class="our-platform-is-laun-zNGeUl">
                <span class="span0-D6bUCI montserrat-semi-bold-black-24px">Our</span>
                <span class="span1-D6bUCI">Platform</span>
                <span class="span2-D6bUCI montserrat-semi-bold-black-24px"> is launching soon. <br />Please </span>
                <a href="/#/contact">
                    <span class="span3-D6bUCI">CONTACT US</span></a>
                    <span class="span4-D6bUCI montserrat-semi-bold-black-24px"> for more details</span>
                </div>
                <img class="friend-zNGeUl" src={overlay_friend} />
                <img class="send-zNGeUl" src={overlay_send} />
                <img class="line-16-zNGeUl" src={overlay_line} />
                <img class="original-logo-zNGeUl" src={logo} />
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Contact Us </button>}
            position="top center"
            nested
          >
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
);

}
export default PopupLogin;