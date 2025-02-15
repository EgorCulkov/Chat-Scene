import React, { useState } from 'react'

const InputText = ({addMessage}) => {
    const [message, setMessage] = useState()
    const sendMessage = () => {
        addMessage({message})
        setMessage("")
    }
    return (
        <div>
        <div>
            <h1>InputText</h1>
            <textarea name="message" id="message" rows='6' onChange={(e) => setMessage(e.target.value)}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
        
        </div>
    )
}

export default InputText