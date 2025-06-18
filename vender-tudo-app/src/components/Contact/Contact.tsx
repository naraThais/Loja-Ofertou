import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada!");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className={styles.contactSectionBg}>
      <h1 className={styles.title}>
        Entre em <span className={styles.gradientText}>Contato</span>
      </h1>
      <p className={styles.subtitle}>
        Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
        transformar suas ideias em realidade.
      </p>
      <div className={styles.contactGrid}>
        <div className={styles.infoSide}>
          <h2 className={styles.infoTitle}>Vamos trabalhar juntos!</h2>
          <p className={styles.infoDesc}>
            Estou sempre aberto a discutir novos projetos, oportunidades
            criativas ou parcerias. Entre em contato e vamos criar algo incrível
            juntos.
          </p>
          <div className={styles.infoBox}>
            <div>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoValue}>contato@seudominio.com</div>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div>
              <div className={styles.infoLabel}>Telefone</div>
              <div className={styles.infoValue}>+55 (11) 99999-9999</div>
            </div>
          </div>
          <div className={styles.infoBox}>
            <div>
              <div className={styles.infoLabel}>Localização</div>
              <div className={styles.infoValue}>São Paulo, SP - Brasil</div>
            </div>
          </div>
          <div className={styles.freelanceBox}>
            <strong>Disponível para freelances</strong>
            <p>
              Atualmente aceitando novos projetos e colaborações. Vamos
              conversar sobre seu próximo projeto!
            </p>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Seu nome completo"
                value={form.nome}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="assunto">Assunto *</label>
            <input
              type="text"
              name="assunto"
              id="assunto"
              placeholder="Assunto da mensagem"
              value={form.assunto}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">Mensagem *</label>
            <textarea
              name="mensagem"
              id="mensagem"
              placeholder="Conte-me sobre seu projeto..."
              value={form.mensagem}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.sendButton}>
            <span className={styles.sendIcon}></span> Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
