import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/content";

const { site, nav } = CONTENT;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 rounded-md text-primary-foreground group-hover:bg-primary/90 transition-colors">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              {site.logoText}
              <span className="text-muted-foreground font-medium text-sm ml-2 hidden sm:inline-block">
                {site.logoSubtitle}
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {nav.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a href="#enroll">
              <Button size="sm" className="font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
                {nav.ctaLabel}
              </Button>
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-lg">
          {nav.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#enroll" onClick={() => setMobileMenuOpen(false)} className="mt-2">
            <Button className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              {nav.ctaLabel}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
