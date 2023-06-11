import Title from "antd/es/typography/Title";
import GoogleMap from "google-maps-react-markers";
import { FC, useRef, useState } from "react";

interface Coordinate {
  lat: number;
  lng: number;
}
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

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
    { lat: 7.990533, lng: 80.293153 },
    { lat: 7.991234, lng: 80.294567 },
    { lat: 7.992345, lng: 80.295678 },
  ];

  return (
    <GoogleMap
      apiKey=""
      defaultCenter={{ lat: 7.990533, lng: 80.293153 }}
      defaultZoom={15}
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
            <Title level={3} type="danger">
              △
            </Title>
          }
        />
      ))}
    </GoogleMap>
  );
};

export default Map;
