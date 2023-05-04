import React from 'react';

const Cart = ({ count }) => {
    return (
        <div className="cart">
            <div className='cart_base-container'>
                <img src='./img/plugin/cart_base.png' alt='cart_base' className='cart_base' />
                <span className='cart_count'>{count}</span>
            </div>
        </div>
    );
}

export default Cart;