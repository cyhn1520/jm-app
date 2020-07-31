import * as ACTION_TYPES from '../constants/action-types';

const initialState = {
  cards: [],
  count: 0,
  loading: false,
	error: undefined,
};

export default (state = initialState, action) => {
	const { type, payload = {}, error } = action;
  let count = 0;
  const arrCard = [];

  Object.keys(payload).map(e => {
    let value = payload[e];

    if(value.length > 0) {
      arrCard.push({
        type: e,
        mechanics: value
      })
    }
  });

	switch (type) {
		case ACTION_TYPES.ALL_CARDS_REQUESTED:
			return {
				...state,
				loading: true
			};
		case ACTION_TYPES.ALL_CARDS_SUCCESS:
      return {
        ...state,
        count,
        loading: false,
        cards: arrCard
      };
    case ACTION_TYPES.ALL_CARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: error || payload
      };
		default:
			return state;
	}
};
