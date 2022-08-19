import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { TContact } from "../types/TContact";
import ContactsForm from "./ContactsForm";
import Modal from "./Modal";

interface ContactProps {
    contact: TContact
}

const Contact = ({ contact }: ContactProps) => {
    const { deleteContact, editContact } = useActions();
    const [modalVisible, setModalVisible] = useState(false);

    const handleDeleteContact = () => {
        deleteContact(contact.id);
    }

    const handleEditContact = (name: string, phone: string) => {
        editContact(contact.id, name, phone);
        setModalVisible(false);
    }

    return (
        <>
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <ContactsForm
                    onSubmit={handleEditContact}
                    submitText="Edit contact"
                    defaultName={contact.name}
                    defaultPhone={contact.phone}
                />
            </Modal>

            <div className="contact">
                <div className="contact__info">
                    <h4 className="contact__name">
                        Name: {contact.name}
                    </h4>
                    <h5 className="contact__phone">
                        Phone: {contact.phone}
                    </h5>
                </div>

                <div className="contact__actions">
                    <button className="contact__btn" onClick={() => setModalVisible(true)}>
                        Edit Contact
                    </button>
                    <button className="contact__btn --danger" onClick={handleDeleteContact}>
                        Delete Contact
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact;