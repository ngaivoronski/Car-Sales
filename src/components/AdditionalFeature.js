import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { buyItem } from '../actions/actions'

const AdditionalFeature = props => {

  const Dispatch = useDispatch();
  
  const buyItem = item => {
    Dispatch({type:"ADD_ITEM",payload:item})
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapDispatchToProps = {
//   buyItem: Dispatch({type:"ADD_ITEM",payload:item})
// };

export default connect(
  state => state,
  // mapDispatchToProps
)(AdditionalFeature);
