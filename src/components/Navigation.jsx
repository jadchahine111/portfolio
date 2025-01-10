"use client"

import * as React from "react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "LU Summaries",
    href: "/docs/primitives/alert-dialog",
    description:
      "Summaries from my university days (and yes I did study)"
  },
  {
    title: "Blogs",
    href: "/docs/primitives/hover-card",
    description: "Tips and tricks that you might not find on StackOverflow"
  },
  {
    title: "Pricings",
    href: "/docs/primitives/progress",
    description:
      "Affordable rates for quality work. Let's turn your ideas into reality."
  },
  {
    title: "Testimonials",
    href: "/docs/primitives/scroll-area",
    description: "Real feedbacks from real people (no John Doe here)"
  },
  {
    title: "Skills",
    href: "/docs/primitives/tooltip",
    description:
      "Programming languages, frameworks, and tools that I've worked with"
  },
  {
    title: "Contact",
    href: "/docs/primitives/tabs",
    description:
      "You can contact me through email, phone, or just slide into my DMs"
  }
]

function Navigation() {
  return (
    <div className="relative flex justify-center items-center min-h-[50px] px-2 sm:px-4 w-full">
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap justify-center gap-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm sm:text-base">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 sm:p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-2 sm:mt-4 text-base sm:text-lg font-medium">
                        jd.dev
                      </div>
                      <p className="text-xs sm:text-sm leading-tight text-muted-foreground">
                        Welcome to JD's digital playground — where I code, break things, and then fix them… usually xD
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="About Me">
                  Get to know the person behind the code
                </ListItem>
                <ListItem href="/docs/installation" title="Experience">
                  My journey from 'How to center a div' to actually centering a div
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Projects">
                  Check out the projects that got me through countless cups of coffee
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm sm:text-base">
              Discover
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm sm:text-base"
                )}
              >
                Sign In
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="absolute left-0 top-full flex justify-center w-full">
          <NavigationMenuViewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1 sm:mt-2">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

export default Navigation
