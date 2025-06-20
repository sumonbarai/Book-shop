import "./Icon.css";
const variantTypes = {
  STAR: "star",
  STAR_FILL: "star_fill",
  STAR_HALF: "star_half",
};

const variants = {
  star: "bi bi-star",
  star_fill: "bi bi-star-fill",
  star_half: "bi bi-star-half",
};

function Icon(props) {
  let { variant = variantTypes.STAR, className = "", ...other } = props;

  className = " text-gray-400";
  let styleClass = variants[variant] + className;
  return (
    <div>
      <i className={styleClass} {...other}></i>
    </div>
  );
}
Icon.variantTypes = variantTypes;
export default Icon;
