import React, { useState, useEffect } from "react";
import SectionsList from '../page-components/homepage-component/SectionsList'
import "../App.css"
import NavbarSection from "../features/header/NavbarSection";

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
