import Text from "../UI/Text/Text";

function Header() {
  return (
    <div className="mt-5">
      <Text as="h1" variant={Text.variantTypes.HEADING} className="text-center">
        Book Shop
      </Text>
    </div>
  );
}

export default Header;
