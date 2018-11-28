import React from 'react';
import { connect } from 'react-redux'; 

import Link from '../components/link';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    isSelected: ownProps.filterType === state.visibilityFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filterType))
  }
};

// Container component that populate necessary props for Link
export default connect(mapStateToProps, mapDispatchToProps)(Link);