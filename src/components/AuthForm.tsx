import React, { useState } from "react";
import { useActions } from "../hooks/useActions";

const AuthForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useActions();

    const canSubmit = name.length > 3 && password.length > 3;

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(name, password);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input
                className="input"
                type="text"
                id="name"
                placeholder="Alex"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <label className="label" htmlFor="password">
                Enter password:
            </label>
            <input
                className="input"
                type="password"
                id="password"
                placeholder="****"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button className="button" disabled={!canSubmit}>Sign In</button>
        </form>
    )
}

export default AuthForm;