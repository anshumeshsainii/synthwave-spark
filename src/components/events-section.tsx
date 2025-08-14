"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Users, Trophy, Code2, Lightbulb, Rocket, Cpu } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "CyberHack 2025",
    description: "48-hour hackathon focused on cybersecurity solutions and ethical hacking.",
    date: "March 15-17, 2025",
    location: "Tech Hub Building",
    participants: 200,
    status: "Upcoming",
    icon: <Cpu className="w-6 h-6" />,
    color: "cyber-primary",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "AI Workshop Series",
    description: "Comprehensive machine learning and AI development workshop series.",
    date: "February 20, 2025",
    location: "Virtual + Lab 101",
    participants: 150,
    status: "Registration Open",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "cyber-accent",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Code Quest",
    description: "Competitive programming competition with challenging algorithmic problems.",
    date: "April 8, 2025",
    location: "Computer Lab Complex",
    participants: 300,
    status: "Early Bird",
    icon: <Code2 className="w-6 h-6" />,
    color: "cyber-secondary",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Innovation Summit",
    description: "Showcase of student projects and startup pitches with industry mentors.",
    date: "May 12, 2025",
    location: "Innovation Center",
    participants: 400,
    status: "Planning",
    icon: <Rocket className="w-6 h-6" />,
    color: "neon-pink",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
  }
]

export function EventsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass font-professional">
            <Calendar className="w-4 h-4 mr-2" />
            Upcoming Events
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="professional-accent">Events</span> & <span className="professional-secondary">Competitions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Join our exciting events, hackathons, and workshops designed to enhance your skills 
            and connect you with fellow tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={event.id} className="glass-hover group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className={`text-${event.color} border-${event.color}`}>
                    {event.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <div className={`text-${event.color} mr-2`}>
                      {event.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 font-body">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-cyber-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-cyber-accent" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-cyber-secondary" />
                    {event.participants} participants expected
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button variant="professional" size="sm" className="group">
                    Learn More
                    <Trophy className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    Event #{event.id}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-professional" size="lg">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}