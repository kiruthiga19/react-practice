import React from 'react'
import person from './person'

function IndexAsKey() {
    const names =['bruce','clark','diana']
    const nameList = names.map((name,index) =><h2 key={index}> {index}{name}</h2>)
  return (
    <div>
      {nameList}
    </div>
  )
}

export default IndexAsKey
