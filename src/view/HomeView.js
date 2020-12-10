import React, { useEffect, useState } from 'react'
 
export const HomeView = () => {
  const [count, setcount] = useState(0)
    
  useEffect(() => {
    alert("component is being rendered")
    return() => {
      alert("component is removed")
    }
    
    },[count])
  
    return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => setcount(count + 1)}>Increament with 1</button>
          <h1>this is HomeView of second Assignment</h1>  
        </div>
    )
}
