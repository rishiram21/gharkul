import React, { useState } from 'react';

const Addproperty = () => {
  const [propertyType, setPropertyType] = useState('For Sale');
  const [listingType, setListingType] = useState('Apartment');
  const [bedrooms, setBedrooms] = useState(0);
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
    // Handle form submission logic here
    console.log({
      propertyType,
      listingType,
      bedrooms,
      builtUpArea,
      carpetArea,
      propertyDescription,
      price,
      amenities,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Add Property</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Step 1: Property Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <p className="mb-2">Upload up to 10 photos</p>
                <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                  Upload Media
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Step 2: Property Location</h2>
              <input
                type="text"
                placeholder="Select location on map or enter address"
                className="w-full p-2 border rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="Society"
                className="w-full p-2 border rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="Search 'Bibvewadi'"
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Step 3: Pricing & Availability</h2>
              <input
                type="text"
                placeholder="Price (INR)"
                className="w-full p-2 border rounded-lg mb-2"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="flex space-x-2 mb-2">
                {['Apartment', 'House', 'Villa', 'Plot', 'Commercial'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded-full ${listingType === type ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setListingType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <div className="flex space-x-2">
                {['For Rent', 'For Sale'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded-full ${propertyType === type ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setPropertyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Step 4: Property Details</h2>
              <div className="flex space-x-2 mb-2">
                <select className="w-1/2 p-2 border rounded-lg" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                  <option value={0}>Bedrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
                <select className="w-1/2 p-2 border rounded-lg" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
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
                className="w-full p-2 border rounded-lg mb-2"
                value={builtUpArea}
                onChange={(e) => setBuiltUpArea(e.target.value)}
              />
              <input
                type="text"
                placeholder="Carpet Area (sq.ft)"
                className="w-full p-2 border rounded-lg mb-2"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
              />
              <textarea
                placeholder="Property Description"
                className="w-full p-2 border rounded-lg mb-2"
                value={propertyDescription}
                onChange={(e) => setPropertyDescription(e.target.value)}
              />
              <div className="flex flex-wrap space-x-2">
                {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Lift', 'Garden', 'Power Backup'].map((amenity) => (
                  <button
                    key={amenity}
                    type="button"
                    className={`px-4 py-2 rounded-full ${amenities[amenity.toLowerCase().replace(' ', '')] ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
                  >
                    {amenity}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg">
              Submit Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addproperty;
