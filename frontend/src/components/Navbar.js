import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';
import styles from './Home.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <Link to="/alertas" className={styles.navLink}>
      <FaExclamationTriangle className={styles.icon} />
      Ver Alertas
    </Link>
    <Link to="/relatar" className={styles.navLink}>
      <FaClipboardCheck className={styles.icon} />
      Relatar Novo Alerta
    </Link>
  </nav>
);

export default Navbar;
