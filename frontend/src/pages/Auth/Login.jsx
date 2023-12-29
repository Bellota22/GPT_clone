import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import logo from '../../../public/vecteezy_chatgpt-logo-chat-gpt-icon-on-white-background_21059827.jpg'

function Login(props) {
    const {
        setRegisterClicked,
        email,
        setEmail,
        password,
        setPassword,
        handleSendUserData,
        handleGoogleLogin
    } = props;
    
  return (
    <div className='w-full h-screen flex flex-col items-center' >
                <div className='flex flex-col w-[400px] text-center justify-center items-center'>
                    <img className='w-[60px] h-[60px] mb-4' src={logo} alt="" />  
                    <h1 className='font-semibold mb-10' >Welcome Back</h1> 
                    <div className='relative w-[320px] flex justify-center mb-4'>
                        <p className='absolute -top-2 left-5 text-[10px] bg-white font-light' >Email</p>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border p-3 w-full' type="text"  />
                    </div>

                    <div className='relative w-[320px] flex justify-center'>
                        <p className='absolute -top-2 left-5 text-[10px] bg-white font-light' >Password</p>
                        <input
                            value = {password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border p-3 w-full mb-4' type="text"  />
                    </div>
                    <button
                        onClick={() => handleSendUserData()}
                        className='w-[320px] bg-[#10a37f] rounded-md text-white p-4' >Continue</button>
                    <p className='text-[10px] mt-2' >Don't have an account? </p>
                    <p onClick={() => setRegisterClicked(true) } href='' className='text-[#10a37f]' >Register!</p> 
                </div>
                <div className='flex flex-col mt-10'>
                    <GoogleLogin
                        onSuccess={
                            (res) => {
                                handleGoogleLogin(res)
                            }
                        }
                        onError={(err) => console.log(err)}
                    />
                    {/* <a href="#">Continue with Github</a> */}
                </div>
    </div>
  )
}

export default Login