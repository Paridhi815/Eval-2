import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => (
  <div className="Book-div">
    <div className={props.classValue} />
    <div className="Book-details">
      {props.bookName}
      {props.authorName}
      <br />
      <button onClick={() => props.getLikeStatus()}>like</button>
    </div>
    <div className="Book-rating" />
  </div>
);

Book.propTypes = {
  bookName: PropTypes.string,
};

Book.defaultProps = {
  bookName: 'hello',
};

const mapStateToProps = state => ({
  allBooksList: state.getList.bookList,
});

// const mapDispatchToProps = dispatch => ({
//   getLikeStatus: () => dispatch(getLikeStatus()),
// });


export default connect(mapStateToProps, null)(Book);
