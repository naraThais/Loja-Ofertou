import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de envio de email
    alert("Mensagem enviada!");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Fale Conosco</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </label>
        <button type="submit" className={styles.sendButton}>
          Enviar Email
        </button>
      </form>
      <p className={styles.description}>
        Ou entre em contato pelo nosso Facebook!
      </p>
      <a
        href="https://www.facebook.com/profile.php?id=61577401293092"
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
