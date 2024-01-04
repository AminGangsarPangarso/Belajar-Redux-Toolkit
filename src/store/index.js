import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counterSlice.js'
import { userSlice } from '../features/userSlice.js'
export const store = configureStore({
   reducer: {
      counterSlice: counterSlice.reducer,
      userSlice : userSlice.reducer
   }
})