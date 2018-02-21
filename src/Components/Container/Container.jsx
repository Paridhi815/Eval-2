import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import './Container.css';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Body from '../Body/Body';


class Container extends React.Component {
  render() {
    return (
      <div className="Container-div">
        <SideBar />
        <div className="Container-right">
          <Header headerText="The Book Shelf" />
          <Body />
        </div>
      </div>
    );
  }
}

export default Container;
// export default connect(mapStateToProps, mapDispatchToProps)(Container);
