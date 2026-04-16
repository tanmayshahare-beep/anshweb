import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Twitter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { Link } from "wouter";

const { mentors, testimonials } = CONTENT;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Mentors() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pt-36 pb-20 bg-card/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Learn From The Best</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{mentors.headline}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{mentors.description}</p>
          </motion.div>
        </div>
      </section>

      {/* MENTOR CARDS — EXPANDED */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {mentors.list.map((mentor, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Photo */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto md:max-w-none group">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex gap-3">
                      <a href="#" className="w-9 h-9 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-9 h-9 bg-background/80 backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h2 className="text-4xl font-bold mb-2">{mentor.name}</h2>
                    <p className="text-primary font-semibold text-lg mb-4">{mentor.role}</p>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                      {mentor.cred}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8">{mentor.bio}</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <Star className="text-amber-400 w-5 h-5 fill-current shrink-0" />
                        <span className="font-medium text-sm">Actively trading in Indian equity markets</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="text-amber-400 w-5 h-5 fill-current shrink-0" />
                        <span className="font-medium text-sm">Mentored 1,000+ students personally</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Star className="text-amber-400 w-5 h-5 fill-current shrink-0" />
                        <span className="font-medium text-sm">Conducts weekly live market analysis sessions</span>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="hover-elevate">
                        Learn Under {mentor.name.split(" ")[0]} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Say About Our Mentors</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.list.slice(3, 5).map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{test.quote}"</p>
                <div>
                  <h4 className="font-bold text-sm">{test.name}</h4>
                  <p className="text-xs text-muted-foreground">{test.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to learn from the best?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Get direct access to our mentors and transform your trading journey.
          </p>
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-base font-semibold hover-elevate">
              Book Your Seat <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
