import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/images/logo.jpeg"
const AdminResetConfirmation = () => {
  return (
    <div className="flex flex-col gap-4 bg-slate-50	min-h-screen justify-center">
    <img
      className="w-16 h-16 rounded-full block mx-auto object-contain"
      src="https://picsum.photos/200"
      alt=""
    />
   
    <form
      className="access-card max-w-[400px] w-full mx-auto  px-8 "

    >
       <img
          className="w-full max-w-[200px] block mb-4 mx-auto object-contain"
          src={Logo}
          alt=""
        />
      <h5 className="text-xl font-semibold text-center mb-4">Password Reset</h5>
      <p className="text-center text-slate-400	">Your new password has been successfully reset.</p>
      
      <NavLink to='/admin/login'
        className="text-center text-white bg-blue-500 py-3 block w-full mt-8 rounded-md font-bold"
      >
        Continue
      </NavLink>
      
    </form>
    <NavLink to='/admin/login' className="flex justify-center items-center gap-4">
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.71 13.29C8.1 12.9 8.1 12.27 7.71 11.88L3.83 8.00002L19 8.00002C19.55 8.00002 20 7.55002 20 7.00002C20 6.45002 19.55 6.00002 19 6.00002L3.82 6.00002L7.7 2.12002C8.09 1.73002 8.09 1.10002 7.7 0.71002C7.31 0.32002 6.68 0.32002 6.29 0.71002L0.7 6.30002C0.310001 6.69002 0.310001 7.32002 0.7 7.71002L6.3 13.29C6.68 13.68 7.32 13.68 7.71 13.29Z"
          fill="#323232"
        />
      </svg>
      <p>Back to Login</p>
    </NavLink>
  </div>
  )
}

export default AdminResetConfirmation