import { Mail, Phone } from "lucide-react";
import footer from "../../assets/images/footer-log.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0f2c20] pt-16">
      <div className="container max-w-[1260px] mx-auto mb-10 flex flex-wrap justify-between items-start gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* 1-qism */}
        <div className="flex-1 min-w-[230px] -mt-16 mb-10 mr-10">
          <a href="#">
            <img
              loading="loader"
              src={footer}
              alt="Company Logo"
              className="max-w-[180px] mb-5 block"
            />
          </a>
          <a
            href="https://maps.app.goo.gl/uWMwkSMMZnvdKLsX7"
            className="text-lg leading-relaxed max-w-[280px]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="location"
          >
            108 Amir Temur Avenue Tashkent 100200, Uzbekistan
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="phone"
            href="tel:+998908086383"
            className="flex items-center gap-2 my-3"
          >
            <Phone size={20} />
            +998 90 808 63 83
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="phone"
            href="mailto:info@mcompany.uz"
            className="flex items-center gap-2"
          >
            <Mail size={20} />
            info@mcompany.uz
          </a>
        </div>

        {/* 2-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] tracking-wide mb-6">
            Foydali havolalar
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>
              <a href="/" aria-label="Go to homepage">
                Bosh sahifa
              </a>
            </li>
            <li>
              <Link to={"/about"}>Biz haqimizda</Link>
            </li>
            <li>
              <Link to={"/projects"}>Loyihalar</Link>
            </li>
            <li>
              <HashLink smooth to="/#team">
                Jamoa
              </HashLink>
            </li>
          </ul>
        </div>

        {/* 3-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] tracking-wide mb-6">
            Tezkor havolalar
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>
              <a href="#">Bizning Yutuqlarimiz</a>
            </li>
            <li>
              <a href="#">Kutilayotgan Musobaqalar</a>
            </li>
            <li>
              <a href="#">FALCO Yangiliklari</a>
            </li>
            <li>
              <a href="#">Sayohatlar</a>
            </li>
          </ul>
        </div>

        {/* 4-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] tracking-wide mb-6">
            Bizni kuzatib boring
          </h3>
          <div className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <p>
              Yangiliklardan xabardor bo‘lish uchun bizni ijtimoiy tarmoqlarda
              kuzatib boring.
            </p>
            <li className="flex items-center gap-4 mt-10">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#1877F2] transition-colors duration-300 "
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#E4405F] transition-colors duration-300 "
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#0088cc] transition-colors duration-300 "
              >
                <FaTelegramPlane size={20} />
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* pastki qism */}
      <div className="md:mt-0 mt-0 bg-gradient-to-r from-[#1c5239] to-[#219e5a] py-5">
        <div className="container mx-auto text-center">
          <p className="text-white text-[16px]">
            © Falco hamjamiyatining barcha huquqlari himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
