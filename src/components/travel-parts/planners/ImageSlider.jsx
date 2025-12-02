import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const images = [
  "https://i.ytimg.com/vi/Sd3wEwOMt34/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGD8gXyhlMA8=&rs=AOn4CLADisilrq2sIl_KnLoiZ28jLABJpw",
  "https://i.pinimg.com/736x/d6/62/25/d66225456e0766bc4c1fefa908090a94.jpg",
  "https://avatars.mds.yandex.net/i?id=9e9f0991b2c13f7070fa5b7de58cb84ae30afe2d-5552240-images-thumbs&n=13",
  "https://i.pinimg.com/736x/11/4c/63/114c638e66ce32cce383018a21be76a6.jpg",
  "https://avatars.mds.yandex.net/i?id=89fccc871bad5608f797fe15b6e340258c95584e-16433653-images-thumbs&n=13",
  "https://img2.wallspic.com/attachments/originals/1/5/0/3/0/103051-landscape-ecosystem-sky-naturereserve-mountscenery-3840x2400.jpg",
];

const ImageSlider = () => {
  const [midImage, setMidImage] = useState(0);
  const [leftImage, setLeftImage] = useState(images.length - 1);
  const [rightImage, setRightImage] = useState(1);

  // Har safar o‘rtadagi rasm o‘zgarganda yon rasmlarni hisoblaymiz
  useEffect(() => {
    if (midImage === 0) {
      setLeftImage(images.length - 1);
      setRightImage(1);
    } else if (midImage === images.length - 1) {
      setLeftImage(midImage - 1);
      setRightImage(0);
    } else {
      setLeftImage(midImage - 1);
      setRightImage(midImage + 1);
    }
  }, [midImage]);

  const nextImage = () => {
    setMidImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setMidImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="ImageSlider">
      <div className="ImageSliderContainer">
        <div className="Images">
          {/* Chapdagi kichik rasm */}
          <img src={images[leftImage]} alt="leftImage" className="leftImage" />
          {/* O‘rtadagi katta rasm */}
          <img
            src={images[midImage]}
            alt="middleImage"
            className="middleImage"
          />
          {/* O‘ngdagi kichik rasm */}
          <img
            src={images[rightImage]}
            alt="rightImage"
            className="rightImage"
          />
        </div>
      </div>

      {/* Tugmalar */}
      <div className="buttons">
        <button className="leftButton" onClick={prevImage}>
          <ChevronLeft />
        </button>
        <button className="rightButton" onClick={nextImage}>
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="dotsPlace">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dots ${midImage === index ? "activeDot" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
