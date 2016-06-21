import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';

class App extends Component {
  render() {
    return <Main {...this.props} />;
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  const props = {
    date: state.date
  };
  return props;
}

export default connect(mapStateToProps)(App);
