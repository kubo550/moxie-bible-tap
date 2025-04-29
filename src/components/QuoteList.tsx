import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { getColorByEmotion } from '@/theme';
import { VerseQuote } from '@/types';
import React from 'react';

interface QuoteCardProps {
  quoteCardProps: VerseQuote;
}

export const QuoteCard = ({ quoteCardProps }: QuoteCardProps) => {
  const { caption, quote, type } = quoteCardProps;
  const { emotion } = useParams();
  const borderColor = getColorByEmotion(emotion) || '#1976d2';
  const hoverColor = getColorByEmotion(emotion) || 'rgba(25, 118, 210, 0.1)';

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 500,
        width: '100%',
        margin: 1.5,
        borderLeft: `6px solid ${borderColor}`,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px) scale(1.02)',
          boxShadow: 8,
          bgcolor: hoverColor,
          borderLeft: `8px solid ${borderColor}`
        },
        cursor: 'pointer'
      }}
    >
      <Link to={`/emotion/${emotion}/${quoteCardProps.id}`.toLowerCase()} style={{ textDecoration: 'none' }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">
            {type.toUpperCase()}
          </Typography>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {caption}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {quote}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

interface QuoteListProps {
  quotes: VerseQuote[];
  emotion: string;
}

export const QuoteList = ({ quotes, emotion }: QuoteListProps) => {
  const color = getColorByEmotion(emotion);
  return (
    <Box
      sx={{
        pt: { xs: 8, sm: 10 },
        width: '100%'
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
      <Box display="flex" flexDirection="column" alignItems="center" mt={4} px={2}>
        {quotes.length === 0 ? (
          <Typography variant="h6" color="text.secondary">
            Loading quotes...
          </Typography>
        ) : (
          <Typography variant="h5" fontWeight="bold" textTransform="capitalize" gutterBottom>
            Bible Verses For {emotion} emotion
          </Typography>
        )}
        {quotes.map((q) => (
          <QuoteCard key={q.id} quoteCardProps={q} />
        ))}
      </Box>
    </Box>
  );
};
