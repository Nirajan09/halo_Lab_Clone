import React, { useState, useEffect } from "react";
import SectionsList from './SectionsList'
import "../../App.css"
import NavbarSection from "../header/NavbarSection";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='my-container'>
      <NavbarSection />
      <SectionsList loading={loading} />
    </div>
  );
}

export default React.memo(Home);
