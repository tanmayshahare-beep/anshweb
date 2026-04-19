import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CONTENT } from "@/content";
import { useToast } from "@/hooks/use-toast";

const { enroll, footer, programmes } = CONTENT;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      program: formData.get("program"),
      goal: formData.get("goal"),
    };

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      toast({
        title: "Enrollment Request Sent!",
        description: "Our counselor will call you back within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{enroll.headline}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{enroll.description}</p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT — Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-8">
                We'd love to hear from you
              </motion.h2>

              <div className="space-y-6 mb-12">
                <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{footer.contact.address}</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm">{footer.contact.phone}</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon–Sat, 9 AM – 7 PM IST</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm">{footer.contact.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">We respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex gap-5 items-start p-6 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm font-semibold text-primary mb-2">Not sure where to start?</p>
                <p className="text-sm text-muted-foreground">
                  Book a free 20-minute call with our academic counselor — no commitment, just clarity on which programme suits you best.
                </p>
              </motion.div>
            </motion.div>

            {/* RIGHT — Enroll Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground mb-8">Your request has been received. Our team will contact you shortly.</p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline">Send another request</Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-2">Enroll Now</h3>
                      <p className="text-muted-foreground mb-8 text-sm">Fill in your details and we'll call you back within 24 hours.</p>

                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <Input name="firstName" required placeholder="Arjun" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <Input name="lastName" required placeholder="Sharma" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email Address</label>
                          <Input name="email" type="email" required placeholder="arjun@example.com" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone Number</label>
                          <Input name="phone" type="tel" required placeholder="+91 98765 43210" className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Program of Interest</label>
                          <select
                            name="program"
                            required
                            defaultValue=""
                            className="flex h-10 w-full rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          >
                            <option value="" disabled>Select a program</option>
                            {programmes.courses.map((course) => (
                              <option key={course.title} value={course.title}>{course.title}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Your Goal (optional)</label>
                          <Textarea
                            name="goal"
                            placeholder="e.g. I want to trade full-time within 2 years..."
                            className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                            rows={3}
                          />
                        </div>

                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full h-12 text-base font-semibold hover-elevate">
                          {isSubmitting ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          ) : (
                            <Send className="w-4 h-4 mr-2" />
                          )}
                          {isSubmitting ? "Submitting..." : enroll.ctaLabel}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          By submitting, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

