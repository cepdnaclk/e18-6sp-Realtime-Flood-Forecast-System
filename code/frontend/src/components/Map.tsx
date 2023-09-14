import Title from "antd/es/typography/Title";
import GoogleMap from "google-maps-react-markers";
import { FC, useRef, useState } from "react";

interface Coordinate {
  lat: number;
  lng: number;
}
const AnyReactComponent = ({ text, isGreen, lat, lng }: any) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ fontWeight: 'bold' }}>{`Lat: ${lat}, Lng: ${lng}`}</div>
    <div style={{ color: isGreen ? 'green' : 'red', fontWeight: 'bold' }}>
      {text}
    </div> 
  </div>
);

const Map: FC = () => {
  const mapRef = useRef<any>(null);
  const [mapReady, setMapReady] = useState(false);

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
  const onGoogleApiLoaded = ({ map, maps }: { map: any; maps: any }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  const coordinates: Coordinate[] = [
    { lat: 8.092345, lng: 80.458888 },
    { lat: 8.023208, lng: 80.055764 },
    { lat: 8.146144, lng: 79.848975 },
    { lat: 8.144798, lng: 80.237000 },
    { lat: 8.001200, lng: 80.207799 },
  ];

  return (
    <GoogleMap
      apiKey=""
      defaultCenter={{ lat: 7.990533, lng: 80.293153 }}
      defaultZoom={10}
      mapMinHeight="50vh"
      onGoogleApiLoaded={onGoogleApiLoaded}
      onChange={(map: any) => console.log("Map moved", map)}
    >
      {coordinates.map(({ lat, lng }, index) => (
        <AnyReactComponent
          key={index}
          lat={lat}
          lng={lng}
          text={
            <Title level={3} type={index < 3 ? "danger" : "success"}>
              {index < 3 ? "△" : "▲"}
            </Title>
          }
          isGreen={index >= 3} // Determine if it's a green marker
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
