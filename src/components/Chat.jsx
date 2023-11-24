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

export const Chat = () => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    console.log('this is new message')
  }

  return (
    <Card className="w-96 rounded-md">
      <CardHeader
        avatar={<Avatar />}
        title="This is User Name"
        className=" bg-gray-600"
      />
      <CardContent className="bg-gray-300">
        <p>This is mesage history.. </p>
      </CardContent>
      <CardActions className=" bg-gray-700 p-4">
        <TextField
          variant="standard"
          multiline
          maxRows={5}
          className="w-full"
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSend}>
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  )
}
