import React,{useState, useEffect} from 'react'

function HookMouse() {
    const [x,setX] =useState(0)
    const [y,setY] =useState(0)

    const logMousePosition = e => {
        console.log('moves event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)
        // this does not depend on any props or state
        return() =>{
            console.log('compoenent unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    // moousecontainer -> to make clean up code 
  return (
    <div>
      Hooks X ={x} Y -{y}
    </div>
  )
}

export default HookMouse
