import React, { useState, useEffect } from "react";
import { createTheme, useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    name: "John Doe",
    title: "Chief Strategy Officer @ Company",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus eros aliquet convallis ultricies.",
    name: "Jane Smith",
    title: "Product Manager @ TechCorp",
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Alice Johnson",
    title: "CEO @ InnovateNow",
  },
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); 
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const Theme = createTheme({
    breakpoints: {
      values: {
        md: 768
      }
    }
  })

  const isMatch = useMediaQuery(Theme.breakpoints.down('md'));

  return (
    <div className="min-h-[40vh] flex flex-col justify-center items-center p-6 px-10 space-y-4 text-center text-white relative">
      <div className="text-neutral">
        <img src="/assets/quote.svg" alt="quote.svg" />
      </div>

      <p className="text-lg md:text-xl italic">
        "{testimonials[currentIndex].text}"
      </p>

      <div>
        <p className="text-neutral font-semibold">{testimonials[currentIndex].name}</p>
        <p className="text-sm text-gray-400">{testimonials[currentIndex].title}</p>
      </div>

      <div className="w-full max-w-sm space-x-4">
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2">
          {testimonials.map((e, index) => (
            <span key={index} className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-neutral" : "bg-gray-500"}`}></span>
          ))}
        </div>
      </div>

     

      <div className={`absolute inset-0 justify-between items-center px-4 xl:px-24 ${isMatch ?  "hidden" : "flex"}`}>

        {/* left arrow  */}
        <button onClick={prevSlide} className="p-2 w-10 h-10 flex justify-center items-center bg-gray-700 rounded-full hover:bg-neutral" style={{left: "10px"}}>
          <ArrowBackIosIcon className="text-white hover:text-primary" />
        </button>

        {/* right arrow  */}
        <button onClick={nextSlide} className="p-2 w-10 h-10 bg-gray-700 rounded-full hover:bg-neutral" style={{right: "10px"}}>
          <ArrowForwardIosIcon className="text-white hover:text-primary" />
        </button>
      </div>

    </div>
  );
};

export default TestimonialCarousel;