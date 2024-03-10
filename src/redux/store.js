import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSilce'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

