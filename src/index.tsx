import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { RouterProvider } from 'react-router';
import { router } from './Router';

import { UserContextProvider } from './shared/UserContext';
import { GameStatisticsProvider } from './pages/GameStatisticsContext';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzhg1uzBep79rpfGUKRBMRGWxXgKC517s",
  authDomain: "tabletop-7296c.firebaseapp.com",
  projectId: "tabletop-7296c",
  storageBucket: "tabletop-7296c.appspot.com",
  messagingSenderId: "330742935317",
  appId: "1:330742935317:web:1f133779ba3b14dee8831c",
  measurementId: "G-4B8RRRLE4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

const Root = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
    <GameStatisticsProvider>
      <RouterProvider router={router}/>
    </GameStatisticsProvider>
  </UserContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals