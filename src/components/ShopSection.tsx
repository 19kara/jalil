import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { storefrontApiRequest, PRODUCTS_QUERY, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ShopSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((s) => s.addItem);
  const isCartLoading = useCartStore((s) => s.isLoading);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(PRODUCTS_QUERY, { first: 20 });
        setProducts(data?.data?.products?.edges || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success(`${product.node.title} ajouté au panier`, { position: "top-center" });
  };

  return (
    <section id="boutique" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            Boutique en ligne
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Commandez vos <span className="text-gradient">Jus Préférés</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Livraison rapide et produits toujours frais. Faites-vous plaisir !
          </p>
        </motion.div>

        <div className="mt-16">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-secondary" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">Aucun produit disponible pour le moment.</p>
              <p className="text-sm text-muted-foreground mt-2">Revenez bientôt !</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => {
                const img = product.node.images.edges[0]?.node;
                const price = product.node.priceRange.minVariantPrice;
                return (
                  <motion.div
                    key={product.node.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="group rounded-2xl bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <Link to={`/product/${product.node.handle}`}>
                      <div className="overflow-hidden aspect-square">
                        {img ? (
                          <img
                            src={img.url}
                            alt={img.altText || product.node.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full bg-muted flex items-center justify-center">
                            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-5">
                      <Link to={`/product/${product.node.handle}`}>
                        <h3 className="font-display text-lg font-semibold text-foreground hover:text-secondary transition-colors">
                          {product.node.title}
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {product.node.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-secondary">
                          {parseFloat(price.amount).toFixed(2)} {price.currencyCode}
                        </span>
                        <Button
                          size="sm"
                          className="bg-accent text-accent-foreground hover:brightness-110"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          disabled={isCartLoading}
                        >
                          {isCartLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShoppingCart className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
