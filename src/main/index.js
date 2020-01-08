require('dotenv').config({ path: '.env' })
const app = require('./config/app')

app.listen(process.env.PORT, () => console.log(`API rodando na em http://localhost:${process.env.PORT}`))
