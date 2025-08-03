import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { useMemoizedCallback } from "../../utils/useMemoizedCallback";
import ServiceList from "./ServiceList";
import CallToAction from "./CallToAction";

const HeroServicesSection = () => {
  const designServices = useMemoizedValue(() => [
    "UI/UX design",
    "Web design",
    "Mobile app design",
    "Landing page design",
    "Branding",
  ], []);

  const devServices = useMemoizedValue(() => [
    "Web development",
    "Software development",
    "CMS development",
    "Webflow development",
    "Mobile development",
  ], []);

  const handleServiceSelect = useMemoizedCallback(label => {
    alert(`Selected ${label}`);
  }, []);

  const handleKeyDown = useMemoizedCallback((label, e) => {
    if (e.key === "Enter" || e.key === " ") handleServiceSelect(label);
  }, [handleServiceSelect]);

  return (
    <section className="section min-h-[30vh] flex flex-col items-center justify-center" aria-labelledby="services-headline">
      {/* Headline */}
      <header className="text-center mb-12">
        <h1
          id="services-headline"
          className="text-5xl md:text-6xl font-normal text-white leading-tight"
        >
          WE TAKE PRODUCTS FROM ZERO TO HERO
        </h1>
      </header>

      {/* Services Cards */}
      <div className="flex flex-col sm:flex-row gap-8 bg-white rounded-2xl p-6 md:p-10 w-full">
        <ServiceList
          services={designServices}
          onSelect={handleServiceSelect}
          onKeyDown={handleKeyDown}
          title="Design"
        />
        <ServiceList
          services={devServices}
          onSelect={handleServiceSelect}
          onKeyDown={handleKeyDown}
          title="Development"
        />
      </div>

      {/* Call to Action */}
      <CallToAction />
    </section>
  );
};

export default memo(HeroServicesSection);
