const LazyAvatar = ({ src, alt, ...props }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-10 h-10 rounded-full object-cover border-2 border-[#322570]"
    {...props}
  />
);

export default LazyAvatar;
