import { memo } from "react";
import { useMemoizedValue } from "../../utils/useMemoizedValue";
import { BADGES, ROWS, LINKS } from "../footer/footerData";
import BadgeItem from "./BadgeItem";
import ExpandableRow from "./ExpandableRow";
import FooterLinks from "./FooterLinks";

const FooterSection = () => {
  const badges = useMemoizedValue(() => BADGES, []);
  const rows = useMemoizedValue(() => ROWS, []);
  const links = useMemoizedValue(() => LINKS, []);

  return (
    <footer className="section w-full pt-8 pb-4 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Halo Lab Footer
      </h2>

      {/* Badges */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center mb-6"
        aria-label="Awards and Partner Badges"
      >
        {badges.map(({ imageUrl, alt, hoverContent }) => (
          <BadgeItem key={alt} imageUrl={imageUrl} alt={alt} hoverContent={hoverContent} />
        ))}
      </div>

      {/* Expandable Rows */}
      <div className="mx-auto grid grid-rows-3">
        {rows.map((row, idx) => (
          <ExpandableRow key={idx} label={row} />
        ))}
        <div className="border-t border-white/10 flex justify-between mt-1" aria-hidden="true"></div>
      </div>

      {/* Bottom Links */}
      <FooterLinks links={links} />
    </footer>
  );
};

export default memo(FooterSection);
