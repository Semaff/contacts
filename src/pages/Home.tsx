import { useEffect, useState } from "react";
import ShortUniqueId from "short-unique-id";
import ContactsForm from "../components/ContactsForm";
import ContactsList from "../components/ContactsList";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { TContact } from "../types/TContact";

const Home = () => {
    const [search, setSearch] = useState("");
    const { fetchContacts, createContact } = useActions();
    const { contacts } = useTypedSelector(state => state.contactReducer);
    const { user } = useTypedSelector(state => state.authReducer);
    let filteredContacts = contacts.sort((a, b) => a.name.localeCompare(b.name));

    useEffect(() => {
        fetchContacts(user.name);
    }, [user.name]);

    const handleAddContact = (name: string, phone: string) => {
        const uid = new ShortUniqueId({ length: 15 })
        const contact: TContact = {
            author: user.name,
            id: uid(),
            name,
            phone
        }

        createContact(contact)
    }

    if (search !== "") {
        filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <div className="container">
            <h1 className="title">Home Page</h1>

            <ContactsForm onSubmit={handleAddContact} submitText="Add new contact" />
            <input
                type="text"
                placeholder="Search..."
                className="input --search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <ContactsList contacts={filteredContacts} />
        </div>
    )
}

export default Home;