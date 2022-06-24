import { combineReducers , createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import session from "./session";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({ session})
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
