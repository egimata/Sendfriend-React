import React from 'react'
import footer_send from '../img/send@2x.svg';
import footer_friend from '../img/friend@2x.svg';
import footer_group from '../img/group-84@1x.svg';
import footer_line from '../img/line-1@1x.svg';
import left_asset from '../img/asset-1bg1-1-2@2x.png';
import logo from '../img/original-logo@2x.svg';
import './Footer.css';

export const Footer = () => {
    return (
        <div class="footer-zYNucu">

            <div class="x-bUVegb montserrat-medium-white-14px">|</div>
            <div class="x2021-send-friend-all-rights-reserved-bUVegb montserrat-medium-white-14px">
                © 2021 SendFriend. All Rights Reserved
            </div>
            <div class="text-bUVegb montserrat-medium-white-14px"></div>
            <a href="https://www.linkedin.com/company/sendfriend/" target="_blank" rel="noreferrer">
                <div class="linked-in-bUVegb montserrat-medium-white-14px">| LinkedIn</div> 
            </a>
            <a href="https://twitter.com/sendfriendinc" target="_blank" rel="noreferrer">
                <div class="twitter-bUVegb montserrat-medium-white-14px">Twitter</div> </a>
            <a href="https://www.facebook.com/sendfriendinc/" target="_blank" rel="noreferrer">
                <div class="facebook-bUVegb montserrat-medium-white-14px">Facebook</div> 
            </a>
            <div class="rectangle-40-bUVegb">
                <div class="to-learn-more-about-send-friend-bUVegb montserrat-bold-white-32px">
                    <span class="span0-khdqLV montserrat-bold-white-32px-2">To learn more about</span>
                    <span class="span1-khdqLV montserrat-bold-caribbean-green-32px"> SendFriend</span>
                </div>
                <a href='/#/contact'>
                <div class="group-127-bUVegb">
                    <div class="rectangle-41-gExxdY">
                        <div class="contact-us-gExxdY">Contact Us</div>
                    </div>
                </div>
            </a>
            </div>
            
            <img class="line-1-bUVegb" src={footer_line} />
            <img class="asset-1bg1-1-2-bUVegb" src={left_asset} />
            <img class="friend-bUVegb" src={footer_friend} />
            <img class="send-bUVegb" src={footer_send} />
            <img class="original-logo-bUVegb" src={logo} />
        </div>
    );
}
export default Footer;