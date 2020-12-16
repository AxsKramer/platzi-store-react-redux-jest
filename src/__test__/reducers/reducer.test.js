import reducer from '../../redux/reducers';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../../redux/types';
import ProductMock from '../../__mocks__/ProductMock';


describe('Reducers', () => {
  
  test('Retornar initialState', () => {
    expect(reducer({},'')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: []
    };
    const payload = ProductMock;
    const action = {
      type: ADD_TO_CART,
      payload
    };
    const expected = {
      cart: [ProductMock]
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});