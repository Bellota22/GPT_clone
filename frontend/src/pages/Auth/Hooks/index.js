import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser, loginGoogle, loginUser } from '../../../api/user';
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
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

    const handleGoogleLogin = async  (res) => {

        const credential = res.credential;
        const decoded = jwtDecode(credential);
        
        const response = await loginGoogle(credential);
        
        if (!res.credential){
            // Maneja el error, por ejemplo, mostrando un mensaje al usuario
        }
        navigate('/');
    
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSendUserData,
        handleGoogleLogin,
        handleCreateAccount,
        registerClicked,
        setRegisterClicked
    };

}