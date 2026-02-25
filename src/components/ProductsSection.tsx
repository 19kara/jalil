import { motion } from "framer-motion";
import juiceOrange from "@/assets/juice-orange.jpg";
import juiceGreen from "@/assets/juice-green.jpg";
import juiceTropical from "@/assets/juice-tropical.jpg";
import juiceBerry from "@/assets/juice-berry.jpg";

const products = [
  {
    name: "Orange Vitalité",
    description:
      "Un concentré d'énergie pure. Riche en vitamine C, ce jus d'orange pressé à froid vous accompagne chaque matin.",
    benefits: "Vitamine C · Énergie · Immunité",
    image: juiceOrange,
  },
  {
    name: "Détox Verte",
    description:
      "Un mélange revitalisant de concombre, menthe et citron vert pour une détox naturelle et rafraîchissante.",
    benefits: "Détox · Hydratation · Fraîcheur",
    image: juiceGreen,
  },
  {
    name: "Tropical Soleil",
    description:
      "Mangue, ananas et fruit de la passion se mêlent pour un voyage exotique plein de douceur.",
    benefits: "Antioxydants · Vitamines · Exotisme",
    image: juiceTropical,
  },
  {
    name: "Fruits Rouges Passion",
    description:
      "Fraise, framboise et grenade réunies dans une explosion de saveurs. Un plaisir gourmand et sain.",
    benefits: "Antioxydants · Fer · Saveur",
    image: juiceBerry,
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            Nos créations
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Nos <span className="text-gradient">Jus Naturels</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Chaque recette est pensée pour allier goût exceptionnel et bienfaits
            pour la santé.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-secondary">
                  {product.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
