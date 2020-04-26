import React from 'react';

import styles from './spinner.module.css';

export const LoadingSpinner = () => {
  return (
    <div data-testid="spinner" className={styles['spinner-overlay']}>
      <div className={styles['spinner-container']} />
    </div>
  );
};
