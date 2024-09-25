import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function ProductHolder() {
  return (
    <Box sx={{ width: 200, border: '1px solid #ddd', borderRadius: 2, overflow: 'hidden', boxShadow: 2, margin: 1 }}>
      {/* Product Image */}
      <Box component="img" src="https://images.pexels.com/photos/6707554/pexels-photo-6707554.jpeg" alt="Product Image" sx={{ width: '100%', height: 150, objectFit: 'cover' }} />

      {/* Product Details */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" noWrap>
          Product Name
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          This is a brief description of the product.
        </Typography>

        {/* Price and Move to Cart Button */}
        <Box sx={{ display: 'flex', flexDirection:"column", justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            $19.99
          </Typography>
          
          <Button variant="contained" color="primary" size="small">
            View Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
}