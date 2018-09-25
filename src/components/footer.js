import React from 'react'
import { Link } from 'gatsby'
import '../styles/footer.css'

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-wrapper-upper-line">
      <FooterMenu/>
      <Newsletter/>
    </div>
    <div className="item-social"><a href="https://www.facebook.com/Glinkeyexportsimports/" target="_blank"><i className="icon ion-social-facebook"></i></a><a href="https://twitter.com/GlinkeyC"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-linkedin"></i></a></div>
    <div className="footer-terms-conditions">Glinkey © {(new Date()).getFullYear()} | <Link to="" className="footer-link">Terms and Conditions</Link></div>
  </div>
  

)

const FooterMenu = () =>(
  <div className="footer-links">
    <div className="footer-link-wrapper"><Link to="" className="footer-link">HOME</Link></div>
    <div className="footer-link-wrapper"><Link to="" className="footer-link">WHO WE ARE?</Link></div>
    <div className="footer-link-wrapper"><Link to="" className="footer-link">EXPERTS</Link></div>
    <div className="footer-link-wrapper"><Link to="" className="footer-link">CONTACT</Link></div>
  </div>
)

const Newsletter = () =>(
  <div className="footer-newsletter">
    <div>Get our newsletter</div>
    <div><input type="email" className="footer-email-input"/><button className="footer-send-button">Send</button></div>
  </div>
)
export default Footer
