const axios = require('axios')
module.exports = class PlayLisRepository {
  async loadPlayList (city) {
    const url = `${process.env.OPEN_WEATHER}?q=${city},BR&appid=${process.env.OPEN_WEATHER_APPID}&units=metric`
    axios.get(url)
      .then(response => {
        return response
      })
      .catch(error => {
        console.log(error)
      })
  }
}
