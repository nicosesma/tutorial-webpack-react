import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class World extends Component {
  render( {
    return <h1>World</h1>
  })
}

ReactDOM.render(<World/>, document.getElementById('world'))
