import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userLogin from "./reducers/reducers";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userLogin);

export default () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
}