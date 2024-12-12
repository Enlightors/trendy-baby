"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="md:pt-14">
      <div
        className="py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/trending-baby-12.png')" }}
      >
        <div className="container mx-auto max-w-xl bg-[#00B1D5] px-6 py-2 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            CONTACT US
          </h1>

          <div className="space-y-2 text-gray-100 mb-8">
            <p>
              Our number 1 goal is your satisfaction. Our customer service team
              is available to help you through the following channels:{" "}
              <a
                href="#"
                className="text-blue-200 underline hover:text-blue-400"
              >
                Help Center
              </a>
              , Contact Form or E-mail: trendingbaby@gmail.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-100"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-100"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-100"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-100"
              >
                Product
              </label>
              <select
                id="product"
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.product}
                onChange={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                required
              >
                <option value="">Please Select</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
                <option value="product3">Product 3</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-100"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="mt-1 w-full h-[100px] rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-[#2D617B] text-white rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#2D617B] focus:ring-offset-2 hover:text-[#2D617B]"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
