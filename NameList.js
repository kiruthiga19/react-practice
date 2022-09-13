import React from 'react'

function NameList() {
    const names =['kiru','mer','divi']
    const nameList =names.map(name => <h2>{name}</h2>)
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
      {/* use this method insted of using the aboove method */}
      {
        // names.map(name => <h2>{name}</h2>) // or u will use external
      }
      {nameList}
    </div>
  )
}

export default NameList
