"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "EduChain Platform",
    description: "Blockchain-based certification system for academic credentials with smart contract verification.",
    tech: ["React", "Solidity", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    stars: 142,
    forks: 38,
    views: 2847,
    status: "Production",
    color: "cyber-primary"
  },
  {
    id: 2,
    title: "AI Code Reviewer",
    description: "Machine learning powered code review assistant that detects bugs and suggests improvements.",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    stars: 98,
    forks: 23,
    views: 1654,
    status: "Beta",
    color: "cyber-accent"
  },
  {
    id: 3,
    title: "CloudSync Dashboard",
    description: "Real-time monitoring dashboard for multi-cloud infrastructure with predictive analytics.",
    tech: ["Vue.js", "Go", "Docker", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    stars: 67,
    forks: 19,
    views: 1289,
    status: "Development",
    color: "cyber-secondary"
  },
  {
    id: 4,
    title: "Quantum Simulator",
    description: "Web-based quantum computing simulator for educational purposes with interactive circuits.",
    tech: ["TypeScript", "WebGL", "Python", "Qiskit"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    stars: 234,
    forks: 52,
    views: 3421,
    status: "Research",
    color: "neon-purple"
  },
  {
    id: 5,
    title: "Neural Voice Assistant",
    description: "Advanced voice assistant with emotion recognition and contextual understanding.",
    tech: ["Python", "PyTorch", "React Native", "WebRTC"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    stars: 187,
    forks: 41,
    views: 2156,
    status: "Alpha",
    color: "neon-green"
  },
  {
    id: 6,
    title: "Cybersecurity Toolkit",
    description: "Comprehensive penetration testing toolkit with automated vulnerability scanning.",
    tech: ["Python", "Bash", "Docker", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    stars: 156,
    forks: 67,
    views: 1987,
    status: "Stable",
    color: "cyber-danger"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Production': return 'bg-green-500/20 text-green-400 border-green-500/30'
    case 'Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    case 'Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
    case 'Research': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    case 'Alpha': return 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    case 'Stable': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }
}

export function ProjectsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 glass font-cyber">
            <Github className="w-4 h-4 mr-2" />
            Open Source Projects
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="neon-text">Innovation</span> in <span className="neon-purple">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Explore our cutting-edge projects that showcase the power of collaborative development 
            and innovative thinking in computer science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="glass-hover group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{project.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 font-body text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1 text-blue-400" />
                      {project.forks}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-green-400" />
                      {project.views}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="professional" size="sm" className="flex-1 group">
                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button variant="outline-professional" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline-professional" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}