import React, {Component} from 'react';
import styles from './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.weather}>

          <div className={styles.name}>
            <i className={`owf owf-${this.props.weather[0].id}`}/>
            {`${this.props.name}, ${this.props.sys.country}`}
          </div>
          <div className={styles.description}>
            <span>{this.props.weather[0].main}</span>
          </div>
        </div>
        <div className={styles.temperature}>
          <p>Now: <span>{Math.round(this.props.main.temp)}&deg;</span></p>
        </div>
        <div className={styles.temperatureRange}>
          <p>Min: <span>{Math.round(this.props.main.temp_min)}&deg;</span></p>
          <p>Max: <span>{Math.round(this.props.main.temp_max)}&deg;</span></p>
        </div>
        <div className={styles.humidity}>
          <span>{Math.round(this.props.main.humidity)}% humidity</span>
        </div>
      </div>
    );
  }
}


