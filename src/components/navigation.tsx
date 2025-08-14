"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Menu, X, Home, Calendar, Users, Code, Trophy, MessageCircle } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { name: 'Events', href: '#events', icon: <Calendar className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
  { name: 'Team', href: '#team', icon: <Users className="w-4 h-4" /> },
  { name: 'Achievements', href: '#achievements', icon: <Trophy className="w-4 h-4" /> },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="font-cyber text-xl font-bold neon-text">CSED</span>
            <Badge variant="outline" className="hidden sm:inline-flex font-cyber text-xs">
              v2.0
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-cyber-primary transition-colors duration-300 font-body"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost-cyber" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="cyber" size="sm">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-cyber-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-4 p-6 animate-fade-in">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-cyber-primary transition-colors duration-300 py-2 font-body"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost-cyber" size="sm" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
                <Button variant="cyber" size="sm" className="w-full">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}