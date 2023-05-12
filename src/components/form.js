import React from 'react';

function Form() {
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" className="booktitle" />
        <input type="text" placeholder="Book author" className="bookauthor" />
        <input type="submit" className="submitbtn" value="Add Book" />
      </form>
    </div>
  );
}
export default Form;
