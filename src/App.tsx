import { useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage  } from "./types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app bg-gray-200">
      {" "}
      {/* Corrected bg-gray-20 to bg-gray-200 */}
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <section id="home" className="h-screen bg-secondary-500">
        <h1>Home Section</h1>
      </section>
      <section id="benefits" className="h-screen bg-primary-100">
        <h1>Benefits Section</h1>
      </section>
      <section id="ourclasses" className="h-screen bg-primary-500">
        <h1>Our Classes Section</h1>
      </section>
      <section id="contactus" className="h-screen">
        <h1>Contact Us Section</h1>
      </section>
    </div>
  );
}

export default App;
