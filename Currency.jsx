import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class Currency extends Component {
  
  render() {
    return <h1>World Currency</h1>
  }
}

ReactDOM.render(<Currency/>, document.getElementById('currency') )
