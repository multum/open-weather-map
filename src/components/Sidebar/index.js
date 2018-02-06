import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityList from '../CityList/index';
import styles from './Sidebar.css';
import geoSVG from '../../img/geolocation.svg';

import API from "../../api/openweathermap/index";

class Sidebar extends Component {
  async getCurrentPos() {
    try {
      const resolve = await API.forCurrentGeolocation();
      resolve['currentGeoLocation'] = true;
      this.props.addCity(resolve);
    } catch (e) {
      console.log(e);
    }
  }

  async addCity(event) {
    event.preventDefault();

    try {
      const resolve = await API.forCity(this.input.value);
      this.props.addCity(resolve);
      this.input.value = '';
    } catch (e) {
      this.input.classList.add(styles.error);
      setTimeout(() => this.input.classList.remove(styles.error), 300);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Open Weather Map</h1>
        <form onSubmit={this.addCity.bind(this)} action="#" className={styles.form}>
          <input type="text" placeholder='Enter city' ref={input => this.input = input}/>
          <p>or</p>
          <button onClick={this.getCurrentPos.bind(this)}><img src={geoSVG} alt='My Location' title='My Location' /></button>
        </form>
        <CityList/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cityReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCity: (city) => {
      return dispatch({
        type: 'ADD_CITY',
        city: city
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
