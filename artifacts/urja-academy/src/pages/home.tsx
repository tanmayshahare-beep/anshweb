import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, BookOpen, Award, Target, Zap, Shield, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
          <img 
            src="/hero.png" 
            alt="Trading Desk" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" />
                <span>India's Premium Trading Academy</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Master the Markets.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">
                  Command Your Future.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                URJA empowers everyday people to become confident investors. Learn through structured, practical, expert-led training designed for real-world results.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a href="#enroll">
                  <Button size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto hover-elevate">
                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="#programmes">
                  <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold w-full sm:w-auto border-primary/20 hover:bg-primary/10 hover:text-primary transition-colors">
                    Explore Programmes
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border/50 bg-card/50 relative z-30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
            {[
              { number: "5,000+", label: "Students Trained", icon: Users },
              { number: "8+", label: "Years Experience", icon: Target },
              { number: "95%", label: "Success Rate", icon: TrendingUp },
              { number: "10+", label: "Expert Programmes", icon: BookOpen },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="text-primary mb-3">
                  <stat.icon className="w-8 h-8 opacity-80" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
                Not a Generic Coaching Center. <span className="text-primary">A Launchpad.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "URJA" means energy. We believe that with the right momentum and structured knowledge, anyone can decode the complexities of the stock market. 
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our mission is to make institutional-grade financial education accessible to Indians. We replace textbook theories with live charts, real capital, and battle-tested strategies.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  "Practical, hands-on learning environment",
                  "Mentorship from active market participants",
                  "Focus on psychology and risk management"
                ].map((item, i) => (
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
                <img src="/about.png" alt="Coaching Studio" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl border border-border shadow-xl w-64 hidden md:block">
                <div className="flex gap-4 items-center mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">SEBI</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Registered</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-tight">Learn from certified professionals with proven track records.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="programmes" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Mastery Programmes</h2>
            <p className="text-lg text-muted-foreground">From absolute basics to algorithmic automation. Choose the track that aligns with your ambition.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Stock Market Fundamentals",
                desc: "Perfect for beginners. Understand market mechanics, basic terminology, and how to start investing safely.",
                duration: "4 Weeks",
                image: "/course-1.png",
                level: "Beginner"
              },
              {
                title: "Technical Analysis Mastery",
                desc: "Read charts like a pro. Master price action, indicators, and chart patterns to time your entries and exits.",
                duration: "8 Weeks",
                image: "/course-2.png",
                level: "Intermediate"
              },
              {
                title: "Options & Derivatives",
                desc: "Leverage volatility. Learn advanced hedging strategies, greeks, and high-probability setups.",
                duration: "6 Weeks",
                image: "/course-3.png",
                level: "Advanced"
              },
              {
                title: "Advanced Algo Trading",
                desc: "Automate your edge. Build, backtest, and deploy algorithmic trading systems using Python.",
                duration: "12 Weeks",
                image: "/course-4.png",
                level: "Expert"
              }
            ].map((course, i) => (
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
                    <a href="#enroll">
                      <Button variant="ghost" className="hover:bg-primary hover:text-primary-foreground">
                        Enroll <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose URJA?</h2>
            <p className="text-lg text-muted-foreground">We don't just teach theory. We build traders.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Active Market Mentors",
                desc: "Learn from traders who are in the trenches every day, not just academicians.",
                icon: Shield
              },
              {
                title: "Live Trading Sessions",
                desc: "Apply concepts in real-time with live market hours hand-holding and analysis.",
                icon: TrendingUp
              },
              {
                title: "Lifetime Community",
                desc: "Join an elite network of alumni. Get continuous support, trade setups, and market updates.",
                icon: Users
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section id="mentors" className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet Your Mentors</h2>
              <p className="text-lg text-muted-foreground">Guided by industry veterans with decades of collective experience in Indian and global equities.</p>
            </div>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">View Full Team</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                role: "Chief Market Strategist",
                cred: "15+ Years in Equity Markets • SEBI Registered",
                image: "/mentor-1.jpg",
                bio: "Former institutional desk trader. Specializes in price action and behavioral finance."
              },
              {
                name: "Priya Desai",
                role: "Head of Derivatives",
                cred: "10+ Years Options Trader • CMT Level 3",
                image: "/mentor-2.jpg",
                bio: "Expert in volatility trading and complex options strategies. Manages a proprietary fund."
              }
            ].map((mentor, i) => (
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

      {/* TESTIMONIALS */}
      <section className="py-24 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stories of Transformation</h2>
          <p className="text-lg text-muted-foreground">Don't just take our word for it. Hear from those who took the leap.</p>
        </div>

        {/* Marquee container — fades at edges */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex gap-6 w-max cursor-default">
            {[
              {
                quote: "URJA didn't just teach me how to read charts; they taught me how to manage my mind. The risk management principles completely changed my trading journey.",
                name: "Vikram S.",
                role: "IT Professional",
                image: "/avatar-1.jpg"
              },
              {
                quote: "The Options mastery program is phenomenal. The live sessions gave me the confidence to execute complex spreads that I previously found intimidating.",
                name: "Ananya M.",
                role: "Full-time Trader",
                image: "/avatar-2.jpg"
              },
              {
                quote: "From absolute beginner to managing my family's portfolio. The structured approach and lifetime community support are worth their weight in gold.",
                name: "Karan P.",
                role: "Business Owner",
                image: "/avatar-3.jpg"
              },
              {
                quote: "The live trading sessions were an eye-opener. Watching the mentors analyze live charts while explaining their reasoning is something no book can replicate.",
                name: "Meera T.",
                role: "Bank Manager",
                image: "/avatar-1.jpg"
              },
              {
                quote: "I was skeptical at first, but the fundamentals course paid for itself within the first month. The risk-reward frameworks are simply invaluable.",
                name: "Rohit G.",
                role: "Software Engineer",
                image: "/avatar-2.jpg"
              },
              {
                quote: "The lifetime community access is genuinely priceless. Getting daily market insights and trade setups from fellow URJA alumni keeps me sharp every single day.",
                name: "Sunita R.",
                role: "Homemaker & Investor",
                image: "/avatar-3.jpg"
              },
              /* Duplicate set for seamless loop */
              {
                quote: "URJA didn't just teach me how to read charts; they taught me how to manage my mind. The risk management principles completely changed my trading journey.",
                name: "Vikram S.",
                role: "IT Professional",
                image: "/avatar-1.jpg"
              },
              {
                quote: "The Options mastery program is phenomenal. The live sessions gave me the confidence to execute complex spreads that I previously found intimidating.",
                name: "Ananya M.",
                role: "Full-time Trader",
                image: "/avatar-2.jpg"
              },
              {
                quote: "From absolute beginner to managing my family's portfolio. The structured approach and lifetime community support are worth their weight in gold.",
                name: "Karan P.",
                role: "Business Owner",
                image: "/avatar-3.jpg"
              },
              {
                quote: "The live trading sessions were an eye-opener. Watching the mentors analyze live charts while explaining their reasoning is something no book can replicate.",
                name: "Meera T.",
                role: "Bank Manager",
                image: "/avatar-1.jpg"
              },
              {
                quote: "I was skeptical at first, but the fundamentals course paid for itself within the first month. The risk-reward frameworks are simply invaluable.",
                name: "Rohit G.",
                role: "Software Engineer",
                image: "/avatar-2.jpg"
              },
              {
                quote: "The lifetime community access is genuinely priceless. Getting daily market insights and trade setups from fellow URJA alumni keeps me sharp every single day.",
                name: "Sunita R.",
                role: "Homemaker & Investor",
                image: "/avatar-3.jpg"
              },
            ].map((test, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 p-8 rounded-2xl bg-card border border-border relative select-none"
              >
                <div className="text-primary text-6xl font-serif absolute top-4 right-6 opacity-10 leading-none">"</div>
                <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic text-sm">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={test.image} alt={test.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{test.name}</h4>
                    <p className="text-xs text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & CTA SECTION */}
      <section id="faq" className="py-24 bg-card/30 border-t border-border/50 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* FAQ */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Got Questions?</h2>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "Do I need prior financial knowledge?", a: "Not for our Fundamentals program. We start from absolute scratch. For advanced courses, basic market knowledge is recommended." },
                  { q: "Are the classes online or offline?", a: "We offer both hybrid formats. You can join our live interactive online streams or attend physical batches at our Mumbai center." },
                  { q: "What is the batch size?", a: "We cap our batches at 25 students to ensure personalized attention and effective live trading sessions." },
                  { q: "Do you provide placement support?", a: "Yes. For our advanced algorithmic trading and complete mastery tracks, we assist with placements in prop desks and brokerages." },
                  { q: "Will I get access to recordings?", a: "Absolutely. All live sessions are recorded and available to you for lifetime review." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                    <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* ENROLL FORM */}
            <div id="enroll" className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Transform?</h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and our career counselor will get in touch to guide your next steps.</p>
                
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Program of Interest</label>
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" disabled selected>Select a program</option>
                      <option value="fundamentals">Stock Market Fundamentals</option>
                      <option value="technical">Technical Analysis Mastery</option>
                      <option value="options">Options & Derivatives</option>
                      <option value="algo">Advanced Algo Trading</option>
                    </select>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold hover-elevate mt-4">
                    Request Callback
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
