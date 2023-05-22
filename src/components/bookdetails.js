import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook, deleteBooks } from '../redux/books/booksSlice';

function BookDetails({ book }) {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleDelete = (endPoint) => {
    dispatch(deleteBooks(endPoint))
      .then(dispatch(removeBook(endPoint)));
  };

  const handleProgress = () => {
    let pro = progress;
    if (pro < 100) {
      setProgress(pro += 5);
    }
  };

  return (
    <div className="container3">
      <div className="container6">
        <div className="title">
          {book.title}
        </div>
        <div className="author">
          {book.author}
        </div>
        <div className="book-option">
          <button type="button" className="comments-btn">
            Comments
          </button>
          <div className="divider" />
          <button
            type="button"
            className="remove-btn"
            onClick={() => handleDelete(book.item_id)}
          >
            Remove
          </button>
          <div className="divider" />
          <button type="button" className="edit-btn">
            Edit
          </button>
        </div>
      </div>
      <div className="container7">
        <div className="progressbar">
          <CircularProgressbar className="circular-bar" value={progress} />
          <div className="progresscontent">
            <span className="progress-percent">
              {progress}
              %
            </span>
            <span className="pro-complete">completed</span>
          </div>
        </div>
        <div className="divider" />
        <div className="Third-section">
          <p className="para1">CURRENT CHAPTER</p>
          <p className="para2">CHAPTER 6</p>
          <br />
          <button
            type="button"
            className="update-progress"
            onClick={handleProgress}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

BookDetails.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookDetails;
