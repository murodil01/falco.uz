import { Mail, Phone } from "lucide-react";
import footer from "../../assets/images/footer-log.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#0f2c20] pt-16">
      <div className="container max-w-[1260px] mx-auto flex flex-wrap justify-between items-start gap-10 px-10">
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
          >
            108 Amir Temur Avenue Tashkent 100200, Uzbekistan 
          </a>
        </div>

        {/* 2-qism */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-semibold text-[22px] uppercase tracking-wide mb-6">
            Useful Links
          </h3>
          <ul className="space-y-4 font-[400] text-[18px] text-[#0F2C20]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Team</a>
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
            <li className="flex items-center gap-2">
              <Phone size={20} />
              <span>+998 90 808 63 83</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} />
              <a href="https://www.instagram.com/falco_uz/">info@mcompany.uz</a>
            </li>
          </ul>
        </div>
      </div>

      {/* pastki qism */}
      <div className="mt-10 bg-gradient-to-r from-[#1c5239] to-[#219e5a] py-5">
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
