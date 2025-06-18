import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Sobre o Vender Tudo</h1>
      <p className={styles.description}>
        O Vender Tudo é uma plataforma criada para facilitar a compra e venda de
        produtos de forma rápida, segura e eficiente. Nosso objetivo é conectar
        vendedores e compradores, proporcionando uma experiência simples e
        transparente.
      </p>
      <section className={styles.section}>
        <h2 className={styles.subtitle}>Nossa Missão</h2>
        <p>
          Oferecer um ambiente confiável para que todos possam vender e comprar
          com facilidade, promovendo oportunidades para pequenos e grandes
          negócios.
        </p>
      </section>
    </div>
  );
};

export default About;
