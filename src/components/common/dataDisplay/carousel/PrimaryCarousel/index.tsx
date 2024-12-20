/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';

interface CarouselProps {
  slides: string[]; // Type for the slides prop, an array of image URLs
}

const PrimaryCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [dragDistance, setDragDistance] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    // Add the event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragDistance(0); // Reset drag distance
    setIsDragging(true); // Start dragging
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (startX === null) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setDragDistance(diff); // Update drag distance
  };

  const handleMouseUp = () => {
    if (dragDistance > 100) {
      goToPrev();
    } else if (dragDistance < -100) {
      goToNext();
    }
    setStartX(null);
    setDragDistance(0);
    setIsDragging(false); // End dragging
  };

  const handleDoubleClick = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div
        className={`relative w-[320] mx-auto overflow-hidden rounded-2xl ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Ensure it stops dragging if the mouse leaves
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Carousel wrapper */}
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragDistance}px))`,
          }}
        >
          {slides.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full px-2">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="block object-cover rounded-2xl"
                style={{ width: '320px', height: '445px' }} // Fixed size
                draggable={false} // Disable image dragging
                onDoubleClick={handleDoubleClick} // Open modal on double-click
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex space-x-3 bottom-5 left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={goToPrev}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
            </svg>
          </span>
        </button>
        <button
          onClick={goToNext}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 group-hover:bg-white/70">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative">
            <img
              src={slides[currentIndex]}
              alt="Modal View"
              className="max-w-full max-h-full rounded-lg"
              style={{ width: '90vw', height: '90vh', objectFit: 'contain' }}
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 p-2 bg-white/70 rounded-full"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {/* Previous Button */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/70 rounded-full"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/70 rounded-full"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PrimaryCarousel;
