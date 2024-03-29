import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

import './App.css';
import Header from './Header';
import Feed from './Feed';
import Login from './Login';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      
      <Header />

      {!user ? <Login /> :(
        <div className="app_body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
      
      
    
    </div>
  );
}

export default App;
