import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: 'words' | 'chars' | 'lines';
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  mode = 'words',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  if (mode === 'chars') {
    const chars = text.split('');
    return (
      <div ref={ref} className={`overflow-hidden ${className}`} aria-label={text}>
        {chars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  if (mode === 'words') {
    const words = text.split(' ');
    return (
      <div ref={ref} className={className} aria-label={text}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </div>
    );
  }

  // Lines mode
  const lines = text.split('\n');
  return (
    <div ref={ref} className={className} aria-label={text}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.12,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
