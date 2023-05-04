import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/actions/userActions';
import { useNavigate } from 'react-router-dom';
import Loader from '../plugins/Loader';

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loading } = useSelector(state => state.authState);

  const handleLogin = (e) => {
    e.preventDefault()

    const userEmailId = e.target[0].value;
    const userPassword = e.target[1].value;

    dispatch(login({ userEmailId, userPassword }))

  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='login'>
          <div className='container'>
            <form onSubmit={handleLogin}>
              <label>Email Id</label>
              <input placeholder='Enter the Email Id' type='text' />
              <label>Password</label>
              <input placeholder='Enter the Password' type='password' />
              <button className='login-btn' type='submit'>Login</button>
            </form>
          </div>
        </div>
      )}

    </>
  )
}

export default Login;