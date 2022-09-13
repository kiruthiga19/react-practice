import React from 'react'

function functionClick() {

    function clickHandler(){
        console.log("btton clicked  ")
    }
  return (
    <div>
        {/* in event handling use function not function call */}
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default functionClick
