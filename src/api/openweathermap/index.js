export default class API {

  static API_URL = 'http://api.openweathermap.org/data/2.5';
  static API_KEY = 'af86163b5ba915bd4fe856a830d03510';

  static forCurrentGeolocation(typeService = 'weather') {
    return new Promise(async (resolve, reject) => {

      try {
        const currentPos = await API.getCurrentPos();
        const url = `${ API.API_URL }/${ typeService }?lat=${ currentPos.latitude }&lon=${ currentPos.longitude }&units=metric&appid=${ API.API_KEY }`;

        const response = await fetch(url);
        const json = await response.json();

        if (json.cod === 200) {
          resolve(json);
        } else new Error(json);

      } catch (error) {
        reject(error);
      }

    });
  }

  static forCity(cityName = 'London', typeService = 'weather') {
    return new Promise(async (resolve, reject) => {

      try {
        const url = `${ API.API_URL }/${ typeService }?q=${cityName}&units=metric&appid=${ API.API_KEY }`;

        const response = await fetch(url);
        const json = await response.json();

        if (json.cod === 200) {
          resolve(json);
        } else new Error(json);
      } catch (error) {
        reject(error);
      }

    });
  }

  static getCurrentPos() {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(position.coords);
      });
    });
  }
}