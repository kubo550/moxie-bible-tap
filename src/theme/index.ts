import { createTheme } from '@mui/material/styles';
import { blue, purple, red } from '@mui/material/colors';
import { Emotion } from '@/types';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[700]
    },
    secondary: {
      main: purple[400]
    },
    error: {
      main: red.A700
    }
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif'
  }
});

export const EMOTION_COLORS = [
  { label: Emotion.Happy, color: '#4CAF50' },
  { label: Emotion.Thankful, color: '#E91E63' },
  { label: Emotion.Lonely, color: '#81D4FA' },
  { label: Emotion.Angry, color: '#F44336' },
  { label: Emotion.Sad, color: '#03A9F4' },
  { label: Emotion.Troubled, color: '#FF9800' },
  { label: Emotion.Anxious, color: '#673AB7' },
  { label: Emotion.Frustrated, color: '#eed520' }
];

export const getColorByEmotion = (emotion: string | null | undefined) => {
  if (!emotion) return '#1976d2'; // Default color if no emotion is provided
  return EMOTION_COLORS.find((e) => e.label.toLowerCase() === emotion.toLowerCase())?.color;
};
