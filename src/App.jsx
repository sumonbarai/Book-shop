import Icon from "./components/UI/Icon/Icon";
import Input from "./components/UI/Input/Input";
import Text from "./components/UI/Text/Text";

function App() {
  return (
    <div>
      <Text
        as="h2"
        variant={Text.variantTypes.HEADING}
        className="bg-amber-400 uppercase"
        style={{ textDecoration: "underline" }}
        id="sumon"
      >
        hello test
      </Text>

      <Input
        type="search"
        placeholder="enter your textssssssssssssss"
        variant={Input.variantTypes.SEARCH}
      />

      <Icon variant={Icon.variantTypes.STAR_FILL} />
      <Icon variant={Icon.variantTypes.STAR_HALF} />
    </div>
  );
}

export default App;
