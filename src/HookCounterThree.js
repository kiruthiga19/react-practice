import React, {useState} from 'react'
// usestate hooks does not update or merge the object we have to mannualy merge it
function HookCounterThree() {
    const [name,setName] =useState({firstName: " ", lastName: ""})
  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange = {e => setName({...name ,firstName : e.target.value })}></input>
        <input type="text" value={name.lastName} onChange = {e => setName({...name ,lastName : e.target.value })}></input>
        <h2>your first name - {name.firstName}</h2>
        <h2>your last name - {name.lastName}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree
