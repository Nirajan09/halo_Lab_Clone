export default function SocialIcons({ icons }) {
  return (
    <>
      <div className="mb-2 uppercase text-sm text-white/70 font-normal">Follow us here:</div>
      <div className="flex gap-4 mt-2">
        {icons.map(({ icon: Icon, hover, label, href }, idx) => (
          <a
            key={idx}
            href={href}
            tabIndex={0}
            className={`rounded-full p-2 sm:p-3 border border-white text-white transition-all duration-200 hover:bg-white hover:scale-110 hover:shadow-lg focus:bg-white focus:scale-110 focus:shadow-lg ${hover} cursor-pointer`}
            aria-label={label}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon />
          </a>
        ))}
      </div>
    </>
  );
}
