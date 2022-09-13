//class component
import React ,{Component } from "react";
class Welcome extends Component{
    // render(){
    //     return<h1>class component</h1>
    // }
    //props in class component

    render(){
        return <h1>welcome { this.props.name} aka {this.props.heroName}</h1>
    }

    // destructiring of props using this keyword
}
export default Welcome