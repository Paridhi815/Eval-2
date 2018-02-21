import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Book.css';

const Book = props => (
  <div className="Book-div">
    <img className="Book-image" src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"  />
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
