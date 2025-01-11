"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time updates and advanced filtering.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-platform-demo.com"
  },
  {
    title: "AI-Powered Chat Application",
    description: "Real-time chat app with AI integration for smart responses and language translation.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Python", "TensorFlow", "WebSocket"],
    githubLink: "https://github.com/yourusername/ai-chat-app",
    liveLink: "https://ai-chat-app-demo.com"
  },
  {
    title: "Task Management System",
    description: "Collaborative task management with real-time updates and advanced analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    githubLink: "https://github.com/yourusername/task-management",
    liveLink: "https://task-management-demo.com"
  },
  // Add more projects here...
]

const ProjectCard = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="p-0">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-card/30 backdrop-blur-sm p-4 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="default" size="sm" asChild>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

const Projects = () => {
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center mb-12"
        >
          Showcasing my best work and technical expertise
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
