import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Webpack React 走起',
    }
  }

  render() {
    return (
      <div className='app-container'>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default App
