import React from 'react'

import {getPic} from '../api'
import PicDetails from './PicDetails'

export default class App extends React.Component {
    constructor (props) {
      super(props)
      this.state= {
        error: null,
        pic: [],
        detailsVisible: false
      } 
      this.refreshPic = this.refreshPic.bind(this)
      this.renderPic = this.renderPic.bind(this)
      this.showDetails = this.showDetails.bind(this)
      this.hideDetails = this.hideDetails.bind(this)
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

    showDetails () {
        this.setState({
            detailsVisible: true
        })
    }

    hideDetails (){
        this.setState({
            detailsVisible:false
        })
    }


    render() {
        return (
            <div>
             <div>NASA's pic of the day!</div>
             <img src={this.state.pic.url}/>
             <br/>
             <button onClick={this.showDetails}>Show Details</button>
             <PicDetails pic={this.state.pic} isVisible={this.state.detailsVisible}
             hideDetails={this.hideDetails}/>
            
            </div>
        )
    }
}

