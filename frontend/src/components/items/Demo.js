import React from 'react';
import { Paper, Typography, Button, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const items = [
  {
    name: 'Item 1',
    image: 'https://example.com/image1.jpg',
  },
  {
    name: 'Item 2',
    image: 'https://example.com/image2.jpg',
  },
  {
    name: 'Item 3',
    image: 'https://example.com/image3.jpg',
  },
];

const ImageCarousel = () => {
  return (
    <Carousel animation="slide">
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }) => {
  return (
    <Paper>
      <img src={item.image} alt={item.name} />
      <Typography variant="h5">{item.name}</Typography>
    </Paper>
  );
};

export default ImageCarousel;
