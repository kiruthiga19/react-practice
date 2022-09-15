import React, {useState ,useEffect} from 'react'

function EffectCounterOne() {
    const [count ,setcount] = useState(0)
    const [name,setName] = useState('')
//use effect  runs only after every componet rendered
// use effect should placed inside the component 
    useEffect(()=>{
        document.title = `ypu clicked ${count} times`
        console.log('Use effect updating document title')
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
      <button onClick={()=> setcount(count +1)}>click {count} times</button>
    </div>
  )
}

export default EffectCounterOne
