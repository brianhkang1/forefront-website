import React from 'react';
import { 
  Map as LeafletMap, 
  TileLayer, 
  Marker, 
  Popup 
} from 'react-leaflet';

const latLong = [16.1689307, 80.8048806]

const Map = () => {
  return (
    <LeafletMap center={latLong} zoom={11}>
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
      <Marker 
        position={latLong}
      >
        <Popup>FOREFRONT school</Popup>
      </Marker>
    </LeafletMap>
  );
};

export default Map;
