import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import { ReadMeButtons } from '@/components/ReadMeButtons';

export const Home: FunctionComponent = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          animation: 'slide 3s ease-in-out infinite alternate',
          backgroundImage: 'linear-gradient(-60deg, #81D4FA 50%, #09f 50%)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: '-50%',
          right: '-50%',
          opacity: 0.5,
          zIndex: -3,
          '@keyframes slide': {
            '0%': { transform: 'translateX(-25%)' },
            '100%': { transform: 'translateX(25%)' }
          }
        }}
      />
      <Box
        sx={{
          animation: 'slide 4s ease-in-out infinite alternate-reverse',
          backgroundImage: 'linear-gradient(-60deg, #81D4FA 50%, #09f 50%)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: '-50%',
          right: '-50%',
          opacity: 0.5,
          zIndex: -2
        }}
      />
      <Box
        sx={{
          animation: 'slide 5s ease-in-out infinite alternate',
          backgroundImage: 'linear-gradient(-60deg, #81D4FA 50%, #09f 50%)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: '-50%',
          right: '-50%',
          opacity: 0.5,
          zIndex: -1
        }}
      />

      {/* Foreground content */}
      <Box
        sx={{
          backgroundColor: 'rgba(255,255,255,0.8)',
          padding: '10vmin',
          marginTop: '50px',
          borderRadius: '0.25em',
          boxShadow: '0 0 0.25em rgba(0,0,0,0.25)',
          zIndex: 1
        }}
      >
        <ReadMeButtons />
      </Box>
    </Box>
  );
};
