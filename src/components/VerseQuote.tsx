import React from 'react';
import { Typography, Paper, Button, Box, IconButton, Fade } from '@mui/material';
import { VerseQuote } from '@/types';
import { getColorByEmotion } from '@/theme';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type VerseQuoteProps = {
  verseQuote: VerseQuote;
  count: number;
  index: number;
  onNextVerse: () => void;
  onPrevVerse: () => void;
};

export const VerseQuoteComponent: React.FC<VerseQuoteProps> = ({
  verseQuote,
  count,
  index,
  onNextVerse,
  onPrevVerse
}) => {
  const { emotion } = useParams();
  const color = getColorByEmotion(emotion);

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(135deg, ${color}33, #000000, #000000)`,
        backgroundSize: '400% 400%',
        animation: 'gradientBackground 15s ease infinite',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        position: 'relative',
        '@keyframes gradientBackground': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 10
        }}
      >
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
              }
            }}
          >
            Back to verses
          </Button>
        </Link>
      </Box>

      <Fade in={true} timeout={800}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            padding: { xs: 2, md: 4 }
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
              "{verseQuote.quote}"
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
        </Box>
      </Fade>

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
