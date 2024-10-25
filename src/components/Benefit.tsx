import AnchorLink from "react-anchor-link-smooth-scroll";
import { BenefitType, SelectedPage } from "../types";
import Actionbutton from "./Actionbutton";
import { motion } from "framer-motion";
const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible:{opacity:1,scale:1}
}

const Benefit = ({
  icon,
  title,
  description,
  setSelectedPage,
}: BenefitType & { setSelectedPage: (value: SelectedPage) => void }) => {
  return (
      <motion.div
          variants={childVariant}
      className="benefit-container mt-5 rounded-md flex flex-col items-center justify-between gap-4 border-[2px] border-gray-100 py-7 px-3 "
      onClick={() => setSelectedPage(SelectedPage.OurClasses)}
    >
      <div className="benefit-icon bg-gray-100 p-2 rounded-full">{icon}</div>
      <h3 className="benefit-title font-bold ">{title}</h3>
      <p className="benefit-description text-center font-semibold text-sm">
        {description}
      </p>
      <div className=" text-primary-500 font-montserrat font-semibold text-sm">
        <AnchorLink
          onClick={() => setSelectedPage(SelectedPage.Home)}
          href={`#home`}
        >
          Learn more
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
