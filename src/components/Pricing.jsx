"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const pricingPlans = {
  websites: [
    {
      title: "Starter",
      description: "Perfect for small businesses and personal sites",
      price: "$999",
      features: [
        "5 pages",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form",
        "1 month of support"
      ],
    },
    {
      title: "Professional",
      description: "Ideal for growing businesses and e-commerce",
      price: "$2,499",
      features: [
        "Up to 10 pages",
        "E-commerce functionality",
        "Advanced SEO package",
        "Custom animations",
        "3 months of support"
      ],
    },
    {
      title: "Enterprise",
      description: "Tailored solutions for large-scale projects",
      price: "Custom",
      features: [
        "Unlimited pages",
        "Custom features development",
        "Performance optimization",
        "Multi-language support",
        "12 months of support"
      ],
    },
  ],
  fullstack: [
    {
      title: "Startup",
      description: "Essential features for new projects",
      price: "$4,999",
      features: [
        "React frontend",
        "Node.js backend",
        "Basic database integration",
        "User authentication",
        "3 months of support"
      ],
    },
    {
      title: "Growth",
      description: "Advanced features for scaling businesses",
      price: "$9,999",
      features: [
        "Complex React components",
        "RESTful API development",
        "Advanced database architecture",
        "OAuth integration",
        "6 months of support"
      ],
    },
    {
      title: "Enterprise",
      description: "Comprehensive solutions for large organizations",
      price: "Custom",
      features: [
        "Microservices architecture",
        "Real-time data processing",
        "Scalable cloud infrastructure",
        "Custom integrations",
        "12 months of support"
      ],
    },
  ],
  mobile: [
    {
      title: "Essential",
      description: "Core features for your mobile app",
      price: "$5,999",
      features: [
        "iOS and Android versions",
        "Basic UI/UX design",
        "Core functionality",
        "Push notifications",
        "3 months of support"
      ],
    },
    {
      title: "Advanced",
      description: "Feature-rich app for enhanced user experience",
      price: "$12,999",
      features: [
        "Custom animations",
        "Offline mode",
        "Social media integration",
        "In-app purchases",
        "6 months of support"
      ],
    },
    {
      title: "Premium",
      description: "Cutting-edge app with advanced technologies",
      price: "Custom",
      features: [
        "AR/VR features",
        "AI-powered functionalities",
        "Cross-platform sync",
        "Analytics dashboard",
        "12 months of support"
      ],
    },
  ],
}

const PricingCard = ({ plan }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
      <CardDescription>{plan.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-4xl font-bold mb-6">{plan.price}</p>
      <ul className="space-y-2">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Get Started</Button>
    </CardFooter>
  </Card>
)

const PricingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br  dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Pricing Plans
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
        Choose the perfect plan for your project
        </p>
        </motion.div>

        <Tabs defaultValue="websites" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="websites">Websites</TabsTrigger>
            <TabsTrigger value="fullstack">Full-Stack Apps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
          </TabsList>
          {Object.entries(pricingPlans).map(([key, plans]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.title}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PricingCard plan={plan} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default PricingSection

