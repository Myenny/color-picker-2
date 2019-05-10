import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: 1
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
  getAlpha = event => {
    this.setState({
      alpha: event.target.value
    })
  }
  getRandomColor = event => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.random() * 100),
      lightness: Math.ceil(Math.random() * 100),
      alpha: 1
    })
  }

  render() {
    let color = `hsla(${this.state.hue},${this.state.saturation}%,${
      this.state.lightness
    }%,${this.state.alpha})`
    return (
      <div className="App">
        <h1>Color Picker</h1>
        <div className="box-container">
          <div className="box-background">
            <div
              className="box"
              style={{
                backgroundColor: color
              }}
            />
          </div>
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
            <li>
              Alpha
              <input
                type="range"
                min="0"
                max="1"
                step=".01"
                value={this.state.alpha}
                onChange={this.getAlpha}
              />
            </li>
          </ul>
        </div>
        <p>{color}</p>
        <button onClick={this.getRandomColor}>Random Color</button>
      </div>
    )
  }
}

export default App
