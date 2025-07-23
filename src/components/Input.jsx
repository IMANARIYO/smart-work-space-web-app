import React from 'react'

const variantClasses = {
  default: "border-gray-300 focus:ring-teal-600",
  danger: "border-red-500 focus:ring-red-500",
}

const Input = ({
  label,
  name,
  type = "text",
  value = "",
  onChange,
  placeholder,
  className,
  variant = "default",
  error,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
  
        <label htmlFor={name} className="font-medium text-gray-700">
          {required && <span className="text-red-500 mr-1">*</span>}
          {label}
          {/* Optional: show (required) */}
          {required && <span className="ml-1 text-red-400 text-sm">(required)</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-2 rounded-md border-2 outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : variantClasses[variant]
        } ${className}`}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

export default Input