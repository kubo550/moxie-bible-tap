import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';

import React from 'react';
import { EMOTION_COLORS } from '@/theme';

export const ReadMeButtons = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h5" gutterBottom>
        Bible Verses For The Moment
      </Typography>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        READ ME WHEN
      </Typography>

      <Grid container spacing={2} justifyContent="center" maxWidth="sm">
        {EMOTION_COLORS.map((emotion) => (
          <Grid item xs={6} key={emotion.label}>
            <Link to={`/emotion/${emotion.label?.toLowerCase()}`}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: emotion.color,
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: emotion.color,
                    opacity: 0.9
                  }
                }}
              >
                {emotion.label}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
