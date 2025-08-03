import  { memo } from "react";

const BadgeItem = ({ imageUrl, alt, hoverContent }) => {
  return (
    <div
      className="group relative cursor-pointer w-35 h-12 flex items-center justify-center gap-6"
      tabIndex={0}
      aria-label={alt}
    >
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        className="w-full h-12 object-contain bg-[#191A2E] rounded-lg transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0"
        draggable={false}
      />
      <div className="absolute inset-0 bg-[#fbfbfd] rounded-lg flex items-center justify-center text-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 transition-opacity duration-200">
        <p className="font-semibold text-sm text-black select-none">{hoverContent}</p>
      </div>
    </div>
  );
};

export default memo(BadgeItem);
