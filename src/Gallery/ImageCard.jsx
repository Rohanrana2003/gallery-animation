import { forwardRef } from "react";
import "./Gallery.css";

const ImageCard = forwardRef(({ src, alt }, ref) => {
  return (
    <div className="masonry-item" ref={ref}>
      <div className="image-container">
        <img src={src} alt={alt} className={`gallery-image loaded`} />
      </div>
    </div>
  );
});

export default ImageCard;
