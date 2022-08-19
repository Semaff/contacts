import { Route, Routes } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "./routes";

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer);

    return (
        <Routes>
            {isAuth
                ?
                privateRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))
                :
                publicRoutes.map(route => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))
            }
        </Routes>
    )
}

export default AppRouter;