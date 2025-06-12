import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Gharkul
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Your trusted partner in finding the perfect rental property.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Founded in 2010, Gharkul has grown from a small local agency to a leading name in the property rental market. Our journey began with a simple mission: to make house hunting simple, fast, and reliable. Over the years, we have helped thousands of families and individuals find their perfect homes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                At Gharkul, our mission is to provide an unparalleled property rental experience. We strive to offer a wide range of high-quality rental properties that meet the diverse needs of our clients. We are committed to excellence and dedicated to ensuring that every customer finds a place they can truly call home.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
              <ul className="mt-4 space-y-4 text-lg text-gray-500 leading-relaxed">
                <li><strong>Integrity:</strong> We believe in doing the right thing, always. Our commitment to honesty and transparency is the foundation of our relationships with clients and partners.</li>
                <li><strong>Customer Focus:</strong> Our customers are at the heart of everything we do. We listen to their needs and go above and beyond to exceed their expectations.</li>
                <li><strong>Innovation:</strong> We embrace change and continuously seek new ways to improve our services and deliver exceptional value.</li>
                <li><strong>Community:</strong> We are dedicated to making a positive impact in the communities we serve through responsible business practices and active community engagement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                Our team is composed of experienced professionals who are passionate about real estate and dedicated to providing the best service possible. From our knowledgeable agents to our supportive staff, everyone at Gharkul is committed to helping you find your dream home.
              </p>
              {/* You can add team member profiles here */}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                We would love to hear from you! Whether you have a question about our services, need assistance with finding a property, or just want to provide feedback, feel free to reach out to us.
              </p>
              <p className="mt-2 text-lg text-gray-500 leading-relaxed">
                Email: contact@gharkul.com
              </p>
              <p className="mt-2 text-lg text-gray-500 leading-relaxed">
                Phone: +123 456 7890
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
