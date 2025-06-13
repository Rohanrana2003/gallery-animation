import { useLayoutEffect, useRef } from "react";
import ImageCard from "./ImageCard";
import "./Gallery.css";
import { galleryImages } from "../utils/constantData";
import { gsap } from "gsap";

const Gallery = () => {
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
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
        x: quadrantX * 500,
        y: quadrantY * 500,
        opacity: 0,
        scale: 0.7,
      });
    });

    gsap.to(items, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      stagger: {
        amount: 0.8,
        from: "center",
      },
    });
  }, []);

  return (
    <div className="page-container">
      <div className="main-content">
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
    </div>
  );
};

export default Gallery;
