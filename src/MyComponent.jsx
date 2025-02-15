import React, { useEffect, useState } from 'react'
import ChatLists from './components/ChatLists.jsx'
import InputText from './components/InputText.jsx'
import UserLogin from './components/UserLogin.jsx'
import socketIOClient from 'socket.io-client'
import './style.css'


const divStyle = {
    
    color: 'black',
    backgroundColor: 'white',
  
  };
function MyComponent() {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const socketio = socketIOClient('http://localhost:5174')
  const [chats, setChats] = useState([])

  useEffect(() => {
      socketio.on('chat', (chats) => {
          setChats(chats)
      });
  });
  const sendToSocket = (chat) => {
      socketio.emit('chat', chat)
  }
  const addMessage = (chat) => {
      const newChat = {...chat, user: localStorage.getItem('user')};
      setChats([...chats, newChat])
      sendToSocket([...chats, newChat])
  };

  const Logout = () => {
      localStorage.removeItem('user')
      setUser('')
  }

  return (
      <div style={divStyle}>
          {user ? (
              <div>
          <h1 >ChatContainer</h1>
          <strong onClick={Logout}>Logout</strong>
          
              
      <ChatLists chats = {chats}/>
      <InputText addMessage = {addMessage}/>
              </div>
          ):
          <UserLogin  setUser = {setUser}/>
      }
      </div>
  )
}

export default MyComponent
