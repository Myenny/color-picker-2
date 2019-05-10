import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: 0,
      saturation: 0,
      lightness: 0
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Color Picker</h1>
        <div className="box-container">
          <div className="box" />
          <ul>
            <li>
              Hue
              <input type="range" min="0" max="360" value={this.state.hue} />
            </li>
            <li>
              Saturation
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
              />
            </li>
            <li>
              Lightness
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
