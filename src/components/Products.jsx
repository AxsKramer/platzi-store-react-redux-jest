import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../redux/actions';
import Product from './Product';

const Products = ({products, addToCart}) => {

  const handleAddToCart = product => () => addToCart(product);
  
  return (
    <div className="Products">
      <div className="Products-items">
        {
          products.length !== 0 && products.map(product => (
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);