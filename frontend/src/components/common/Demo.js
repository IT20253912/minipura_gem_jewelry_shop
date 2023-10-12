import React from 'react';
import { Paper, Typography, Button, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Imageone from "../images/carsone.jpg"
import Imagetwo from "../images/carstwo.jpg"
import Imagthree from "../images/carthree.jpg"

const items = [
  {
    image: Imageone,
  },
  {
    image: Imagetwo,
  },
  {
    image: Imagthree,
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

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the alpha (4th value) for transparency
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const Item = ({ item }) => {
  return (
    <Paper style={cardStyle}>
      <img src={item.image} alt={item.name}  style={{ width: '100%', height: '500px', objectFit: 'cover' , borderRadius:3}}/>
      <Typography variant="h5">{item.name}</Typography>
    </Paper>
  );
};

export default ImageCarousel;
