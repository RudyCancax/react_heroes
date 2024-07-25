import React from 'react'
import { LogOut, Star } from 'react-feather';
import { NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const logout = useNavigate();

    const onLogout = () => {
        logout('/login', { replace: true });
    }

    return (
        <>
            <div
                className='
                    bg-gray-800 
                    text-white 
                    w-full h-16 px-4
                    flex items-center 
                    rounded-xl shadow-lg'
            >
                <NavLink 
                    className='flex items-center text-2xl font-bold mr-2'
                    to='/'
                >
                    <Star strokeWidth={2} className='w-10 h-10 mr-2 text-blue-500' />
                    Heroes
                </NavLink>

                

                <NavLink 
                    to='/dc' 
                    className={({isActive}) => 'px-4 py-2 mx-1 rounded-lg font-bold ' + (isActive ? 'bg-gray-700' : '')}
                >
                    DC
                </NavLink>
                <NavLink 
                    to='/marvel' 
                    className={({isActive}) => 'px-4 py-2 mx-1 rounded-lg font-bold ' + (isActive ? 'bg-gray-700' : '')}
                >
                    Marvel
                </NavLink> 
                <NavLink 
                    to='/search' 
                    className={({isActive}) => 'px-4 py-2 mx-1 rounded-lg font-bold ' + (isActive ? 'bg-gray-700' : '')}
                >
                    Search
                </NavLink> 
                <div className='flex items-center ml-auto py-1 px-4 rounded-xl bg-red-600' onClick={onLogout}>
                    <span className='px-4 py-2 mr-1 font-bold '>
                        Logout
                    </span>
                    <LogOut className='w-6 h-6 font-bold' strokeWidth='3' />
                </div>
            </div>
        </>
    )
}
