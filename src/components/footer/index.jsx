import { Mail, Phone } from "lucide-react";
import footer from "../../assets/images/footer-log.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0f2c20] pt-16">
      <div className="container max-w-[1260px] mx-auto flex flex-wrap justify-between items-start gap-10 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* 1-qism */}
        <div className="flex-1 min-w-[230px] -mt-16 mb-10 mr-10">
          <a href="#">
            <img
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
          >
            108 Amir Temur Avenue Tashkent 100200, Uzbekistan
          </a>

          <a href="tel:+998908086383" className="flex items-center gap-2 my-3">
            <Phone size={20} />
            +998 90 808 63 83
          </a>
          <a href="mailto:info@mcompany.uz" className="flex items-center gap-2">
            <Mail size={20} />
            info@mcompany.uz
          </a>
        </div>

        {/* 2-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] uppercase tracking-wide mb-6">
            Useful Links
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>
              <a href="/" aria-label="Go to homepage">
                Home
              </a>
            </li>
            <li>
              <Link to={"/about"}>About us </Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects </Link>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>

        {/* 3-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] uppercase tracking-wide mb-6">
            Our Services
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Web Development</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
          </ul>
        </div>

        {/* 4-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] uppercase tracking-wide mb-6">
            Follow Us
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>Follow us on social media to stay updated.</li>
            <li className="flex items-center gap-4 mt-18">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#1877F2] transition-colors duration-300 "
              >
                <FaFacebookF size={20}/>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#1DA1F2] transition-colors duration-300 "
              >
                <FaTwitter size={20}/>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#E4405F] transition-colors duration-300 "
              >
                <FaInstagram size={20}/>
              </a>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-white bg-[#0F2C20] p-[7px] rounded-full hover:bg-[#0088cc] transition-colors duration-300 "
              >
                <FaTelegramPlane size={20}/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* pastki qism */}
      <div className="md:mt-0 mt-10 bg-gradient-to-r from-[#1c5239] to-[#219e5a] py-5">
        <div className="container mx-auto text-center">
          <p className="text-white text-[16px]">
            © Copyright Falco community All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
