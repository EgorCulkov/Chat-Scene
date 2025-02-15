import React, { useState } from 'react'

const UserLogin = ({setUser}) => {
    const [userName, setUserName] = useState()
    const handleUser = () => {
        console.log(userName)
        if(!userName) return;
        localStorage.setItem('user', userName)
        setUser(userName)
    }
    return (
        <div>
            <h1>Login or die</h1>
            <input type="text" placeholder='Enter NAME(OR suck a dick idk)' onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={handleUser}>Login</button>
        </div>
    )
}

export default UserLogin