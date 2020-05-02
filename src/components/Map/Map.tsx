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
        description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.'
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
