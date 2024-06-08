import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user){
        return(
            <div>PLease Login</div>
        )
    }
    return(
        <>
        Welcome {user.username}!
        </>
    )
}

export default Profile
