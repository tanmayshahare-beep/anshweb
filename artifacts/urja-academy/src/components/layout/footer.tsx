import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-md text-primary-foreground">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                URJA
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering everyday people to master the stock market through structured, practical, and expert-led training. Transform your financial future with us.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programmes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Programmes</a></li>
              <li><a href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Choose URJA</a></li>
              <li><a href="#mentors" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentors</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Programmes</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Stock Market Fundamentals</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technical Analysis Mastery</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Options & Derivatives</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Futures Trading</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Advanced Algo Trading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  101, URJA Tower, Financial District, Mumbai, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">hello@urjatraining.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} URJA Training Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
