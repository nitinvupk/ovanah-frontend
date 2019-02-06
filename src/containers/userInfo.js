import { connect } from 'react-redux';
import userInfo from '../components/userInfo';
import { getUserLocation, getWeatherLocation, getWoeidLocation, getSearchLocation, getSearchLocationDetails } from '../actions';

const mapStateToProps = state => ({
	city: state.userInfo.userLocation.city,
	loction: state.userInfo.userLocation.loc,
	locationDetail: state.userInfo.locationDetail,
	weatherForcast: state.userInfo.woeidLocation,
	searchForcast: state.userInfo.searchLocation,
	isLoading: state.userInfo.isLoading
});

const mapDispatchToProps = {
	getUserLocation,
	getWeatherLocation,
	getWoeidLocation,
	getSearchLocation,
	getSearchLocationDetails
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(userInfo);
