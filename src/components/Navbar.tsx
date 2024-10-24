import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../types";
import useMediaQuery from "../hooks/useMediaQuery";
import Actionbutton from "./Actionbutton";
import { useEffect, useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  setItemMenuToggle: (itemMenuToggle: boolean) => void;
  isMenuToggled: boolean};
const Navbar = ({
  selectedPage,
  setSelectedPage,
  setItemMenuToggle,
  isMenuToggled,
  
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width:1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  
 useEffect(() => {
   const handleScroll = () => {
     if (window.scrollY === 0) {
       setIsTopOfPage(true);
     } else {
       setIsTopOfPage(false);
     }
   };

   window.addEventListener("scroll", handleScroll);
console.log(isTopOfPage)
   // Cleanup function to remove the event listener
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, [isTopOfPage]);
  return (
    <nav>
      <div
        className={`${flexBetween} ${isTopOfPage ? " bg-gray-20" : " bg-primary-100"} transition-colors duration-300 fixed top-0  w-full py-6 z-30`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16 `}>
          <div className={` ${flexBetween}  `}>
            <img src={Logo} alt="logo" />
          </div>
          {isAboveMediaScreen ? (
            <div className={` ${flexBetween} w-full `}>
              <div className={`${flexBetween} gap-8 text-sm `}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />

                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={` ${flexBetween} gap-5`}>
                <p>Sign In</p>
                <div className=" bg-secondary-500 rounded-md px-10 py-2 ">
                  <Actionbutton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </Actionbutton>
                </div>
              </div>
            </div>
          ) : (
            <button
              className=" w-fit h-fit bg-secondary-500 p-2 rounded-full"
              onClick={() => setItemMenuToggle(!isMenuToggled)}
            >
              <Bars3Icon className=" w-6 text-primary-100" />
            </button>
          )}
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
