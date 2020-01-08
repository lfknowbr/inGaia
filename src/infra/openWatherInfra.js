const axios = require('axios')
module.exports = class OpenWatherRepository {
  load (city) {
    const url = `${process.env.OPEN_WEATHER}?q=${city},BR&appid=${process.env.OPEN_WEATHER_APPID}&units=metric`
    return axios.get(url).then(response => {
      return response.data
    })
      .catch(error => {
        console.log(error)
      })
  }
}
