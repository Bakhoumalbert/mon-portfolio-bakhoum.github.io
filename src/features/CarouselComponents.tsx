// Carousel.tsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez les styles du carrousel
import CarouselItem from './Carousel'; // Importez le composant d'élément du carrousel
import { Type_poste } from './codes/Type_poste';
import { Disponibilite } from './codes/Disponibilite';

const CarouselComponent: React.FC = () => {
  return (
    <Carousel>
      <CarouselItem>
        {/* Insérez le composant ici */}
        <Type_poste />
      </CarouselItem>
      <CarouselItem>
        {/* Insérez un autre composant ici */}
        <Disponibilite />
      </CarouselItem>
      {/* Ajoutez autant d'éléments de carrousel que nécessaire */}
    </Carousel>
  );
};

export default CarouselComponent;
