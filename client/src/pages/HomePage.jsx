import React, { useState, useEffect } from "react";
import NavbarSection from '../components/header-section/NavbarSection'
import SectionsList from '../page-components/homepage-component/SectionsList'
import "../App.css"

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
