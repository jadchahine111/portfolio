"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Search, File, FolderOpen, SettingsIcon, User, X, Minus, Maximize2, Home, Camera, RotateCcw, Instagram, Linkedin, Phone } from 'lucide-react'

function MobileUI() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const sectionRef = useRef(null)
  const audioRef = useRef(null)

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })

  const codeString = `import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ChillGuy extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/ChillGuyBackground.png'), fit: BoxFit.cover),
        ),
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'Just a chill guy with a chill portfolio',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              SizedBox(height: 20),
              Image.asset('assets/ChillGuy.webp', width: 160, height: 160, fit: BoxFit.cover),
              SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  for (var icon in [FontAwesomeIcons.instagram, FontAwesomeIcons.linkedin, FontAwesomeIcons.phone])
                    IconButton(icon: FaIcon(icon, color: Colors.white), onPressed: () {}),
                ]),]),),),);}}
`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      if (isVisible && !isMuted) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error)
        })
      } else {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [isVisible, isMuted])

  useEffect(() => {
    const handleInteraction = () => {
      setIsMuted(false)
    }

    document.addEventListener('click', handleInteraction)
    document.addEventListener('touchstart', handleInteraction)

    return () => {
      document.removeEventListener('click', handleInteraction)
      document.removeEventListener('touchstart', handleInteraction)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-[auto_400px] gap-6">
        {/* VSCode-like editor (hidden on mobile) */}
        <Card className="hidden lg:flex bg-[#1e1e1e] border-none overflow-hidden flex-col">
          {/* VSCode header */}
          <div className="flex justify-between items-center bg-[#3c3c3c] px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <div className="flex-grow text-white text-sm text-center">Visual Studio Code</div>
            </div>
          <div className="flex flex-1">
            {/* Left sidebar with tabs */}
            <div className="w-16 min-w-[64px] bg-[#252526] flex flex-col items-center py-4 border-r border-[#3c3c3c]">
              <File className="w-6 h-6 text-[#858585] mb-6" />
              <FolderOpen className="w-6 h-6 text-[#858585] mb-6" />
              <Search className="w-6 h-6 text-[#858585] mb-6" />
              <User className="w-6 h-6 text-[#858585] mt-auto mb-6" />
              <SettingsIcon className="w-6 h-6 text-[#858585]" />
            </div>
            <div className="flex-grow flex flex-col">
              {/* Top bar with open files */}
              <div className="flex bg-[#252526]  border-[#3c3c3c]">
                <div className="flex items-center px-4 py-2 bg-[#1e1e1e] text-white text-sm border-r border-[#3c3c3c]">
                  <img src="src/assets/dart.svg" alt="" className="w-4 h-4 mr-3" />
                  <span>ChillGuy.dart</span>
                  <X className="ml-2 cursor-pointer text-white w-4 h-4" />
                </div>
              </div>
              {/* Code editor */}
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  background: "#1e1e1e",
                  fontSize: "0.875rem",
                  flex: 1
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </Card>

        {/* iPhone simulator */}
        <div ref={sectionRef} className="hidden sm:block w-[400px] mx-auto">
          {/* Simulator controls */}
          <div className="lg:flex flex-col bg-[#252526] rounded-lg overflow-hidden mb-3">
            <div className="flex items-center justify-between px-4 py-2 border-b border-[#3c3c3c]">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex flex-col ml-3">
                  <span className="font-bold text-xs">iPhone 13 Pro</span>
                  <span className="text-xs">iOS 17.0</span>
                </div>
              </div>
              <div className="flex gap-5">
                <Home className="w-5 h-5" />
                <Camera className="w-5 h-5" />
                <RotateCcw className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            {/* iPhone frame */}
            <div className="rounded-[60px] bg-black p-4 shadow-xl">
              {/* Screen content */}
              <div className="rounded-[48px] overflow-hidden bg-gradient-to-br from-rose-100 to-sky-200 relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

                {/* App content */}
                <div
                  className="p-6 min-h-[650px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(src/assets/ChillGuyBackground.png)`,
                  }}
                >  
                  {/* Title */}
                  <h1 className="text-2xl font-bold text-white mb-4 text-center mt-20">
                    Just a chill guy with a chill portfolio
                  </h1>
                  {/* Image with Framer Motion */}
                  <AnimatePresence>
                    {isVisible && (
                      <motion.img
                        src="src/assets/ChillGuy.webp"
                        alt="Profile"
                        className="w-80 h-80 object-cover mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2.5 }}
                      />
                    )}
                  </AnimatePresence>
                  {/* Social Icons */}
                  <div className="flex gap-6">
                    <Instagram className="w-6 h-6 text-white cursor-pointer" />
                    <Linkedin className="w-6 h-6 text-white cursor-pointer" />
                    <Phone className="w-6 h-6 text-white cursor-pointer" />
                  </div>
                  <audio ref={audioRef} loop>
                    <source src="src/assets/ChillGuyAudio.mp3" type="audio/mp3" />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileUI

