import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from 'firebase/auth';
  import React, { createContext, useEffect, useState } from 'react';
  import app from '../components/firebase.config';
  
  // Create a context for authentication
  export const AuthContext = createContext(null);
  
  // Initialize Firebase authentication
  const auth = getAuth(app);
  const googleAuth = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Monitor auth state changes
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        setUser(loggedUser);
        setLoading(false);
      });
  
      // Cleanup function to unsubscribe when the component unmounts
      return () => {
        unsubscribe();
      };
    }, []);
  
    // Create a new user with email and password
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .finally(() => setLoading(false));
    };
  
    // Update user profile (name and photo)
    const updateUser = (name, photo) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          // Optionally, you can update the local user state
          setUser({
            ...auth.currentUser,
            displayName: name,
            photoURL: photo,
          });
        })
        .finally(() => setLoading(false));
    };
  
    // Login with email and password
    const loginWithEmail = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
        .finally(() => setLoading(false));
    };
  
    // Login with Google
    const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleAuth)
        .finally(() => setLoading(false));
    };
  
    // Logout the current user
    const logOut = () => {
      setLoading(true);
      return signOut(auth)
        .finally(() => setLoading(false));
    };
  
    // Auth information and functions to be shared via context
    const authInfo = {
      user,
      loading,
      createUser,
      updateUser,
      loginWithEmail,
      loginWithGoogle,
      logOut,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {loading ? <div>Loading...</div> : children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  