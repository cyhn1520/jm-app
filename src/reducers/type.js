import * as ACTION_TYPES from '../constants/action-types';

const initialState = {
    selectedType: {}
};

export default (state = initialState, action) => {
	const { type, payload = {}, error } = action;
	switch (type) {
		case ACTION_TYPES.OPEN_CARD_TYPE:
			return {
				...state,
				selectedType: payload
			};
		default:
			return state;
	}
};
