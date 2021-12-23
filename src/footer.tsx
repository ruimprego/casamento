import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="contact">
                <div className="contact-name">Patrícia Rebelo</div>
                <div className="phone">(+351) 96 49 49 591</div>
                <div className="email">patriciafsrebelo@gmail.com</div>
            </div>
            <div className="contact">
                <div className="contact-name">Rui Rego</div>
                <div className="phone">(+351) 91 23 35 400</div>
                <div className="email">ruimprego@gmail.com</div>
            </div>
        </div>
    );
}

export default Footer;