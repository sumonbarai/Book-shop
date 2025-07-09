import { useState } from "react";
import Action from "./components/Action/Action";
import BookList from "./components/Book/BookList/BookList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { data } from "./database/data";

function App() {
  const [searchByUser, setSearchByUser] = useState("");
  const [books, setBooks] = useState(structuredClone(data));

  function handleSearch() {
    return function (e) {
      setSearchByUser(e.target.value);
    };
  }

  function handleFav(id) {
    const newBooks = books.map(function (book) {
      if (book.id !== id) return book;

      return {
        ...book,
        isFav: !book.isFav,
      };
    });

    setBooks(newBooks);
  }

  /*  const filterByBook = data.filter((book) => {
    if (searchByUser === "") return true;

    // if (book.title.toLowerCase().includes(searchByUser.toLowerCase())) {
    //   return true;
    // } else {
    //   return false;
    // }

    return book.title.toLowerCase().includes(searchByUser.toLowerCase());
  }); */

  return (
    <div className=" min-h-[500px] w-3/4 mx-auto mt-5">
      <Header />
      <Action searchByUser={searchByUser} onChange={handleSearch} />
      <BookList
        data={books}
        searchByUser={searchByUser}
        handleFav={handleFav}
      />
      <Footer />
    </div>
  );
}

export default App;
