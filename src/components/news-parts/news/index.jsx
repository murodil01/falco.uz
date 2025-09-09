import { useState } from "react";
import project_slider from "../../../assets/project_slider.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "https://picsum.photos/id/1011/600/400",
  "https://picsum.photos/id/1012/600/400",
  "https://picsum.photos/id/1013/600/400",
  "https://picsum.photos/id/1014/600/400",
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
];

const NewsComponents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = images.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-[80px] mt-30">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[400px] -z-10">
        <img
          src={project_slider}
          alt="Project Background"
          className="w-full h-[215px] object-cover"
        />
      </div>

      <div className="container mx-auto max-w-[1260px] px-4 md:px-6 relative z-10">
        <h3 className="text-4xl text-white md:text-5xl font-[700] mb-[126px] text-center">
          Our <span className="text-[#E8C777]">Projects</span>
        </h3>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left text part */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-[36px] text-[#09291B] font-[600]">Title</h3>
            <span className="text-[20px] text-[#808080] font-[600]">
              Subtitle
            </span>
            <p className="text-[#6E7074] font-[500] text-[18px] mt-[30px]">
              Donec adipiscing tristique risus nec feugiat in. Ullamcorper morbi
              tincidunt ornare massa eget egestas purus viverra. Pharetra sit
              amet aliquam id diam maecenas ultricies mi eget. Aenean euismod
              elementum nisi quis eleifend. Sit amet facilisis magna etiam
              tempor orci. Vitae et leo duis ut. Arcu cursus vitae congue
              mauris.
            </p>
          </div>

          {/* Right slider part */}
          <div className="md:w-1/2 flex flex-col items-center">
            {/* Slider Image */}
            <div className="mb-6">
              <img
                src={images[currentIndex]}
                alt={`Project ${currentIndex + 1}`}
                className="w-[320px] h-[320px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>

        {/* Pagination & Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[80px]">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="text-[#09291B] p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Pagination Numbers */}
          <div className="flex flex-wrap justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`px-4 py-2 rounded-full font-medium transition
          ${
            currentIndex === idx
              ? "bg-[#09291B] text-white"
              : "bg-white text-[#09291B]"
          }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="text-[#09291B] p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsComponents;
