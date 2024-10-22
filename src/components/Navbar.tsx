import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../types";

type Props = {
  
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};
const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 bg-primary-100 w-full py-6 z-30`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 gap-16 `}>
          <div className={` ${flexBetween}  `}>
            <img src={Logo} alt="logo" />
          </div>
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
            <div className=" flex gap-8">
              <p>Sign In</p>
              <p>Become a Member</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
