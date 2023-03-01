import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { firebase, firestore, storage } from './firebase-config';
import { PostContextProvider } from './context/postContext/PostContext';
import { ModalContextProvider } from './context/modalContext/ModalContext';
import { ChatContextProvider } from './context/chatContext/ChatContext';
import FirebaseContext from './context/firebaseContext/firebase';


if (process.env.REACT_APP_NODE_ENV !== "development")
  console.log = () => { };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase, firestore, storage }}>
    <AuthContextProvider>
      <PostContextProvider>
        <ModalContextProvider>
          <ChatContextProvider>
            <App />
          </ChatContextProvider>
        </ModalContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
