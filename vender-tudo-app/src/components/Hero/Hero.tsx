import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackgroundShapes from "./BackgroundShapes";
import "./Hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <BackgroundShapes />

      <div className="container">
        <div className="hero-content">
          <motion.h1
            className="hero-title animate-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            VENDER TUDO
          </motion.h1>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="tagline">Vendas de Tudo</div>
            <div className="description">
              Procuramos as <span className="highlight">melhores ofertas</span>{" "}
              todos os dias para você. Sua plataforma completa de vendas com os{" "}
              <span className="highlight">melhores preços</span>e atendimento
              especializado.
            </div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <button
                className="btn-primary"
                onClick={() => window.open("https://facebook.com", "_blank")}
              >
                Entre em Contato
              </button>
              <button
                className="btn-secondary"
                onClick={() => navigate("/sobre")}
              >
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
