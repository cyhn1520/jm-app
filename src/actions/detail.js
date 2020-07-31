import * as ACTION_TYPES from '../constants/action-types';

export function selectCard(data) {
  return function action(dispatch) {
    dispatch({
        type: ACTION_TYPES.OPEN_DETAIL_CARD,
        payload: data
      });
  }
}