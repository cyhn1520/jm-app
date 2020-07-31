import * as ACTION_TYPES from '../constants/action-types';

const initialState = {
    selectedCard: {}
};

export default (state = initialState, action) => {
	const { type, payload = {}, error } = action;
	switch (type) {
		case ACTION_TYPES.OPEN_DETAIL_CARD:
		console.log('selectedCard',payload)
			return {
				...state,
				selectedCard: payload
			};
		default:
			return state;
	}
};
