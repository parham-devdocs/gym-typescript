import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "../types";

const Sidebar = ({
  isMenuToggled,
  selectedPage,
  setSelectedPage,
}: {
  isMenuToggled: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}) => {
  return (
    <div
      className={` ${isMenuToggled ? "w-64" : "w-0"} h-screen bg-primary-500 z-50 absolute right-0 drop-shadow-xl transition-width duration-300`}
    >
      <div className="flex items-center justify-end h-full">
        <XMarkIcon className="cursor-pointer text-primary-100 w-6 h-6 m-2" />
      </div>
      <div className="    px-4 ">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={() => setSelectedPage}
        />
        <Link
          page="Benefits"
          selectedPage={selectedPage}
          setSelectedPage={() => setSelectedPage}
        />
        <Link
          page="Our classes"
          selectedPage={selectedPage}
          setSelectedPage={() => setSelectedPage}
        />
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={() => setSelectedPage}
        />
      </div>
    </div>
  );
};

export default Sidebar;
