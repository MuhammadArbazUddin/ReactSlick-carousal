import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductCarousal.css";

// Product data with name, image, rating, and price
const products = [
  {
    name: "Coconut Based Tinctures",
    image:
      "https://images.unsplash.com/photo-1725992340772-47fd8f8df459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    rating: 3, // Rating from 1 to 5
    price: 7.97,
  },
  {
    name: "Witchcraft Cannabis",
    image:
      "https://images.unsplash.com/photo-1725992340772-47fd8f8df459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    rating: 4,
    price: 7.97,
  },
  {
    name: "Ice Wreck",
    image:
      "https://images.unsplash.com/photo-1725992340772-47fd8f8df459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    rating: 5,
    price: 7.97,
  },
  {
    name: "Chem Dawg",
    image:
      "https://images.unsplash.com/photo-1725992340772-47fd8f8df459?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    rating: 4,
    price: 6.97,
    oldPrice: 10.97, // Old price for discount display
    discount: 15, // Discount percentage
  },
];

function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Show 4 cards by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablet screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Adjust for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container">
      <h2>Popular Products</h2>
      <p>
        Suscipit tellus mauris a diam maecenas sed enim ut sem.
        <br /> Turpis egestas maecenas pharetra convallis posuere.
      </p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.discount && (
                <div className="discount-badge">-{product.discount}%</div>
              )}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`star ${i < product.rating ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="product-price">
              {product.oldPrice && (
                <span className="old-price">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
              <span className="current-price">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
