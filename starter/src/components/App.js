import "../App.css";
import * as BooksAPI from "../BooksAPI";
import ListBooks from "./ListBooks";
import Search from "./Search";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  // load books from API on first DOM render
  // books dependency to reload on shelf change
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, [books])

  // Not sure about setting shelf to none
  // original books in API dont have a shelf
  // but it is working
  const updateShelf = (book, shelf) => {
    const setShelf = async () => {
      const res = await BooksAPI.update(book, shelf);
      book.shelf = res;
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
        <Route path="/Search"
          element={
            <Search
              books={books}
              onUpdateShelf={updateShelf}
            />}
        />
      </Routes>
    );
  }

  export default App;
