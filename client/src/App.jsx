import { useState } from 'react';

import {Route ,Routes} from 'react-router-dom';
import './App.css'; 
import Header from './Header.jsx';
import Frontpage from './Frontpage.jsx';
import 'Home' from './Home.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Layout from './Layout.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={
              <Frontpage/>
          }/>
          <Route path={'/login'} element={
            <Login/>
          }/>
          <Route path={'/register'} element={
            <Register/>
          }/>
          <Route path={'/home'} element={
            <Home/>
          }/>


        </Route>
        
      </Routes>

    
  )
}

export default App
