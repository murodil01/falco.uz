import React from 'react';
import worldMap from "../../../assets/worldMap.png";
import gallery1 from "../../../assets/gallery/gallery1.png";
import gallery2 from "../../../assets/gallery/gallery2.png";
import gallery3 from "../../../assets/gallery/gallery3.png";
import gallery4 from "../../../assets/gallery/gallery4.png";
import gallery5 from "../../../assets/gallery/gallery5.png";
import gallery6 from "../../../assets/gallery/gallery6.png";
import gallery7 from "../../../assets/gallery/gallery7.png";
import gallery8 from "../../../assets/gallery/gallery8.png";

// Rasm ma'lumotlari
const galleryImages = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
  { id: 7, image: gallery7 },
  { id: 8, image: gallery8 },
];

// Tasvirlarni ikki qatorga ajratish
const firstRowImages = galleryImages.slice(0, 4);
const secondRowImages = galleryImages.slice(4, 8);

/**
 * Ushbu komponent cheksiz (faqat oldinga) aylanuvchi
 * ikki qatorli rasm galereyasini aks ettiradi.
 */
const Gallery = () => {
  // Cheksiz aylanish effekti uchun slaydlar to'plamini ikki marta takrorlash
  const repeatedFirstRow = [...firstRowImages, ...firstRowImages];
  const repeatedSecondRow = [...secondRowImages, ...secondRowImages];

  // Cheksiz aylanish effekti uchun alohida komponent
  const InfiniteScrollRow = ({ images, direction = 'forward' }) => {
    // CSS animatsiya nomi. Bu nom `index.css`dagi @keyframes bilan mos kelishi kerak.
    const animationName = direction === 'forward' ? 'scroll-forward' : 'scroll-backward';
    
    return (
      <div className="relative overflow-x-hidden whitespace-nowrap py-2"> 
        <div 
          className="flex space-x-4 md:space-x-6"
          // `index.css` da aniqlangan animatsiya to'g'ridan-to'g'ri style atributida ishlatiladi
          style={{ animation: `${animationName} 40s linear infinite` }} 
        >
          {images.map((img, index) => (
            <div
              key={index}
              // Rasmlar bir xil kenglikda bo'lishi va buralishga yo'l qo'ymasligi uchun
              className="inline-block flex-shrink-0 w-[200px] md:w-[300px] h-[150px] md:h-[200px] overflow-hidden rounded-[15px]" 
            >
              <img
                src={img.image}
                alt={`Gallery ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-[100px] text-[#09291B]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={worldMap}
          alt="World Map Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div> {/* overlay */}
      </div>

      <div className="px-4 md:px-8">
        {/* Sarlavha qismi */}
        <h3 className="text-4xl md:text-5xl font-bold text-[#313131] text-center mb-[40px]">
          Falco <span className="text-[#9C8A5D]">Gallereyasi</span>
        </h3>
        <p className="text-center text-[#0B2727] font-[400] text-[18px] md:text-[20px] mb-[80px]">
          Falco — bu harakat, o‘sish va ilhom manbai. Galereyamiz orqali bizning
          safarimiz, yutuqlarimiz va jamoamizning ruhini <br /> his eting.
        </p>

        {/* Ikkita Cheksiz Aylanuvchi Qator */}
        <div className="space-y-4 md:space-y-6">
          {/* Ikkala qator ham faqat oldinga (o'ngdan chapga) harakatlanadi */}
          <InfiniteScrollRow images={repeatedFirstRow} direction="forward" />
          <InfiniteScrollRow images={repeatedSecondRow} direction="back" />
        </div>

      </div>
    </section>
  );
};

export default Gallery;