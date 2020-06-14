import React from 'react';
import L from 'leaflet';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Title from '../../components/Title';

const schoolLocation = [16.1689307, 80.8048806];

const waterWells = [
  {
    name: 'Pallapatla',
    location: [15.983114, 80.751832],
    year: 2015,
  },
  {
    name: 'Tenali',
    location: [16.239992, 80.625523],
    year: 2015,
  },
  {
    name: 'Koduru',
    location: [16.013732, 81.040451],
    year: 2015,
  },
  {
    name: 'Degalavaripalem',
    location: [15.893846, 80.945017],
    year: 2016,
  },
  {
    name: 'Talluru',
    location: [15.382357, 79.630355],
    year: 2016,
  },
  {
    name: 'Potumeeda',
    location: [15.962964, 80.98045],
    year: 2016,
  },
  {
    name: 'Vejendla',
    location: [16.236911, 80.524185],
    year: 2017,
  },
  {
    name: 'Donepudi',
    location: [16.152388, 80.816984],
    year: 2017,
  },
  {
    name: 'Kammavaripallem',
    location: [15.985377, 80.843019],
    year: 2017,
  },
  {
    name: 'Kolluru - school site',
    location: [16.179832, 80.782579],
    year: 2017,
  },
  {
    name: 'Nagaram',
    location: [16.0080153, 80.722361],
    year: 2017,
  },
  {
    name: 'Marampudi',
    location: [16.353761, 80.627451],
    year: 2017,
  },
  {
    name: 'Gajullanka',
    location: [16.180672, 80.824492],
    year: 2018,
  },
  {
    name: 'Balijilapalli',
    location: [16.178111, 80.739458],
    year: 2018,
  },
  {
    name: 'Gandhi Nagar',
    location: [16.279871, 80.45074],
    year: 2018,
  },
  {
    name: 'Kolluru - Power Station',
    location: [16.174783, 80.803002],
    year: 2018,
  },
  {
    name: 'Parimi',
    location: [16.195669, 80.595177],
    year: 2018,
  },
  {
    name: 'Kolluru',
    location: [16.185512, 80.792406],
    year: 2018,
  },
  {
    name: 'Tenali - Ithangar Gov School',
    location: [16.248268, 80.652188],
    year: 2018,
  },
  {
    name: 'Kollur',
    location: [16.181447, 80.792638],
    year: 2018,
  },
  {
    name: 'Jampani',
    location: [16.194595, 80.708677],
    year: 2019,
  },
  {
    name: 'Donepudi - Bellavarupalem',
    location: [16.151679, 80.817752],
    year: 2019,
  },
  {
    name: 'Sangam Jagarlamudi',
    location: [16.239316, 80.58526],
    year: 2019,
  },
  {
    name: 'Tenali Canal',
    location: [16.226782, 80.646885],
    year: 2019,
  },
  {
    name: 'Marampudi',
    location: [16.365949, 80.628722],
    year: 2019,
  },
  {
    name: 'Kolluru - Vemuru',
    location: [16.181298, 80.737749],
    year: 2019,
  },
  {
    name: 'Kolluru Outskirts',
    location: [16.185543, 80.794578],
    year: 2019,
  },
  {
    name: 'Krapa',
    location: [16.197693, 80.775206],
    year: 2019,
  },
  {
    name: 'Cheruvulapalli',
    location: [16.054932, 80.676746],
    year: 2019,
  },
  {
    name: 'Tenali - Ithanagar',
    location: [16.255132, 80.656477],
    year: 2019,
  },
  {
    name: 'Ravikampadu',
    location: [16.163978, 80.761018],
    year: 2019,
  },
  {
    name: 'MARAMPUDI- TNL - VIJ',
    location: [16.353581, 80.625463],
    year: 2020,
  },
  {
    name: 'Nandivelugu',
    location: [16.289805, 80.63893],
    year: 2020,
  },
  {
    name: 'Kiskindapalem',
    location: [16.11886, 80.831718],
    year: 2020,
  },
];

const Map = () => {
  const openPopup = marker => {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup();
      });
    }
  };

  const SchoolIcon = L.icon({
    iconUrl: require('../../Images/Icons/FourPillars/Education_color.png'),
    iconSize: [75, 75],
    iconAnchor: [38, 25],
  });

  const renderWaterWells = () => {
    return waterWells.map(w => (
      <Marker position={w.location}>
        <Popup>
          <div>
            {w.name} ({w.year})
          </div>
        </Popup>
      </Marker>
    ));
  };

  return (
    <div>
      <Title
        title="Where We Work"
        description="We fund basic life necessities - water, proper sanitation, education, medical, and leadership training - currently in rural India. We choose to work in unreached areas that suffer from water scarcity, poverty, social inequality, lack of facilities, and lack of opportunities. Our team works closely with local partners to ensure that it helps the people in most need and that every dollar is well spent and accounted for.  A map of our impact:"
      />

      <LeafletMap center={schoolLocation} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />

        {renderWaterWells()}

        <Marker position={schoolLocation} ref={openPopup} icon={SchoolIcon}>
          <Popup>FOREFRONT School</Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
};

export default Map;
