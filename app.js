const express = require('express')
const hbs = require('hbs')
const path = require('path')
const cors = require('cors')
const ytdl = require('ytdl-core')

const app = express()
const port = process.env.PORT || 3000

const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/download', (req,res) => {
    var URL = req.query.URL 
    res.header('Content-Disposition', 'attachment; filename="video.mp4"')

    ytdl(URL, {
        format: 'mp4'
        }).pipe(res);
    
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
