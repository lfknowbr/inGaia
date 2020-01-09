const Spotify = require('node-spotify-api')

module.exports = class SpotifyInfra {
  getPlaylist (style) {
    const spotify = new Spotify({
      id: process.env.CLIENT_ID,
      secret: process.env.SECRET
    })

    return spotify.search({ type: 'track', query: style })
      .then(function (response) {
        return response.tracks.items
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
