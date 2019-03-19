import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
    static defaultProps = {
        center: {
          lat: 33.7490,
          lng: -84.3880
        },
        zoom: 11
      };
     
      render() {
        return (
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBK4KVSH79lyrOj6xWEJVBlYj9y1E4IX58" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={33.7490987}
                lng={-84.3901849}
                text={'Atlanta, GA'}
              />
            </GoogleMapReact>
          </div>
        );
      }
}

export default Map;