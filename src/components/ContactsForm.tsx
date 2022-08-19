import "../styles/Contact.css"
import { ChangeEvent, useState } from "react";

interface ContactsFormProps {
    onSubmit: (name: string, phone: string) => void;
    submitText: string;
    defaultName?: string;
    defaultPhone?: string;
}

const ContactsForm = ({ onSubmit, submitText, defaultName, defaultPhone }: ContactsFormProps) => {
    const [name, setName] = useState(defaultName || "");
    const [phone, setPhone] = useState(defaultPhone || "");
    const canSubmit = name.length > 0 && phone.length > 0;

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(name, phone);
        setName("");
        setPhone("");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">
                Name:
            </label>
            <input
                className="input"
                type="text"
                id="name"
                placeholder="Alex"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label className="label" htmlFor="phone">
                Phone number:
            </label>
            <input
                className="input"
                type="text"
                id="phone"
                placeholder="+78912898288"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />

            <button className="button" disabled={!canSubmit}>
                {submitText}
            </button>
        </form>
    )
}

export default ContactsForm;