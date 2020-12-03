import React, {useContext} from 'react'
import './NavigationBar.css'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../shared/global/provider/UserProvider'
import {Profile} from '../profile/Profile'

export const NavigationBar = () => {
    const history=useHistory();
    const [authenticatedUser, ]=useContext(UserContext)

    const displayIfAuthenticatedUser=()=>{
        return authenticatedUser
    ? <Profile />
    : <span className="signin" onClick={()=>history.push("/signin")} > Signin </span>
    
    }
    return (
        <div className="navigationBarWrapper">
            <span  onClick={()=>history.push("/")}>Home</span>
            <span>About</span>
            {displayIfAuthenticatedUser()}
            
        </div>
    )
}
