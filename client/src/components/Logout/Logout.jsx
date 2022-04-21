import React from 'react'
import './style.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'
const Logout = ({ setShowLogout }) => {
    return (
        <div className='logout'>
            <div className="logout_wrapper">
                <h2>hi ! Amarnath</h2>
                <h3>sure you want to logout  !!!</h3>
                <button>Logout</button>
                <div className="back_btn" onClick={() => {
                    setShowLogout(false)
                }}><ArrowLeftOutlined /></div>
            </div>
        </div>
    )
}

export default Logout