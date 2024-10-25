import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from "../../types"
import { motion } from "framer-motion";
import Htext from "../../components/Htext";
type Props = {
    setSelectedPage:(selectedPage:SelectedPage)=>void
}

const Benefits = ({setSelectedPage}:Props) => {
  return (
      <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
          <div>
              <div>
                  <Htext>More Than Just A Gym</Htext>
              </div>
         </div>
      </section>
  )
}

export default Benefits
