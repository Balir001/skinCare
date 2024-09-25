import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Product from './Product';

const product= [
  { id: 1, /* other props */ },
  { id: 2, /* other props */ },
  { id: 3, /* other props */ },
  { id: 4, /* other props */ },
  { id: 5, /* other props */ },
  { id: 6, /* other props */ },
  { id: 7, /* other props */ },
  { id: 8, /* other props */ },
  { id: 9, /* other props */ },
  { id: 10, /* other props */ },
  { id: 11, /* other props */ },
  { id: 12, /* other props */ },
  { id: 13, /* other props */ },
  { id: 15, /* other props */ },
];

export default function Shop() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      flex={isSmallScreen ? 1 : 4} 
      p={2} 
      width={isSmallScreen ? '100%' : 'auto'}
    >



      <Grid 
        container 
        spacing={2} 
        justifyContent="center"
      >
        

        {product.map((store, index) => (
          <Grid 
            item 
            xs={6} // Use half width on small screens for two items per row
            sm={4} // Use third width on medium screens for three items per row
            md={4} 
            key={store.id}
          >
            <Product {...store} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}