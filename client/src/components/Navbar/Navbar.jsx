import React, { useState } from 'react';
import './style.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { CaretDownOutlined } from '@ant-design/icons'
import Logout from '../Logout/Logout';
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showLogout, setShowLogout] = useState(false);

    const navigate = useNavigate()

    const handleClick = () => {
        switch (show) {
            case false:
                setShow(true);
                break;
            case true:
                setShow(false);
                break;
            default:
                setShow(false)
        }
    }

    return (
        <div className='navbar'>
            <div className="navbar_wrapper">
                <div className="logo">
                    <h2 onClick={() => {
                        navigate('/')
                    }}>Amarnath</h2>
                </div>
                {/* <div className='navigations'></div> */}
                <div className='user_details'>
                    <div>
                        <span className="links" onClick={()=>{
                            setShowLogout(true);
                        }}>logout</span>
                    </div>
                    <div >
                        <NavLink to='/login' className="links">Login</NavLink>
                    </div>
                    <div className='user_detail' onClick={handleClick} >
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        <span><CaretDownOutlined /></span>
                    </div>
                </div>
            </div>
            {
                show &&
                <div className="show_profile">
                    <span className='navigate'>Show Profile</span>
                </div>
            }
            {
                showLogout && <Logout setShowLogout={setShowLogout} />
            }
        </div>
    )
}

export default Navbar