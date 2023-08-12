// CarouselItem.tsx
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez les styles du carrousel
import React, { ReactNode } from 'react';
import { Type_poste } from './codes/Type_poste';
import { Disponibilite } from './codes/Disponibilite';

interface CarouselItemProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselItemProps> = () => {
  return (
    <div>
      <Carousel>
        {/* Insérez le composant ici */}
        <Type_poste />
      </Carousel>
      <Carousel>
        {/* Insérez un autre composant ici */}
        <Disponibilite />
      </Carousel>
    </div>
  );
};

export default Carousel;
