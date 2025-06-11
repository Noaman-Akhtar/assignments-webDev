import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
 const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(" https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    .then(response=>{
      setUserData(response.data);
      setIsLoading(false);
    })   }, []);
    if(isLoading) {
      return <div>Loading...</div>;
    }
  return (
 
      <div className='flex felx-col items-center justify-center h-screen bg-gray-100'>
<div className='bg-white shadow-md rounded-lg p-6 '>
  <div className=''>
        <h2 className='text-xl font-bold mb-4'>User Details</h2>
        {userData && (
          <div className='space-y-2 space-x-2'>
            <p><strong >Name: </strong>{userData.name}</p>
            <p><strong>Email:</strong>&nbsp; {userData.email}</p>
          </div>
          
        )}</div>
      </div>
</div>
  )
}

export default App
