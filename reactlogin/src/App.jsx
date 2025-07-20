import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  let navLinks = ['Home', 'About', 'Contact']

  // const person1 = {
  //   name: 'john',
  //   email: 'john@gmail.com',
  //   password: 'admin123'
  // }
  const [inputValue, setInputValue] = useState('')
  const [isVerified, setIsVerified] = useState(null)

  const pass = 'admin'

const updateValue = (e) => {
  setInputValue(e.target.value)
}

const validateLogin = (e) => {
  e.preventDefault();
  setIsVerified(inputValue === pass)
}



  return (
    <>
      <Header logo='Blinq' links={navLinks} />
      <div className='loginSection'>
        <div className='inputs'>
          {/* <Input type='text' placeHolder='Name' inputID='NAME' inputName='Name' />
          <Input type='email' placeHolder='jondoe23@gmail.com' inputID='EMAIL' inputName='E-mail' /> */}
          <Input type='password' placeHolder='Password' inputID='PASS' inputName='Password' updatedVal={updateValue}/>
        </div>

        <div className='btns'>
          <Button title='Login' btnClass='solid' btnFucntiion={validateLogin} />
          <Button title='Create account' btnClass='holo' />
        </div>

            {isVerified !== null && (
              <p>{isVerified ? 'Verified' : 'not Verified'} </p> 
              ) }


      </div>
    </>
  )
}

export default App
