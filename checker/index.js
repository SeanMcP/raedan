const express = require('express')
const PORT = 8000
const app = express()


app.get('/', (_, res) => res.send('Hello from raeden-checker'))

app.listen(PORT, () => console.log(`raedan-checker listening on port ${PORT}`))