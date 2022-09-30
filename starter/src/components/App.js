import "../App.css";
import * as BooksAPI from "../BooksAPI";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  // load 'books' from API on first DOM render.
  // books dependency to rerender on 'books' state change.
  useEffect(() => {
    const getBooks = async () => {
      setBooks(await BooksAPI.getAll());
    };
    getBooks();
  }, [books]);

  // API handles shelf update with a POST
  const updateShelf = (book, shelf) => {
    const setShelf = async () => {
      await BooksAPI.update(book, shelf);
    };
    setShelf();
  };

  return (
    <Routes>
      <Route exact path="/"
        element={
          <ListBooks
            books={books}
            onUpdateShelf={updateShelf}
          />}
      />
      <Route path="/search"
        element={
          <SearchBooks
            books={books}
            onUpdateShelf={updateShelf}
          />}
      />
    </Routes>
  );
}

export default App;
