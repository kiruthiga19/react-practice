import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'
 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"kiru"
      }
      console.log('lifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('lifecyclea getDerivedStateFromProps ')
        return null // it return new state or null 
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
// update life cycle method
    shouldComponentUpdate(){
      console.log('lifecycleA should component update')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('component did update')
    }

    changeState = ()=>{
      this.setState({
        name:'code react`'
      })
    }

  render() {
    console.log('life cycle a  renderd')
    return (
      <div>
        <div>
        lifecycleA
        <button onClick={this.changeState}>change state</button>
        </div>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
