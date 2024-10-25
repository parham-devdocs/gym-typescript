import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage } from "../../types";
import { motion } from "framer-motion";
import { BenefitType } from "../../types";
import Htext from "../../components/Htext";
import Benefit from "../../components/Benefit";
type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const benefits:Array<BenefitType> = [
  {
    icon: <HomeModernIcon className=" h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      " this item is a text just form filling the container and nothing more.",
  },
  {
    icon: <UserGroupIcon className=" h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      " this item is a text just form filling the container and nothing more.",
  },
  {
    icon: <AcademicCapIcon className=" h-6 w-6" />,
    title: "State of Art Facilities",
    description:
      " this item is a text just form filling the container and nothing more.",
  },
];
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
      <div>
        <div className=" md:my-5 md:w-3/5">
          <Htext>More Than Just A Gym</Htext>
                  <motion.p className=" my-5 text-sm"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                          once: true, amount: 0.5
                      }}
                      transition={{ duration: 0.5 }}
                      variants={{hidden:{opacity:0,x:-100},visible:{opacity:1,x:0}}}
                  >
            We provide world class fitness equipment ,trainers, classes and so
            on .so that you can achieve your ultimate goals with them . we
            provide support for each and every member.
          </motion.p>
              </div>
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5 }} variants={container} className=" md:flex items-center justify-between gap-8 mt-5">
                  {benefits.map((benefit: BenefitType) => { return <Benefit key={benefit.title} title={ benefit.title } icon={benefit.icon} description={benefit.description} setSelectedPage={setSelectedPage} />  })}
              </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
