import React from 'react'
import { Container } from 'react-bootstrap'

const Loader = () => {
    return (
        <Container>
           
    <div className="loader-container">
      <div className="loader">
        <div className="cart">
          <div className="cart-handle"></div>
          <div className="cart-top"></div>
          <div className="cart-bottom"></div>
        </div>
      </div>
    </div>
        </Container>
    )
}

export default Loader