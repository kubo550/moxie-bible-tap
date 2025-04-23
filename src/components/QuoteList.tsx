import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { getColorByEmotion } from '@/theme';
import { VerseQuote } from '@/types';

interface QuoteCardProps {
  quoteCardProps: VerseQuote;
}
export const QuoteCard = ({ quoteCardProps }: QuoteCardProps) => {
  const { caption, quote, type } = quoteCardProps;
  const { emotion } = useParams();

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
      <Link to={`/emotion/${emotion}/${quoteCardProps.id}`.toLowerCase()}>
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

        {quotes.map((q) => (
          <QuoteCard key={q.id} quoteCardProps={q} />
        ))}
      </Box>
    </>
  );
};
