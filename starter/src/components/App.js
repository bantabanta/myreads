import * as BooksAPI from "../BooksAPI";
import "../App.css";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  // test for node modules
  // Load 'books' array from API on first DOM render (GET).
  // Books dependency forces rerender on 'books' state chagne.
  useEffect(() => {
    const getBooks = async () => {
      setBooks(await BooksAPI.getAll());
    };
    getBooks();
  }, [books]);

  // API handles shelf update (PUT)
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
