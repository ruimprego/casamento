import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="contact">
                <div className="contact-name">Patrícia Rebelo</div>
                <a className="phone link" href="tel:+351964949591">(+351) 96 49 49 591</a>
                <a className="email link" href="mailto:patriciafsrebelo@gmail.com">patriciafsrebelo@gmail.com</a>
            </div>
            <div className="contact">
                <div className="contact-name">Rui Rego</div>
                <a className="phone link" href="tel:+351912335400">(+351) 91 23 35 400</a>
                <a className="email link" href="mailto:ruimprego@gmail.com">ruimprego@gmail.com</a>
            </div>
        </div>
    );
}

export default Footer;