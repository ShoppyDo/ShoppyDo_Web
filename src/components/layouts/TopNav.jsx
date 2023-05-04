import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import SearchBar from './Search';
import Cart from './Cart';
import { UserContext } from '../api/userContext';

const TopNav = () => {

  const { isAuthenticated, user, loading } = useSelector(state => state.authState);
  const { userCartItemsCount } = useContext(UserContext);

  return (
    <div className='topNav top-nav-sticky'>
      <ul className='navlinks'>
        <Container>
          {loading ? null : (
            <>
              {isAuthenticated ? (
                <>
                  <div className='navSearch'>
                    <SearchBar />
                  </div>
                  <li>
                    <Link to='/login' className='navlink-isAuthenticated'>
                      <div className='navtext-isAuthenticated'><img src={user.userProfileImg} alt={user.userName} className='navProfileImg' /><IoMdArrowDropdown /></div>
                    </Link>
                  </li>
                  <div className='navlink-isAuthenticated'>
                    <Cart count={userCartItemsCount} />
                  </div>
                </>
              ) : (
                <>
                  <li>
                    <Link to='/' className='navlink'>
                      <div className='navtext'>HOME</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/about' className='navlink'>
                      <div className='navtext'>ABOUT</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/services' className='navlink'>
                      <div className='navtext'>SERVICES</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/tourism' className='navlink'>
                      <div className='navtext'>TOURISM</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/trips' className='navlink'>
                      <div className='navtext'>TRIPS</div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/login' className='navlink'>
                      <div className='navtext'>LOGIN/SIGNIN</div>
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
        </Container >
      </ul >
    </div >
  )
}

export default TopNav;