import { connect } from 'react-redux';
import Navbar from '../components/navbar';

function mapStateToProps(state) {
  const props = {
    title: state.navigation.currentPageTitle
  };
  return props;
}

export default connect(mapStateToProps)(Navbar);
