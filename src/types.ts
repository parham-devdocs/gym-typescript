import React from "react"

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type BenefitType = {
  icon: React.JSX.Element,
  title: string
  description:string
}