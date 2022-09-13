import React from 'react'

function ChildComponent(Props) {
  return (
    <div>
      <button onClick={Props.greetHandler("child")}>Greet parent</button>
    </div>
  )
}

export default ChildComponent
