import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { firebase, firestore, storage } from './firebase-config';
import { PostContextProvider } from './context/postContext/PostContext';
import { ModalContextProvider } from './context/modalContext/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, firestore, storage }}>
    <AuthContextProvider>
      <PostContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
