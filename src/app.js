import React from 'react'
import ReactDOM from 'react-dom'

import Gigs from './components/Gigs'

import '../src/style.scss'
import './animate.css'

class App extends React.Component {
  render() {
    if (!this.props) return null
    console.log('hello this is app, and you have ',this.props)
    return (
      
      <>
      <Gigs className='gigs' />
      </>
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)