import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Fale Conosco</h1>
      <p className={styles.description}>
        Para dúvidas, sugestões ou parcerias, entre em contato pelo nosso
        Facebook!
      </p>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.facebookButton}
      >
        Ir para o Facebook
      </a>
    </div>
  );
};

export default Contact;
