import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import reportWebVitals from './reportWebVitals';
import { firebase, firestore } from './firebase-config';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { PostContextProvider } from './context/postContext/PostContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, firestore }}>
    <AuthContextProvider>
      <PostContextProvider>

        <App />
      </PostContextProvider>

    </AuthContextProvider>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
