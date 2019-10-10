import React from 'react'
import ReactDOM from 'react-dom'


import Map from './components/Map'
import Map2 from './components/Map2'

class App extends React.Component {
  render() {
    return (
      <Map2 />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)``