import React, { useState } from 'react'
import './style.scss'
import { } from 'react-router-dom';
const SendOtp = () => {
    const [email, setEmail] = useState();

    const submit = (e) => {
        e.preventDefault()
        alert(email)
    }
    return (
        <div className='forgot_password'>
            <div className="forgot_password_wrapper">
                <div className='send_otp'>
                    <h2>Email :</h2>
                    <form action="" onSubmit={submit}>
                        <input
                            type="email"
                            placeholder='Give  your email  to send otp'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Send Otp" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendOtp