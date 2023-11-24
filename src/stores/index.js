import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
  createStateSyncMiddleware,
  initMessageListener,
} from 'redux-state-sync'
import { persistReducer } from 'redux-persist'

import { userReducer } from './userSlice'
import { messageReducer } from './messageSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  users: userReducer,
  messages: messageReducer,
})

const stores = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      createStateSyncMiddleware({
        blacklist: ['persist/PERSIST', 'persist/REHYDRATE'],
      }),
    ),
})

initMessageListener(stores)

export default stores
