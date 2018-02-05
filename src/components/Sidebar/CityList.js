import React, {Component} from 'react';
import {connect} from 'react-redux';

class CityList extends Component {
  render() {
    console.log(this.props.cities);
    return (
      <ul>
        {this.props.cities.map(city => {
          return <li key={city.id}>
            {city.name}
            <button onClick={this.props.removeCity.bind(this, city.id)}>x</button>
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
