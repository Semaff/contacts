import { AppDispatch } from "../..";
import { TContact } from "../../../types/TContact";
import { ContactsActionsEnum, SetContactsAction } from "./types";

export const ContactsActionCreators = {
    setContacts: (contacts: TContact[]): SetContactsAction => ({
        type: ContactsActionsEnum.SET_CONTACTS,
        payload: contacts
    }),

    createContact: (contact: TContact) => async (dispatch: AppDispatch) => {
        try {
            const contacts = localStorage.getItem('contacts') || "[]";
            const jsonContacts = JSON.parse(contacts) as TContact[];
            jsonContacts.push(contact);

            dispatch(ContactsActionCreators.setContacts(jsonContacts));
            localStorage.setItem("contacts", JSON.stringify(jsonContacts));
        } catch (err) {
            console.log(err);
        }
    },

    deleteContact: (id: string) => async (dispatch: AppDispatch) => {
        try {
            const contacts = localStorage.getItem('contacts') || "[]";
            const jsonContacts = JSON.parse(contacts) as TContact[];
            const filteredContacts = jsonContacts.filter(contact => contact.id !== id);

            dispatch(ContactsActionCreators.setContacts(filteredContacts));
            localStorage.setItem("contacts", JSON.stringify(filteredContacts));
        } catch (err) {
            console.log(err);
        }
    },

    editContact: (id: string, name?: string, phone?: string) => async (dispatch: AppDispatch) => {
        try {
            const contacts = localStorage.getItem('contacts') || "[]";
            const jsonContacts = JSON.parse(contacts) as TContact[];
            const contact = jsonContacts.find(contact => contact.id === id);
            if (!contact) {
                throw new Error("Contact does not exist!");
            }

            const newName = name || contact.name;
            const newPhone = phone || contact.phone;

            const filteredContacts = jsonContacts.filter(contact => contact.id !== id);
            filteredContacts.push({ ...contact, name: newName, phone: newPhone });
            dispatch(ContactsActionCreators.setContacts(filteredContacts));
            localStorage.setItem("contacts", JSON.stringify(filteredContacts));
        } catch (err) {
            console.log(err);
        }
    },

    fetchContacts: (name: string) => async (dispatch: AppDispatch) => {
        try {
            const contacts = localStorage.getItem("contacts") || "[]";
            const jsonContacts = JSON.parse(contacts) as TContact[];
            const currentUserContacts = jsonContacts.filter(contact => contact.author === name);
            dispatch(ContactsActionCreators.setContacts(currentUserContacts));
        } catch (err) {
            console.log(err);
        }
    },

    // searchContact: (name: string) => async (dispatch: AppDispatch) => {
    //     try {
    //         const contacts = localStorage.getItem("contacts") || "[]";
    //         const jsonContacts = JSON.parse(contacts) as TContact[];
    //         const filteredContacts = jsonContacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
    //         dispatch(ContactsActionCreators.setContacts(filteredContacts));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
} 