import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, ChevronLeft, ChevronRight, MessageCircle, Phone, Star, Calendar, Wifi, Car, Dumbbell, Shield, Mail, User, Home, Map } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/properties/get/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === property.propertyGallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? property.propertyGallery.length - 1 : prev - 1));
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />;
      case 'parking':
        return <Car className="h-4 w-4" />;
      case 'gym':
        return <Dumbbell className="h-4 w-4" />;
      case 'security':
        return <Shield className="h-4 w-4" />;
      default:
        return <Square className="h-4 w-4" />;
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Your message has been sent successfully!');
    setContactForm({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={property.propertyGallery[currentImageIndex] || `https://via.placeholder.com/800x600?text=Image+${currentImageIndex + 1}`}
              alt={property.title}
              className="w-full h-96 object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {property.propertyGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-6 w-6 mr-2" />
                      <span className="text-lg">{property.address}, {property.city}, {property.state}, {property.country}</span>
                    </div>
                  </div>
                  <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    <Heart className="h-6 w-6 text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-3xl font-bold text-blue-600">
                    {property.price} {property.priceDuration}
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <Bed className="h-5 w-5 mr-1 text-gray-600" />
                      <span className="text-gray-800">{property.bhk}</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <Bath className="h-5 w-5 mr-1 text-gray-600" />
                      <span className="text-gray-800">{property.bathrooms || 'N/A'}</span>
                    </div>
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                      <Square className="h-5 w-5 mr-1 text-gray-600" />
                      <span className="text-gray-800">{property.squareFeetArea} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Property Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Property Type</h4>
                      <p className="text-gray-700">{property.category}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Furnished Type</h4>
                      <p className="text-gray-700">{property.furnishedType}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Age of Property</h4>
                      <p className="text-gray-700">{property.ageOfProperty} years</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Maintenance Charges</h4>
                      <p className="text-gray-700">{property.maintenanceCharges}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Brokerage</h4>
                      <p className="text-gray-700">{property.brokerage}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-1">Property For</h4>
                      <p className="text-gray-700">{property.propertyFor}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h3>
                  <div className="flex flex-wrap gap-4">
                    {property.amenities && property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
                        {getAmenityIcon(amenity)}
                        <span className="ml-2 text-gray-800">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location</h3>
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                    <Map className="h-full w-full text-gray-300 flex items-center justify-center" />
                    <p className="text-gray-500 text-center py-4">Map view of the property location</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Owner</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all pl-10"
                          required
                        />
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all pl-10"
                          required
                        />
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={contactForm.phone}
                          onChange={handleContactChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all pl-10"
                          required
                        />
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Property Owner</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mr-3">
                      <User className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-gray-900">Owner Name</h4>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span>4.8 (24 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Experienced property owner with over 10 years in real estate. Known for maintaining high-quality properties and excellent tenant relationships.
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Chat with Owner
                    </button>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Call Owner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;











// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { MapPin, Bed, Bath, Square, Heart, ChevronLeft, ChevronRight, MessageCircle, Phone, Star, Calendar, Wifi, Car, Dumbbell, Shield } from 'lucide-react';

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     // Fetch property details based on the id
//     const properties = [
//       {
//         id: 1,
//         title: "Modern Apartment in Koregaon Park",
//         location: "Koregaon Park, Pune",
//         price: "₹80,000",
//         period: "/month",
//         bedrooms: 2,
//         bathrooms: 2,
//         area: "1,200",
//         images: [
//           "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
//           "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
//           "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
//           "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
//         ],
//         featured: true,
//         description: "This stunning modern apartment features contemporary design with premium finishes throughout. Located in the heart of Koregaon Park, it offers easy access to restaurants, cafes, and shopping centers. The apartment boasts spacious rooms with large windows providing natural light, a fully equipped modern kitchen, and a beautiful balcony with city views.",
//         amenities: ["WiFi", "Parking", "Gym", "Security"],
//         owner: {
//           name: "Rajesh Sharma",
//           rating: 4.8,
//           reviews: 24,
//           phone: "+91 98765 43210",
//           description: "Experienced property owner with over 10 years in real estate. Known for maintaining high-quality properties and excellent tenant relationships. Responsive to maintenance requests and ensures all amenities are well-maintained.",
//           joinedDate: "2018"
//         }
//       },
//       // Add other properties here
//     ];

//     const selectedProperty = properties.find(prop => prop.id === parseInt(id));
//     setProperty(selectedProperty);
//   }, [id]);

//   if (!property) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
//   };

//   const getAmenityIcon = (amenity) => {
//     switch (amenity.toLowerCase()) {
//       case 'wifi':
//         return <Wifi className="h-4 w-4" />;
//       case 'parking':
//         return <Car className="h-4 w-4" />;
//       case 'gym':
//         return <Dumbbell className="h-4 w-4" />;
//       case 'security':
//         return <Shield className="h-4 w-4" />;
//       default:
//         return <Square className="h-4 w-4" />;
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Image Slider */}
//           <div className="relative">
//             <img
//               src={property.images[currentImageIndex]}
//               alt={property.title}
//               className="w-full h-96 object-cover"
//             />
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
//             >
//               <ChevronLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-3 rounded-full transition-all"
//             >
//               <ChevronRight className="h-6 w-6" />
//             </button>
//             <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//               {property.images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImageIndex(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="p-6">
//             {/* Property Info */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">{property.title}</h2>
//                 <div className="flex items-center text-gray-600 mb-6">
//                   <MapPin className="h-6 w-6 mr-2" />
//                   <span className="text-lg">{property.location}</span>
//                 </div>

//                 <div className="flex items-center justify-between mb-6">
//                   <div className="text-3xl font-bold text-blue-600">
//                     {property.price}
//                     <span className="text-lg text-gray-500 font-normal">{property.period}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-8 mb-8">
//                   <div className="flex items-center">
//                     <Bed className="h-6 w-6 mr-2 text-gray-600" />
//                     <span className="text-gray-700">{property.bedrooms} Bedrooms</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Bath className="h-6 w-6 mr-2 text-gray-600" />
//                     <span className="text-gray-700">{property.bathrooms} Bathrooms</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Square className="h-6 w-6 mr-2 text-gray-600" />
//                     <span className="text-gray-700">{property.area} sqft</span>
//                   </div>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-4">Description</h3>
//                   <p className="text-gray-700 leading-relaxed text-lg">{property.description}</p>
//                 </div>

//                 <div className="mb-8">
//                   <h3 className="text-2xl font-semibold text-gray-900 mb-4">Amenities</h3>
//                   <div className="flex flex-wrap gap-4">
//                     {property.amenities.map((amenity, index) => (
//                       <div key={index} className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
//                         {getAmenityIcon(amenity)}
//                         <span className="ml-2 text-gray-800">{amenity}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Owner Info & Contact */}
//               <div className="bg-gray-100 p-6 rounded-lg">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-6">Property Owner</h3>

//                 <div className="mb-6">
//                   <div className="flex items-center justify-between mb-3">
//                     <h4 className="font-medium text-xl text-gray-900">{property.owner.name}</h4>
//                     <div className="flex items-center">
//                       <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
//                       <span className="text-gray-700">{property.owner.rating}</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-4">
//                     <Calendar className="h-5 w-5 mr-1" />
//                     <span>Joined {property.owner.joinedDate}</span>
//                     <span className="mx-2">•</span>
//                     <span>{property.owner.reviews} reviews</span>
//                   </div>
//                   <p className="text-gray-700 mb-5">{property.owner.description}</p>
//                 </div>

//                 <div className="space-y-4">
//                   <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
//                     <MessageCircle className="h-6 w-6 mr-2" />
//                     Chat with Owner
//                   </button>
//                   <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
//                     <Phone className="h-6 w-6 mr-2" />
//                     Call {property.owner.phone}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;
