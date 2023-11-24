import { describe, expect, test } from 'vitest'
import { messageReducer, addMessage } from '../stores/messageSlice'

describe('Messages Slice', () => {
  test('should return the initial state', () => {
    expect(messageReducer(undefined, { type: undefined })).toEqual([])
  })

  test('should add message to empty state', () => {
    const newMessage = {
      id: 'msg-id-1',
      message: 'Test message',
      userId: 'user-id-1',
      userName: 'Bob',
    }

    const action = addMessage(newMessage)
    const reducer = messageReducer([], action)

    expect(reducer).toEqual([newMessage])
    expect(reducer.length).toBe(1)
  })

  test('should add new message to existing messages list', () => {
    const previouseMsgs = [
      {
        id: '1111',
        message: 'Test message 1',
        userId: '111',
        userName: 'Alice',
      },
    ]

    const newUser = {
      id: '2222',
      message: 'Test message 2',
      userId: '222',
      userName: 'Bob',
    }

    const action = addMessage(newUser)
    const reducer = messageReducer(previouseMsgs, action)

    expect(reducer).toEqual([...previouseMsgs, newUser])
    expect(reducer.length).toBe(2)
  })
})
