import worldMap from "../../../assets/worldMap.png";
import gallery1 from "../../../assets/gallery/gallery1.png";
import gallery2 from "../../../assets/gallery/gallery2.png";
import gallery3 from "../../../assets/gallery/gallery3.png";
import gallery4 from "../../../assets/gallery/gallery4.png";
import gallery5 from "../../../assets/gallery/gallery5.png";
import gallery6 from "../../../assets/gallery/gallery6.png";
import gallery7 from "../../../assets/gallery/gallery7.png";
import gallery8 from "../../../assets/gallery/gallery8.png";
import gallery9 from "../../../assets/gallery/gallery9.png";
import gallery10 from "../../../assets/gallery/gallery10.png";
import gallery11 from "../../../assets/gallery/gallery11.png";
import gallery12 from "../../../assets/gallery/gallery12.png";
import gallery13 from "../../../assets/gallery/gallery13.png";
import gallery14 from "../../../assets/gallery/gallery14.JPG";
import gallery15 from "../../../assets/gallery/gallery15.jpg";
import gallery16 from "../../../assets/gallery/gallery16.jpg";

// Rasmlar ro'yxati
const galleryImages = [
  { id: 1, image: gallery1 },
  { id: 2, image: gallery2 },
  { id: 3, image: gallery3 },
  { id: 4, image: gallery4 },
  { id: 5, image: gallery5 },
  { id: 6, image: gallery6 },
  { id: 7, image: gallery7 },
  { id: 8, image: gallery8 },
  { id: 9, image: gallery9 },
  { id: 10, image: gallery10 },
  { id: 11, image: gallery11 },
  { id: 12, image: gallery12 },
  { id: 13, image: gallery13 },
  { id: 14, image: gallery14 },
  { id: 15, image: gallery15 },
  { id: 16, image: gallery16 },
];

// 3 qatorga bo‘lamiz
const firstRowImages = galleryImages.slice(0, 5);
const secondRowImages = galleryImages.slice(5, 10);
const thirdRowImages = galleryImages.slice(10, 16);

// Infinite scroll komponent
const InfiniteScrollRow = ({ images, direction }) => {
  const animationName = direction === "down" ? "scroll-down" : "scroll-up";
  const repeatedImages = [...images, ...images];

  return (
    <div className="h-[600px] overflow-hidden">
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `${animationName} 20s linear infinite`,
        }}
      >
        {repeatedImages.map((img, index) => (
          <img
            key={index}
            src={img.image}
            alt="gallery"
            className="w-full h-[200px] object-cover rounded-xl hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="relative py-[100px]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={worldMap}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Falco <span className="text-[#9C8A5D]">Gallereyasi</span>
        </h3>

        <p className="text-center mb-[60px]">
          Falco — bu harakat, o‘sish va ilhom. Galereyamiz orqali jamoamiz
          hayotidan lavhalarni tomosha qiling.
        </p>

        {/* 3 QATOR */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 1-qator pastga */}
          <InfiniteScrollRow images={firstRowImages} direction="down" />

          {/* 2-qator tepaga */}
          <InfiniteScrollRow images={secondRowImages} direction="up" />

          {/* 3-qator pastga */}
          <InfiniteScrollRow images={thirdRowImages} direction="down" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
