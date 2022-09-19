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
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

  render() {
    console.log('life cycle a  renderd')
    return (
      <div>
        <div>
        lifecycleA
        </div>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
