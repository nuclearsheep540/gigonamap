import React from 'react'
import axios from 'axios'
import Map2 from './Map2'

class Gigs extends React.Component {
  constructor() {
    super()
    this.state = {
      results: []
    }

  }
  componentDidMount() {
    console.log('fetching...')
    const time = new Date()
    console.log('time = ', time)
    const now = (`${time.getFullYear()}-${time.getMonth().toLocaleString(undefined, { minimumIntegerDigits: 2 })}-${time.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`)
    console.log('now = ', now)
    axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=${process.env.SKIDDLE_ACCESS_TOKEN}}&latitude=51.5153&longitude=-0.07278&radius=50&eventcode=LIVE&order=distance&description=1&limit=100&minDate=${now}&maxDate${now}`)
      .then(res => {
        this.setState({ results: res.data.results })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    console.log('rendering...')
    if (!this.state.results) return null
    return (
      console.log('Gigs',this.state),
      <Map2 { ...this.state }  />
    )
  }
}
export default Gigs