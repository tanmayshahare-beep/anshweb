import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, ArrowRight, Star, CheckCircle2, Zap, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { Link } from "wouter";

const { whyChoose, stats, testimonials, site } = CONTENT;

const whyIcons = [Shield, TrendingUp, Users];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const differentiators = [
  {
    icon: Zap,
    title: "Real-World Curriculum",
    desc: "Every module is designed around actual market conditions, not textbook theory. Students trade live during sessions.",
  },
  {
    icon: Award,
    title: "SEBI-Certified Faculty",
    desc: "All mentors hold SEBI registration and have active trading accounts. They teach from daily experience.",
  },
  {
    icon: BookOpen,
    title: "Structured Learning Path",
    desc: "A clear progression from fundamentals to expert level ensures you never skip a critical concept.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    desc: "Maximum 25 students per batch. Every student gets direct mentor attention and personalized feedback.",
  },
  {
    icon: TrendingUp,
    title: "Live Market Sessions",
    desc: "We analyze markets together in real-time during trading hours — no pre-recorded simulations.",
  },
  {
    icon: Shield,
    title: "Lifetime Community",
    desc: "After graduation, you join a private alumni community with daily trade ideas, AMAs, and networking.",
  },
];

export default function WhyUs() {
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
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The URJA Difference</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{whyChoose.headline}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{whyChoose.description}</p>
          </motion.div>
        </div>
      </section>

      {/* THREE MAIN FEATURES */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whyChoose.features.map((feature, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DETAILED DIFFERENTIATORS */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground text-lg">Every decision we make is student-first.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 rounded-xl bg-card border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Numbers Don't Lie</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-primary text-primary-foreground"
              >
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL HIGHLIGHT */}
      <section className="py-16 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.list.slice(0, 3).map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border relative"
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-sm">"{test.quote}"</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Join {site.name} and see why we're India's most-trusted trading academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-14 px-8 text-base font-semibold hover-elevate">
                Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/programmes">
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold border-primary/20 hover:bg-primary/10">
                Explore Programmes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
