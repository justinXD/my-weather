import userReducer from '@/reducers/IUUsersSlice';
export interface IUsuario {
    IDUsuario?: number,
    nombre: string,
    apellido?: string,
    latitud: number,
    longitud: number
    email: string,
    password: string
}

export interface State {
    usuarios: IUsuario[];
  }

  export interface RootState {
    usuarios: ReturnType<typeof userReducer>;
  }