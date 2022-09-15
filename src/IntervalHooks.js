import React,{useState,useEffect} from 'react'

function IntervalHooks() {
    const [count ,setCount] = useState(0)
    const tick = ()=>{
        setCount(prevcount => prevcount +1)
    }

    useEffect(()=>{
        const interval =setInterval(tick ,1000)
        return () =>{
            clearInterval(interval)
        }
    },[])// either use prevcount or use count in this dependencies
    
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHooks

