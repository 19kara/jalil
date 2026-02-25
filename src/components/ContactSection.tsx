import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Le message est requis").max(2000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Erreur",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/33600000000?text=${encodeURIComponent("Bonjour Juicy Prestige, je souhaite en savoir plus sur vos produits.")}`;

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold">
            Parlons ensemble
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-foreground">
            Contactez-<span className="text-gradient">nous</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Votre nom"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Votre message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:brightness-110 transition"
            >
              Envoyer le message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">Adresse</h4>
                <p className="text-muted-foreground">123 Avenue des Fruits, 75001 Paris, France</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
                <Phone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">Téléphone</h4>
                <p className="text-muted-foreground">+33 6 00 00 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">contact@juicyprestige.fr</p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[hsl(142,70%,40%)] px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Discuter sur WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
