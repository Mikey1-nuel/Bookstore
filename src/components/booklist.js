import React from 'react';
import BookDetails from './bookdetails';
import Form from './form';

function BookList() {
  const Books = [
    {
      title: 'The Hunger Game',
      author: 'Suzanne Collins',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
  ];

  return (
    <div className="container3">
      <div className="booklist">
        {Books.map((book) => (
          <div className="sub-container" key={Books.indexOf(book)}>
            <div className="first-section">
              <BookDetails title={book.title} author={book.author} />
              <br />
              <div className="book-option">
                <button type="button" className="comments-btn">
                  Comments
                </button>
                <div className="divider" />
                <button type="button" className="remove-btn">
                  Removed
                </button>
                <div className="divider" />
                <button type="button" className="edit-btn">
                  Edit
                </button>
              </div>
            </div>

            <div className="second-section">
              <p>32% completed</p>
            </div>
            <div className="divider" />
            <div className="Third-section">
              <p>CURRENT CHAPTER</p>
              <p>CHAPTER 6</p>
              <br />
              <button type="button" className="updatebtn">
                UPDATE PROGRESS
              </button>
            </div>
          </div>

        ))}
      </div>
      <hr />
      <Form />
    </div>
  );
}

export default BookList;
