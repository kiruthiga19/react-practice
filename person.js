import React from 'react'

function person({person}) {
  return (
    <div>
      <h2>{person.name} i am {person.age} and {person.skill}</h2>
    </div>
  )
}

export default person
