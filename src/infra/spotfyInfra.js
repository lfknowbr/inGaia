const Spotify = require('node-spotify-api')

module.exports = class SpotifyInfra {
  getPlaylist (type) {
    const spotify = new Spotify({
      id: process.env.CLIENT_ID,
      secret: process.env.SECRET
    })

    return spotify.search({ type: 'track', query: 'All the Small Things' })
      .then(function (response) {
        return response
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
