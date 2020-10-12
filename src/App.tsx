import React from 'react';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

import Item from './core/components/Item/Item';
import SignIn from './core/components/SignIn/SignIn';

firebase.initializeApp({
  apiKey: "AIzaSyBZwPuW5p1b0x0yvVYaljryKH8-jetjs38",
  authDomain: "comparing-prices.firebaseapp.com",
  databaseURL: "https://comparing-prices.firebaseio.com",
  projectId: "comparing-prices",
  storageBucket: "comparing-prices.appspot.com",
  messagingSenderId: "491130341298",
  appId: "1:491130341298:web:374617aba73265cd6a06ab",
  measurementId: "G-3HJ9GDTF1Q"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const App = function () {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        { user === null || user === undefined ? <SignIn /> : <Item />}
      </section>
    </div>
  );
}

export default App;
