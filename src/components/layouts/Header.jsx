import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [show, setshow] = useState(false);

  return (
    <header className="relative">
      <Container className={"lg:py-2 py-5 w-[390px] lg:w-[1320px]"}>
        <Flex className={"justify-between lg:justify-normal"}>
          {/* Logo */}
          <Link to={""}>
            <Images imgSrc={logo} />
          </Link>
          {/* Logo */}
          {/* Desktop Menu */}
          <nav className="ml-[115px] mr-16 hidden lg:block">
            <ul className="lg:flex items-center gap-x-[55px] font-semibold text-primaryTwo text-base">
              <li><Link to={""}>Home</Link></li>
              <li>
                <Link to={""} className=" flex items-center gap-x-1">
                  About <FaAngleDown />
                </Link>
              </li>
              <li><Link to={""}>Courses</Link></li>
              <li><Link to={""}>Pages </Link></li>
              <li><Link to={"/blog"}> Blog</Link></li>
              <li><Link to={""}> Shop</Link></li>
            </ul>
          </nav>
          {/* Mobile Device Icon */}
          <div
            className="block lg:hidden text-3xl text-primaryTwo cursor-pointer"
            onClick={() => setshow(!show)}
          >
            <CgMenuRight />
          </div>
          {/* Mobile Menu with Duration */}
          <nav 
            className={`absolute left-1/2 lg:hidden backdrop-blur-lg border-2 border-gray-300 rounded-3xl p-5 w-[90%] -translate-x-1/2 text-center 
            transition-all duration-400 ease-in-out z-50 
            ${show ? "top-25 opacity-100 visible" : "top-20 opacity-0 invisible"}`}
          >
            <ul className="flex-col flex gap-y-5 font-semibold text-primaryTwo text-base text-center">
              <li><Link to={""}>Home</Link></li>
              <li>
                <Link to={""} className="flex items-center gap-x-1 justify-center">
                  About <FaAngleDown />
                </Link>
              </li>
              <li><Link to={""}>Courses</Link></li>
              <li><Link to={""}>Pages </Link></li>
              <li><Link to={""}> Blog</Link></li>
              <li><Link to={""}> Shop</Link></li>
            </ul>
            <div className="bg-primarys py-4 px-4 mt-5 rounded-full w-[250px] mx-auto lg:hidden">
              <Link to={""}>
                <Flex className={"gap-x-4"}>
                  <div className="text-primarys bg-white text-[28px] p-3 rounded-full">
                    <FiPhoneCall />
                  </div>
                  <div className="text-white font-semibold ">
                    <p className="text-[18px]">(303) 555-0105</p>
                    <p className="text-sm">Call to Questions</p>
                  </div>
                </Flex>
              </Link>
            </div>
          </nav>
          {/* Mobile Menu End */}
          {/* Search & User */}
          <Flex className={"gap-x-3 text-primaryTwo text-xl hidden lg:flex"}>
            <Link to={""}><FiSearch /></Link>
            <Link to={""}><FaRegUser /></Link>
          </Flex>
          {/* Button */}
          <div className="bg-primarys py-4 pl-4 pr-12.5 rounded-tl-full rounded-bl-full ml-25 hidden lg:block">
            <Link to={""}>
              <Flex className={"gap-x-4"}>
                <div className="text-primarys bg-white text-[28px] p-3 rounded-full">
                  <FiPhoneCall />
                </div>
                <div className="text-white font-semibold ">
                  <p className="text-[18px]">(303) 555-0105</p>
                  <p className="text-sm">Call to Questions</p>
                </div>
              </Flex>
            </Link>
          </div>
          {/* Button */}
        </Flex>
      </Container>
    </header>
  );
};

export default Header;