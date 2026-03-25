import React, { useEffect, useRef } from "react";
import { Map, config, MapStyle, Marker } from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export const MyMap = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const addressLocation = {
    lng: 3.391632,
    lat: 6.558455,
  };

  const mapKeys = import.meta.env.VITE_MAPTILER_KEY;

  useEffect(() => {
    if (map.current) return; // initialize map only once

    config.apiKey = mapKeys;
    console.log("MapTiler API Key:", mapKeys); // Debugging: Check if the API key is loaded correctly

    map.current = new Map({
      container: mapContainerRef.current,
      style: MapStyle.STREETS,
      center: [addressLocation.lng, addressLocation.lat],
      zoom: 13,
    });

    new Marker({ color: "#FF0000" })
      .setLngLat([addressLocation.lng, addressLocation.lat])
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove(); // Clean up the map instance on component unmount
        map.current = null; // Reset the map reference
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div ref={mapContainerRef} className="w-full h-100 rounded-lg" />
      <a
        href="https://www.google.com/maps/search/?api=1&query=13+Alabi+St+Gbagada+Phase+1+Lagos"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        📍 Get Direction on Google Map
      </a>
    </div>
  );
};
