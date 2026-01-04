
  'use client'
import React from "react";
import {
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

const ContactUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-500 mt-4">
            Have questions? Get in touch with us. We’re here to help you find your dream property.
          </p>
        </div>

        {/* first Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-between h-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg cursor-pointer hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* second card */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <IconMapPin className="h-6 w-6 text-indigo-600" />
                <p className="text-gray-600">
                  Property Wala Pvt. Ltd. <br />
                  123, Real Estate Street, Lucknow, India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <IconPhone className="h-6 w-6 text-indigo-600" />
                <p className="text-gray-600">+91 9876543210</p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <IconMail className="h-6 w-6 text-indigo-600" />
                <p className="text-gray-600">support@propertywala.com</p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-md mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.92734790744!2d80.94616671504227!3d26.846708983155188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c9f14e6f1d%3A0xdec18c8c67be52c1!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1694699596556!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
    
  

