import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  let navLinks = ['Home', 'About', 'Contact']

  const users = [{
    email: 'john@gmail.com',
    password: 'admin123'
  }, {
    email: 'claud@gmail.com',
    password: 'wow25'
  }, {
    email: 'saif@gmail.com',
    password: 'secret55'
  }
  ]
  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  // const pass = 'admin'

  const updateEmailValue = (e) => {
    setEmailValue(e.target.value)
  }
  const updatePasswordValue = (e) => {
    setPassword(e.target.value)
  }

  const validateLogin = (e) => {
    e.preventDefault();
    const userFound = users.find(user => user.email === emailValue && user.password === password )
    if (userFound) {
      setMessage(<p className='success message'>Login Successful</p>)
    } else {
      setMessage(<p className='error message'>Login Failed, Please check the Email and Password</p>)
    }
  }



  return (
    <>
      <Header logo='Blinq' links={navLinks} />
      <div className='loginSection'>
      <p className='loginLine'>Sign in to continue. </p>

        <div className='inputs'>
          {/* <Input type='text' placeHolder='Name' inputID='NAME' inputName='Name' /> */}
          <Input type='email' placeHolder='jondoe23@gmailcom' inputID='EMAIL' inputName='E-mail' updatedVal={updateEmailValue} />
          <Input type='password' placeHolder='Password' inputID='PASS' inputName='Password' updatedVal={updatePasswordValue} />
          <a href="#" className='forgetBtn'>Forget password</a>
        </div>

        <div className='btns'>
          <Button title='Login' btnClass='login' btnFucntiion={validateLogin} />
          {/* <Button title='Create account' btnClass='holo' /> */}
        </div>
        <div className='messageArea'>{message}</div>

        {/* {isVerified !== null && (
          <p>{isVerified ? 'Verified' : 'not Verified'} </p>
        )} */}


      </div>
    </>
  )
}

export default App
