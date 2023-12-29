import React from 'react'

import { useNavigate } from 'react-router-dom';
import { createUser, loginUser } from '../../api/user';
import { jwtDecode } from "jwt-decode";

import Login from './Login';
import Register from './Register';


function Auth() {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [sendUserData, setSendUserData] = React.useState(null);
    const [registerClicked, setRegisterClicked] = React.useState(false);

    const handleSendUserData = async () => {
        localStorage.clear('access_token');
        setSendUserData({
            email,
            password
        })
        const userData = {
            email,
            password
        };
        const response = await loginUser(userData);
        
        if (!response) {
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
        navigate('/');
        


    }
    
    const handleCreateAccount = async () => {
        localStorage.clear('access_token');
        const userData = {
            email,
            password
        };
        const response = await createUser(userData);

        if (!response) {
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
        navigate('/');
        
      
    };

    const handleGoogleLogin =  (res) => {
        const credential = res.credential;
        const decoded = jwtDecode(credential);
        
        localStorage.setItem('access_token', credential);
        if (!res.credential){
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
        navigate('/');
    
    }


  return (
    <>
        {
            registerClicked ? (
            <Register
                setRegisterClicked={setRegisterClicked}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleCreateAccount={handleCreateAccount}
            />
            ):
            <Login
                setRegisterClicked={setRegisterClicked}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSendUserData={handleSendUserData}
                handleGoogleLogin={handleGoogleLogin}
            
             />
        }

    </>
  )
}

export default Auth