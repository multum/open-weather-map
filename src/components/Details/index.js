import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Details.css';
import Card from './Card/index';

import Masonry from 'masonry-layout';

class Details extends Component {
  render() {
    const cities = [...this.props.cities].reverse();
    return (

      <div  className={`${styles.container} ${!cities.length ? styles.withoutElements : ''}`}>
        <h3>Enter city please</h3>
        <div ref={container => this.layout = container}>
          {cities.map(city => {
            return <Card key={city.id} {...city}/>;
          })}
        </div>
      </div>

    );
  }

  componentDidMount() {
    this.masonry = new Masonry(this.layout);
  }

  componentDidUpdate() {
    this.masonry.reloadItems();
    this.masonry.layout();
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cityReducer
  };
};

export default connect(mapStateToProps)(Details);
