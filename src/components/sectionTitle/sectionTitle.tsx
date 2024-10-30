import React from 'react';

interface SectionTitleProps {
  sectionTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle }) => {
  return (
    <h2 className="text-center text-2xl font-semibold mb-4 border-b-4 border-blue-500 pb-2">
      {sectionTitle}
    </h2>
  );
};

export default SectionTitle;
