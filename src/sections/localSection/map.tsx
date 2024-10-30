import React from 'react';
import LocationIcon from './location';
import SectionTitle from '../../components/sectionTitle/sectionTitle';

const MapSection: React.FC = () => {
  return (
    <section className="map-section my-8">
      <SectionTitle sectionTitle="Nossa localização" />

      <LocationIcon />
      <div className="map-container border-2 border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.748917758073!2d-48.48452212485731!3d-27.60131292232618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739344495a781%3A0x82865aa1ea31c01!2sRod.%20Admar%20Gonzaga%2C%204720B%20-%20Itacorubi%2C%20Florian%C3%B3polis%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1730251989483!5m2!1spt-BR!2sbr"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
