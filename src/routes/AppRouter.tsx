import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
    const isLoggedIn = true;

    return (
        <Routes>
            {isLoggedIn
                ?
                privateRoutes.map(route => (
                    <Route path={route.path} element={route.element} />
                ))
                :
                publicRoutes.map(route => (
                    <Route path={route.path} element={route.element} />
                ))
            }
        </Routes>
    )
}

export default AppRouter;