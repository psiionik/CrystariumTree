import React from 'react';
import styles from './App.module.scss';
import Navbar from './Containers/Navigation/Navbars'
import Tictac from './Containers/TicTacToe/Tictac'

function App() {
  return (
    <div className={styles.App}>
        <Navbar />
        <div className={styles.centered}>
          <Tictac />
        </div>
    </div>
  );
}

export default App;
