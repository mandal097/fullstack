import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { Axios } from "../../axios";
const Registration = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  const [isFetching, setIsFetching] = useState(false)

  const [errorField, setErrorField] = useState({
    nameErr: '',
    emailErr: '',
    contactErr: '',
    passwrodErr: '',
    cPasswordErr: ''
  })

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (formValid()) {
        setIsFetching(true)

        const res = await Axios.post('/user/registration', {
          name,
          email,
          contact,
          password
        })
        console.log(res);
        setIsFetching(false)
        navigate('/login')
      } else {
        alert('invalid' + errorField)
      }
    } catch (error) {
      throw new Error('server Error' + error)
    }
  }


  const formValid = () => {
    setErrorField({
      nameErr: '',
      emailErr: '',
      contactErr: '',
      passwrodErr: '',
      cPasswordErr: ''
    })
    let formIsValid = true;
    if (name === '') {
      formIsValid = false;
    }
    if (email === '') {
      formIsValid = false;
    }
    if (contact === '') {
      formIsValid = false;
    }
    if (password === '') {
      formIsValid = false;
    }
    if (cPassword === '') {
      formIsValid = false;
    }
    if (password !== cPassword) {
      formIsValid = false;
    }
    return formIsValid;
  }



  return (
    <div className='registration'>
      <div className="registration_wrapper">
        <div className="Registration_form_wrapper">
          <h2 className="head"> Login Form</h2>
          <form action="" onSubmit={submit}>
            <input
              type="text"
              placeholder='Write your name'
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder='Write your email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder='Write your contact'
              required
              onChange={(e) => setContact(e.target.value)}
            />
            <input
              type="text"
              placeholder=' Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder='Confirm your Password'
              required
              onChange={(e) => setCPassword(e.target.value)}
            />
            <input
              type="submit" value={isFetching ? 'loading' : 'Submit'} />
            <div className="login_">
              <p>Already have an Account ? <span onClick={() => {
                navigate('/login')
              }} >Login</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration