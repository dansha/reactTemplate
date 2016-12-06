import { combineReducers } from 'redux';
import dummy from '../modules/dummy';

let store = combineReducers({
    dummy: dummy 
});
export default store;

