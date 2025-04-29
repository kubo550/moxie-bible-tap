import { Link } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';

import { EMOTION_COLORS } from '@/theme';

export const ReadMeButtons = () => {
  return (
    <>
      <Box
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant="h5" margin="10px" gutterBottom>
          Bible Verses For The Moment
        </Typography>

        <Typography variant="h4" marginBottom="30px" fontWeight="bold" gutterBottom>
          READ ME WHEN
        </Typography>
        <Box maxWidth="sm" width="100%">
          <Grid container spacing={3} justifyContent="center">
            {EMOTION_COLORS.map((emotion) => (
              <Grid item xs={6} key={emotion.label}>
                <Button
                  component={Link}
                  to={`/emotion/${emotion.label?.toLowerCase()}`}
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: emotion.color,
                    color: '#ffffff',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: emotion.color,
                      opacity: 0.9,
                      transform: 'translateY(-4px) scale(1.1)',
                      transition: 'all 0.3s ease-in-out'
                    }
                  }}
                >
                  {emotion.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
