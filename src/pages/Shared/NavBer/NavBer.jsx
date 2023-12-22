import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.svg'
import { AuthContext } from '../../../providers/AuthProvider';

const NavBer = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Logout Sucessfully');
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'bg-green-500 hover:bg-green-900 hover:text-white me-2' : 'me-2'}>Home</NavLink></li>
        {user?.email ? <>
            <li><NavLink to='/my-bookings' className={({ isActive }) => isActive ? 'bg-green-500 hover:bg-green-900 hover:text-white me-2' : 'me-2'}>My Booking</NavLink></li>
            <li><button onClick={handleLogout} >Logout</button></li>
        </>
            : <li><NavLink to='/login' className={({ isActive }) => isActive ? 'bg-green-500 hover:bg-green-900 hover:text-white me-2' : 'me-2'}>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'}>
                    <img className='h-12' src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='btn btn-outline btn-secondary'>Appoinment</button>
            </div>
        </div>
    );
};

export default NavBer;