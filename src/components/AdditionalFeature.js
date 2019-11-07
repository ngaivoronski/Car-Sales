import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { buyItem } from '../actions/actions'

const AdditionalFeature = props => {

  // NEW REDUX HOOKS CODE
  const dispatch = useDispatch();
  
  const buyItem = item => {
    dispatch({type:"ADD_ITEM",payload:item})
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// OLD HOC CODE
const mapDispatchToProps = {
  buyItem
};

export default connect(
  state => state,
  mapDispatchToProps
)(AdditionalFeature);
