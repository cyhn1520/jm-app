import * as ACTION_TYPES from '../constants/action-types';
import { API_URL } from "../constants/apis";
import axios from '../utils/axios';

export function searchCards(text) {
  return function action(dispatch) {
    console.log('search running for ', text)

    dispatch({ type: ACTION_TYPES.SEARCH_CARDS_REQUESTED })
    axios.get(`${API_URL}/cards/search/${text}`, { }).then(res => {
        console.log('res.data', res.data)
      dispatch({
        type: ACTION_TYPES.SEARCH_CARDS_SUCCESS,
        payload: res.data
      });
    })
      .catch(err => {
        dispatch({
          type: ACTION_TYPES.SEARCH_CARDS_ERROR,
          payload: err
        });
      });
  }
}