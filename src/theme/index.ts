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
  }
});

export const EMOTION_COLORS = [
  { label: Emotion.Happy, color: '#FFC107' },
  { label: Emotion.Lonely, color: '#81D4FA' },
  { label: Emotion.Angry, color: '#F44336' },
  { label: Emotion.Sad, color: '#3F51B5' },
  { label: Emotion.Thankful, color: '#E91E63' },
  { label: Emotion.Anxious, color: '#4CAF50' },
  { label: Emotion.Frustrated, color: '#FFB300' },
  { label: Emotion.Troubled, color: '#F0F4C3' }
];

export const getColorByEmotion = (emotion: string) => {
  return EMOTION_COLORS.find((e) => e.label.toLowerCase() === emotion.toLowerCase())?.color;
};
