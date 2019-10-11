import React from 'react'


import ReactMapGL, { NavigationControl, Marker, StaticMap } from 'react-map-gl'



class Map extends React.Component {
  constructor() {
    super()

    this.state = {
      results: [],
      viewport: {
        width: '',
        height: '',
        latitude: '',
        longitude: '',
        zoom: ''
      }
    }

  }
  // componentDidMount(){
  //   console.log('fetching...')
  //   const time = new Date()
  //   const now = (`${time.getFullYear()}-${time.getMonth().toLocaleString(undefined, { minimumIntegerDigits: 2 })}-${time.getDate().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`)
  //   axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=cf01a3ce982b41a34e140dbeb38c0a2b&latitude=51.5153&longitude=-0.07278&radius=5&eventcode=LIVE&order=distance&description=1&limit=100&minDate=${now}&maxDate=${now}`)
  //     .then(res => {

  //       this.setState({ results: res.data.results })
  //     })
  //     .catch(err => console.log(err))

  // }


  render() {
    console.log('rendering...')

    if (!this.state.results) return null
    console.log(this.state.results)
    return (

      <div>

        <ReactMapGL
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          height={'90vh'}
          width={'90vw'}
          mapStyle='mapbox://styles/mapbox/dark-v10'
          zoom={12}
          latitude={51.5153}
          longitude={-0.07278}
          dragPan={true}
          // onViewportChange={(viewport) => {
          //   const { width, height, latitude, longitude, zoom } = viewport;
          // }}
        >

          {/* {this.state.results.map(event => (
            <Marker
              key={event.id}
              latitude={event.venue.latitude}
              longitude={event.venue.longitude}
            >
              <div> 🎸 </div>
            </Marker>
          ))} */}
          <NavigationControl />
        </ReactMapGL>
      </div>
    )

  }
}
export default Map