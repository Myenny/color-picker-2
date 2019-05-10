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
  // creating function to change hue
  getHue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  // creating function to change saturation
  getSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }
  // creating function to change lightness
  getLightness = event => {
    this.setState({
      lightness: event.target.value
    })
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
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.getHue}
              />
            </li>
            <li>
              Saturation
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.saturation}
                onChange={this.getSaturation}
              />
            </li>
            <li>
              Lightness
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.lightness}
                onChange={this.getLightness}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
