const router = require('express').router
const fg = require('fast-glob')
module.exports = app => {
  app.use('/api', router)
  fg.sync('**/src/main/routes/**.js').forEach(file => require(`../../../${file}`)(router))
}
