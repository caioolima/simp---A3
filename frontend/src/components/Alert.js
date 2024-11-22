import React from 'react';
import { FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import styles from './Home.module.css';

const Alerts = () => (
  <section className={styles.alerts}>
    <h3 className={styles.alertsTitle}>Alertas e Casos Recentes</h3>
    <div className={styles.alertCards}>
      <div className={styles.alertCard}>
        <FaShieldAlt className={styles.alertIcon} />
        <h4>Casos de Risco Recentes</h4>
        <p>Nos últimos 30 dias, 8 postes apresentaram risco de queda devido a problemas estruturais detectados pelo sistema.</p>
      </div>
      <div className={styles.alertCard}>
        <FaExclamationTriangle className={styles.alertIcon} />
        <h4>Alertas Ativos</h4>
        <p>Atualmente, temos 5 alertas ativos sobre postes com inclinação acima do limite seguro, aguardando ação corretiva.</p>
      </div>
    </div>
  </section>
);

export default Alerts;
