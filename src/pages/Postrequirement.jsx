import React, { useState } from 'react';

function Postrequirement() {
  const [selectedLookingFor, setSelectedLookingFor] = useState('Buy');
  const [selectedPropertyType, setSelectedPropertyType] = useState('Villa');
  const [selectedBHK, setSelectedBHK] = useState('1 BHK');
  const [budget, setBudget] = useState(5000000);
  const [location, setLocation] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const lookingForOptions = ['Buy', 'Rent', 'PG/Co-living', 'Roommate'];
  const propertyTypeOptions = ['Villa', 'Single Occupancy', 'PG', 'Bungalow', 'Apartment', 'Studio'];
  const bhkOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5+ BHK'];

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    }
    return `₹${(amount / 100000).toFixed(1)}L`;
  };

  const handleSubmit = () => {
    const formData = {
      lookingFor: selectedLookingFor,
      propertyType: selectedPropertyType,
      bhk: selectedBHK,
      budget: budget,
      location: location,
      additionalRequirements: additionalRequirements
    };
    console.log('Form submitted:', formData);
    alert('Requirement posted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 lg:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
            Post Your Property Requirement
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Tell us what you're looking for and we'll help you find the perfect match
          </p>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            {/* What are you looking for? */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">1</span>
                What are you looking for?
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {lookingForOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedLookingFor(option)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedLookingFor === option
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">2</span>
                Property Type
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {propertyTypeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedPropertyType(option)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedPropertyType === option
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* BHK Configuration */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">3</span>
                BHK Configuration
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {bhkOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedBHK(option)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedBHK === option
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Budget Range */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">4</span>
                Budget Range
              </h2>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="range"
                    min="1000000"
                    max="50000000"
                    step="100000"
                    value={budget}
                    onChange={(e) => setBudget(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${((budget - 1000000) / (50000000 - 1000000)) * 100}%, #e5e7eb ${((budget - 1000000) / (50000000 - 1000000)) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 mb-2">
                    {formatCurrency(budget)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Range: ₹10L - ₹5Cr
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">5</span>
                Preferred Location
              </h2>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city, area, or specific location"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Additional Requirements */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">6</span>
                Additional Requirements
              </h2>
              <textarea
                value={additionalRequirements}
                onChange={(e) => setAdditionalRequirements(e.target.value)}
                rows="4"
                placeholder="Any specific requirements like parking, furnishing, floor preference, amenities, etc."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-xl p-6 shadow-lg mt-6">
          <button 
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🏠 Post My Requirement
          </button>
          <p className="text-center text-gray-500 text-sm mt-3">
            Your requirement will be shared with verified agents and property owners
          </p>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
          transition: all 0.2s ease;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 12px rgba(79, 70, 229, 0.4);
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }

        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default Postrequirement;