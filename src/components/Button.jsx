import React from 'react'

const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover focus:ring-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground focus:ring-primary",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}


export default Button