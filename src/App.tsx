import { useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage } from "./types";
import Home from "./scenes/home/index";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/ContactUs";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isMenuToggled, setItemMenuToggle] = useState(false);
  return (
    <div className="app bg-gray-20">
      {" "}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isMenuToggled={isMenuToggled}
        setItemMenuToggle={setItemMenuToggle}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={() => setSelectedPage(selectedPage)} />
      <OurClasses setSelectedPage={() => setSelectedPage(selectedPage)} />
      <ContactUs/>
    </div>
  );
}

export default App;
