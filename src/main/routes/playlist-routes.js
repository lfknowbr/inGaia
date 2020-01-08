const PlayListRouter = require('../../apresentation/routers/playList-router')
const PlayListUseCase = require('../../domain/usecases/playListUseCase')
const { adapt } = require('../adapters/express-router-adapter')

module.exports = router => {
  const playListUseCase = new PlayListUseCase()
  const playListRouter = new PlayListRouter(playListUseCase)
  router.get('/playlist', adapt(playListRouter))
}
