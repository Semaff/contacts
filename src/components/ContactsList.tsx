import { TContact } from "../types/TContact";
import Contact from "./Contact";

interface ContactsListProps {
    contacts: TContact[]
}

const ContactsList = ({ contacts }: ContactsListProps) => {
    return (
        <section className="contacts">
            {contacts.map((contact, index) => (
                <Contact key={index} contact={contact} />
            ))}
        </section>
    )
}

export default ContactsList;