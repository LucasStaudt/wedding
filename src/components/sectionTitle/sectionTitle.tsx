import React from 'react';
import './styles.css';

interface SectionTitleProps {
  sectionTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle }) => {
  return (
    <h1 className="relative mb-8 text-gray-800 dark:text-gray-200 text-4xl font-semibold text-center">
      {sectionTitle}
    </h1>
  );
};

export default SectionTitle;
