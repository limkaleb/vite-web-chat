import { describe, expect, test } from 'vitest'
import { userReducer, addUser } from '../stores/userSlice'

describe('Users Slice', () => {
  test('should return the initial state', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual([])
  })

  test('should add user to empty state', () => {
    const newUser = {
      id: '111',
      name: 'John',
    }

    const action = addUser(newUser)
    const reducer = userReducer([], action)

    expect(reducer).toEqual([newUser])
    expect(reducer.length).toBe(1)
  })

  test('should add new user to existing user list', () => {
    const currentUsers = [
      {
        id: '111',
        name: 'Alice',
      },
      {
        id: '222',
        name: 'Bob',
      },
    ]

    const newUser = {
      id: '333',
      name: 'John',
    }

    const action = addUser(newUser)
    const reducer = userReducer(currentUsers, action)

    expect(reducer).toEqual([...currentUsers, newUser])
    expect(reducer.length).toBe(3)
  })
})
