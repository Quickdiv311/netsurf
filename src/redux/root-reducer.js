import {combineReducers} from 'redux';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
    directory: directoryReducer,
    shop: shopReducer,
    user: userReducer
});