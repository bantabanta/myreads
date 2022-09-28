import { useState } from "react";
import { Link } from "react-router-dom";

const ListBooks = () => {
  const [myBooks, setMyBooks] = useState({
    title: 'testTitle',
    authors: 'testAuthors',
    shelf: 'testShelf',
    imageLinks: 'testLink'});
  console.log(myBooks);


  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>


          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 188,
                          backgroundImage:
                          `url(test book.imageLinks.smallThumbnail)`,
                        }}
                      >book.imageLinks.
                      smallThumbnail</div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">book.title</div>
                    <div className="book-authors">book.authors</div>
                    <div className="book-authors">book.shelf</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>




          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 192,
                          backgroundImage:
                            'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">Remove</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">
                      Harry Potter and the Sorcerer's Stone
                    </div>
                    <div className="book-authors">J.K. Rowling</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 192,
                          backgroundImage:
                            'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
                        }}
                      ></div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">Remove</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">
                      The Adventures of Tom Sawyer
                    </div>
                    <div className="book-authors">Mark Twain</div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>


      <div className="open-search">
        <Link className="open-search" to="/search" >
          Add a Book
        </Link>
      </div>
    </div>
  )
};

export default ListBooks;
