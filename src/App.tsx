import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Star, ChevronRight, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const reviews = [
  {
    text: "Najlepszy sklep zoologiczny z pasją w całej Polsce – z czystym sumieniem polecam i zachęcam!",
    author: "Mirage Dee",
    rating: 5
  },
  {
    text: "Najlepszy sklep dla prawdziwych pasjonatów. Profesjonalne podejście do klienta, fachowa porada. Bardzo duży wybór towaru, również tego o który ciężko na szczecińskim rynku.",
    author: "Beata Bem",
    rating: 5
  },
  {
    text: "Miła oraz fachowa obsługa, ogromna wiedza dotycząca egzotycznych zwierząt i nie tylko. Zwierzęta w sklepie trzymane w bardzo dobrych warunkach.",
    author: "Łukasz P.",
    rating: 5
  }
];

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="font-mono text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="py-14 px-8 flex flex-col items-center justify-center text-center group">
      <span className="font-serif text-5xl lg:text-6xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">{value}</span>
      <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">{label}</span>
    </div>
  );
}

function ReviewCard({ text, author, rating }: { text: string; author: string; rating: number }) {
  return (
    <Card className="rounded-none border border-border bg-card/50 hover:bg-card transition-all duration-500">
      <CardContent className="p-8 lg:p-10">
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" strokeWidth={0} />
          ))}
        </div>
        <p className="text-muted-foreground font-light leading-relaxed mb-8 italic text-sm lg:text-base">"{text}"</p>
        <div className="font-mono text-xs tracking-wider uppercase text-foreground/60">{author}</div>
      </CardContent>
    </Card>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileOpen);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-foreground">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a href="#" className="font-mono text-sm tracking-[0.15em] uppercase font-bold text-foreground hover:text-primary transition-colors">
            ZooPasja
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <NavLink href="#oferta">Oferta</NavLink>
            <NavLink href="#opinie">Opinie</NavLink>
            <NavLink href="#ekspertyza">Ekspertyza</NavLink>
            <NavLink href="#kontakt">Kontakt</NavLink>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-none border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs tracking-widest uppercase h-10 px-6 transition-all duration-300"
              asChild
            >
              <a href="tel:+48531590525">Zadzwoń</a>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <NavLink href="#oferta" onClick={closeMobile}>Oferta</NavLink>
                <NavLink href="#opinie" onClick={closeMobile}>Opinie</NavLink>
                <NavLink href="#ekspertyza" onClick={closeMobile}>Ekspertyza</NavLink>
                <NavLink href="#kontakt" onClick={closeMobile}>Kontakt</NavLink>
                <Button
                  variant="outline"
                  className="rounded-none border-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs tracking-widest uppercase h-12 w-full transition-all duration-300 mt-2"
                  asChild
                >
                  <a href="tel:+48531590525">Zadzwoń +48 531 590 525</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="min-h-[100dvh] pt-20 flex flex-col lg:flex-row border-b border-border">
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 py-20 lg:py-0 border-b lg:border-b-0 lg:border-r border-border">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-muted-foreground/30"></span>
              Szczecin
            </div>
            <h1 className="font-serif text-6xl lg:text-[7rem] leading-[0.95] text-foreground mb-8">
              Natura w<br />
              <span className="italic font-light text-foreground/90">samym sercu</span><br />
              Szczecina
            </h1>
            <p className="text-muted-foreground text-lg max-w-md font-light leading-relaxed mb-12">
              Specjalistyczny sklep zoologiczny. Terrarystyka, zwierzęta egzotyczne, karmy i akcesoria w jednym miejscu.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#oferta"
                className="inline-flex items-center gap-4 font-mono text-sm tracking-[0.15em] uppercase text-foreground group hover:text-primary transition-colors"
              >
                Poznaj naszą ofertę
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                +48 531 590 525
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[50vh] lg:min-h-full bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10"></div>
          <img
            src="/chameleon.png"
            alt="Kameleon – egzotyczne zwierzę w ZooPasja"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          <StatCard value="4.7" label="Ocena Google ★" />
          <StatCard value="497" label="Opinii klientów" />
          <StatCard value="Od lat" label="Na lokalnym rynku" />
        </div>
      </section>

      {/* About / Philosophy */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <div>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6">O nas</div>
            <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-8 italic">
              Pasja od lat
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                ZooPasja to sklep zoologiczny w Szczecinie przy ul. Świętego Marcina 2.
                Oferujemy szeroki wybór produktów dla zwierząt domowych, a także asortyment
                terrarystyczny i egzotyczny – terraria, wyposażenie, aranżacje zbiorników,
                karmy, akcesoria oraz żywe pożywienie dla gadów.
              </p>
              <p className="text-muted-foreground font-light text-lg leading-relaxed">
                Specjalizujemy się w terrarystyce – pomożemy dobrać odpowiednie terrarium,
                oświetlenie, system grzewczy i dekoracje. Stawiamy na rzetelną wiedzę
                i indywidualne podejście do każdego klienta.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] overflow-hidden border border-border">
            <img
              src="/wejscie.jpg"
              alt="Wejście do sklepu ZooPasja w Szczecinie"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Offerings */}
      <section id="oferta" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-5xl lg:text-7xl italic text-foreground border-b border-border pb-12">Nasza oferta</h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {[
            {
              id: "01",
              title: "Zwierzęta egzotyczne",
              desc: "Gady, płazy i inne gatunki egzotyczne. Wszystkie osobniki pochodzą z zaufanych źródeł, a każdemu zakupowi towarzyszy fachowa instrukcja opieki."
            },
            {
              id: "02",
              title: "Terraria i wyposażenie",
              desc: "Pełne wyposażenie terrariów – oświetlenie UVB, maty grzewcze, termoregulatory, podłoża, elementy aranżacji i wystroju zbiorników."
            },
            {
              id: "03",
              title: "Karmy i akcesoria",
              desc: "Karmy dla zwierząt domowych, żywe pożywienie dla gadów oraz szeroki wybór akcesoriów dla psów, kotów, gryzoni i zwierząt egzotycznych."
            },
            {
              id: "04",
              title: "Fachowe doradztwo",
              desc: "Wiedza i doświadczenie w zakresie terrarystyki – doradzamy przy wyborze gatunku, kompletowaniu zbiornika i codziennej pielęgnacji."
            }
          ].map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="group cursor-default">
              <Card className="rounded-none border border-border bg-card/50 hover:bg-card hover:border-border/80 transition-all duration-500 h-full">
                <CardContent className="p-8 lg:p-10">
                  <div className="font-mono text-sm text-primary mb-8">{item.id}</div>
                  <h3 className="font-serif text-3xl text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Image strip */}
      <section className="w-full h-[50vh] lg:h-[60vh] relative border-y border-border overflow-hidden">
        <img
          src="/store-interior.png"
          alt="Wnętrze sklepu ZooPasja w Szczecinie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/30"></div>
      </section>

      {/* Google Reviews */}
      <section id="opinie" className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-12">
            <div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6">Google Reviews</div>
              <h2 className="font-serif text-5xl lg:text-7xl italic text-foreground">
                Co mówią klienci
              </h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" strokeWidth={0} />
                ))}
              </div>
              <span className="font-mono text-sm text-foreground">4.7 / 5</span>
              <span className="font-mono text-xs text-muted-foreground">(497 opinii)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((review, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Expertise */}
      <section id="ekspertyza" className="bg-card border-b border-border">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          <div className="flex-1 relative min-h-[50vh] lg:min-h-full overflow-hidden">
            <img
              src="/terrarium-hotel.png"
              alt="Terrarium – aranżacja dla zwierząt egzotycznych"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
          </div>
          <div className="flex-1 flex flex-col justify-center px-6 lg:px-20 py-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6">Ekspertyza</div>
              <h2 className="font-serif text-5xl lg:text-6xl text-foreground mb-12">Wiedza, na której możesz polegać</h2>
              <p className="text-muted-foreground font-light text-lg mb-12 leading-relaxed max-w-xl">
                ZooPasja to przede wszystkim wiedza i doświadczenie w terrarystyce.
                Doradzamy w doborze gatunków, kompletowaniu zbiorników i codziennej
                pielęgnacji – od pierwszego zakupu po zaawansowane aranżacje.
              </p>
              <ul className="space-y-6 mb-16 border-l border-border pl-6 max-w-xl">
                <li>
                  <h4 className="font-serif text-xl text-foreground mb-2">Zwierzęta egzotyczne</h4>
                  <p className="text-muted-foreground text-sm font-light">Gady, płazy i inne gatunki egzotyczne – każda decyzja konsultowana z doświadczonym opiekunem.</p>
                </li>
                <li>
                  <h4 className="font-serif text-xl text-foreground mb-2">Terraria i aranżacje</h4>
                  <p className="text-muted-foreground text-sm font-light">Dobór oświetlenia, ogrzewania, podłoża i dekoracji – krok po kroku, od zera do gotowego zbiornika.</p>
                </li>
                <li>
                  <h4 className="font-serif text-xl text-foreground mb-2">Pełen asortyment</h4>
                  <p className="text-muted-foreground text-sm font-light">Karmy, akcesoria, żywe pożywienie dla gadów i wszystko, czego potrzebują zwierzęta domowe i egzotyczne.</p>
                </li>
              </ul>
              <Button
                className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs tracking-widest uppercase h-14 px-8"
                asChild
              >
                <a href="tel:+48531590525">Umów się na konsultację</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 lg:mb-20"
        >
          <div className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6">Galeria</div>
          <h2 className="font-serif text-5xl lg:text-7xl italic text-foreground border-b border-border pb-12">
            Zajrzyj do środka
          </h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
        >
          {["/unnamed1.jpg","/unnamed2.jpg","/unnamed.jpg","/unnamed3.jpg","/unnamed4.jpg","/unnamed5.jpg"].map((src, i) => (
            <motion.div key={i} variants={fadeInUp} className="relative aspect-square overflow-hidden border border-border bg-card">
              <img
                src={src}
                alt={`ZooPasja – zdjęcie ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="pt-24 lg:pt-32 pb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-6">Kontakt</div>
            <h2 className="font-serif text-5xl italic text-foreground mb-16">Odwiedź nas</h2>

            <div className="space-y-10">
              <div className="border-b border-border/50 pb-10">
                <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Adres
                </div>
                <p className="font-serif text-2xl text-foreground mb-1">ul. Świętego Marcina 2</p>
                <p className="text-muted-foreground font-light">71-544 Szczecin</p>
                <a
                  href="https://maps.google.com/?q=ZooPasja+ul.+%C5%9Awi%C4%99tego+Marcina+2+Szczecin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  Wyznacz trasę
                  <ChevronRight className="w-3 h-3" strokeWidth={1.5} />
                </a>
              </div>

              <div className="border-b border-border/50 pb-10">
                <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Godziny otwarcia
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Poniedziałek – Piątek</span>
                    <span className="font-mono text-foreground">11:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Sobota</span>
                    <span className="font-mono text-foreground">10:00 – 15:00</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-muted-foreground">Niedziela</span>
                    <span className="font-mono text-muted-foreground">Nieczynne</span>
                  </div>
                  <p className="text-xs text-muted-foreground/60 italic pt-2">Godziny warto potwierdzić telefonicznie</p>
                </div>
              </div>

              <div>
                <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Telefon
                </div>
                <a href="tel:+48531590525" className="font-serif text-3xl text-foreground hover:text-primary transition-colors block">
                  +48 531 590 525
                </a>
                <a href="tel:+48695935021" className="font-serif text-xl text-muted-foreground hover:text-primary transition-colors block mt-2">
                  +48 695 935 021
                </a>
              </div>


            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="h-[500px] lg:h-auto border border-border overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.4610486847846!2d14.5553043!3d53.44472089999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa096f5b371f97%3A0xa11a1793f1e3fbbf!2sZooPasja!5e0!3m2!1spl!2spl!4v1718000000000!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – lokalizacja ZooPasja w Szczecinie"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
              <div>
                <div className="font-mono text-sm tracking-[0.15em] uppercase font-bold text-foreground mb-6">ZooPasja</div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Specjalistyczny sklep zoologiczny w Szczecinie. Gady, płazy, gryzonie, terrarystyka i akwarystyka.
                </p>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">Dane firmy</div>
                <div className="space-y-2 text-sm">
                  <p className="text-foreground">ZooPasja Katarzyna Skubisz</p>
                  <p className="text-muted-foreground">ul. Świętego Marcina 2, 71-544 Szczecin</p>
                  <p className="text-muted-foreground">NIP: 851-287-47-81</p>
                  <p className="text-muted-foreground">REGON: 321212021</p>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6">Kontakt</div>
                <div className="space-y-3 text-sm">
                  <a href="tel:+48531590525" className="block text-foreground hover:text-primary transition-colors">+48 531 590 525</a>
                  <a href="tel:+48695935021" className="block text-muted-foreground hover:text-primary transition-colors">+48 695 935 021</a>
                  <div className="text-muted-foreground">Pon–Pt: 11:00–19:00</div>
                  <div className="text-muted-foreground">Sob: 10:00–15:00</div>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
                © {new Date().getFullYear()} ZooPasja Katarzyna Skubisz
              </span>
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground/50">
                Wszelkie prawa zastrzeżone
              </span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
