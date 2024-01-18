import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../interfaces/IUsuario';

const ListaUsuarios = (): JSX.Element => {
  // Utiliza el hook useSelector para acceder al estado de Redux
  const usuarios = useSelector((state: State) => state.usuarios);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.IDUsuario}>
            {usuario.nombre} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
