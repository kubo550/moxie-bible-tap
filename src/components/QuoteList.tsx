import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { DB, VerseQuote } from '@/infrastructure/firebase';
import { getColorByEmotion } from '@/theme';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Emotion } from '@/types';
import { isValidEmotion } from '@/utils';

interface QuoteCardProps {
  caption: string;
  quote: string;
  type: string;
  emotion: string; // TODO: get emotion from url
}
export const QuoteCard = ({ caption, quote, type, emotion }: QuoteCardProps) => {
  const borderColor = getColorByEmotion(emotion) || '#1976d2';

  return (
    <Card
      elevation={4}
      sx={{
        maxWidth: 500,
        width: '100%',
        margin: 1.5,
        borderLeft: `6px solid ${borderColor}`
      }}
    >
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
    </Card>
  );
};

export const QuoteList = () => {
  const [quotes, setQuotes] = React.useState<VerseQuote[]>([]);
  const db = DB.getInstance();
  const { emotion = Emotion.Thankful } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (emotion && !isValidEmotion(emotion)) {
      navigate('/');
    }
  }, [emotion, navigate]);

  // TODO: use react-query
  React.useEffect(() => {
    db.getVerses().then((data: VerseQuote[]) => {
      setQuotes(data);
    });
  }, [db]);

  return (
    <>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        <Link to="/">
          <Button variant="text" color="inherit">
            back
          </Button>
        </Link>
      </Typography>

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

        {quotes.length === 0 && (
          <Typography variant="body1" color="text.secondary">
            No quotes available.
          </Typography>
        )}

        {quotes.map((q) => (
          <QuoteCard key={q.id} emotion={emotion} caption={q.caption} quote={q.quote} type={q.type} />
        ))}
      </Box>
    </>
  );
};
