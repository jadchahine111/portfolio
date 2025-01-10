"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, Linkedin } from "lucide-react"

const stats = [
  { value: 1, label: "Years of experience" },
  { value: 10, label: "Projects completed" },
  { value: 95, label: "Client satisfaction" },
  { value: 8, label: "Happy clients" }
]

const CountUp = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        setCount(Math.floor(start))
        if (start >= end) {
          clearInterval(timer)
          setCount(end)
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [value, duration, isInView])

  return <span ref={ref}>{count}</span>
}

function About() {
  const [terminalContent, setTerminalContent] = useState([
    "Welcome to Jad Chahine's Portfolio Terminal!",
    "Type 'help' to see available commands.",
    ""
  ])
  const inputRef = useRef(null)
  const scrollAreaRef = useRef(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [terminalContent])

  const handleCommand = command => {
    let newContent = []

    switch (command.toLowerCase()) {
      case "help":
        newContent = [
          "Available commands:",
          "  help     - Show this help message",
          "  clear    - Clear the terminal",
          "  experience - Show my work experience",
          "  bio      - Display my personal information",
          "  contact  - Show my contact information",
          "  skills   - List my technical skills"
        ]
        break
      case "clear":
        setTerminalContent([])
        return
      case "experience":
        newContent = [
          "Work Experience:",
          "",
          "Web Developer | Miles | August 2024 - November 2024",
          "- Developed responsive Wordpress websites with elementor",
          "- Collaborated with UI/UX designers to craft visually engaging user interfaces.",
          "",
          "Software Developer | Ministry of Labor | January 2024 - August 2024",
          "- Developed a Document Management System for the Ministry of Labor using PHP and MySQL",
          "- Received formal recognition from the minister of labor for my efforts in developing the software"
        ]
        break
      case "bio":
        newContent = [
          "Personal Information:",
          "",
          "Name: Jad Chahine",
          "Profession: Software Engineer",
          "Location: Beirut, Lebanon"
        ]
        break
      case "contact":
        newContent = [
          "Contact Information:",
          "",
          "Email: jadalichahine@gmail.com",
          "Phone: +961 70 518 541",
          "LinkedIn: linkedin.com/in/jad-chahine-816360294",
          "GitHub: github.com/jadchahine111",
        ]
        break
      case "skills":
        newContent = [
          "Technical Skills:",
          "",
          "Languages: JavaScript, Java, PHP",
          "Frontend: React, HTML5, CSS3, TailwindCSS",
          "Backend: Spring Boot, Laravel, Node.js, .NET Core",
          "Databases: MongoDB, PostgreSQL, MySQL, Redis",
          "DevOps: Docker, Kubernetes",
          "Tools: Git",
          "Other: RESTful APIs, WebSockets, Microservices"
        ]
        break
      default:
        newContent = [
          `Command not recognized: ${command}`,
          "Type 'help' for available commands."
        ]
    }

    setTerminalContent(prev => [...prev, `$ ${command}`, ...newContent, ""])
  }

  return (
    <section className="relative text-white overflow-hidden px-4 py-8 sm:py-12 md:py-16">
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-0">
            <span className="font-medium mb-4 block text-accent">About Me</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Greetings, my name is {" "} 
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
                 Jad Chahine
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            I am a passionate software engineer driven by innovation and creativity. From
            building robust backend systems to crafting elegant user experiences, I
            thrive on turning ideas into reality with modern technology and design.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hover:text-white"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 hover:text-white"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>

          {/* Terminal UI */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-75 blur"></div>

            {/* Terminal window */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm text-gray-400">
                  portfolio@jadchahine:~$
                </div>
              </div>

              {/* Terminal content */}
              <ScrollArea
                className="h-[400px] md:h-[500px] p-4 font-mono text-sm text-green-400"
                ref={scrollAreaRef}
              >
                {terminalContent.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="mr-2">$</span>
                  <Input
                    type="text"
                    className="flex-1 bg-transparent border-none text-green-400 focus:ring-0"
                    placeholder="Type a command..."
                    onKeyPress={e => {
                      if (e.key === "Enter") {
                        handleCommand(e.currentTarget.value)
                        e.currentTarget.value = ""
                      }
                    }}
                    ref={inputRef}
                  />
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
                <CountUp value={stat.value} />
                {stat.value !== 95 && "+"}
                {stat.value === 95 && "%"}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
