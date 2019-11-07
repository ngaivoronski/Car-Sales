import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { removeFeature } from '../actions/actions'

const AddedFeature = props => {

  // NEW REDUX HOOKS CODE
  const dispatch = useDispatch();
  
  const removeFeature = item => {
    dispatch({type:"REMOVE_ITEM",payload:item})
  };


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button is-danger is-outlined" onClick={() => removeFeature(props.feature)}>
      <span>Delete</span>
      </button>
      {props.feature.name}
    </li>
  );
};


// OLD HOC CODE
const mapDispatchToProps = {
  removeFeature
};

export default connect(
  state => state,
  mapDispatchToProps
)(AddedFeature);
