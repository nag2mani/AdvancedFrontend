import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';

const TestimonialCarousel = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <div className="d-flex justify-content-center ccl">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              "I had a wonderful time working with Kartik; his flexibility, knowledge of human behavior, and UX design are remarkable and an asset for any client."
            </p>
          </blockquote>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              "Working with Kartik was a delightful experience. His attention to detail and creativity made the project stand out!"
            </p>
          </blockquote>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              "Kartik's ability to understand user needs and turn them into effective design solutions is truly impressive."
            </p>
          </blockquote>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default TestimonialCarousel;