import { AuthActionCreators } from "./auth/actionCreators";
import { ContactsActionCreators } from "./contacts/actionCreators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...ContactsActionCreators
}