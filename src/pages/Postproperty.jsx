import React, { useState } from 'react';

const PostProperty = () => {
  const [formData, setFormData] = useState({
    propertyType: 'For Sale',
    listingType: 'Apartment',
    bedrooms: 0,
    bathrooms: 0,
    builtUpArea: '',
    carpetArea: '',
    propertyDescription: '',
    price: '',
    amenities: {
      parking: false,
      gym: false,
      swimmingPool: false,
      security: false,
      lift: false,
      garden: false,
      powerBackup: false,
    },
    location: '',
    society: '',
    address: '',
    images: [],
    title: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAmenityChange = (amenity) => {
    setFormData({
      ...formData,
      amenities: {
        ...formData.amenities,
        [amenity]: !formData.amenities[amenity],
      },
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
    if (!formData.listingType) newErrors.listingType = 'Listing type is required';
    if (!formData.bedrooms) newErrors.bedrooms = 'Number of bedrooms is required';
    if (!formData.bathrooms) newErrors.bathrooms = 'Number of bathrooms is required';
    if (!formData.builtUpArea) newErrors.builtUpArea = 'Built-up area is required';
    if (!formData.price) newErrors.price = 'Price is required';
    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (formData.images.length === 0) newErrors.images = 'At least one image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      setSuccess('Property posted successfully!');
      setFormData({
        propertyType: 'For Sale',
        listingType: 'Apartment',
        bedrooms: 0,
        bathrooms: 0,
        builtUpArea: '',
        carpetArea: '',
        propertyDescription: '',
        price: '',
        amenities: {
          parking: false,
          gym: false,
          swimmingPool: false,
          security: false,
          lift: false,
          garden: false,
          powerBackup: false,
        },
        location: '',
        society: '',
        address: '',
        images: [],
        title: '',
      });
    }
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

        {success && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            {success}
          </div>
        )}

        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">1</span>
                Property Photos
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
                <p className="mb-2">Upload up to 10 photos</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
                  Upload Media
                </label>
                {errors.images && <p className="text-red-500 text-sm mt-2">{errors.images}</p>}
                {formData.images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index}`}
                          className="h-20 w-20 object-cover rounded"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = [...formData.images];
                            newImages.splice(index, 1);
                            setFormData({ ...formData, images: newImages });
                          }}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">2</span>
                Property Location
              </h2>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Select location on map or enter address"
                />
                {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Society</label>
                <input
                  type="text"
                  name="society"
                  value={formData.society}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Society"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Search 'Bibvewadi'"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">3</span>
                Pricing & Availability
              </h2>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (INR)</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Price (INR)"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <div className="flex flex-wrap gap-3">
                  {['For Rent', 'For Sale'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        formData.propertyType === type
                          ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setFormData({ ...formData, propertyType: type })}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Listing Type</label>
                <div className="flex flex-wrap gap-3">
                  {['Apartment', 'House', 'Villa', 'Plot', 'Commercial'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        formData.listingType === type
                          ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                      }`}
                      onClick={() => setFormData({ ...formData, listingType: type })}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">4</span>
                Property Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                  <select
                    name="bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value={0}>Bedrooms</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  {errors.bedrooms && <p className="text-red-500 text-sm mt-1">{errors.bedrooms}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                  <select
                    name="bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  >
                    <option value={0}>Bathrooms</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                  {errors.bathrooms && <p className="text-red-500 text-sm mt-1">{errors.bathrooms}</p>}
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Built-Up Area (sq.ft)</label>
                <input
                  type="text"
                  name="builtUpArea"
                  value={formData.builtUpArea}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Built-Up Area (sq.ft)"
                />
                {errors.builtUpArea && <p className="text-red-500 text-sm mt-1">{errors.builtUpArea}</p>}
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Carpet Area (sq.ft)</label>
                <input
                  type="text"
                  name="carpetArea"
                  value={formData.carpetArea}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Carpet Area (sq.ft)"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Description</label>
                <textarea
                  name="propertyDescription"
                  value={formData.propertyDescription}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Property Description"
                  rows="4"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amenities</label>
                <div className="flex flex-wrap gap-3">
                  {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Lift', 'Garden', 'Power Backup'].map((amenity) => (
                    <button
                      key={amenity}
                      type="button"
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        formData.amenities[amenity.toLowerCase().replace(' ', '')]
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
















// import React, { useState } from 'react';

// const PostProperty = () => {
//   const [propertyType, setPropertyType] = useState('For Sale');
//   const [listingType, setListingType] = useState('Apartment');
//   const [bedrooms, setBedrooms] = useState(0);
//   const [bathrooms, setBathrooms] = useState(0);
//   const [builtUpArea, setBuiltUpArea] = useState('');
//   const [carpetArea, setCarpetArea] = useState('');
//   const [propertyDescription, setPropertyDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [amenities, setAmenities] = useState({
//     parking: false,
//     gym: false,
//     swimmingPool: false,
//     security: false,
//     lift: false,
//     garden: false,
//     powerBackup: false,
//   });

//   const handleAmenityChange = (amenity) => {
//     setAmenities({
//       ...amenities,
//       [amenity]: !amenities[amenity],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       propertyType,
//       listingType,
//       bedrooms,
//       bathrooms,
//       builtUpArea,
//       carpetArea,
//       propertyDescription,
//       price,
//       amenities,
//     });
//     alert('Property posted successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-6 px-4 lg:py-12">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">
//             Post Your Property
//           </h1>
//           <p className="text-gray-600 text-sm lg:text-base">
//             Fill in the details to list your property
//           </p>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">1</span>
//                 Property Photos
//               </h2>
//               <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center">
//                 <p className="mb-2">Upload up to 10 photos</p>
//                 <button type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors">
//                   Upload Media
//                 </button>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">2</span>
//                 Property Location
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Select location on map or enter address"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//               />
//               <input
//                 type="text"
//                 placeholder="Society"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//               />
//               <input
//                 type="text"
//                 placeholder="Search 'Bibvewadi'"
//                 className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//               />
//             </div>

//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">3</span>
//                 Pricing & Availability
//               </h2>
//               <input
//                 type="text"
//                 placeholder="Price (INR)"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//               <div className="flex flex-wrap gap-3 mb-3">
//                 {['Apartment', 'House', 'Villa', 'Plot', 'Commercial'].map((type) => (
//                   <button
//                     key={type}
//                     type="button"
//                     className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
//                       listingType === type
//                         ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
//                     }`}
//                     onClick={() => setListingType(type)}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//               <div className="flex gap-3">
//                 {['For Rent', 'For Sale'].map((type) => (
//                   <button
//                     key={type}
//                     type="button"
//                     className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
//                       propertyType === type
//                         ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
//                     }`}
//                     onClick={() => setPropertyType(type)}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4 flex items-center">
//                 <span className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3 text-indigo-600 font-bold text-sm">4</span>
//                 Property Details
//               </h2>
//               <div className="flex space-x-3 mb-3">
//                 <select
//                   className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   value={bedrooms}
//                   onChange={(e) => setBedrooms(e.target.value)}
//                 >
//                   <option value={0}>Bedrooms</option>
//                   <option value={1}>1</option>
//                   <option value={2}>2</option>
//                   <option value={3}>3</option>
//                   <option value={4}>4</option>
//                 </select>
//                 <select
//                   className="w-1/2 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                   value={bathrooms}
//                   onChange={(e) => setBathrooms(e.target.value)}
//                 >
//                   <option value={0}>Bathrooms</option>
//                   <option value={1}>1</option>
//                   <option value={2}>2</option>
//                   <option value={3}>3</option>
//                   <option value={4}>4</option>
//                 </select>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Built-Up Area (sq.ft)"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                 value={builtUpArea}
//                 onChange={(e) => setBuiltUpArea(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Carpet Area (sq.ft)"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                 value={carpetArea}
//                 onChange={(e) => setCarpetArea(e.target.value)}
//               />
//               <textarea
//                 placeholder="Property Description"
//                 className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
//                 value={propertyDescription}
//                 onChange={(e) => setPropertyDescription(e.target.value)}
//               />
//               <div className="flex flex-wrap gap-3">
//                 {['Parking', 'Gym', 'Swimming Pool', 'Security', 'Lift', 'Garden', 'Power Backup'].map((amenity) => (
//                   <button
//                     key={amenity}
//                     type="button"
//                     className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
//                       amenities[amenity.toLowerCase().replace(' ', '')]
//                         ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
//                     }`}
//                     onClick={() => handleAmenityChange(amenity.toLowerCase().replace(' ', ''))}
//                   >
//                     {amenity}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
//             >
//               🏠 Post My Property
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostProperty;
