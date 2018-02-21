import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './Container.css';
import Header from '../Header/Header';


class Container extends React.Component {
  render() {
    return (
      <div>
        {/* <SideBar /> */}
        <Header headerText="The Book Shelf" />
      </div>
    );
  }
}

export default Container;
// export default connect(mapStateToProps, mapDispatchToProps)(Container);
