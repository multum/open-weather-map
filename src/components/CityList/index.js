import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './CityList.css';

class CityList extends Component {
  render() {
    return (
      <ul>
        {this.props.cities.map(city => {
          return <li key={city.id} className={styles.item} onClick={this.props.removeCity.bind(this, city.id)}>
            {city.name}
            <button>x</button>
          </li>;
        })}
      </ul>
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
    removeCity: (id) => {
      return dispatch({
        type: 'REMOVE_CITY',
        id: id
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
