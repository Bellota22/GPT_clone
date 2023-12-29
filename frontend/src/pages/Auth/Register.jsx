import React from 'react'


function Register(props){
  const { 
    setRegisterClicked,
    email,
    setEmail,
    password,
    setPassword,
    handleCreateAccount
    
  } = props;
  return (
      <div className='w-full h-screen flex flex-col items-center' >
          <div className='flex flex-col w-[400px] text-center justify-center items-center'>
              <h1 className='mt-10 mb-40'>logo</h1>   
              <h1 className='font-semibold mb-10' >Create account</h1> 
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
                  onClick={() => handleCreateAccount()}
                  className='w-[320px] bg-[#10a37f] rounded-md text-white p-4' >Create</button>
              <p onClick={() => setRegisterClicked(false) } href='' className='text-[#10a37f]' >Login!</p> 
  
          </div>
      </div>
  )
  }
  

export default Register