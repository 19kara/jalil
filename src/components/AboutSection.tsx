import { motion } from "framer-motion";
import { Leaf, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description:
      "Aucun conservateur, colorant ou sucre ajouté. Nos jus sont purs et authentiques.",
  },
  {
    icon: Heart,
    title: "Fait avec Passion",
    description:
      "Chaque bouteille est préparée avec soin pour vous offrir le meilleur de la nature.",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description:
      "Des fruits sélectionnés avec rigueur auprès de producteurs locaux de confiance.",
  },
];

const AboutSection = () => {
  return (
    <section id="apropos" className="section-padding bg-brand-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            Notre histoire
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            À propos de <span className="text-gradient">Juicy Prestige</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Née d'une passion pour les saveurs authentiques, Juicy Prestige
            s'engage à vous offrir des jus naturels d'exception. Nous
            sélectionnons les meilleurs fruits pour créer des recettes uniques
            qui allient plaisir et bien-être.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl bg-card p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                <value.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
