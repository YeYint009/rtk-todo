import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {SignIn , SignUp} from "./page"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signUpPage' element={<SignUp/>}/>

      </Routes>
    </div>
  )
}

export default App