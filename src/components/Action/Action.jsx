import Input from "../UI/Input/Input";

function Action({ searchByUser, onChange }) {
  return (
    <Input
      as="input"
      type="search"
      placeholder="Enter search keyword..."
      className="w-3/4 mx-auto block"
      value={searchByUser}
      onChange={onChange()}
    />
  );
}

export default Action;
