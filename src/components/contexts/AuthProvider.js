import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const ValidateContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState()

    

    const validateInfo = {

    }

    return (
        <ValidateContext.Provider value={validateInfo}>
            {children}
        </ValidateContext.Provider>
    );
};

export default AuthProvider;