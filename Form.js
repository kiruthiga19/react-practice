import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments:'',
         topic:'react'
      }
    }
    
    handleUsernameChange =(event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event)=>{
        this.setState({
            comments:event.target.value
        })
    }


    handleTopicChange =(event)=>{
        this.setState({

            topic:event.target.value
        })
    }

    handleSubmit =(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    // const {username,comments,topic}=this.state  -> for code readability when we use this remove this.state from everything
    return (
        <form onSubmit={this.handleSubmit}>
             <div>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
             </div>
             <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
             </div>
             <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='react'>react</option>
                    <option value='html'>html</option>
                    <option value='css'>css</option>
                </select>
             </div>
             <button>submit</button>
        </form>
    )
  }
}

export default Form
