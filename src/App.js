import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  
};

const mapStateToProps = state => {
  return {
    // this maps the initial state to state (although it's written as state)
    state: state
  };
};

export default connect(
  // this would be the default mapping if there are no states that you import:
  // state => state,
  // otherwise the function below allows you to map the states to props for the function
  mapStateToProps,
  mapDispatchToProps
)(App);
