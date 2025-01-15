"use client"

import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Web Developer",
    company: "Miles",
    period: "August 2024 - November 2024",
    description:
      "Developed responsive WordPress websites with Elementor, collaborating with UI/UX designers to create visually engaging interfaces.",
    skills: ["Wordpress", "PHP", "HTML", "CSS" , "JavaScript"]
  },
  {
    title: "Software Developer",
    company: "Ministry of Labor",
    period: "January 2024 - August 2024",
    description:
      "Developed a Document Management System for the Ministry of Labor using PHP and MySQL, earning formal recognition from the Minister of Labor for my contributions.",
    skills: ["HTML", "CSS" , "JavaScript", "PHP", "MySQL"]
  },
  {
    title: "Flutter Developer (Intern)",
    company: "XperBot",
    period: "April 2024 - July 2024",
    description:
      "Developed Flutter applications utilizing the MVC architecture with Dio for API integration and Laravel as the backend.",
    skills: ["Flutter", "Laravel"]
  }
]

const Experience = () => {
  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/0 pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Professional Experience
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          My journey in software development
        </p>

        <style jsx global>{`
          .vertical-timeline::before {
            background: linear-gradient(to bottom, purple, rgba(128, 0, 128, 0.2));
            width: 3px;
            box-shadow: 0 0 15px rgba(128, 0, 128, 0.5);
          }



          .vertical-timeline-element-content {
            background: rgba(var(--card), 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(128, 0, 128, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          }

          .vertical-timeline-element-content:hover {
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }

          .vertical-timeline-element-content-arrow {
            border-right: 7px solid rgba(var(--card), 0.8);
          }

        `}</style>

        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgba(var(--card), 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(128, 0, 128, 0.2)",
                borderRadius: "var(--radius)"
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(var(--card), 0.8)"
              }}
              date={exp.period}
              iconStyle={{
                background: "white",
                border: "4px solid purple",
                borderRadius: "50%"
              }}
              icon={
                  <Briefcase className="text-purple-600 w-5 h-5" />
              }
            >
              <Card className="border-none shadow-none bg-transparent">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {exp.title}
                  </h3>
                  <h4 className="text-muted-foreground mb-4">{exp.company}</h4>
                  <p className="mb-4 text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary-foreground border border-primary/20 hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
