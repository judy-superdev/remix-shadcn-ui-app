"use client"

import {NavLink} from "@remix-run/react"

import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"
import { NavClassesProps } from "~/types/nav"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

const navClasses = ({ isActive }: NavClassesProps) => {
  return cn(
    buttonVariants({ variant: "ghost" }),
    isActive
      ? "bg-muted hover:bg-muted"
      : "hover:bg-transparent hover:underline",
    "justify-start"
  );
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        
        <NavLink
          key={item.href}
          to={item.href}
          className={navClasses}
          end
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}
