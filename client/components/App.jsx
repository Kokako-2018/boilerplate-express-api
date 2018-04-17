import React from 'react'

import {getPic} from '../api'
import PicDetails from './PicDetails'

export default class App extends React.Component {
    constructor (props) {
      super(props)
      this.state= {
        error: null,
        pic: [],
        // picExplanationVisible: false
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

    // showExplanation (explanation){
        
    // }
    render() {
        return (
            <div>
             <div>NASA's pic of the day!</div>
             <img src={this.state.pic.url}/>
             <PicDetails pic={this.state.pic}/>
            </div>
        )
    }
}

