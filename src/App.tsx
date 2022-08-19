import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import AppRouter from './routes/AppRouter';
import { TUser } from './types/TUser';

function App() {
    const { setUser, setAuth } = useActions();

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setUser({ name: localStorage.getItem("name" || "") } as TUser);
            setAuth(true);
        }
    }, [setAuth, setUser]);

    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
