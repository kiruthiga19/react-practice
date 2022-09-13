//jsx
import React from 'react'
const Hello = ()=> {
    // return(
    // <div>
    //     <h1>hello world</h1>
    // </div>
    // )


    //create element method
    return React.createElement("div",null,React.createElement('h1',null,'hello kiruthiga'))

}
export default Hello