import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Dashboard() {
    const [loggedInUser, setloggedInUser] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        setloggedInUser (localStorage.getItem('loggedInUser'))
    },[])
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout')
    setTimeout(() =>{
  navigate('/login');
    },1000)
  }
  const fetchDetails = async () =>{
    try{
const url = "http://localhost:8080/dashboard";
const headers = {
    headers:{
        'Authorization': localStorage.getItem('token')
    }
}
const response = await fetch(url, headers);
const result = await response.json();
console.log(result);
setDetails(result);
    }catch(err)
    {
     handleError(err)
    }
  }
  useEffect(() => {
    fetchDetails()
  },[])
  return (
    <div><h1> Welcome...{loggedInUser}</h1>
    <button onClick={handleLogout}>Logout</button>
    <div>
        {
            details && details?.map((item, index)=>(
                <ul key={index}>
<span>{item.name} : {item.price} </span>
                </ul>
            ))
        }
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Dashboard