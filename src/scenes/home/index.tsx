import React from "react";
import { SelectedPage } from "../../types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Actionbutton from "../../components/Actionbutton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediaQuery = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-6 ">
      <div className=" md:flex  items-center justify-center md:h-5/6 mx-auto w-5/6">
        <div className=" space-y-10 ">
          <div className=" space-y-10 z-10 basis-3/5 mt-32">
            <div className=" relative">
              <div className=" before:absolute before:-top-20 before:-left-12 md:before:content-evolvetext before:opacity-60">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className=" font-semibold">
              Unrivaled Gym .Unparalleled Training Fitness Classes.Studios to
              get the body shapes that you dream of ... Get your desired body
              now{" "}
            </p>
          </div>
          <div className=" flex gap-6 items-center font-semibold">
            <div className=" bg-secondary-500 rounded-md py-2 px-10 w-fit cursor-pointer transition-colors duration-300 hover:bg-primary-500 hover:text-primary-100 ">
              <Actionbutton setSelectedPage={setSelectedPage}>
                Join now
              </Actionbutton>
            </div>
            <AnchorLink
              className=" text-sm font-bold text-primary-500
             underline hover:text-secondary-500 "
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        <div>
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </div>
      {isAboveMediaQuery && (
        <div>
          <div>
            <div className=" flex bg-primary-500 justify-around py-5 items-center">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="redbull-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
