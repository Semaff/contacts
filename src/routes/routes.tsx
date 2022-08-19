import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    SIGNIN = "/signin",
    HOME = "/",
    REDIRECT = "*"
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.SIGNIN, element: <Signin /> },
    { path: RouteNames.REDIRECT, element: <Navigate replace to={RouteNames.SIGNIN} /> },
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, element: <Home /> },
    { path: RouteNames.REDIRECT, element: <Navigate replace to={RouteNames.HOME} /> },
]