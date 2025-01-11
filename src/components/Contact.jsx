"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react'

function ContactForm() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      
<Card className="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-card/50 backdrop-blur-xl border-border">
  {/* Main Content */}
  <div className="grid lg:grid-cols-2 gap-12 p-8">
    {/* Left Side */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-12 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Get in touch
          </h2>
          <p className="text-primary-foreground/90 text-xl md:text-2xl mb-8">
            We'd love to hear from you. Fill out the form and we'll get back to you shortly.
          </p>
        </div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="self-end"
        >
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary-foreground/80"
          >
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>

    {/* Right Side - Form */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8 flex flex-col h-full"
    >
      {/* Form Fields */}
      <div className="space-y-6 flex-grow">
        <Input
          type="text"
          placeholder="Name"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-lg"
        />
        <Input
          type="email"
          placeholder="Email"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-lg"
        />
        <Input
          type="tel"
          placeholder="Phone"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-lg"
        />
        <Textarea
          placeholder="Your message"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground text-lg min-h-[150px]"
        />
      </div>

      {/* Submit Button */}
      <Button
        size="lg"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12"
      >
        SEND MESSAGE
      </Button>

      {/* Contact Information */}
      <div className="space-y-4 pt-8 border-t border-border">
        <div className="flex items-center space-x-4">
          <Mail className="w-6 h-6 text-primary" />
          <span className="text-foreground">contact@example.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-primary" />
          <span className="text-foreground">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="w-6 h-6 text-primary" />
          <span className="text-foreground">123 Main St, City, Country</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-end space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background hover:bg-accent text-foreground border-border"
        >
          <Facebook className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background hover:bg-accent text-foreground border-border"
        >
          <Twitter className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background hover:bg-accent text-foreground border-border"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
        </Button>
      </div>
    </motion.div>
  </div>
</Card>

    </div>
  )
}

export default ContactForm

