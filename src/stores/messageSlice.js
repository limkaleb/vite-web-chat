import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.push(action.payload)
    },
  },
})

export const { addMessage } = messageSlice.actions
export const messageReducer = messageSlice.reducer
