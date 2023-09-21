const express = require('express')
const next = require('next')
const app = express()
const dev = false
const nextApp = next({ dev })
const hundle = nextApp.getRequestHandler()
const path = require('path')

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['jpg', 'png', 'ico', 'svg'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.set('Request-Mode', 'no-cors');
    }
}



app.use(express.static('public'))

app.all('*',(req, res) => {
    return hundle(req,res)
})

app.listen('3344', (err) => {
    if (err) {
        throw err
    }
    console.log('> Ready on http://localhost:3344/')
})
