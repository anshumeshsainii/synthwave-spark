"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: '#' },
  { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: '#' },
]

const quickLinks = [
  { name: 'Events', href: '#events' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Blog', href: '#blog' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
]

const upcomingEvents = [
  { name: 'CyberHack 2025', date: 'Mar 15' },
  { name: 'AI Workshop', date: 'Feb 20' },
  { name: 'Code Quest', date: 'Apr 8' },
]

export function Footer() {
  return (
    <footer className="relative bg-background/50 backdrop-blur-md border-t border-glass-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <div>
                <h3 className="font-cyber text-xl font-bold neon-text">CSED CLUB</h3>
                <Badge variant="outline" className="text-xs">Est. 2020</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 font-body">
              Empowering the next generation of computer scientists and engineers through 
              innovation, collaboration, and cutting-edge technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 glass-hover rounded-lg flex items-center justify-center text-muted-foreground hover:text-cyber-primary transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cyber-primary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-cyber-primary transition-colors duration-300 font-body flex items-center"
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cyber-accent">Upcoming Events</h4>
            <ul className="space-y-3">
              {upcomingEvents.map((event) => (
                <li key={event.name} className="glass p-3 rounded-lg">
                  <div className="font-body font-medium text-sm">{event.name}</div>
                  <div className="text-cyber-secondary text-xs">{event.date}</div>
                </li>
              ))}
            </ul>
            <Button variant="ghost-cyber" size="sm" className="mt-4 w-full">
              View All Events
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-cyber-secondary">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyber-primary mt-0.5" />
                <div className="font-body text-sm text-muted-foreground">
                  Computer Science Department<br />
                  Engineering Building, Room 301<br />
                  University Campus
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyber-accent" />
                <a
                  href="mailto:csedclub@university.edu"
                  className="font-body text-sm text-muted-foreground hover:text-cyber-accent transition-colors"
                >
                  csedclub@university.edu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyber-secondary" />
                <span className="font-body text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
            </div>
            <Button variant="cyber" size="sm" className="mt-4 w-full">
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-glass-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm font-body mb-4 md:mb-0">
            © 2025 CSED Club. All rights reserved. Built with 💙 by our amazing team.
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="font-cyber">
              Next-Gen Website
            </Badge>
            <div className="text-xs text-muted-foreground">
              v2.0.1 • Built with React & ❤️
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}