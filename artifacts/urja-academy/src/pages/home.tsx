import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, BookOpen, Award, Target, Zap, Shield, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { Link } from "wouter";

const { site, hero, stats, about, programmes, whyChoose, mentors, testimonials, faq, enroll } = CONTENT;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const whyIcons = [Shield, TrendingUp, Users];
const statIcons = [Users, Target, TrendingUp, BookOpen];

export default function Home() {
  const duplicatedTestimonials = [...testimonials.list, ...testimonials.list];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
          <img src={hero.image} alt="Trading Desk" className="w-full h-full object-cover object-center" />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                <span>{site.tagline}</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                {hero.headline}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                  {hero.headlineHighlight}
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                {hero.description}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto hover-elevate">
                    {hero.primaryCta} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/programmes">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors">
                    {hero.secondaryCta}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border/50 bg-card/50 relative z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
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

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                {about.headlinePre} <span className="text-primary">{about.headlineHighlight}</span>
              </motion.h2>
              {about.paragraphs.map((p, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {p}
                </motion.p>
              ))}
              <motion.div variants={fadeInUp} className="space-y-4">
                {about.bullets.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img src={about.image} alt="Coaching Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl border border-border shadow-xl w-64 hidden md:block">
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
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section id="programmes" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{programmes.headline}</h2>
            <p className="text-lg text-muted-foreground">{programmes.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programmes.courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="aspect-[2/1] relative overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20">
                    {course.level}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{course.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm font-medium text-muted-foreground">
                      <Play className="w-4 h-4 mr-2" /> {course.duration}
                    </div>
                    <Link href="/contact">
                      <Button variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                        Enroll <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{whyChoose.headline}</h2>
            <p className="text-lg text-muted-foreground">{whyChoose.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.features.map((feature, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section id="mentors" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{mentors.headline}</h2>
              <p className="text-lg text-muted-foreground">{mentors.description}</p>
            </div>
            <Link href="/mentors">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">View Full Team</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mentors.list.map((mentor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto rounded-xl overflow-hidden shrink-0">
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-1">{mentor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{mentor.role}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4 pb-4 border-b border-border/50">{mentor.cred}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mentor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — auto-scrolling marquee, pauses on hover */}
      <section className="py-24 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{testimonials.headline}</h2>
          <p className="text-lg text-muted-foreground">{testimonials.description}</p>
        </div>

        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex gap-6 w-max cursor-default">
            {duplicatedTestimonials.map((test, i) => (
              <div key={i} className="flex-shrink-0 w-80 p-8 rounded-2xl bg-card border border-border relative select-none">
                <div className="text-primary text-6xl font-serif absolute top-4 right-6 opacity-10 leading-none">"</div>
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic text-sm">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{test.name}</h4>
                  <p className="text-xs text-muted-foreground">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + ENROLL */}
      <section id="faq" className="py-24 bg-card/30 border-t border-border/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* FAQ */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{faq.headline}</h2>
              <Accordion type="single" collapsible className="w-full">
                {faq.list.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* ENROLL CTA */}
            <div id="enroll" className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{enroll.headline}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{enroll.description}</p>
                <ul className="space-y-3 mb-10">
                  {[
                    "Free academic counselling session",
                    "Flexible batch timings — online & offline",
                    "EMI options available",
                    "Lifetime recording access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button size="lg" className="w-full h-12 text-base font-semibold hover-elevate">
                    {enroll.ctaLabel} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  No commitment. Our counselor will guide your next steps.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
