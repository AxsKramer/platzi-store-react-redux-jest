import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/"> Platzi Store </Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-cart-plus"></i>
      </Link>
      {
        props.cart && <div className="Header-alert">{props.cart.length}</div>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);