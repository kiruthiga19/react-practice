import React, { Component } from 'react'

class Regularcom extends Component {
  render() {
    console.log("regular compnent")
    return (
      <div>
        regular component{this.props.name}
      </div>
    )
  }
}

export default Regularcom
