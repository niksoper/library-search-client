const express = require('express')
const app = express()

app.set('port', process.env.PORT || 5000)
app.use(express.static('build'))

app.listen(app.get('port'), () => {
  console.log('Library search client is running on port', app.get('port'));
})
