import { ReactNode } from "react";

const Htext = ({children}:{children:ReactNode}) => {
  return (
    <div>
          <h1 className=" basis-3/5 font-montserrat text-3xl font-bold">{ children }</h1>
    </div>
  );
}

export default Htext
