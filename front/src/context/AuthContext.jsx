import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const authContext = createContext();

export const useAuth  = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth)
  
  const loginWitGoogle =()=>{
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const resetPassword =(email) =>{
   return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
  }, []);

  return (
    <authContext.Provider value={{loginWitGoogle, useAuth, signup, login, user, logout, resetPassword}}>
      {children}
    </authContext.Provider>
  );
};