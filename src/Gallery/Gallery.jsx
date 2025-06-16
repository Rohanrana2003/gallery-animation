import { useEffect, useRef, useState } from "react";
import ImageCard from "./ImageCard";
import "./Gallery.css";
import { galleryImages } from "../utils/constantData";
import { gsap } from "gsap";
import AnimationOverlay from "./AnimationOverlay";

const Gallery = () => {
  const [showGallery, setShowGallery] = useState(true);
  const galleryRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   setShowGallery(true);
    // }, 1900);
    if (!galleryRef.current) return;

    const items = galleryRef.current.querySelectorAll(".masonry-item");
    const container = galleryRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = {
      x: containerRect.left + containerRect.width / 2,
      y: containerRect.top + containerRect.height / 2,
    };

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };

      // Determine quadrant
      const quadrantX = itemCenter.x < containerCenter.x ? -1 : 1;
      const quadrantY = itemCenter.y < containerCenter.y ? -1 : 1;

      gsap.set(item, {
        opacity: 0,
        delay: 2,
        x: quadrantX * 400,
        y: quadrantY * 500,
        scale: 0.7,
      });
    });

    gsap.to(items, {
      delay: 2,
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "none",
      stagger: {
        amount: 0.7,
        from: "center",
      },
    });
  }, []);

  return (
    <div className="page-container">
      {/* White Gradient Overlay and Sliding animation */}
      <AnimationOverlay />

      {showGallery && (
        <div className="main-content" ref={mainContentRef}>
          <div className="masonry-container" ref={galleryRef}>
            {galleryImages.map((image) => (
              <ImageCard
                key={image.id}
                src={image.src}
                alt={image.alt}
                description={image.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
