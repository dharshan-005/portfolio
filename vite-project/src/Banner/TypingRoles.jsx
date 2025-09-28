import React, { useState, useEffect } from 'react';
import styles from './banner.module.css';

const roles = [
  "FullStack Developer.",
  "Photographer.",
  "UI/UX Designer."
];

function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let timer;
    if (!isDeleting && charIndex < roles[roleIndex].length) {
      timer = setTimeout(() => {
        setDisplayed(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === roles[roleIndex].length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayed(roles[roleIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setRoleIndex((roleIndex + 1) % roles.length);
        setIsDeleting(false);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [charIndex, roleIndex, isDeleting]);

  return (
    <div id={styles.typing}>
      <p>
        {displayed}
        <span className={styles.cursor}></span>
      </p>
    </div>
  );
}

export default TypingRoles;