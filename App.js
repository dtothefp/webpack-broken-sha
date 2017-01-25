import React from 'react';
import styles from './styles.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={styles.gold}>
          Helloooooo&nbsp;
          <span className={styles.gold}>I'm Still broken :-(</span>
        </h1>
      </div>
    );
  }
}
