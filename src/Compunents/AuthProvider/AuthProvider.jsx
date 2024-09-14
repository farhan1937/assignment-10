import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoder] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const notify = (message) => {
    toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const notify2 = (message) => {
    toast.warning(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('User state changed:', currentUser);
      setUser(currentUser);
      setLoder(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = async () => {
    setLoder(true);
    try {
      await signOut(auth);
    } catch (error) {
      notify2("Error logging out");
    } finally {
      setLoder(false);
    }
  };

  const createUser = async (email, password) => {
    setLoder(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      notify2(error.message);
    } finally {
      setLoder(false);
    }
  };

  const googleLogin = async () => {
    setLoder(true);
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      notify2(error.message);
    } finally {
      setLoder(false);
    }
  };

  const signIN = async (email, password) => {
    setLoder(true);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      notify2(error.message);
    } finally {
      setLoder(false);
    }
  };

  const authInfo = {
    user,
    logOut,
    createUser,
    googleLogin,
    signIN,
    notify,
    notify2,
    loader,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
