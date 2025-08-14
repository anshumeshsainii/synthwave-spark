"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Code, Users, Calendar, Zap } from 'lucide-react'

const typewriterTexts = [
  "Building the Future",
  "Coding Innovation", 
  "Hacking Tomorrow",
  "Creating Solutions"
]

export function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = typewriterTexts[textIndex]
      
      if (!isDeleting) {
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typewriterTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-10 animate-hologram" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 glass-hover font-cyber">
            <Zap className="w-4 h-4 mr-2" />
            Next-Gen Tech Club
          </Badge>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl font-black mb-6 animate-fade-in">
            <span className="block mb-4">
              <span className="neon-text">CSED</span>
              <span className="text-foreground"> CLUB</span>
            </span>
            <span className="block text-3xl md:text-4xl neon-purple font-cyber">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up font-body">
            The Computer Science & Engineering Department's premier technology club. 
            Join us for <span className="text-cyber-primary font-semibold">hackathons</span>, 
            <span className="text-cyber-accent font-semibold"> workshops</span>, and 
            <span className="text-cyber-secondary font-semibold"> cutting-edge projects</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
            <Button variant="cyber" size="lg" className="group">
              Join the Club
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost-cyber" size="lg">
              Explore Events
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-hover p-6 rounded-lg text-center floating">
              <Code className="w-8 h-8 text-cyber-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-primary">500+</div>
              <div className="text-muted-foreground font-body">Active Members</div>
            </div>
            <div className="glass-hover p-6 rounded-lg text-center floating" style={{ animationDelay: '0.5s' }}>
              <Calendar className="w-8 h-8 text-cyber-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-accent">50+</div>
              <div className="text-muted-foreground font-body">Events Hosted</div>
            </div>
            <div className="glass-hover p-6 rounded-lg text-center floating" style={{ animationDelay: '1s' }}>
              <Users className="w-8 h-8 text-cyber-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyber-secondary">20+</div>
              <div className="text-muted-foreground font-body">Hackathons Won</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}