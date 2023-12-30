import React from 'react'

import Login from './Login';
import Register from './Register';
import {useAuth} from './Hooks';

function Auth() {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSendUserData,
        handleCreateAccount,
        handleGoogleLogin,
        registerClicked,
        setRegisterClicked
    } = useAuth();
    
    

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