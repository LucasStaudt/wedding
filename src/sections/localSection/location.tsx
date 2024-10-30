import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocationIcon: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <FaMapMarkerAlt className="text-indigo-600" size={24} />
      <span className="text-lg font-medium">
        Rod. Admar Gonzaga, 4720 B - Lagoa da Conceição - Florianópolis/SC - CEP 88.062-001
      </span>
    </div>
  );
};

export default LocationIcon;
