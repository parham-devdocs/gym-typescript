import Htext from "../../components/Htext";
import { SelectedPage } from "../../types";
import { useForm } from "react-hook-form";
import ContsctUsPageGraphic from "../../assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactUs" className=" mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        className=" md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Htext>
          <span className=" text-primary-500">Join Now </span> To Get In Shape
        </Htext>
        <p className=" font-bold my-5 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis unde
          eiu liai 'p'wkiqpow q woiwopi owliqij poqiiwjij iwiiiwioie iiuqwoioue
          iiowuehi qwiuwuiue qiwuekqh quukhsdkh osoihsjdh osudoudhkj olisujs
          perferendis architecto!
        </p>
      </motion.div>
      <div className=" mt-10 justify-between gap-8 md:flex">
        <motion.div
          className=" mt-10  gap-16 md:mt-0 md:flex  space-y-5 justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            method="POST"
            action="https://formsubmit.co/pazargadiparham@gmail.com"
            className=" space-y-5"
          >
            <input
              className=" w-full rounded-lg bg-primary-300 px-5 placeholder-gray-20 py-3 outline-none"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p>
                {errors.name.type === "required" && "This field is required"}
              </p>
            )}
            {errors.name && (
              <p>
                {errors.name?.type === "maxLength" &&
                  "This field must have less than 100 words"}
              </p>
            )}

            <input
              className=" w-full rounded-lg bg-primary-300 px-5 placeholder-gray-20 py-3 outline-none"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p>
                {errors.email?.type === "required" && "This field is required"}
              </p>
            )}

            <textarea
              className="w-full rounded-lg bg-primary-300 px-5 placeholder-gray-20 py-3 outline-none"
              rows={5}
              placeholder="Message"
              {...register("message", { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className=" text-gray-500">
                {errors.message.type === "required" && "This field is required"}
              </p>
            )}
            {errors.message && (
              <p className=" text-gray-500">
                {errors.message.type === "maxLength" &&
                  "This field must have at least 2000 char"}
              </p>
            )}

            <button className=" bg-secondary-500 font-montserrat px-20 py-2 rounded-md font-semibold hover:bg-primary-500 transition-colors duration-500">
              Submit
            </button>
          </form>
          <img src={ContsctUsPageGraphic} alt="contact us image" className=" mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
