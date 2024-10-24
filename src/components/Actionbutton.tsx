import React, { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types";
type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};
const Actionbutton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default Actionbutton;
