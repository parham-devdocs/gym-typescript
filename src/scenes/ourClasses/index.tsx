import { SelectedPage } from "../../types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import Htext from "../../components/Htext";
import { ClassType } from "../../types";
import Class from "../../components/Class";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const classes: Array<ClassType> = [
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image1,
  },
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image2,
  },
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image3,
  },
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image4,
  },
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image5,
  },
  {
    name: "weight training classes",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora tincidunt magna nostra aptent, tempor elementum eros",
    image: image6,
  },
];
const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourClasses" className=" w-full bg-primary-100 py-40  px-14">
      <motion.div
        className=" mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className=" md:w-3/5">
          <Htext>OUR CLASSES</Htext>
          <p className=" font-bold py-5">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant litora
            tincidunt magna nostra aptent, tempor elementum eros. Feugiat mus
            tortor suspendisse nulla aptent. Hendrerit rutrum tristique ipsum
            ridiculus velit dictum curae eu.
          </p>
        </div>
      </motion.div>
      <div className=" mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className=" w-[2800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={index}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
