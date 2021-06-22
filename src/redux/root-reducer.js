  
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistconfig = {
    key: 'root',
    storage,
    whiteList: []
}

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistconfig,rootReducer) 