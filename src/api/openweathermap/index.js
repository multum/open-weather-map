export default class API {

  static API_URL = 'http://api.openweathermap.org/data/2.5';
  static API_KEY = 'af86163b5ba915bd4fe856a830d03510';

  static async forCurrentGeolocation(typeService = 'weather') {
    const currentPos = await API.getCurrentPos();
    const url = `${ API.API_URL }/${ typeService }?lat=${ currentPos.latitude }&lon=${ currentPos.longitude }&units=metric&appid=${ API.API_KEY }`;
    return API.fetchJSON(url);
  }

  static forCity(cityName = 'London', typeService = 'weather') {
    const url = `${ API.API_URL }/${ typeService }?q=${cityName}&units=metric&appid=${ API.API_KEY }`;
    return API.fetchJSON(url);

  }

  static getCurrentPos() {
    return new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(position.coords);
      });
    });
  }

  static fetchJSON(url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw Error(response.statusText);

        const json = await response.json();

        if (json.cod === 200) {
          resolve(json);
        } else throw Error(json);

      } catch (error) {
        reject(error);
      }
    });
  }
}