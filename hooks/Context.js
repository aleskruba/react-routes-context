import { createContext, useState } from "react";
import * as React from 'react';
import useAuth from "./useAuth";

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
