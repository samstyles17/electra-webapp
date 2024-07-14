import React, { useState, useEffect } from 'react';
import { useSprings, animated } from 'react-spring';
import { Box } from '@mui/material';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const springs = useSprings(
    images.length,
    images.map((_, i) => ({
      opacity: i === index ? 1 : 0.5,
      transform: `translateX(${(i - index) * 250}px)`,
      zIndex: i === index ? 2 : 1,
      width: i === index ? '400px' : '250px', // Original dimensions for web
      height: i === index ? '270px' : '170px', // Original dimensions for web
      borderRadius: '15px',
      marginLeft: i === index ? '0px' : '-20px', // Overlap effect for mobile view
      '@media (max-width: 600px)': { // Adjust for mobile view
        width: i === index ? '90%' : '70%',
      }
    }))
  );

  return (
    <Box
      sx={{
        height: '270px',
        width: '100%', // Full width for mobile view
        position: 'relative',
        perspective: '1000px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {springs.map((props, i) => (
        <animated.div
          key={i}
          style={{
            ...props,
            position: 'absolute',
            backgroundImage: `url(${images[i]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'all 0.5s ease-in-out',
            borderRadius: '15px', // Ensure border-radius is applied on mobile view
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;
