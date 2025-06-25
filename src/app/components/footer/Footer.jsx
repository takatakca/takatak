import React from 'react'
import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={`text-center p-6 text-white text-sm ${styles.gradient}`}>
      &copy; {new Date().getFullYear()} TAKATAK. All rights reserved.
    </footer>
  )
}

export default Footer