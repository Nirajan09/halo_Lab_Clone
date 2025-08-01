import React from "react";
import Menu from "./Menu";

const MobileMenuContainer = ({ setIsHamBurgerOpen, setIsServicesOpen }) => (
  <div className="absolute left-0 top-full w-full z-40">
    <Menu setIsHamBurgerOpen={setIsHamBurgerOpen} setIsServicesOpen={setIsServicesOpen} />
  </div>
);

export default React.memo(MobileMenuContainer);
