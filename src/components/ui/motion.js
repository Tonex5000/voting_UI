// Create this file at: components/ui/motion.js or components/ui/motion.tsx

'use client';
import React from 'react';

export const motion = {
  div: ({ children, initial, animate, transition, className, ...props }) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const getStyles = () => {
      if (!mounted) {
        return {
          ...initial,
          transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease'}`
        };
      }

      return {
        ...animate,
        transition: `all ${transition?.duration || 0.3}s ${transition?.ease || 'ease'}`
      };
    };

    return (
      <div
        className={className}
        style={{
          ...getStyles(),
          ...props.style
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
};