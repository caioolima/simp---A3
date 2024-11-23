import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaExclamationTriangle, FaClipboardCheck } from 'react-icons/fa';
import styles from './styles/Home.module.css';

const Navbar = () => {
  const location = useLocation(); // Pega a localização atual da rota

  // Verifica se a rota atual é exatamente "/alertas"
  const isAlertasPage = location.pathname === '/alertas';

  return (
    <nav className={styles.nav}>
      {/* Só exibe "Ver Alertas" se não estiver na página de alertas */}
      {!isAlertasPage && (
        <Link to="/alertas" className={styles.navLink}>
          <FaExclamationTriangle className={styles.icon} />
          Ver Alertas
        </Link>
      )}

      <Link to="/relatar" className={styles.navLink}>
        <FaClipboardCheck className={styles.icon} />
        Relatar Novo Alerta
      </Link>
    </nav>
  );
};

export default Navbar;
