import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import Regularcom from './Regularcom'

class Parentcom extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'kiru'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'kiru'
            })
        },2000)
    }
    
  render() {
     console.log("parent component")
    return (
      <div>
        parent component
        <MemoComp name={this.state.name}></MemoComp>
        {/* <Regularcom name={this.state.name}></Regularcom>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default Parentcom
