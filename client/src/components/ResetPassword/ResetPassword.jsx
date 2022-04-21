import React, { useState } from 'react'
import './style.scss'
const ResetPassword = () => {
    const [password, setPassword] = useState();
    const [cPassword, setCPassword] = useState();
    const [otp, setOtp] = useState();

    const [errorField, setErrorField] = useState({
        passwrodErr: '',
        cPasswordErr: '',
        otpErr: ''
    })


    const submit = async (e) => {
        e.preventDefault()
        try {
            if (formValid()) {
                alert(otp)

            } else {
                alert('haha')
            }

        } catch (error) {
            console.log(error, errorField);
        }
    }


    const formValid = () => {
        setErrorField({

        })
        let formIsValid = true;
        if (password === '') {
            formIsValid = false;
        }
        if (cPassword === '') {
            formIsValid = false;
        }
        if (password !== cPassword) {
            formIsValid = false;
        }
        if (otp === '') {
            formIsValid = false;
        }
        return formIsValid;
    }




    return (
        <div className='forgot_password'>
            <div className="forgot_password_wrapper">

                <div className='reset_password'>
                    <h2>Change Password</h2>
                    <form action="" onSubmit={submit}>
                        <input
                            type="text"
                            placeholder='New Password'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Confirm new Password'
                            required
                            onChange={(e) => setCPassword(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Otp here'
                            required
                            onChange={(e) => setOtp(e.target.value)}
                        />
                        <input
                            type="submit"
                            value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword