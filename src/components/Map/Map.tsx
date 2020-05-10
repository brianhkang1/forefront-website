import React from 'react';
import { 
  Map as LeafletMap, 
  TileLayer, 
  Marker, 
  Popup 
} from 'react-leaflet';
import Title from '../../components/Title';

const latLong = [16.1689307, 80.8048806]

const Map = () => {
  const openPopup = (marker) => {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }

  return (
    <div>
      <Title
        title='Where We Work'
        description='We fund basic life necessities - water, proper sanitation, education, medical, and leadership training - 
        currently in rural India. We choose to work in unreached areas that suffer from water scarcity, poverty, 
        social inequality, lack of facilities, and lack of opportunities. A map of our impact:'
      />

      <LeafletMap center={latLong} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <Marker 
          position={latLong}
          ref={openPopup}
        >
          <Popup>FOREFRONT school</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
