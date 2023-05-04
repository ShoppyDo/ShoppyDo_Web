import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { HiMail } from 'react-icons/hi';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram} from 'react-icons/gr';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='footer-links-containers'>
            <div className='footer-link-container-1'>
              <div className='footer-link-heading'>CONTACT US</div>
              <Link className='nav-link' to='https://www.googlemaps.com'><div className='footer-link'><ImLocation className='ic-footer-link' /><span className='footer-link-content'>P.O. 2707, Jerusalem 9458201, Israel</span></div></Link>
              <Link className='nav-link' to='https://www.googlephones.com'><div className='footer-link'><HiOutlineDevicePhoneMobile className='ic-footer-link' /><span className='footer-link-content'>+972 50 718 6879</span></div></Link>
              <Link className='nav-link' to='https://thesongraceinternational@gmail.com'><div className='footer-link'><HiMail className='ic-footer-link' /><span className='footer-link-content'>thesongraceinternational@gmail.com</span></div></Link>
            </div>
            <div className='footer-link-container-2'>
              <div className='footer-link-heading'>COMPANY</div>
              <div className='footer-link'><Link className='nav-link' to='/about'>About Us</Link></div>
              <Link className='nav-link' to='/services'><div className='footer-link'>Services</div></Link>
              <Link className='nav-link' to='/products'><div className='footer-link'>Products</div></Link>
              <Link className='nav-link' to='/shipping'><div className='footer-link'>Shipping</div></Link>
            </div>
            <div className='footer-link-container-3'>
              <div className='footer-link-heading'>CONNECT WITH US</div>
              <div className='footer-external-links'>
                <Link className='nav-link' to='https://www.twitter.com' target="_blank"><div className='footer-external-link-icon-twitter'><BsTwitter className='ic_twitter' /></div></Link>
                <Link className='nav-link' to='https://www.facebook.com' target="_blank"><div className='footer-external-link-icon-facebook'><FaFacebookF className='ic_facebook' /></div></Link>
                <Link className='nav-link' to='https://www.instagram.com' target="_blank"><div className='footer-external-link-icon-instagram'><GrInstagram className='ic_instagram' /></div></Link>
              </div>
            </div>
          </div>
          <div className='brand-footer-img-containers'>
            <div className='hr-line-footer-1'></div>
            <div className='brand-footer-img-container-1'>
              <img src='/img/brand/shoppydo_brand_footer.jpg' alt='sonriseinternational_brand_footer' className='brand-footer-img' />
            </div>
            <div className='brand-footer-img-container-2'>
              <img src='/img/brand/songraceinternational_brand_footer.jpg' alt='sonriseinternational_brand_footer' className='brand-footer-img' />
            </div>
            <div className='brand-footer-img-container-3'>
              <img src='/img/brand/sonriseinternational_brand_footer.jpg' alt='sonriseinternational_brand_footer' className='brand-footer-img' />
            </div>
          </div>
          <div className='hr-line-footer-2'></div>
          <div className='brand-rights'>© 2018 - 2023 ShoppyDo Pvt Ltd. All rights reserved.</div>
        </div>
      </div>
    </>
  )
}

export default Footer;