import { IUsuario } from "@/../interfaces/IUsuario";
import { Accion } from "@/../types/accion";

const initialuser: IUsuario = {
    nombre: "",
    latitud: 0,
    longitud: 0,
    email: "",
    password: ""
};

const LISTA_USUARIOS: { [key: number]: IUsuario } = { };
let longitudListaUsuarios: number = Object.keys(LISTA_USUARIOS).length;
const findUser = (valorBuscado: string): number => {
    for (const id in LISTA_USUARIOS) {
        if (LISTA_USUARIOS[id].email === valorBuscado) {
            return parseInt(id)
        }
    }
    return -1;
}

const userReducer = (state: IUsuario = initialuser, accion: Accion): IUsuario => {
    switch(accion.type) {
        case "INSERT":
            return LISTA_USUARIOS[longitudListaUsuarios + 1] = state;
        case "UPDATE":
            return LISTA_USUARIOS[findUser(state.email)] = state;
        case "DROP":
            delete LISTA_USUARIOS[findUser(state.email)];
            return initialuser
    }
}

export default userReducer;