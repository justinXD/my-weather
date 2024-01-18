'use client'
import { MouseEventHandler, useEffect } from 'react';
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


  return (
    <div>
      {/* Asigna un ID al botón */}
      <button id="miBoton" onClick={localizar}>Localizar</button>
      <Provider store={store} >
        <ListaUsuarios></ListaUsuarios>
      </Provider>
      {/* Otro contenido de tu página */}
    </div>
  )
}
