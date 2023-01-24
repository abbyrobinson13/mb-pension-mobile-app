import React, { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FirebaseContext } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const children = props.children;

  const fbContext = useContext(FirebaseContext);
  const auth = fbContext.auth;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      console.log("onAuthStateChanged() - new User!!", authUser);
      setUser(authUser);
    });
    return unsub;
  }, [auth]);

  const login = async (email, password) => {
    try {
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      if (userCred) {
        console.log("Logged in!!", userCred.user);
      } else {
        console.log("Login failed!!");
      }
    } catch (ex) {
      console.log("AUTHENTICATION FAILED", ex.message);
    }
  };
  
  const logout = async () => {
    await signOut(auth);
  };

  const theValues = { user, login, logout };

  return (
    <AuthContext.Provider value={theValues}>{children}</AuthContext.Provider>
  );
};
