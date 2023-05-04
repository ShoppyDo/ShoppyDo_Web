import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { SlClock } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';

const Brand = () => {

    const navigate = useNavigate();

  return (
    <>
     <div className='header'>
        <div className='test'>
          <div className='container'>
            <div className='vr-line'></div>
            <div className='timing'>
              <FaRegCalendarAlt className='ic-cal' /> Monday - Friday <SlClock className='ic-clk' /> 9:00 AM - 5:30 PM, Pacific Standard Time
            </div>
            <div className='contact'>
              <p><HiMail className='ic-mail' /> Contact Us</p>
            </div>
            <div className='vr-line'></div>
            <div className='phone'>
              <p>Call: <BsTelephoneFill className='ic-phone' /> +972 50 718 6879</p>
            </div>
          </div>
        </div>
        <div className='hr-line'></div>
        <div className='brand'>
          <div className='container'>
            <div className='brand-img-container'>
              <img src='/img/brand/shoppydo_brand.jpg' alt='songraceinternational_brand' className='brand-img'  onClick={() => navigate('/')}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Brand;