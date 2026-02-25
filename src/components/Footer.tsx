const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-4">
      <div className="container mx-auto text-center">
        <a href="#accueil" className="font-display text-2xl font-bold text-primary-foreground">
          Juicy <span className="text-accent">Prestige</span>
        </a>
        <p className="mt-4 text-sm text-primary-foreground/60">
          Des jus naturels d'exception, préparés avec passion.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          {["Accueil", "À propos", "Produits", "Galerie", "Contact"].map(
            (label, i) => (
              <a
                key={i}
                href={`#${["accueil", "apropos", "produits", "galerie", "contact"][i]}`}
                className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
              >
                {label}
              </a>
            )
          )}
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-6">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Juicy Prestige. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
