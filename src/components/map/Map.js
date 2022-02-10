import React, {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

const Map = (props) => {
  const [ListPoints, setListPoints] = useState(null);
  const [centerAvg, setCenterAvg] = useState([51.505, -0.09]);

  function getCenterAverage(waypointsArray) {
    if (waypointsArray.length === 0) {
      return [51.505, -0.09];
    }
    let latsum = 0;
    let lngsum = 0;
    for (var i = 0; i < waypointsArray.length; i++) {
      latsum += parseFloat(waypointsArray[i].lat);
      lngsum += parseFloat(waypointsArray[i].lng);
    }
    const res = [
      latsum / waypointsArray.length,
      lngsum / waypointsArray.length,
    ];

    console.log("center average res", res);

    return res;
  }

  useEffect(() => {
    console.log("new props =", props);
    const newPoints = props.markersJSON.map((point) => {
      if (
        point.timestamp === props.selectedtimestamp ||
        props.selectedtimestamp === null
      )
        return (
          <Marker key={point.timestamp} position={[point.lat, point.lng]}>
            <Popup>
              {point.label} <br /> timestamp = {point.timestamp}
            </Popup>
          </Marker>
        );
      return null;
    });
    setListPoints(newPoints);
    setCenterAvg(getCenterAverage(props.markersJSON));
  }, [props]);

  return (
    <div>
      <MapContainer id="id_composant_map" center={centerAvg} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {ListPoints}
      </MapContainer>
    </div>
  );
};

export default Map;
