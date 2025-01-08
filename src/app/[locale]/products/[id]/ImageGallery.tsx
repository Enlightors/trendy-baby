"use client";

import React, { useState } from "react";
import { ProductImages } from "@prisma/client";
import Image from "next/image";

export default function ImageGallery({ images }: { images: ProductImages[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length].imageSrc);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(
      images[(currentIndex - 1 + images.length) % images.length].imageSrc
    );
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-5 gap-2 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => {
              setSelectedImage(image.imageSrc);
              setCurrentIndex(index);
            }}
          >
            <Image
              src={image.imageSrc}
              alt={`Product image ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4 relative">
            <div className="relative h-[60vh] mb-4">
              <Image
                src={selectedImage}
                alt="Selected product image"
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-4">
              {images.length > 1 && (
                <button
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
              )}

              <div className="flex gap-2 overflow-x-auto py-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer transition-opacity ${
                      currentIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                    onClick={() => {
                      setSelectedImage(image.imageSrc);
                      setCurrentIndex(index);
                    }}
                  >
                    <Image
                      src={image.imageSrc}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>

              {images.length > 1 && (
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
