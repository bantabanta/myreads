import "../App.css";
import * as BooksAPI from "../BooksAPI";
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ListBooks from "./ListBooks";
import Search from "./AddBook";

function App() {
  const [books, setBooks] = useState([]);

  // load books at first DOM render:
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(books.concat(res));
    }
    getBooks();
  }, [])

  return (

    <Routes>
      <Route exact path="/"
        element={<ListBooks books={books} />}
      />
      <Route path="/Search"
        element={<Search books={books}/>}
      />
    </Routes>

  );
}

export default App;
