import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Clock, BarChart2, Code, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { Link } from "wouter";

const { programmes } = CONTENT;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const levelColors: Record<string, string> = {
  Beginner:     "bg-green-500/10 text-green-600 border-green-500/20",
  Intermediate: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  Advanced:     "bg-orange-500/10 text-orange-600 border-orange-500/20",
  Expert:       "bg-primary/10 text-primary border-primary/20",
};

const courseDetails = [
  {
    highlights: [
      "Understand NSE, BSE, and global indices",
      "Fundamental and basic technical analysis",
      "Portfolio building for beginners",
      "Safe entry and exit strategies",
    ],
    icon: BarChart2,
  },
  {
    highlights: [
      "Candlestick patterns and chart reading",
      "Support, resistance and trend lines",
      "RSI, MACD, Bollinger Bands & more",
      "Live trade setups every session",
    ],
    icon: TrendingUp,
  },
  {
    highlights: [
      "Options pricing, greeks, and payoffs",
      "Strangles, straddles, spreads",
      "Volatility trading strategies",
      "Hedging and risk management",
    ],
    icon: BarChart2,
  },
  {
    highlights: [
      "Python for finance from scratch",
      "Backtesting trading strategies",
      "Building and deploying live algos",
      "Placement support in prop desks",
    ],
    icon: Code,
  },
];

export default function Programmes() {
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
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Our Curriculum</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{programmes.headline}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{programmes.description}</p>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMME CARDS */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {programmes.courses.map((course, i) => {
              const detail = courseDetails[i];
              const Icon = detail.icon;
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
                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] group">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${levelColors[course.level] || "bg-primary/10 text-primary border-primary/20"}`}>
                      {course.level}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm font-medium">
                      <Play className="w-4 h-4" /> {course.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{course.desc}</p>

                    <div className="space-y-3 mb-8">
                      {detail.highlights.map((h, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                          <span className="text-sm font-medium">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <Link href="/contact">
                        <Button className="hover-elevate">
                          Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which programme is right for you?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto">
            Our counselors will guide you to the perfect track based on your goals and experience.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-semibold">
              Get Free Counselling <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
