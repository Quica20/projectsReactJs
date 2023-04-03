/* Conexion con CSS */
import './cardProduct.css'

/* Contenido de la card de MUI */

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardProduct = ({data}) => {
    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image= {data.image}
        title= {data.titleImg}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <a> Precio: ${data.price}</a>    
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar</Button>
        <Button size="small">Detalles</Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;