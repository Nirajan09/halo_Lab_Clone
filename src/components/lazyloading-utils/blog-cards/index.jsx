
const LazyImage = ({ src, alt = "", className = "", ...rest }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    draggable={false}
    className={className}
    {...rest}
  />
);
export default LazyImage;
