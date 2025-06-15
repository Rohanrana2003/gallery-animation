const OverlayScroll = ({ scrollNumber }) => (
  <div className={`overlay-scroll scroll-${scrollNumber}`}>
    {Array(16)
      .fill("")
      .map((_, i) => (
        <img
          key={i}
          src={`src/assets/gallery/Scroll${scrollNumber}/Image0${i + 1}.png`}
          loading="lazy"
          alt="Scroll Image"
        />
      ))}
  </div>
);

export default OverlayScroll;
