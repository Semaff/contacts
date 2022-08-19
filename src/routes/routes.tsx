import React from "react";
import Home from "../pages/Home";
import Signin from "../pages/Signin";

export interface IRoute {
    path: string;
    element: React.ReactNode;
}

export enum RouteNames {
    SIGNIN = "/signin",
    HOME = "/"
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: <Home />},
    {path: RouteNames.SIGNIN, element: <Signin />},
]