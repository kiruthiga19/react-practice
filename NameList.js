import React from 'react'
import Person from './person'
function NameList() {
    // const names =['kiru','mer','divi']
    // const nameList =names.map(name => <h2>{name}</h2>)

    // array of persons
    const persons=[
      {
        id: 1,
        name: 'kiru',
        age: 30,
        skill:'react'
      },
      {
        id: 2,
        name: 'kiru',
        age: 30,
        skill:'react'
      },
      {
        id: 3,
        name: 'kiru',
        age: 30,
        skill:'react'
      }
    ]
    const personslist = persons.map(person=>
      <Person key={person.id} person={person}></Person>
    )
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}
      {/* use this method insted of using the aboove method */}
      {
        // names.map(name => <h2>{name}</h2>) // or u will use external
      }
      {/* {nameList} */}

      {personslist}
    </div>
  )
}

export default NameList
