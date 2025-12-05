import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Modal } from "antd";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNews, setActiveNews] = useState("");
  const [activeAbout, setActiveAbout] = useState("");
  const [newsModalVisible, setNewsModalVisible] = useState(false);
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const newsRef = useRef(null);
  const aboutRef = useRef(null);
  const [newsPos, setNewsPos] = useState({ top: 0, left: 0 });
  const [aboutPos, setAboutPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const currentPath = location.pathname;

    // News bo'limi uchun
    if (currentPath === "/expected") {
      setActiveNews("expected");
    } else if (currentPath === "/previous") {
      setActiveNews("previous");
    } else if (currentPath === "/news") {
      setActiveNews("falco");
    } else if (!["/expected", "/previous", "/news"].includes(currentPath)) {
      setActiveNews("");
    }

    // About bo'limi uchun
    if (currentPath === "/achievements") {
      setActiveAbout("achievements");
    } else if (currentPath === "/about") {
      setActiveAbout("about");
    } else if (!["/achievements", "/about"].includes(currentPath)) {
      setActiveAbout("");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal pozitsiyasini hisoblash (navbar ostidan chiqishi uchun)
  const updateModalPos = (ref, setPos) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const navbarHeight = scrolled ? 70 : 70; // navbar balandligi
      setPos({
        top: navbarHeight, // navbar ostidan
        left: rect.left,
      });
    }
  };

  const handleNewsClick = () => {
    updateModalPos(newsRef, setNewsPos);
    setNewsModalVisible(!newsModalVisible);
    setAboutModalVisible(false); // boshqa modalni yopish
  };

  const handleAboutClick = () => {
    updateModalPos(aboutRef, setAboutPos);
    setAboutModalVisible(!aboutModalVisible);
    setNewsModalVisible(false); // boshqa modalni yopish
  };

  const handleNewsSelect = (type, path) => {
    setActiveNews(type);
    setTimeout(() => {
      setNewsModalVisible(false);
      setMobileNewsOpen(false);
      navigate(path);
    }, 200);
  };

  const handleAboutSelect = (type, path) => {
    setActiveAbout(type);
    setTimeout(() => {
      setAboutModalVisible(false);
      setMobileAboutOpen(false);
      navigate(path);
    }, 200);
  };

  const getLinkClass = ({ path = "", hash = "" }) => {
    const isActive =
      path && hash
        ? location.pathname === path && location.hash === hash
        : hash
        ? location.hash === hash
        : location.pathname === path && !location.hash;

    return `${
      isActive
        ? "text-[#7A6A42] border-b-2 border-[#7A6A42]"
        : "text-[#7A6A42] border-b-2 border-transparent hover:border-[#7A6A42]"
    } pb-1 transition-all duration-300`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F7F7F7] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-[1260px] px-4 sm:px-5 md:px-7 py-[20px] flex flex-wrap items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-[60px] w-auto border-0 outline-none"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-semibold text-[16px] md:text-[18px]">
              <li>
                <HashLink
                  smooth
                  to="/#home"
                  className={getLinkClass({ path: "/", hash: "#home" })}
                >
                  Bosh sahifa
                </HashLink>
              </li>

              <li className="relative ">
                <button
                  ref={aboutRef}
                  onClick={handleAboutClick}
                  className="flex items-center gap-2 text-[#7A6A42] cursor-pointer"
                >
                  Biz haqimizda
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      aboutModalVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>

              <li className="relative">
                <button
                  ref={newsRef}
                  onClick={handleNewsClick}
                  className="flex items-center gap-2 text-[#7A6A42] cursor-pointer"
                >
                  Yangiliklar
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      newsModalVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </li>

              <li>
                <Link
                  to="/career"
                  className={getLinkClass({ path: "/career" })}
                >
                  Karyera
                </Link>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Contact Us */}
              <Link
                to="/contact"
                className="w-[140px] px-5 flex justify-center items-center  text-white font-semibold text-[16px] rounded-[40px] transition text-center"
                style={{
                  background:
                    "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
                }}
              >
                Bog’laning
              </Link>

              {/* Join Us */}
              <Link
                to="/join-us"
                className="w-[180px] px-5 py-2 border-2 border-[#7A6A42] text-[#7A6A42] font-semibold text-[16px] rounded-[40px] transition text-center"
              >
                Bizga qo’shiling!
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              aria-label="menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#7A6A42]"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-16 px-6">
          <ul className="flex flex-col space-y-6 text-[20px] font-semibold text-[#7A6A42] mt-20">
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={() => setIsOpen(false)}
                className={getLinkClass({ path: "/", hash: "#home" })}
              >
                Bosh sahifa
              </HashLink>
            </li>

            <li>
              <button
                className="flex items-center gap-2 text-[#7A6A42] cursor-pointer"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                Biz haqimizda
                <ChevronDown
                  size={20}
                  className={`${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAboutOpen && (
                <ul className="mt-2 flex flex-col gap-2">
                  <li
                    onClick={() => handleAboutSelect("about", "/about")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeAbout === "travel"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Biz haqimizda
                  </li>
                  <li
                    onClick={() => handleAboutSelect("travel", "/travel")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeAbout === "about"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Sayohatlar
                  </li>

                  <li
                    onClick={() => handleAboutSelect("projects", "/projects")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeAbout === "projects"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Loyihalar
                  </li>

                  <li
                    onClick={() =>
                      handleAboutSelect("achievements", "/achievements")
                    }
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeAbout === "achievements"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Yutuqlar
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                className="flex items-center gap-2 text-[#7A6A42] cursor-pointer"
                onClick={() => setMobileNewsOpen(!mobileNewsOpen)}
              >
                Yangiliklar
                <ChevronDown
                  size={20}
                  className={`${mobileNewsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileNewsOpen && (
                <ul className="mt-2 flex flex-col gap-2">
                  <li
                    onClick={() => handleNewsSelect("expected", "/expected")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeNews === "expected"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Kutilayotgan tanlovlar
                  </li>
                  <li
                    onClick={() => handleNewsSelect("previous", "/previous")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeNews === "previous"
                        ? "bg-[#F7F7F7] text-[#09291]"
                        : ""
                    }`}
                  >
                    Yetakchi Loyihalar
                  </li>
                  <li
                    onClick={() => handleNewsSelect("falco", "/news")}
                    className={`cursor-pointer px-2 py-2 rounded-[10px] ${
                      activeNews === "falco" ? "bg-[#F7F7F7] text-[#09291]" : ""
                    }`}
                  >
                    Falco yangiliklari
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/career"
                onClick={() => setIsOpen(false)}
                className={getLinkClass({ path: "/career" })}
              >
                Karyera
              </Link>
            </li>
          </ul>

          <div className="flex flex-col space-y-4 mt-8 border-t pt-6 border-[#7A6A42]">
            {/* Contact Us */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3  text-white text-[18px] rounded-[40px] hover:bg-[#7A6A42] transition text-center"
              style={{
                background:
                  "linear-gradient(99.32deg, #191B21 0.56%, rgba(34, 167, 93, 0.9) 59.52%, #22A75D 117.27%)",
              }}
            >
              Bog’laning
            </Link>

            {/* Join Us */}
            <Link
              to="/join-us"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 border-2 border-[#7A6A42] text-[#7A6A42] text-[18px] rounded-[40px] hover:bg-[#0F2C20] hover:text-white transition text-center"
            >
              Bizga qo'shiling
            </Link>
          </div>
        </div>
      )}

      {/* Desktop About Modal */}
      <Modal
        open={aboutModalVisible}
        onCancel={() => setAboutModalVisible(false)}
        footer={null}
        centered={false}
        closable={true}
        getContainer={false}
        mask={false}
        style={{
          position: "fixed",
          top: aboutPos.top,
          left: aboutPos.left,
          margin: 0,
        }}
        className="custom-modals hidden md:block"
        zIndex={60}
      >
        <h3 className="text-[#7A6A42] font-[600] text-[16px] mb-2">
          Biz haqimizda
        </h3>
        <div className="flex flex-col gap-1">
          <p
            onClick={() => handleAboutSelect("travel", "/travel")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeAbout === "travel"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Sayohatlar
          </p>

          <p
            onClick={() => handleAboutSelect("projects", "/projects")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeAbout === "projects"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Loyihalar
          </p>

          <p
            onClick={() => handleAboutSelect("achievements", "/achievements")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeAbout === "achievements"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Yutuqlar
          </p>

          <p
            onClick={() => handleAboutSelect("about", "/about")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeAbout === "about"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Biz haqimizda
          </p>
        </div>
      </Modal>

      {/* Desktop News Modal */}
      <Modal
        open={newsModalVisible}
        onCancel={() => setNewsModalVisible(false)}
        footer={null}
        centered={false}
        closable={true}
        getContainer={false}
        mask={false}
        style={{
          position: "fixed",
          top: newsPos.top,
          left: newsPos.left,
          margin: 0,
        }}
        className="custom-modal hidden md:block"
        zIndex={60}
      >
        <h3 className="text-[#7A6A42] font-[600] text-[16px] mb-2">
          Yangiliklar
        </h3>
        <div className="flex flex-col gap-1">
          <p
            onClick={() => handleNewsSelect("expected", "/expected")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeNews === "expected"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Kutilayotgan tanlovlar
          </p>
          <p
            onClick={() => handleNewsSelect("previous", "/previous")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeNews === "previous"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Yetakchi loyihalar
          </p>
          <p
            onClick={() => handleNewsSelect("falco", "/news")}
            className={`cursor-pointer font-[600] text-[16px] px-2 py-2 rounded-md transition-colors ${
              activeNews === "falco"
                ? "bg-[#F7F7F7] text-[#09291B]"
                : "text-[#313131] hover:bg-gray-100"
            }`}
          >
            Falco yangiliklari
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
