import { TContact } from "../../../types/TContact";

export interface ContactsState {
    contacts: TContact[]
}

export enum ContactsActionsEnum {
    SET_CONTACTS = "SET_CONTACTS"
}

export interface SetContactsAction {
    type: ContactsActionsEnum.SET_CONTACTS,
    payload: TContact[];
}

export type ContactsAction = SetContactsAction