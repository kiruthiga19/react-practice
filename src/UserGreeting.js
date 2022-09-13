import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
//ternary operator
    // return(
    //     this.state.isLoggedIn?
    //     <div>welcome kiruthiga</div>:<div>welcome guest</div>
    // )

//short cricute operator

    return this.state.isLoggedIn && <div>welcome kiruthiga</div>


    // let Message
    // if(this.state.isLoggedIn){
    //     Message=<div>welcome kiruthiga</div>
    // }
    // else{
    //     Message=<div>welcome guest</div>
    // }
    // return <div>{Message}</div>

    ///if condition

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             welcome kiruthiga
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>welcome guest</div>
    //     )
    // }
//     return (
//         <div>
//       <div> welcome kiruthiga</div>
//       <div>welcome guest</div>
//       </div>
//     )
  }
 }

export default UserGreeting
