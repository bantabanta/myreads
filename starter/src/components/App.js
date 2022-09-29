import "../App.css";
import * as BooksAPI from "../BooksAPI";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListBooks from "./ListBooks";
import Search from "./Search";

function App() {
  const [books, setBooks] = useState([]);

  // load books from API at first DOM render:
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [])

  // const updateShelf = (book, shelf) => {
  //   const update = async () => {
  //     const res = await BooksAPI.update(book, shelf);
  //     setBooks(books.concat(res));
  //   }
  //   //invoke to update the book
  //   update();

  // };

  return (

    <Routes>
      <Route exact path="/"
        element={
          <ListBooks
            books={books}
          />}
      />
      <Route path="/Search"
        element={
          <Search
            books={books}
          />}
      />
    </Routes>

  );
}

export default App;
