const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8100

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'store',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffienated': true,
        'flavor': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'japan',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffienated': false,
        'flavor': 'delicious'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffienated': false,
        'flavor': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase()
    // res.json(tea[teaName])
    if( tea[teaName] ){
        res.json(tea[teaName])
    } else{
        res.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})