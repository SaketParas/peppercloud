import {combineReducers} from 'redux';
import stored_data from './Reducer';

const allReducers = combineReducers ({
    comments:stored_data,
})
export default allReducers 