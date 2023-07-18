import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage';

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
