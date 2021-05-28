const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.engine('html',mustacheExpress())
app.set('view engine', 'html')
app.set('views',`${__dirname}/views`)

app.get('/index.html', function (req, res) {
    res.render('index', 
    {
        title: 'Hey'
    })
  })


/*app.get('/', (req, res) => 
    res.send('Hello world!')
)

/*app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
  })

app.get('/', (req, res) => {
    const name = req.query.name;
    console.log(`name: ${name}`)

    if (name) res.send(`Hello ${name}`)
    else res.send('Hello World!')
})


/*app.get('/sys/health', function(req, res) {
    res.send('System is up')
})*/


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})