import React from "react";

const logos = [
  {
    src: "/Carousel Logo/trulos_logo7.png",
    alt: "Integration Logo 5",
  },
  {
    src: "/Carousel Logo/123Loadboard-logo.png",
    alt: "Integration Logo 1",
  },
  {
    src: "/Carousel Logo/dat_logo_dat_f_a_vertical_digital_blue.webp",
    alt: "Integration Logo 2",
  },
  {
    src: "/Carousel Logo/pure-blue-logo.png",
    alt: "Integration Logo 3",
  },
  {
    src: "/Carousel Logo/Truckstop-logo.webp",
    alt: "Integration Logo 4",
  },
  {
    src: "/Carousel Logo/unnamed.png",
    alt: "Integration Logo 6",
  },
];

// Duplicate the logos for seamless looping
const carouselLogos = [...logos, ...logos];

const LogoCarousel: React.FC = () => {
  return (
    <div className="w-full py-10 bg-[#0a1833] flex items-center overflow-hidden relative">
      <div
        className="logo-carousel-track flex items-center gap-12"
        style={{
          animation: "logo-scroll 30s linear infinite",
        }}
      >
        {carouselLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center h-20 min-w-[120px] px-6"
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto max-w-[120px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
              draggable={false}
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-carousel-track:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .logo-carousel-track {
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel; 