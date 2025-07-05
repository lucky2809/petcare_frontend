
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react/dist/iconify.js'
import useUserStore from '../../store/userStore';


function Logout({ color = "" }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);
  const navigate = useNavigate()

  // const { user, loading, setUser } = useAuth()
  const { user, setUser } = useUserStore()
  console.log(user)
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setUser(null)
    navigate("/signin");
  };



  const ProfileDropDown = ({ user = {}, color
  }) => {
    // return <div>{user.email ?? "unknown user"}</div>
    return <>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md text-sm font-medium cursor-pointer focus:outline-none"
        >

          <Icon width={40} className={`text-[${color}] font-bold`} icon={"qlementine-icons:user-16"}></Icon>

        </button>

        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1" role="menu">
              <button
                onClick={closeDropdown}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Profile
              </button>
              <button
                onClick={closeDropdown}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </button>
              <button

                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                role="menuitem"
              >
                <Logout />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  }

  const Logout = () => {

    return <button
      onClick={handleLogout}
      className=" hover:bg-gray-200"
    >
      Logout
    </button>
  }
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: "center" }}>
      {user ? <ProfileDropDown user={user} color={color} /> : (
        <a href="/signin"><li>Login</li></a>
      )}
    </Box>
  )
}

export default Logout