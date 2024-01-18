import { drop } from "@/actions/DeleteUsersActions";
import { insert, update } from "@/actions/IUUsersActions";

export type Accion = ReturnType<typeof insert | typeof update | typeof drop>;