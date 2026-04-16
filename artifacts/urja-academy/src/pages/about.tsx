import { motion } from "framer-motion";
import { CheckCircle2, Award, TrendingUp, Users, BookOpen, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { Link } from "wouter";

const { about, stats, site } = CONTENT;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const statIcons = [Users, Target, TrendingUp, BookOpen];

const milestones = [
  { year: "2016", event: "URJA founded with a vision to democratize financial education in India." },
  { year: "2018", event: "Launched our first live trading lab, combining real-time markets with classroom learning." },
  { year: "2020", event: "Moved to hybrid online + offline model, reaching students across all 28 states." },
  { year: "2022", event: "Crossed 3,000 alumni and launched the Advanced Algo Trading programme." },
  { year: "2024", event: "5,000+ students trained. Recognized as India's top-rated trading academy." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* PAGE HERO */}
      <section className="pt-36 pb-20 bg-card/30 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p variants={fadeInUp} className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Our Story
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6">
              {about.headlinePre}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                {about.headlineHighlight}
              </span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {about.paragraphs[0]}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="text-primary mb-3">
                    <Icon className="w-8 h-8 opacity-80" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</h3>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img src={about.image} alt="Coaching Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl border border-border shadow-xl w-64 hidden md:block">
                <div className="flex gap-4 items-center mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">{about.badge.title}</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{about.badge.subtitle}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-tight">{about.badge.description}</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-1 md:order-2">
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
                What We Believe
              </motion.h2>
              {about.paragraphs.map((p, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {p}
                </motion.p>
              ))}
              <motion.div variants={fadeInUp} className="space-y-4 mt-8">
                {about.bullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">A decade of shaping India's trading community</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-10 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{m.year}</p>
                  <p className="text-foreground leading-relaxed">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be Part of the Story</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of students who have transformed their financial lives with {site.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base font-semibold hover-elevate">
                Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/programmes">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-primary/20 hover:bg-primary/10">
                View Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
