require('dotenv').config({ path: '.env' })
const app = require('./config/app')

app.listen(5858, () => console.log('server Running'))
