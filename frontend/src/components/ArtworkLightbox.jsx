import { useEffect, useRef, useState } from "react";

export default function ArtworkLightbox({ artwork, onClose }) {
  const [dim, setDim] = useState({ w: 0, h: 0 });
  const imgRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onLoad = () => {
    if (imgRef.current) {
      setDim({ w: imgRef.current.clientWidth, h: imgRef.current.clientHeight });
    }
  };

  // Ellipse radii — slightly larger than the image so the line breathes around it
  const padX = 36;
  const padY = 28;
  const rx = dim.w / 2 + padX;
  const ry = dim.h / 2 + padY;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center px-6 py-10 bg-black/85 backdrop-blur-md lightbox-fade"
      data-testid="artwork-lightbox"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-[80vw] max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Circle that draws itself BEHIND the image */}
        {dim.w > 0 && (
          <svg
            className="absolute pointer-events-none z-0"
            style={{
              left: "50%",
              top: "50%",
              width: rx * 2 + 8,
              height: ry * 2 + 8,
              transform: "translate(-50%, -50%)",
              overflow: "visible",
            }}
            aria-hidden="true"
          >
            <ellipse
              cx="50%"
              cy="50%"
              rx={rx}
              ry={ry}
              fill="none"
              stroke="#e8e8e8"
              strokeWidth="1.25"
              pathLength="1"
              className="circle-draw"
            />
          </svg>
        )}

        <img
          ref={imgRef}
          src={artwork.src}
          alt={artwork.title}
          onLoad={onLoad}
          className="relative z-10 block max-w-[80vw] max-h-[80vh] object-contain shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] image-pop"
          data-testid="lightbox-image"
        />

        {/* Caption — sits below the bottom of the ellipse, never overlapping it */}
        <p
          className="absolute left-0 right-0 text-center text-xs sm:text-sm text-[#bdbdbd] caption-fade"
          style={{ top: `calc(100% + ${padY + 28}px)` }}
          data-testid="lightbox-caption"
        >
          {artwork.title}
        </p>
      </div>
    </div>
  );
}
