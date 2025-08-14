import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    setIsSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-semibold">Contact Us</h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2b3658]">
            For Inquiries or Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Please use the form or call us on 123-456-7890
          </p>

          {isSubmitted && (
            <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm sm:text-base">
              Your message has been successfully submitted!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B132B] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B132B] rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B132B] rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject of your message"
                  className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B132B] rounded"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Leave us a message...
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here"
                className="w-full p-3 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B132B] rounded"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#303d63] text-white font-semibold rounded-lg hover:bg-[#0B132B] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-8 lg:mt-0">
          <img
            src="https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg"
            alt="Contact"
            className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg lg:max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
