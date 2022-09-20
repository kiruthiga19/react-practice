import React from 'react'

function Columns() {
  const items=[]
  return (
    //you can use <></> it wont add anything to dom if you use this their is one limitation use cant use key
    <React.Fragment>
      {/* {
        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{items.title}</p>
          </React.Fragment>
        ))
      } */}
      <td>name</td>
      <td>kiru </td>
    </React.Fragment>
  )
}

export default Columns
