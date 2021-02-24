import React from 'react';
import styles from '../styles/components/Countdown.module.css';

export default function Coutdown() {
  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>1</span>
        </div>
      </div>
      <button type="button" className={styles.countdownButton}>
        Iniciar um ciclo
      </button>
    </div>
  );
}