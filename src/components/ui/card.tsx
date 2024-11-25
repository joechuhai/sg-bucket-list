// src/components/ui/card.tsx
import * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}