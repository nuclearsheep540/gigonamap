import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import '../animate.css'




class Map2 extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 51.5153,
        longitude: -0.07278,
        zoom: 15
      },
      eventData: {
      },
      openingtimes: {
      },
      active: false

    }
    this.showInfo = this.showInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  showInfo(eventData) {
    this.setState({ active: true })
    this.setState({ eventData })
    this.setState({ openingtimes: eventData.openingtimes })
    console.log('clicked', eventData)
  }
  handleClick(){
    this.setState({ active: false })
  }

  render() {

    if (!this.props) return null

    let classes = 'animated fadeOut hide'
    if (this.state.active){
      classes = 'animated fadeIn delay-1s'
    }
    let numberOfGigs = 'animated fadeIn'
    if (this.state.active){
      numberOfGigs = 'animated fadeOut hide'
    }


    const gigs = this.props
    return (
      <>
        <div className={`container ${this.state.active ? 'container transition' : '' }`}>
          <p className={numberOfGigs}>{`There are ${this.props.results.length} gigs in your area`}</p>
          <div className={classes}>

            <h3>{this.state.eventData.eventname}</h3>
            <p>{this.state.eventData.description}</p>
            <img className='imgShow' src={this.state.eventData.imageurl}></img>
            
            <p>{`Tickets are ${this.state.eventData.entryprice}`}</p>
            {/* <p>{`Date ${this.state.eventData.date}`}</p> */}
            
            <p>{`Doors: ${this.state.openingtimes.doorsopen} - ${this.state.openingtimes.doorsclose}`}</p>
            <p>{`Last entry is ${this.state.openingtimes.lastentry}`}</p>
            <a target="blank" href={this.state.eventData.link}>Purchase your ticket Here</a>
          </div>
        </div>

        <ReactMapGL {...this.state.viewport} eventData={this.state}
          onClick={this.handleClick}
          height={'100vh'}
          width={'100vw'}
          mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
          onViewportChange={(viewport) => this.setState({ viewport })}
        >
          {gigs.results.map(i => (
            <Marker
              key={i.id}
              latitude={i.venue.latitude}
              longitude={i.venue.longitude}
            >
              {/* () => this.setState({ eventname: i.eventname }), this.showInfo */}
              <div {...i} name={i} onClick={() => this.showInfo(i)}>
                <img className='pin' src={i.imageurl} />
              </div>
            </Marker>
          ))}
        </ReactMapGL>

        {/* <Map2 {...this.props} /> */}
      </>

    )//end of render
  }
}

export default Map2