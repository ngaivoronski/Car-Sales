import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { removeFeature } from '../actions/actions'

const AddedFeature = props => {

  const Dispatch = useDispatch();
  
  const removeFeature = item => {
    Dispatch({type:"REMOVE_ITEM",payload:item})
  };


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
