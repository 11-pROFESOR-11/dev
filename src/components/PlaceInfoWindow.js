import React, { Component } from 'react';
import { InfoWindow } from 'react-google-maps'
 
export class PlaceInfoWindow extends Component {

  render() {
    const {description, name, price} = this.props
 
    return(
      <InfoWindow onCloseClick={this.props.closeWindow}>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <span>${price}</span>
          <button type="button" onClick={this.props.onAdd} className="btn btn-primary btn-success m-2">Add</button>
        </div>
      </InfoWindow>
    );
  }
}
 
export default PlaceInfoWindow