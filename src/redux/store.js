// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import filterReducer from './filter/slice'
// import { configureStore } from "@reduxjs/toolkit";
// import contactsReducer from "./contacts/slice";;


// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: filterReducer
//   },
// });

// export const persistor = persistStore(store);

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filterReducer from './filter/slice'
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false
  })
];

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer
  },
  middleware
});

export const persistor = persistStore(store);
