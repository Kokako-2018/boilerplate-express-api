import React from 'react'
import {sats} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      sats: [],
      activesat: null,
      detailsVisible: false,
      addsatVisible: false
     
    }
    this.saveSat = this.saveSat.bind(this)
  }

    saveSat(err,sattelite) {
      this.setState({sats:sattelite})
    }

    componentDidMount (){ 
      // this.refreshList()
      sats(this.saveSat)
    }

    refreshList (err) {
      this.setState({
        error: err,
        addsatVisible: false
      })
      getsats(this.rendersats)
    }

  
  render () {
    console.log(this.state.sats)

    return (
        <div>
            <h1>"Hello"</h1>
            <p>{this.state.sats.length > 0 && this.state.sats[0].name}</p>
        </div>
    )
  }
  }

module.exports = App