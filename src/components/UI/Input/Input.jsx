const variantTypes = {
  SEARCH: "search",
  TEXT: "text",
};

const variants = {
  search: "border-1 px-2 py-1 mt-1 rounded-xl ",
  text: "",
};

function Input(props) {
  const {
    as = "input",
    type = "text",
    variant = variantTypes.SEARCH,
    className = "",
    ...other
  } = props;
  const Tag = as;
  let styleClass = variants[variant] + className;
  return <input type={type} className={styleClass} {...other} />;
}

Input.variantTypes = variantTypes;
export default Input;
