import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(state => state.authState);

  const handleSignup = (e) => {

    e.preventDefault();

    const userName = e.target[0].value;
    const userEmailId = e.target[1].value;
    const userPhoneNumber = e.target[2].value;
    const userDateOfBirth = e.target[3].value;
    const userPassword = e.target[4].value;
    const userProfileImg = e.target[5].files[0];
    const userRole = "user";
    const userPremium = "4efe930ldnid03pw03nmdi9";
    const userCartItems = [];
    const userCartItemsCount = "0";

    dispatch(register({
      userName,
      userEmailId,
      userPhoneNumber,
      userDateOfBirth,
      userProfileImg,
      userPassword,
      userRole,
      userPremium,
      userCartItems,
      userCartItemsCount
    }))

  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  })

  return (
    <>
      <div className='signup'>
        <div className='container'>
          <form className='signup-form' onSubmit={handleSignup}>
            <div className='userName-container'>
              <label className='userName-label'>User Name</label>
              <input className='userName-input' placeholder='Please enter a User Name' type='text' />
            </div>
            <div className='userEmailId-container'>
              <label className='userEmailId-label'>Email Id</label>
              <input className='userEmailId-input' placeholder='Please enter your Email Id' type='text' />
            </div>
            <div className='userPhoneNumber-container'>
              <label className='userPhoneNumber-label'>Phone Number</label>
              <input className='userPhoneNumber-input' placeholder='Enter your Phone Number' type='text' />
            </div>
            <div className='userDateOfBirth-container'>
              <label className='userDateOfBirth-label'>DOB</label>
              <input className='userDateOfBirth-label' placeholder='Enter your Date of Birth' type='date' />
            </div>
            <div className='userPassword-container'>
              <label className='userPassword-label'>Password</label>
              <input className='userPassword-input' placeholder='Enter a Password' type='password' />
            </div>
            <div className='userProfileImg-container'>
              <label className='userProfileImg-label'>Choose Avatar</label>
              <label className='userProfileImg-input' htmlFor='userProfileImg'>Select</label>
              <input id='userProfileImg' type='file' style={{ display: "none" }} />
            </div>
            <button className='signup-btn' type='submit'>Signup</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup;