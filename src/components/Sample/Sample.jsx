import React from 'react';
import styles from './Sample.module.css';
import { dynamicStyles } from './Sample.styles.js';

const Sample = ({ text, fontSize }) => {

  if (typeof text !== 'string') {
    console.error("Invalid prop type: `text` should be a string.");
    return <div className={styles.errorText}>Invalid text prop provided!</div>;
  }

  const dynamicStyle = dynamicStyles(fontSize);

  return (
      <div className={styles.sampleContainer}>
        <div className={styles.sampleText} style={dynamicStyle.dynamicText}>
          CSS Module + CSS-in-JS Styled: {text}
        </div>
      </div>
  );
};

export default Sample;