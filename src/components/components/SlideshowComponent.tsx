'use client'
import React, { useEffect, useState } from 'react';

export default function SlideshowComponent({ children }: any) {
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = React.Children.count(children);

  useEffect(() => {

  }, [slideIndex]);

  // Next/previous controls
  function plusSlides(n: number) {
    let newIndex = slideIndex + n;
    if (newIndex > totalSlides) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = totalSlides;
    }
    setSlideIndex(newIndex);
  }

  // Thumbnail image controls
  function currentSlide(n: number) {
    setSlideIndex(n);
  }

  // Calculate the starting index of the displayed items
  const startIndex = Math.max(1, slideIndex);

  // Calculate the ending index of the displayed items
  const endIndex = Math.min(totalSlides, slideIndex + 2);

  return (
    <div>
      <div className="relative">
        <div className="slideshow-container max-w-4xl mx-auto relative overflow-hidden">
          <div className="flex">
            {React.Children.map(children, (child, index) => (
              <div className={` flex justify-center items-centermySlides fade w-1/3 ${index + 1 >= startIndex && index + 1 <= endIndex ? 'block' : 'hidden'}`} key={index}>
                {child}
              </div>
            ))}
          </div>
        </div>
        <br />

        <div className="text-center absolute top-1/2 transform -translate-y-1/2 left-0">
          <button className="prev cursor-pointer bg-black bg-opacity-50 text-white font-bold text-xl px-4 py-2 rounded-l" onClick={() => plusSlides(-1)}>&#10094;</button>
        </div>

        <div className="text-center absolute top-1/2 transform -translate-y-1/2 right-0">
          <button className="next cursor-pointer bg-black bg-opacity-50 text-white font-bold text-xl px-4 py-2 rounded-r" onClick={() => plusSlides(1)}>&#10095;</button>
        </div>

        <div className="text-center absolute bottom-0 left-0 right-0">
          <span className="page-number">{startIndex}-{endIndex}/{totalSlides}</span>
        </div>
      </div>
    </div>
  );
}