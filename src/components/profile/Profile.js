import React, {useContext} from 'react'
import {UserContext} from '../../shared/global/provider/UserProvider'
import './Profile.css'


export const Profile = () => {

    const [authenticatedUser, ] = useContext(UserContext)

    return (
        <div className = "profileWraper">
            <img className ="profileImg" src={"https://thispersondoesnotexist.com/image"} alt="" />
            <span className="displayUserName">{authenticatedUser}</span>
        </div>
    )
}
