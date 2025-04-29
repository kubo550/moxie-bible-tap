import React from 'react';
import { Typography, Paper, Button, Box, IconButton, Fade } from '@mui/material';
import { VerseQuote } from '@/types';
import { getColorByEmotion } from '@/theme';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion, AnimatePresence } from 'framer-motion';

type VerseQuoteProps = {
  verseQuote: VerseQuote;
  count: number;
  index: number;
  onNextVerse: () => void;
  onPrevVerse: () => void;
  direction: 'next' | 'prev';
};

export const VerseQuoteComponent: React.FC<VerseQuoteProps> = ({
  verseQuote,
  count,
  index,
  onNextVerse,
  onPrevVerse,
  direction
}) => {
  const { emotion } = useParams();
  const color = getColorByEmotion(emotion);

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
          backgroundImage: `linear-gradient(-60deg, ${color}77 50%, ${color}99 40%)`,
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
          backgroundImage: `linear-gradient(-60deg, ${color}77 50%, ${color}99 40%)`,
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
          backgroundImage: `linear-gradient(-60deg, ${color}77 50%, ${color}99 40%)`,
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: '-50%',
          right: '-50%',
          opacity: 0.5,
          zIndex: -1
        }}
      />

      <Link to={`/emotion/${emotion}`} style={{ textDecoration: 'none' }}>
        <Button
          variant="text"
          color="inherit"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: 2,
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            },
            marginBottom: '30px'
          }}
        >
          Back to verses
        </Button>
      </Link>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={{
            enter: (dir: string) => ({
              x: dir === 'next' ? 300 : -300,
              y: -50,
              rotate: dir === 'next' ? 20 : -20,
              opacity: 0
            }),
            center: {
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1
            },
            exit: (dir: string) => ({
              x: dir === 'next' ? -300 : 300,
              y: 50,
              rotate: dir === 'next' ? -20 : 20,
              opacity: 0
            })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '16px',
            perspective: 1000 // dla efektu 3D, opcjonalnie
          }}
        >
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(15px)',
              padding: { xs: 3, md: 5 },
              borderLeft: `8px solid ${color}`,
              boxShadow: `0 10px 30px ${color}40`,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: `0 15px 35px ${color}55`
              }
            }}
          >
            {/* Twoje typografie */}
            <Typography
              variant="overline"
              display="block"
              sx={{
                textAlign: 'center',
                color: color,
                letterSpacing: 2,
                fontWeight: 500,
                opacity: 0.8,
                marginBottom: 2
              }}
            >
              {verseQuote.type?.toUpperCase() || 'VERSE'}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                whiteSpace: 'pre-line',
                textAlign: 'center',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: 'white',
                marginBottom: 3,
                letterSpacing: 0.5,
                wordSpacing: 2
              }}
            >
              {verseQuote.quote}
            </Typography>

            {verseQuote.caption && (
              <Typography
                variant="subtitle2"
                sx={{
                  textAlign: 'right',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  marginTop: 3
                }}
              >
                {verseQuote.caption}
              </Typography>
            )}
          </Paper>
        </motion.div>
      </AnimatePresence>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
          gap: 2
        }}
      >
        <IconButton
          onClick={onPrevVerse}
          disabled={index === 0}
          sx={{
            backgroundColor: index === 0 ? 'rgba(255,255,255,0.1)' : color,
            color: 'white',
            '&:hover': {
              backgroundColor: index === 0 ? 'rgba(255,255,255,0.1)' : `${color}CC`
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.3)'
            }
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.7)',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 2,
            padding: '4px 12px',
            backdropFilter: 'blur(5px)'
          }}
        >
          {index + 1} / {count}
        </Typography>
        <IconButton
          onClick={onNextVerse}
          disabled={index + 1 >= count}
          sx={{
            backgroundColor: index + 1 >= count ? 'rgba(255,255,255,0.1)' : color,
            color: 'white',
            '&:hover': {
              backgroundColor: index + 1 >= count ? 'rgba(255,255,255,0.1)' : `${color}CC`
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.3)'
            }
          }}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
