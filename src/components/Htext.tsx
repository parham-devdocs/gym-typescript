import { motion } from "framer-motion";
import { ReactNode } from "react";

const Htext = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.2 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className=" basis-3/5 font-montserrat text-3xl font-bold"
      >
        {children}
      </motion.h1>
    </div>
  );
}

export default Htext
