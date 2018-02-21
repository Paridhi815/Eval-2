import React from 'react';
import { connect } from 'react-redux';
// import Book from '../Book/Book';
import './Body.css';
import { getBooks } from '../../Redux/Actions';
import Book from '../Book/Book';

// const arr = ['Book-one', 'Book-two'];

// function getRandomInt(min = 0, max = 2) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
// }

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      authorValue: [],
      books: [],
      group: {},
    };
  }
  componentDidMount() {
    fetch('/ratings', {
      method: 'GET',
    }).then(response => response.json())
      .then((data) => {
        // console.log('pari', data);

        this.props.getBooksFromDB(data);
        console.log('pari', data);
        this.setState({
          group: data,
        });
        console.log('now', this.state.group);

        // const keys = Object.keys(data);
        // // console.log('keys', keys);
        // this.setState({
        //   authorValue: keys,
        // });
        // const groups = {};
        // console.log('av', this.state.authorValue);
        // console.log('pari', data);
        // this.state.authorValue.map((author) => {
        //   groups.author = Object.values(data);
        // });
        // // console.log('hello', groups);
        // this.setState({
        //   group: groups,
        // });
        // console.log('hello', this.state.group);
        // this.state.authorValue.push(keys);
        // keys.map((key) => {
        //   const { bookid } = data[key];
        //   // console.log(bookid);
        //   fetch(`http://localhost:8000/like/${bookid}`)
        //     .then((res) => {
        //       console.log(res);
        //     });
        // });
      });
  }
  render() {
    const authors = Object.keys(this.state.group)[0];
      <br />;
    // const authors = this.state.group.keys.map(sutho => <option key={book.author} value={book.author}>{book.author}</option>);
    // const filter = (filterValue) => {
    //   let filteredDiv;
    //   if (filterValue === 'all') {
    //     filteredDiv = this.props.allBooksList.map((bookObject, index) => <Book getLikeStatus={() => this.getLikeStatus(index)} classValue={arr[getRandomInt()]} bookName={bookObject.name} authorName={bookObject.author} />);
    //   } else {
    //     filteredDiv = this.props.allBooksList.map((bookObject) => {
    //       if (bookObject.author === filterValue) {
    //         return <Book classValue={arr[getRandomInt()]} bookName={bookObject.name} authorName={bookObject.author} />;
    //       }
    //     });
    //   }
    //   return filteredDiv;
    // };
      return (
        <div className="Body-div">
          <div>
            {authors}
          </div>
          <Book />
          {/* {filter(this.state.authorValue)} */}
        </div>
      );
  }
}


const mapStateToProps = state => ({
  allBooksList: state.getList.bookList,
});

const mapDispatchToProps = dispatch => ({
  getBooksFromDB: (bookList) => {
    dispatch(getBooks(bookList));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Body);
