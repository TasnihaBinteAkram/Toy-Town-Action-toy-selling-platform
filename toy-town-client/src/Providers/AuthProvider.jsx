import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login =(email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
            user,
            loading,
            login,
            logOut,
            createUser,
            googleLogin,
            auth,
            setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;