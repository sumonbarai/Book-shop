import BookItem from "../BookItem/BookItem";

function BookList({ data, searchByUser, handleFav }) {
  // function filterByBook(data) {
  //   return data.filter((book) => {
  //     if (searchByUser === "") return true;
  //     return book.title.toLowerCase().includes(searchByUser.toLowerCase());
  //   });
  // }

  // const content = filterByBook(data).map((book) => (
  //   <BookItem key={book.id} book={book} />
  // ));

  let content = [];
  data.forEach((book) => {
    if (searchByUser === "") {
      content.push(
        <BookItem key={book.id} book={book} handleFav={handleFav} />
      );
      return;
    }

    const isTrue = book.title
      .toLowerCase()
      .includes(searchByUser.toLowerCase());

    if (isTrue) {
      content.push(
        <BookItem key={book.id} book={book} handleFav={handleFav} />
      );
    }
  });

  return <div className="grid grid-cols-3 gap-2 mt-5 px-5">{content}</div>;
}

export default BookList;
