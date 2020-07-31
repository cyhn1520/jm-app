import * as ACTION_TYPES from '../constants/action-types';
import { API_URL } from "../constants/apis";
import axios from '../utils/axios';

export function userLoginSuccess() {
  return function action(dispatch) {
    dispatch({ type: 'FETCH_OFFERS' })
    axios.get(`${API_URL}/cards`, { }).then(res => {
      dispatch({
        type: ACTION_TYPES.USER_LOGIN_SUCCESS,
        payload: res.data
      });
    })
      .catch(err => {
        dispatch({
          type: ACTION_TYPES.USER_LOGIN_SUCCESS,
          payload: err
        });
      });
  }
}

export function userRequestLogout() {
  return {
    type: ACTION_TYPES.USER_LOGOUT_REQUESTED,
    payload: {}
  };
}
