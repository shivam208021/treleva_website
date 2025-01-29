import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect/dist/core';
import TrelevaLogo from './TrelevaLogo.png';

const Home = () => {
  useEffect(() => {
    const typewriter = new Typewriter('#typewriter-text', {
      strings: ['Where Technology is driven by <span class="text-green-500">Passion!</span>'],
      autoStart: true,
      loop: true,
      html: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Box className="flex flex-col justify-center items-center h-screen">
      <img src={TrelevaLogo} alt="logo" className="max-w-full max-h-1/2 mb-8" />
      <Typography
        variant="h4"
        component="div"
        id="typewriter-text"
        className="font-quicksand font-semibold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-400"
      ></Typography>
    </Box>
  );
};

export default Home;
