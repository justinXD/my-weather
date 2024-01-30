'use client'
import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEventHandler, useEffect } from 'react';
import ListaUsuarios from "@/../components/listaUsuarios";
import { store } from '@/store';
import { Provider } from 'react-redux';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos: GeolocationPosition) {
  const crd = pos.coords;

  console.log("Tu ubicación actual es:");
  console.log(`Latitud : ${crd.latitude}`);
  console.log(`Longitud: ${crd.longitude}`);
  console.log(`Más o menos ${crd.accuracy} metros.`);
}

function error(err: GeolocationPositionError) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
export default function Home() {
  const localizar: MouseEventHandler<HTMLButtonElement> = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  const getClima: (latitud: number, longitud: number) => Promise<void> = async (latitud: number, longitud: number) => {
    try {
        const response = await fetch(`/api/clima`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitud, longitud }),
      });
      console.log('response: ', response);
      if (response.ok) {
        const data = response.json();
        console.log('data: ', data);
        // return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {/* Asigna un ID al botón */}
      <button id="miBoton" onClick={localizar}>Localizar</button>
      <button onClick={() => getClima(20.6620982,-103.3959561)}>get clima</button>
      <Provider store={store} >
        <ListaUsuarios></ListaUsuarios>
      </Provider>
      {/* Otro contenido de tu página */}
    </div>
  )
}
