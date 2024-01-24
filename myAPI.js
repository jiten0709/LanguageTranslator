const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.get('/myapi', (req, res) => {
    res.status(200).send({
        'sourceLang': 'gu'
    })
})

app.listen(
    port,
    () => console.log(`it's alive on http://localhost:${port}`)
)
