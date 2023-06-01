import React from "react";
import { TileLayer, Tooltip, Marker, MapContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { customMarker } from "./cm.js";

function Harta() {
  let data = {
    minLat: -6.1751,
    maxLat: 55.7558,
    minLong: 37.6173,
    maxLong: 139.6917
  };

  const centerLat = (data.minLat + data.maxLat) / 2;
  var distanceLat = data.maxLat - data.minLat;
  var bufferLat = distanceLat * 0.05;
  const centerLong = (data.minLong + data.maxLong) / 2;
  var distanceLong = data.maxLong - data.minLong;
  var bufferLong = distanceLong * 0.05;
  const zoom = 4;
  const cities = [
    { position: [22.583261, 88.412796], text: "A" },
    { position: [22.58289, 88.41366], text: "B" }
  ];
  return (
    <div className="google-map-code">
          <iframe src="https://www.google.com/maps/d/embed?mid=12x_z_zXfnj7M8un_oxx-A2tq-bY&hl=en_US&ehbc=2E312F" width="1920" height="1080"></iframe>
        </div>
  ); 
};

export default Harta;
