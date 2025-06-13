import React, { useState } from 'react';

const PostProperty = () => {
  const [propertyType, setPropertyType] = useState('For Sale');
  const [listingType, setListingType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [propertyDescription, setPropertyDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amenities, setAmenities] = useState({
    parking: false,
    gym: false,
    swimmingPool: false,
    security: false,
    lift: false,
    garden: false,
    powerBackup: false,
  });

  const handleAmenityChange = (amenity) => {
    setAmenities({
      ...amenities,
      [amenity]: !amenities[amenity],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      propertyType,
      listingType,
      bedrooms,
      bathrooms,
      builtUpArea,
      carpetArea,
      propertyDescription,
      price,
      amenities,
    });
    alert('Property posted successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
            Post Your Property
          </h1>
          <p className="text-gray-600 text-sm lg:text-base">
            Fill in the details to list your property
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">1</span>
                Property Photos
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                <p className="mb-2">Upload up to 10 photos</p>
                <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                  Upload Media
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">2</span>
                Property Location
              </h2>
              <input
                type="text"
                placeholder="Select location on map or enter address"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <input
                type="text"
                placeholder="Society"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <input
                type="text"
                placeholder="Search 'Bibvewadi'"
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">3</span>
                Pricing & Availability
              </h2>
              <input
                type="text"
                placeholder="Price (INR)"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="flex flex-wrap gap-3 mb-3">
                {['Apartment', 'House', 'Villa', 'Plot', 'Commercial'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      listingType === type
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                    onClick={() => setListingType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                {['For Rent', 'For Sale'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      propertyType === type
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                    onClick={() => setPropertyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">4</span>
                Property Details
              </h2>
              <div className="flex space-x-3 mb-3">
                <select
                  className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value={0}>Bedrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
                <select
                  className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                >
                  <option value={0}>Bathrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Built-Up Area (sq.ft)"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
              />
              <input
                type="text"
                placeholder="Carpet Area (sq.ft)"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
              <textarea
                placeholder="Property Description"
                className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                value={propertyDescription}
                onChange={(e) => setPropertyDescription(e.target.value)}
              />
              <div className="flex flex-wrap gap-3">
                {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Lift', 'Garden', 'Power Backup'].map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      amenities[amenity.toLowerCase().replace(' ', '')]
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                    onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🏠 Post My Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
