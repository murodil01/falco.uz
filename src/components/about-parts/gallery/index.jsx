import worldMap from "../../../assets/worldMap.png";

const galleryImages = [
  "https://i.ytimg.com/vi/RYnN9wcEUq4/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYfyATKCcwDw==&amp;rs=AOn4CLB4kTeMrZB5aj6mDtWzsw2K00-5HQ",
  "http://images-s.kinorium.com/movie/shot/675912/w1500_1465994.jpg",
  "https://i.pinimg.com/originals/80/95/a5/8095a50ff9f1a93d5f948865fe0457e3.jpg",
  "https://avatars.mds.yandex.net/i?id=b210bdc19f501d6339cf54e4f37223ee_l-5190812-images-thumbs&n=13",
  "https://i.pinimg.com/474x/a1/b9/23/a1b9236e5350c7fa7d7a666872726ee8.jpg",
  "https://i.ytimg.com/vi/PAnfH7FcJFU/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygZMA8=&amp;rs=AOn4CLAFqEeqb1z8Ic6dooReWKvfB3TtKA",
  "https://i.pinimg.com/originals/92/fa/94/92fa9483e215b7255687eb8d333ab965.png",
  "http://images-s.kinorium.com/movie/shot/672798/w1500_54490441.jpg",
];

const Gallery = () => {
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

      <div className="container mx-auto max-w-[1260px] px-4 md:px-8">
        <h3 className="text-4xl md:text-5xl font-bold text-[#313131] text-center mb-[40px]">
          Our <span className="text-[#9C8A5D]">Gallery</span>
        </h3>
        <p className="text-center text-[#0B2727] font-[400] text-[18px] md:text-[20px] mb-[80px]">
          Visit our customers tour gallery
        </p>

        {/* Gallery Grid */}
        <div className="columns-2 md:columns-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover"
                style={{
                  height: `${200 + Math.floor(Math.random() * 100)}px`, 
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
