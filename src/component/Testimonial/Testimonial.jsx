import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/100x100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/100x100",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    name: "Alex Johnson",
    image: "https://via.placeholder.com/100x100",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Maria Garcia",
    image: "https://via.placeholder.com/100x100",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // Show 3 cards by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: function (i) {
      return <div className="custom-dot">{/* Custom content for dots */}</div>;
    },
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet screens
        settings: {
          slidesToShow: 2, // Show 2 cards on tablet
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile screens
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-container">
      <h2>Your Trust is Our Top Concern</h2>
      <p>
        Feugiat sed lectus vestibulum mattis ullamcorper velit. <br /> Sed
        pulvinar proin gravida hendrerit lectus
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-image-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <p className="testimonial-review">"{testimonial.review}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
