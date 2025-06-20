const variantTypes = {
  HEADING: "heading",
  PARAGRAPH: "paragraph",
};

const variants = {
  heading: "text-xl capitalize font-bold ",
  paragraph: "text-lg ",
};

function Text(props) {
  const {
    as = "p",
    children,
    variant = variantTypes.PARAGRAPH,
    className = "",
    ...other
  } = props;
  const Tag = as;

  let styleClass = variants[variant] + className;

  return (
    <Tag className={styleClass} {...other}>
      {children}
    </Tag>
  );
}

Text.variantTypes = variantTypes;

Object.freeze(Text);

export default Text;
