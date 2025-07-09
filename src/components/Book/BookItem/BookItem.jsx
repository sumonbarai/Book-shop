import Icon from "../../UI/Icon/Icon";
import Text from "../../UI/Text/Text";

function BookItem(props) {
  const { id, title, author, isFav } = props.book;
  const { handleFav } = props;

  return (
    <div className="border p-4 shadow-xl rounded-2xl">
      <Text>Book Name : {title}</Text>
      <Text>Author : {author} </Text>

      {isFav ? (
        <Icon
          onClick={() => handleFav(id)}
          variant={Icon.variantTypes.STAR_FILL}
        />
      ) : (
        <Icon onClick={() => handleFav(id)} variant={Icon.variantTypes.STAR} />
      )}
    </div>
  );
}

export default BookItem;
