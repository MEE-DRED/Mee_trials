import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-[#b58226] hover:shadow-premium-sm',
    secondary: 'border border-primary/20 bg-white text-primary hover:border-primary/40 hover:shadow-premium-sm',
    outline: 'border border-primary/20 text-primary hover:bg-primary/5',
    ghost: 'text-primary hover:bg-primary/5',
    link: 'text-accent hover:text-[#b58226] underline-offset-4 hover:underline'
  };
  const sizeClasses = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-sm',
    large: 'px-6 py-3.5 text-base'
  };

  const classes = [
    baseClasses,
    variantClasses[variant] || variantClasses.primary,
    sizeClasses[size] || sizeClasses.medium,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
