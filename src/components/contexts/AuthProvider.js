import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const ValidateContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginProvider = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const makeNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const forgetPassToEmail = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('nexa-token');
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (user === null) {
                setUser(currentUser)
            }
            console.log("From user State")
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const validateInfo = {
        user,
        loading,
        setLoading,
        loginProvider,
        logOut,
        makeNewUser,
        signIn,
        forgetPassToEmail,
        updateUserProfile
    }

    return (
        <ValidateContext.Provider value={validateInfo}>
            {children}
        </ValidateContext.Provider>
    );
};

export default AuthProvider;