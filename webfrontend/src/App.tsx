import React from 'react';
import styles from './App.module.scss';
import Navbar from './Containers/Navigation/Navbars'
import Router from './Containers/Navigation/Router';

function App() {
  return (
    <div className={styles.App}>
        <Navbar />
        <div className={styles.centered}>
          <Router />
        </div>
    </div>
  );
}

export default App;
