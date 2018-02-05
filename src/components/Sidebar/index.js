import React, {Component} from 'react';
import {connect} from 'react-redux';
import CityList from '../CityList/index';
import styles from './Sidebar.css';

import API  from "../../api/openweathermap/index";

class Sidebar extends Component {
  addCity = async event => {
    event.preventDefault();

    const resolve = await API.forCity(this.input.value);
    this.props.addCity(resolve);
    this.input.value = '';

  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.addCity} action="#" className={styles.form}>
          <input type="text" ref={input => this.input = input}/>
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
