import React from 'react'

import {getPic} from '../api'

export default class App extends React.Component {
    constructor (props) {
      super(props)
      this.state= {
        error: null,
        pic: []
      } 
      this.refreshPic = this.refreshPic.bind(this)
      this.renderPic = this.renderPic.bind(this)
    }

    componentDidMount () {
        this.refreshPic()
    }

    renderPic (err, pic) {
        this.setState({
            error: err,
            pic: pic || []
        })
    }

    refreshPic (err) {
        this.setState({
            error: err,
        })
        getPic(this.renderPic)
    }

    render() {
        return (
            <div>
             <div>Helo</div>
             <img src={this.state.pic.url}/>
            </div>
        )
    }
}

