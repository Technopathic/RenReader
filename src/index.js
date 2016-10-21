import "babel-polyfill"
import React, {Component} from 'react'
import ReactDom from 'react-dom'

require('./style.css')

import JekyllandHyde from './components/JekyllandHyde'

class HelloWorld extends Component{

  render() {
    return (
      <JekyllandHyde/>
    )
  }
}

const content = document.getElementById('app')

ReactDom.render(<HelloWorld />, content)
