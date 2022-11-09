import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
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

    const updateUserProfile = (name, img) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          }).then(() => {
            setLoading(true);
          }).catch((err) => {
            console.error(err)
          }); 
          setLoading(false);
    }

    const logOut = () => {
        setLoading(true);
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
        updateUserProfile
    }

    return (
        <ValidateContext.Provider value={validateInfo}>
            {children}
        </ValidateContext.Provider>
    );
};

export default AuthProvider;