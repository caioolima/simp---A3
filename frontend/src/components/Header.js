import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaClipboardCheck, FaBars } from 'react-icons/fa';
import styles from './Home.module.css';

const Header = ({ toggleMenu, isMobileMenuOpen }) => (
  <header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
    </div>
    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ''}`}>
      <Link to="/alertas" className={styles.navLink}>
        <FaExclamationTriangle className={styles.icon} />
        Ver Alertas
      </Link>
      <Link to="/relatar" className={styles.navLink}>
        <FaClipboardCheck className={styles.icon} />
        Relatar Problema
      </Link>
    </nav>
    <div className={styles.hamburger} onClick={toggleMenu}>
      <FaBars className={styles.hamburgerIcon} />
    </div>
  </header>
);

export default Header;
