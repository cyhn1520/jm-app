import * as ACTION_TYPES from '../constants/action-types';

const initialState = {
	searchedCards: [],
	count: 0,
	loading: false,
	error: undefined,
};

export default (state = initialState, action) => {
	const { type, payload, error } = action;
	let count = 0;

	switch (type) {
		case ACTION_TYPES.SEARCH_CARDS_REQUESTED:
			return {
				...state,
				loading: true
			};
		case ACTION_TYPES.SEARCH_CARDS_SUCCESS:
			return {
				...state,
				count,
				loading: false,
				searchedCards: payload
			};
		case ACTION_TYPES.SEARCH_CARDS_ERROR:
			return {
				...state,
				loading: false,
				error: error || payload
			};
		default:
			return state;
	}
};
