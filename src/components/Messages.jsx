import { useEffect, useRef } from 'react'
import Avatar from '@mui/material/Avatar'
import PersonIcon from '@mui/icons-material/Person'
import { useAppSelector } from '../stores/hooks'

export const Messages = ({ userId }) => {
  const { messages } = useAppSelector((state) => state)
  const messageRef = useRef(null)

  const autoScroll = () => {
    messageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    autoScroll()
  }, [messages])

  return (
    <div className="flex flex-col">
      {messages.map((message) => (
        <Message key={message.id} messageItem={message} userId={userId} />
      ))}
      <div ref={messageRef} />
    </div>
  )
}

const Message = ({ messageItem, userId }) => {
  return (
    <>
      <div
        className={`flex items-end ${
          messageItem.userId === userId ? ' flex-row-reverse' : ''
        }`}
      >
        <Avatar className="m-2">
          <PersonIcon />
        </Avatar>
        <div>
          <div className=" w-fit mb-2 p-1 bg-white rounded-lg">
            <div className=" text-xs font-bold p-1">{messageItem.userName}</div>
            <pre>{messageItem.message}</pre>
            <div className="text-xs text-right text-gray-400">
              {messageItem.time}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
