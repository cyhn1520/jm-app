import * as ACTION_TYPES from '../constants/action-types';
import { API_URL } from "../constants/apis";
import axios from '../utils/axios';

export function getAllCards() {
  return function action(dispatch) {
    dispatch({ type: 'ALL_CARDS_REQUESTED' })
    axios.get(`${API_URL}/cards?collectible=1&cost=1&health=1`, { }).then(res => {
      dispatch({
        type: ACTION_TYPES.ALL_CARDS_SUCCESS,
        payload: res.data
      });
    })
      .catch(err => {
        dispatch({
          type: ACTION_TYPES.ALL_CARDS_ERROR,
          payload: err
        });
      });
  }
}