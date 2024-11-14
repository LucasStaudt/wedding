import React from 'react';
import "./styles.css";

interface SectionTitleProps {
  sectionTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle }) => {
  return (
    <h1 className="mb-8">
      {sectionTitle}
    </h1>
  );
};

export default SectionTitle;
