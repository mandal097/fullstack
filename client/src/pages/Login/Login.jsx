import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../apicalls/login';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser)
  console.log(user);
  const { isFetching } = useSelector((state) => state.user);
  // console.log(isFetching);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [errorField, setErrorField] = useState({
    emailErr: '',
    passwrodErr: '',
  })

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (formValid()) {
        login(dispatch, { email, password });
      } else {
        alert('invalid' + errorField)
      }
    } catch (error) {
      throw new Error('server error')
    }
  }


  const formValid = () => {
    setErrorField({
      emailErr: '',
      passwrodErr: ''
    })
    let formIsValid = true;

    if (email === '') {
      formIsValid = false;
    }
    if (password === '') {
      formIsValid = false;
    }
    return formIsValid;
  }

  return (
    <div className='login_page'>
      <div className="login_page_wrapper">
        <div className="login_form_wrapper">
          <h2 className="head"> Login Form</h2>
          <form action="" onSubmit={submit}>
            <input
              type="text"
              placeholder='Write your email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder='Write your Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Login" />
            <div className="forgot_password_">
              <span onClick={() => {
                navigate('/forgot-password-otp-send')
              }}>Forgot Password ?</span>
            </div>
          </form>
          <h2 className='or'>or</h2>
          <button className='google_btn'>Login With Google</button>
          <button className='facebook_btn'>Login With Facebook</button>
          <div className="_sign_up">
            <p>Dont't have an Account ? <span onClick={() => {
              navigate('/registration')
            }}>Sign Up</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login