import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Amis savourant des jus naturels" },
  { src: gallery2, alt: "Collection de jus colorés" },
  { src: gallery3, alt: "Fruits frais sélectionnés" },
  { src: gallery4, alt: "Comptoir de jus premium" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="section-padding bg-brand-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            En images
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Notre <span className="text-gradient">Galerie</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
