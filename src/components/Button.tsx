import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'pointer',
    border: 'none',
  };

  const variants = {
    primary: {
      backgroundColor: '#0066ff',
      color: '#ffffff',
    },
    secondary: {
      backgroundColor: '#f1f1f0',
      color: '#111111',
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#111111',
      border: '1px solid #e5e5e5',
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      style={{ ...baseStyles, ...variants[variant] }}
      className={className}
      whileHover={{ opacity: 0.85 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </Component>
  );
}
