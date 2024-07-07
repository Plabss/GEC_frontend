"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import ccg from "@/assets/awards/CCG.jpg";
import gus from "@/assets/awards/GUS.jpg";
import icef from "@/assets/awards/ICEF.png";
import itac from "@/assets/awards/ITAC.jpg";
import pier from "@/assets/awards/PIER.jpg";
import bc from "@/assets/awards/British-Council.jpg";

const HomeAwards = () => {
  return (
    <section className="py-16 bg-gray-100" id="carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Professional Membership and Awards
        </h2>
        <div className="forCarouselWidth mx-auto relative">
          <style jsx global>{`
            .carousel-root .carousel {
              overflow: hidden;
            }
            .carousel-root .carousel .slider-wrapper {
              overflow: visible;
              margin: 0 -10px; /* Adjust horizontal gap */
            }
            .carousel-root .carousel .slider-wrapper .slider {
              display: flex;
              align-items: center;
            }
            .carousel-root .carousel .slider-wrapper .slider .slide {
              margin: 0 10px; /* Adjust horizontal gap between slides */
              padding: 10px; /* Add padding for border */
              border: 5px solid #ddd; /* Border styling */
              border-radius: 8px; /* Rounded corners */
              background-color: white; /* Background color */
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow */
            }
            .carousel-root .carousel .slider-wrapper .slider .slide.selected {
              transform: scale(1.1); /* Scale up the centered slide */
              transition: transform 0.5s ease;
            }
            .carousel-root .carousel .slider-wrapper .slider li {
              min-width: 20% !important;
            }
            #carousel .forCarouselWidth{
            padding : 0px !important;
          
            }
          `}</style>
          <Carousel
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={500}
            transitionTime={500}
            emulateTouch={true}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={100 / 5}
            showThumbs={false}
          >
            <div>
              <Image src={ccg} alt="Award 1" width={1200} height={750} />
            </div>
            <div>
              <Image src={gus} alt="Award 2" width={1200} height={750} />
            </div>
            <div>
              <Image src={icef} alt="Award 3" width={1200} height={750} />
            </div>
            <div>
              <Image src={itac} alt="Award 4" width={1200} height={750} />
            </div>
            <div>
              <Image src={pier} alt="Award 5" width={1200} height={750} />
            </div>
            <div>
              <Image src={bc} alt="Award 5" width={1200} height={750} />
            </div>
            <div>
              <Image src={pier} alt="Award 5" width={1200} height={750} />
            </div>
            <div>
              <Image src={itac} alt="Award 4" width={1200} height={750} />
            </div>
            <div>
              <Image src={icef} alt="Award 3" width={1200} height={750} />
            </div>
            <div>
              <Image src={gus} alt="Award 2" width={1200} height={750} />
            </div>
            <div>
              <Image src={ccg} alt="Award 1" width={1200} height={750} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HomeAwards;
