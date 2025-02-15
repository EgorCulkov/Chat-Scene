import React from 'react'

const ChatLists = ({chats}) => {
const user = localStorage.getItem('user')
    function SenderChat ({message, username}) {
        
        return (
            <div>
                <p>
                    <strong>{username}</strong>
                    {message}
                </p>
            </div>
        )
    }
    function ReciverChat ({message, username}) {
        return (
            <div>
                <p>
                    <strong>{username}</strong>
                    {message}
                </p>
            </div>
        )
    }


    return (
        <div>
            {
                chats.map((chat, index) => {
                    if(chat.user === user) {
                      return<SenderChat key={index} message = {chat.message} username = {chat.user}/>   
                    }
                    else return<ReciverChat key={index} message = {chat.message} username = {chat.user}/>
                })
            }
            
            <ReciverChat />
        </div>
    )
}

export default ChatLists