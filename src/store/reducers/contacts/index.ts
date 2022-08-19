import { TContact } from "../../../types/TContact";
import { ContactsAction, ContactsActionsEnum, ContactsState } from "./types";

const initialState: ContactsState = {
    contacts: [] as TContact[]
}

export default function contactReducer(state = initialState, action: ContactsAction): ContactsState {
    switch (action.type) {
        case ContactsActionsEnum.SET_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            }
        }

        default: {
            return state;
        }
    }
}