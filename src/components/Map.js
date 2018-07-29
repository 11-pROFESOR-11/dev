import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { PlaceMarker } from "./PlaceMarker";
import userMapStyle from "./userMapStyle";
//import { auth } from '../firebase/firebase';
//import firebase from 'firebase';

const AirbnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom}
    defaultOptions={{
      styles: userMapStyle
    }}
  >
    {props.places.length > 0 &&
      props.places.map(place => (
        <PlaceMarker
          key={`place${place.id}`}
          id={place.id}
          lat={place.latitude}
          lng={place.longitude}
          description={place.description}
          name={place.name}
          price={place.price}
          onAdd={props.handleAdd}
        />
      ))}
  </GoogleMap>
));

export class Map extends Component {
  constructor(props) {
    super(props);

    this.zoom = 7;

    this.state = {
      lat: 50.0515918,
      lng: 19.9357531,
      places: [       
        {
        id: 1,
        latitude: 50,
        longitude: 20,
        description: "ABC",
        name: "City",
        price: 20
      }]
    };
  }


  handleAdd = () => {
    console.log("handle add called");
    this.setState({
      places: [       
        {
        id: 1,
        latitude: 50,
        longitude: 20,
        description: "ABC",
        name: "City",
        price: 20
      },
      {
        id: 2,
        latitude: 60,
        longitude: 30,
        description: "ABC",
        name: "City",
        price: 20
      },
    ]
    })
  };

  render() {
    const { lat, lng, places } = this.state;
    console.log(places);
    return (
      <div style={{ width: `100%`, height: `750px` }}>
        <AirbnbMap
          handleAdd={this.handleAdd}
          center={{
            lat: lat,
            lng: lng
          }}
          places={places}
          zoom={this.zoom}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
