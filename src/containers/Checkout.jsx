import React from 'react';
import { connect } from 'react-redux';
import {removeFromCart} from '../redux/actions';

const Checkout = ({cart, removeFromCart}) => {

  const handleSumTotal = () => {
    const sum = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sum;
  };

  const remove = product => () => removeFromCart(product);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {
          cart.length !== 0 && cart.map((item, index) => (
            <div className="Checkout-item" key={item.title + index}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span> $ {item.price} </span>
              </div>
              <button type="button" onClick={remove(item)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))
        }
      </div>
      {
        cart.length !== 0 && (
          <div className="Checkout-sidebar">
            <h3> {`Precio Total: $ ${handleSumTotal()}`} </h3>
          </div>
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);