import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import RefreshHandler from './RefreshHandler';


function App() {
  //private routing
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to ="/login"/>
  }


  return (
<div className="App">
  <RefreshHandler setIsAuthenticated = {setIsAuthenticated}/>
  <Routes>
  <Route path='/' element={<Navigate to="/login"/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dashboard' element={<PrivateRoute element = {<Dashboard/>}/>}/>
  </Routes>
</div>
  );
}

export default App;
