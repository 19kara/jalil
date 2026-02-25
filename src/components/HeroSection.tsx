import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Jus naturels premium Juicy Prestige"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-accent"
        >
          100% Naturel · Pressé à froid
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight"
        >
          Le Goût Authentique
          <br />
          <span className="text-accent">de la Nature</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80 font-light"
        >
          Des jus de fruits frais, préparés avec passion à partir des meilleurs
          ingrédients naturels. Savourez la différence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#produits"
            className="rounded-full bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground hover:brightness-110 transition"
          >
            Découvrir nos jus
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary-foreground/10 transition"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
