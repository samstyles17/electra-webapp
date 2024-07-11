import React, { useState, useEffect } from 'react';
import { useSpring, animated, useSprings } from 'react-spring';
import { Box } from '@mui/material';

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const springs = useSprings(
    images.length,
    images.map((_, i) => ({
      opacity: i === index ? 1 : 0.5,
      transform: `translateX(${(i - index) * 250}px)`, // Adjusted
      zIndex: i === index ? 2 : 1,
      width: i === index ? '400px' : '250px', // Adjusted
      height: i === index ? '270px' : '170px', // Adjusted
      borderRadius: '15px', // Added
    }))
  );

  return (
    <Box
      sx={{
        height: '270px',
        width: '500px',
        marginLeft: '105px',
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
          }}
        />
      ))}
    </Box>
  );
};

export default Carousel;
