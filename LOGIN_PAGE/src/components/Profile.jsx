import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Profile() {

    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate('/login');
        console.log(user);
    }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.username}</p>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Profile
