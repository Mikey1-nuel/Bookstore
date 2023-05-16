import React from 'react';
import PropTypes from 'prop-types';

function BookDetails(props) {
  const { title, author } = props;
  return (
    <div className="author">
      <div className="title">
        Title:
        { title }
      </div>
      <div className="author">
        Author:
        { author }
      </div>
      <div className="title">
        <button className="deletebtn" type="button">Delete</button>
      </div>
    </div>
  );
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails;
