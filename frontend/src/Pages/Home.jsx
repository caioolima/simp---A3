import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Features from '../components/Features';
import Alerts from '../components/Alert';
import Footer from '../components/Footer';
import styles from '../components/Home.module.css';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(prev => !prev);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <Header toggleMenu={toggleMenu} isMobileMenuOpen={isMobileMenuOpen} />
      
      <Section
        title="Tecnologia de Ponta para a Segurança Pública"
        description="O sistema de monitoramento de postes utiliza sensores avançados para monitorar a integridade dos postes de iluminação pública..."
        imageSrc="https://images.pexels.com/photos/16880204/pexels-photo-16880204/free-photo-of-homem-trabalhando-de-pe-escada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Sistema de Monitoramento"
      />
      
      <Features />
      <Alerts />
      <Footer />
    </div>
  );
}

export default Home;
