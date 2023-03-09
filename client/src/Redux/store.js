import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import adminReducer from "./reducers/adminReducer";
import userReducer from "./reducers/userReducer";

const persistConfig = {
  key: "persist-key",
  storage,
};

const reducer = combineReducers({
  user: userReducer,
  admin:adminReducer
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export default store;
