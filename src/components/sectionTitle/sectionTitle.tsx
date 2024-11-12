import React from 'react';
import "./styles.css";

interface SectionTitleProps {
  sectionTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle }) => {
  return (
    <div>
      <h1 className="">
        {sectionTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
