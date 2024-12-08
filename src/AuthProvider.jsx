import React, { createContext, useEffect } from 'react';
import auth from './firebase.config.js';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { toast } from 'react-toastify';
export const authContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => setUser(res.user))
      .then(() => {
        toast.success('Login successful');
      })
      .catch(() => {
        toast.error('Login failed');
      });
  }
  function signUp(email, password, name, PhotoURL) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: PhotoURL,
        });
      })
      .then((res) => {
        setUser(res.user);
        toast.success('Login successful');
      })
      .catch((err) => {
        console.error('ERROR: ', err);
        toast.error('Login failed');
      });
  }
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => setUser(res.user))
      .then(() => {
        const success = toast.success('Login successful');
        success();
      })
      .catch(() => {
        toast.error('Login failed');
      });
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
