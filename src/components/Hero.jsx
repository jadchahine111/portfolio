"use client"

import { useState } from "react"
import { File, Folder, ChevronRight, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const codeString = `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch portfolio projects
    async function fetchProjects() {
      const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js'];
      const featuredProjects = [
        {
          title: 'E-commerce Platform',
          tech: 'Next.js, TypeScript, Tailwind',
          description: 'Full-stack e-commerce solution with real-time updates'
        },
        {
          title: 'AI Chat Application',
          tech: 'React, OpenAI API, WebSocket',
          description: 'Real-time chat application with AI integration'
        }
      ];

      setProjects(featuredProjects);
      setIsLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Featured Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </motion.div>
  );
}`

function Hero() {
  const [email, setEmail] = useState("")

  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white rounded-full blur-2xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white rounded-full blur-2xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl opacity-20 animate-float"></div>
      </div>

      {/* Hero content */}
      <div className="relative container mx-auto px-6 pt-32 pb-16 mb-40 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Transforming ideas into
          <br />
          elegant digital experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Software engineer specializing in building innovative web
          applications with modern technologies.
        </p>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-16">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-gray-800 border-gray-700 text-white h-12 min-w-0 flex-1"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button className="bg-[#238636] hover:bg-[#2ea043] text-white h-12 px-8">
            Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-gray-700 text-white h-12 px-8 hover:bg-gray-800"
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* VS Code mockup */}
      <div className="container mx-auto px-6 -mt-32 pb-32 relative z-10">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-75 blur-2xl"></div>

          {/* VS Code window */}
          <div className="relative max-w-6xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            {/* Mac-style window header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <Circle size={12} fill="#FF5F56" stroke="none" />
                <Circle size={12} fill="#FFBD2E" stroke="none" />
                <Circle size={12} fill="#27C93F" stroke="none" />
              </div>
              <div className="ml-4 text-sm text-gray-400">
                Portfolio.tsx - Visual Studio Code
              </div>
            </div>

            {/* VS Code-style content */}
            <div className="flex bg-[#1E1E1E] text-white">
              {/* Sidebar */}
              <div className="w-64 bg-[#252526] p-4 hidden md:block">
                <div className="flex items-center mb-4 text-blue-400">
                  <Folder size={18} className="mr-2" />
                  <span className="text-sm font-medium">portfolio</span>
                </div>
                <div className="ml-4">
                  <div className="flex items-center mb-2 text-blue-400">
                    <ChevronRight size={18} className="mr-2" />
                    <Folder size={18} className="mr-2" />
                    <span className="text-sm font-medium">src</span>
                  </div>
                  <div className="ml-6 flex items-center text-blue-300">
                    <File size={18} className="mr-2" />
                    <span className="text-sm">Portfolio.tsx</span>
                  </div>
                </div>
              </div>

              {/* Code editor */}
              <div className="flex-1 p-6 font-mono text-sm overflow-auto max-h-[600px]">
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  showLineNumbers={true}
                  wrapLines={true}
                  customStyle={{
                    margin: 0,
                    padding: 0,
                    background: "transparent",
                    fontSize: "1.1rem",
                    lineHeight: "1.5"
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero
