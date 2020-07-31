import * as ACTION_TYPES from '../constants/action-types';

export function selectType(data) {
  return function action(dispatch) {
      console.log('test',data)
    dispatch({
        type: ACTION_TYPES.OPEN_CARD_TYPE,
        payload: data
      });
  }
}