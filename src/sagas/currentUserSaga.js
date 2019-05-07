import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
	GET_CURRENT_USER_INFO,
	setCurrentUser
} from '../actions'

export function* currentUserSaga() {
	const { id } = yield take(GET_CURRENT_USER_INFO);
	const userInfoRoute = `http://localhost:8081/user/${id}`;
	const response = yield call(fetch, userInfoRoute);
	// use 'apply' because response.json() is in the scope of response and uses this - if we call response.json without binding the scope we will get undefined
	const data = yield apply(response, response.json)
	yield put(setCurrentUser(data));
	// go to fetchCartSaga
}