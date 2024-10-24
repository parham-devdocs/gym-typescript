import { useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage } from "./types";
import Home from "./scenes/home/index";

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
      <Home setSelectedPage={ setSelectedPage } />
    </div>
  );
}

export default App;
