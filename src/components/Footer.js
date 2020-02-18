import React from "react";

import './Footer.css';
import email from '../imgs/email.png';
import phone from '../imgs/phone.png';

function Footer(){
    return(
        <div className="Footer">
            <div className="Title">Contacts</div>
            <div className="Contents">
                <div><img src={email} alt="email"/> wjkoo3@naver.com</div>
                <div><img src={phone} alt="phone"/> 010-2944-4455</div>
            </div>
            

        </div>
    )
}

export default Footer;