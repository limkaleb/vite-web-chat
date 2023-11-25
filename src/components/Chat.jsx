import { useState } from 'react'
import {
  Avatar,
  Button,
  TextField,
  CardActions,
  CardContent,
  CardHeader,
  Card,
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { v4 as uid } from 'uuid'

import { useAppDispatch } from '../stores/hooks'
import { addMessage } from '../stores/messageSlice'
import { Messages } from './Messages'

export const Chat = ({ user }) => {
  const dispatch = useAppDispatch()
  const [msg, setMsg] = useState('')

  const handleSend = () => {
    if (msg) {
      const date = new Date()
      const newMessage = {
        id: uid(),
        message: msg,
        userId: user.id,
        userName: user.name,
        time: `${date.getHours()}:${date.getMinutes()}`,
      }
      dispatch(addMessage(newMessage))
    }
    setMsg('')
  }

  return (
    <Card className="w-[32rem] rounded-md">
      <CardHeader
        avatar={<Avatar />}
        title={user.name}
        className=" bg-gray-500"
      />
      <CardContent className="bg-gray-400 h-[32rem] overflow-y-auto">
        <Messages userId={user.id} />
      </CardContent>
      <CardActions className=" bg-gray-500 p-4">
        <TextField
          variant="standard"
          multiline
          maxRows={5}
          className="w-full"
          placeholder="Write a message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(ev) => {
            if (ev.ctrlKey && ev.key === 'Enter') {
              handleSend()
              ev.preventDefault()
            }
          }}
        />
        <Button onClick={handleSend}>
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
