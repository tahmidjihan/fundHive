import React, { createContext, useEffect } from 'react';
import auth from './firebase.config.js';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

export const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  }
  function signUp(email, password, name, PhotoURL) {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: PhotoURL,
      });
      setUser(res.user);
    });
  }
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password).then((res) =>
      setUser(res.user)
    );
  }
  useEffect(() => {
    const Unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => Unsubscribe();
  });
  const logout = () => auth.signOut();
  const value = {
    loginWithGoogle,
    signUp,
    signIn,
    logout,
    user,
  };
  return (
    <>
      <authContext.Provider value={value}>{children}</authContext.Provider>
    </>
  );
}

export default AuthProvider;
