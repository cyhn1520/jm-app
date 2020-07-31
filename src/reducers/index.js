import { combineReducers } from 'redux';
import authReducers from './auth';
import cardReducers from './cards';
import detailsReducers from './details';
import searchReducers from './search';
import typeReducers from './type';

export default combineReducers({
	auth: authReducers,
	cards: cardReducers,
	details: detailsReducers,
	search: searchReducers,
	type: typeReducers
});
