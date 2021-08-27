import firebase from "../config/firebaseConfig";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const socialMediaAuth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((error) => {
      return error;
    });
};
