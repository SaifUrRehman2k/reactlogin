import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  let navLinks = ['Home', 'About', 'Contact']

  return (
    <>
      <Header logo='Blinq' links={navLinks} />
      <div className='loginSection'>
        <Input type='text' placeHolder='Name' inputID='NAME' inputName='Name' />
        <Input type='email' placeHolder='jondoe23@gmail.com' inputID='EMAIL' inputName='E-mail' />
        <Input type='password' placeHolder='Password' inputID='PASS' inputName='Password' />

        <div className='btns'>
          <Button title='Login' btnClass='solid'/>
          <Button title='Create account' btnClass='holo'/>
        </div>



      </div>
    </>
  )
}

export default App
