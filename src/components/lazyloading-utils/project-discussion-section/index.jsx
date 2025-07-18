const LazyImage = ({ src, alt = "", className = "", ...props }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className={className}
    {...props}
  />
);

export default LazyImage;
