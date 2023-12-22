import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import {PropTypes} from 'prop-types'
import app from "../firebase/firebase.config";
//import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const updateProfileData = (name, image_url) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image_url
        })
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, signIn, logOut, googleSignIn, loading,updateProfileData}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;