import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/actions/productsAction';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Loader from '../plugins/Loader';
import { shoppyDoData } from '../../firebase/config';
import { UserContext, UserContextProvider } from '../api/userContext';

const Home = () => {

  const dispatch = useDispatch();

  const { products, loading } = useSelector(state => state.productsState);
  const { isAuthenticated } = useSelector(state => state.authState);
  const { handleCartItemsCount } = useContext(UserContext);

  const handleAddToCart = async (id) => {
    const cartItem = products.find(item => item.id === id)
    console.log(id)

    if (isAuthenticated) {
      const userLocalId = JSON.parse(localStorage.getItem('shoppyDo_userKey')) ? JSON.parse(localStorage.getItem('shoppyDo_userKey')) : null;
      console.log(userLocalId);
      const userRef = doc(shoppyDoData, "users", userLocalId);
      const userDoc = await getDoc(userRef);
      const userCartItems = userDoc.data().userCartItems || [];

      // Update cart items with new item
      const updatedCartItems = [...userCartItems, cartItem];
      await updateDoc(userRef, {
        userCartItems: updatedCartItems
      });
      <UserContextProvider />
    }

  };

  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch])

  return (
    <>
      {products === undefined || products === null || loading ? (
        <Loader />
      ) : (
        <div className='home'>
          <div className='container'>
            <Row className='products'>
              {products.map(product => (
                <Col xl={3} className='products-container' key={product.id}>
                  <div>
                    <div className='products-img-container'>
                      <img src={product.img} alt={product.productName} className='products-img' />
                    </div>
                    <div className='products-name'>{product.productName}</div>
                    <div className='products-price'>${product.price}</div>
                    <button className='products-addToCart-btn' onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
                    <button className='products-buyNow-btn'>Buy Now</button>
                  </div>
                </Col>
              ))}

            </Row>
          </div>
        </div>
      )}

    </>
  )
}

export default Home;