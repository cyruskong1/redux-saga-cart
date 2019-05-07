import { take, put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { SET_CURRENT_USER, setCartItems } from '../actions';

export function* fetchCartSaga() {
  // get the user's id
  const { user } = yield take(SET_CURRENT_USER);
  // use url endpoint that points to cart based on id
  const { id } = user;
  // get items from the response
  const response = yield fetch(`http://localhost:8081/cart/${id}`);
  const { items } = yield response.json();
  // dispatch action using put and pass setCartItems(items) as arg
  yield put(setCartItems(items));
  // go to itemsDetailSaga
}
