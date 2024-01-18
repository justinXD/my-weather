import { IUsuario, State, RootState } from "@/../interfaces/IUsuario";
import { Accion } from "@/../types/accion";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: State = {
    usuarios: [
        {
            IDUsuario: 1,
            nombre: 'Juan',
            latitud: 123.45,
            longitud: 67.89,
            email: 'juan@example.com',
            password: 'contraseña1',
          },
          {
            IDUsuario: 2,
            nombre: 'javier',
            latitud: 123.45,
            longitud: 67.89,
            email: 'javier@example.com',
            password: 'contraseña1',
          },
          {
            IDUsuario: 3,
            nombre: 'julio',
            latitud: 123.45,
            longitud: 67.89,
            email: 'julio@example.com',
            password: 'contraseña1',
          },
          {
            IDUsuario: 4,
            nombre: 'andrea',
            latitud: 123.45,
            longitud: 67.89,
            email: 'andrea@example.com',
            password: 'contraseña1',
          },
          {
            IDUsuario: 5,
            nombre: 'jose',
            latitud: 123.45,
            longitud: 67.89,
            email: 'jose@example.com',
            password: 'contraseña1',
          }
    ]
};

const initialUser: IUsuario = {
    nombre: "",
    latitud: 0,
    longitud: 0,
    email: "",
    password: ""
};

const LISTA_USUARIOS: { [key: number]: IUsuario } = { };
let longitudListaUsuarios: number = initialState.usuarios.length;
const findUser = (email: string): number => {
    return initialState.usuarios.findIndex(usuario => usuario.email == email);
}

const userSlice = createSlice({
    name: 'usuarios',
    initialState,
    reducers: {
        INSERT: (state: State, action: PayloadAction<IUsuario>) => {
            state.usuarios.push(action.payload);
        },
        UPDATE: (state: State, action: PayloadAction<IUsuario>) => {
            const userIndex = findUser(action.payload.email);
            if (userIndex !== -1) {
            state.usuarios[userIndex] = action.payload;
            }
        },
        DROP: (state: State, action: PayloadAction<string>) => {
            const userIndex = findUser(action.payload);
            if (userIndex !== -1) {
            state.usuarios.splice(userIndex, 1);
            }
        },
    }
  });

  export const { INSERT, UPDATE, DROP } = userSlice.actions;
  export const selectUsuarios = (state: RootState) => state.usuarios;
  export default userSlice.reducer;
// const userReducer = (state: State = initialState, accion: Accion): State => {
//     switch(accion.type) {
//         case "INSERT":
//             initialState.usuarios.push(initialUser)
//             return initialState;
//         case "UPDATE":
//             initialState.usuarios[findUser(initialUser.email)].nombre = initialUser.nombre;
//             initialState.usuarios[findUser(initialUser.email)].latitud = initialUser.latitud;
//             initialState.usuarios[findUser(initialUser.email)].longitud = initialUser.longitud;
//             initialState.usuarios[findUser(initialUser.email)].email = initialUser.email;
//             initialState.usuarios[findUser(initialUser.email)].password = initialUser.password;
//             return initialState;
//         case "DROP":
//             initialState.usuarios.splice(findUser(initialUser.email), 1);
//             return initialState;
//     }
// }

// export default userReducer;