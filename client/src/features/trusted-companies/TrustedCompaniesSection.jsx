import { memo } from "react";
import { trustedCompanies } from "./trustedCompaniesData";
import TrustedLogosGrid from "./TrustedLogosGrid";

const TrustedCompaniesSection = () => (
  <section className="section relative flex justify-center items-center min-h-[30vh] md:min-h-[25vh] border rounded-xl p-5 border-white" aria-labelledby="trusted-companies-title">
    <p id="trusted-companies-title" className="absolute left-[25%] top-[-0.5rem] w-[50%] lg:w-[40%] bg-[#02021E] text-xs text-gray-400 text-center z-10 sm:text-[0.625rem] lg:text-base xl:text-lg">
      Trusted by global brands &amp; SMBs in the US and Europe
    </p>
    <TrustedLogosGrid logos={trustedCompanies} />
  </section>
);

export default memo(TrustedCompaniesSection);
