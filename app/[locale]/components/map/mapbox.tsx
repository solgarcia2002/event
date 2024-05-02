"use client"
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './mapbox.css'

interface MapProps {
  accessToken: string;
}

const Map: React.FC<MapProps> = ({ accessToken }) => {
  const mapContainerRef = useRef(null);



  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-80.19104791222261, 25.76225396898935],
      zoom: 12,
    });

    // Agregar un control de navegación (zoom y rotación)
    map.addControl(new mapboxgl.NavigationControl());
    // Crear un elemento para el marcador
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://www.wellbizbridge.com/logo-wb-border.png)';
    el.style.width = '50px';
    el.style.height = '50px';
    el.style.backgroundSize = 'cover';
    // Agregar marcadores
    const marker1 = new mapboxgl.Marker(el)
      .setLngLat([-80.19104791222261, 25.76225396898935])

      .setPopup(
        new mapboxgl.Popup({ offset: 25, className: 'popup' }) // add popups
          .setHTML(
            `<div>
              <img src="/logo-wb-border.png" style="width: 80px !important; height: 80px !important;"/>
              <h4><strong>WELLBIZ BRIDGE #MIAMI 2024</strong></h4>
              <p>JW Marriot Miami Hotel</p>
            </div>`
          )
      );
    marker1.addTo(map)
    return () => {
      map.remove();
    };
  }, [accessToken]);

  return (
    <div
      ref={mapContainerRef}
      style={{

        width: '100%',
        height: '400px',
      }}
    />

  );
};

export default Map;
