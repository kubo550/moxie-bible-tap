import React from 'react';
import { Typography, Paper, Button } from '@mui/material';
import { VerseQuote } from '@/types';
import { getColorByEmotion } from '@/theme';
import { useParams } from 'react-router-dom';

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
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${color}, black, black)`
      }}
      className="flex h-screen w-screen flex-col items-center justify-center space-y-6 p-4"
    >
      <div className="w-full max-w-sm">
        <Paper
          elevation={8}
          className="rounded-2xl bg-black/50 p-6 backdrop-blur-lg"
          style={{
            borderLeft: `6px solid ${color}`
          }}
        >
          <Typography
            variant="body1"
            fontSize={20}
            className="whitespace-pre-line text-center font-light italic leading-relaxed text-gray-100"
          >
            “{verseQuote.quote}”
          </Typography>

          {verseQuote.caption && (
            <Typography variant="subtitle2" mt={2} className="text-end text-xs text-gray-500">
              {verseQuote.caption}
            </Typography>
          )}
        </Paper>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="contained" onClick={onPrevVerse} disabled={index === 0}>
          Prev
        </Button>

        <Typography className="text-gray-300">
          {index + 1} / {count}
        </Typography>

        <Button variant="contained" onClick={onNextVerse} disabled={index + 1 >= count}>
          Next
        </Button>
      </div>
    </div>
  );
};
