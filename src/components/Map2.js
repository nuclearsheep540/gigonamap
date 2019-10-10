import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'


class Map2 extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 51.5153,
        longitude: -0.07278,
        zoom: 8
      }
    }
  }

  render() {
    return (
      <ReactMapGL {...this.state.viewport}
        height={'100vh'}
        width={'100vw'}
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    )
  }
}
export default Map2