import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  return (
    <div className='w-full h-screen flex flex-col items-center' >
        <div className='flex flex-col w-[400px] text-center justify-center items-center'>
        <h1 className='mt-10 mb-40'>logo</h1>   
            <h1 className='font-semibold mb-10' >Welcome Back</h1> 
            <div className='relative w-[320px] flex justify-center mb-4'>
                <p className='absolute -top-2 left-5 text-[10px] bg-white font-light' >Email</p>
                <input className='border p-3 w-full' type="text"  />
            </div>

            <div className='relative w-[320px] flex justify-center'>
                <p className='absolute -top-2 left-5 text-[10px] bg-white font-light' >Password</p>
                <input className='border p-3 w-full mb-4' type="text"  />
            </div>
            <button className='w-[320px] bg-[#10a37f] rounded-md text-white p-4' >Continue</button>
            <p className='text-[10px] mt-2' >Don't have an account? <a href='' className='text-[#10a37f]' >Register!</a> </p>
        </div>
        <div className='flex flex-col mt-10'>
            <GoogleLogin
                onSuccess={
                    (res) => {
                        const credential = res.credential;
                        const decoded = jwtDecode(credential);
                        console.log(decoded);
                    }
                }
                onError={(err) => console.log(err)}
             />
            <a href="#">Continue with Github</a>
        </div>
    </div>
  )
}

export default Login