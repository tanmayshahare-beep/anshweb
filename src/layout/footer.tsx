import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { CONTENT } from "@/content";

const { site, nav, programmes, footer } = CONTENT;

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src="/logo.png" alt={site.name} className="h-[115px] w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {footer.description}
            </p>
            <div className="flex gap-4">
              <a href={footer.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={footer.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={footer.social.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={footer.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {nav.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Programmes</h4>
            <ul className="space-y-3">
              {programmes.courses.map((course) => (
                <li key={course.title}>
                  <a href="#programmes" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{footer.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{footer.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{footer.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
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
