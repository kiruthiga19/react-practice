import React, { Component } from 'react'
 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"kiru"
      }
      console.log('lifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('lifecycle B getDerivedStateFromProps ')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
      console.log('lifecycleB should component update')
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log('getSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate(){
      console.log('component did update')
    }


  render() {
    console.log('life cycle a  renderd')
    return (
      <div>
        lifecycleB
      </div>
    )
  }
}

export default LifecycleB
