import previous from "../../../assets/previous.png";
import previous_hero from "../../../assets/previous_hero.png";

const PreviousHero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat mt-26"
      style={{ backgroundImage: `url(${previous})` }}
    >
      <div className="max-w-[1260px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[30px] px-8 py-[90px]">
        {/* Image Section (Mobile first) */}
        <img
          src={previous_hero}
          alt="Previous Competitions"
          className="order-1 md:order-2 max-w-[300px] md:max-w-[480px] h-auto"
        />

        {/* Text Section */}
        <div className="order-2 md:order-1 flex flex-col gap-[30px] text-center md:text-left">
          <h3
            className="
              text-[36px] md:text-[60px] font-[700] leading-tight
              text-[#09291B] md:text-[#FFFFFF]
            "
          >
            Previous <span className="text-[#E8C777]">competitions</span>
          </h3>
          <p
            className="
              text-[16px] md:text-[18px] font-[400] leading-relaxed max-w-[600px]
              text-[#313131] md:text-[#FFFFFF]
            "
          >
            Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed.
            Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames
            quam fusce convallis eget pulvinar. Lorem ipsum dolor sit amet
            consectetur. Hac consequat hac arcu sed. Lectus ante ut in mattis
            ornare commodo nisi. Tortor tincidunt fames quam fusce convallis
            eget pulvinar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreviousHero;
