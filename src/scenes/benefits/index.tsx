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
import BenefitsGraphic from "../../assets/BenefitsPageGraphic.png";
import Actionbutton from "../../components/Actionbutton";
import Sparkles from "../../assets/Sparkles.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Waves from "../../assets/AbstractWaves.png";
type Props = {
  setSelectedPage: (selectedPage: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
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
  visible: { transition: { staggerChildren: 0.2 } },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
      <div>
        <div className=" md:my-5 md:w-3/5">
          <Htext>More Than Just A Gym</Htext>
          <motion.p
            className=" my-5 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            We provide world class fitness equipment ,trainers, classes and so
            on .so that you can achieve your ultimate goals with them . we
            provide support for each and every member.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" md:flex items-center justify-between gap-8 mt-5"
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                title={benefit.title}
                icon={benefit.icon}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
      </div>
          <div className=" flex flex-col md:flex-row items-center">
        <div className=" relative md:w-1/2">
          <img
            src={Waves}
            alt="waves"
            className=" absolute top-[28rem] -left-20"
          />
          <img src={BenefitsGraphic} alt="benefits-graphic-photo" />
        </div>
        <div className=" space-y-6 relative md:w-1/2 ">
          <img
            src={Sparkles}
            alt="sparkles"
            className=" absolute -bottom-32 left-10"
          />
          <Htext>
            Millions Of Happy Members Getting{" "}
            <span className=" text-primary-500">Fit</span>
          </Htext>
          <p className=" font-semibold">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Quis est enim
            in egestas urna aptent consequat proin sagittis. Nostra convallis
            commodo rutrum tellus ac vulputate duis fames. Orci volutpat metus
            nibh fermentum vestibulum. Dignissim et nisl porttitor eget etiam
            faucibus tristique. Donec eget parturient; sem mi ornare augue.
            Natoque condimentum libero porta blandit adipiscing ac. Suscipit eu
            tempus; venenatis bibendum aliquam urna. Faucibus inceptos donec sed
            laoreet ad turpis magnis. Mi fermentum odio morbi scelerisque nostra
            porttitor nostra vulputate parturient.
          </p>
          <div className=" py-2 w-fit px-10 rounded-md bg-secondary-500 text-gray-500 hover:bg-primary-500 transition-colors duration-300 cursor-pointer ">
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.Home)}
              href="#home"
            >
              Join Now
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
