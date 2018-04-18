import React from 'react'

import {getSatelliteById} from '../api'


export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error: null,
      satellite: []

    }

    this.showSatellite = this.showSatellite.bind(this)
    this.renderSatellite = this.renderSatellite.bind(this)
}

componentDidMount () {
  this.showSatellite()
}

showSatellite (err) {
  this.setState({
    error: err,
  })
  getSatelliteById(this.renderSatellite)
}

renderSatellite (err, satellite) {
  console.log('satellite',satellite)
  console.log('err',err)
  this.setState({
    error: err,
    satellite: satellite || []
  })
}

render () {
  return (
    <div>
      <h1>Hello</h1>
      {this.state.satellite.name}
    </div>
  )
}
}