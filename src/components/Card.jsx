import React from 'react'


const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-card text-card-foreground rounded-xl shadow-card border border-border p-6 ${className}`}>
      {children}
    </div>
  )
}


export default Card