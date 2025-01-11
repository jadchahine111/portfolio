import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function CTAWithFooter() {
  return (
    <div className="bg-background">
      <div className="relative py-24 overflow-hidden">
        {/* Wave Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6b26d9" /> {/* Primary */}
                <stop offset="50%" stopColor="#6b26d9" /> {/* Accent */}
                <stop offset="100%" stopColor="#6b26d9" /> {/* Secondary */}
              </linearGradient>
            </defs>
            {/* First Wave */}
            <path
              fill="url(#waveGradient)"
              fillOpacity="0.2"
              d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,208C672,213,768,203,864,197.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
            {/* Second Wave */}
            <path
              fill="url(#waveGradient)"
              fillOpacity="0.4"
              d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,218.7C672,245,768,267,864,240C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/80 backdrop-blur-xl border-border p-12 rounded-3xl shadow-lg">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to get started?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience the
                difference with our top-notch services.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-10 py-6"
              >
                Sign Up Now
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <footer className="bg-[#391879] text-white px-4">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row sm:space-x-8">
      {/* Left section with logo, name, and socials */}
      <div className="sm:w-1/2 mb-8 sm:mb-0">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-primary mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span className="text-2xl font-bold text-foreground">Company Name</span>
        </div>
        <p className="text-muted-foreground mb-4">Empowering your digital journey</p>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Right sections (Products and Resources next to each other) */}
      <div className="sm:w-1/2 flex space-x-8">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-500 text-center">
      <p className="text-muted-foreground">&copy; 2023 Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>



    </div>
  );
}

export default CTAWithFooter;

