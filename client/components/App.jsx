import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import {getTranslation} from '../api'


class App extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
          word: null,
          translation: null
      }
  }

  componentDidMount () {
    let word = 'canoe'
    getTranslation(word)
      .then(translation => {
        this.setState({word: word, translation: translation})
      })
}

render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <p>{this.state.word}</p>
        <p>{this.state.translation}</p>
      </div>
    )
  }
}


export default App