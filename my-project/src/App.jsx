

import { useEffect, useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <Counter></Counter>
      <UserInfo></UserInfo>
        
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  function countIncrement(){
    const displayCount = count+1;
    setCount(displayCount)
  }
  function countDecrement(){
    setCount(count-1);
  }

  return (
    <div className='text-center mt-20'>
      <h1 className='text-2xl font-semibold bg-yellow-300 w-40 p-3 rounded mx-auto'>Counter: {count}</h1>
      <button onClick={countIncrement}className='text-xl border-2 p-2 m-2 rounded bg-green-300 '>Increment ++</button>
      <button onClick={countDecrement}className='text-xl border-2 p-2 m-2 rounded bg-red-300 '>Decrement --</button>
    </div>
  )
}

function UserInfo(){
  const [users, setUser] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => {
      // console.log(data);
      setUser(data)
    })
  }, [])
  // console.log(users);
  return (
     <div className='text-center '>
      <h1 className='text-2xl font-semibold'>Load All user Info</h1>
      <h2>Length: {users.length}</h2>
      {
        users.map(user => <SingalUser key={user.id} name={user.name} email={user.email}></SingalUser>)
      }
     </div>
  )
}

function SingalUser(props){
  
  return ( 
    <div className='w-96 m-auto bg-gray-400 gap-5 border-2'>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
    </div>
 )
}

export default App
