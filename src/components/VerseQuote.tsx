import React from 'react';
import { Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { VerseQuote } from '@/types';
import { getColorByEmotion } from '@/theme';
import { useParams } from 'react-router-dom';

type VerseQuoteProps = {
  verseQuote: VerseQuote;
};

export const VerseQuoteComponent: React.FC<VerseQuoteProps> = ({ verseQuote }) => {
  const { emotion } = useParams();
  const color = getColorByEmotion(emotion);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, ${color}, black, black)`
      }}
      className="flex h-screen w-screen items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-sm"
      >
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
      </motion.div>
    </div>
  );
};
