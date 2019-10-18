const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const cron = require('cron')

const BASE_KM_FEE = 4.05
const BASE_RANGE = 3256
const BASE_KM_FEE_INC = 0.85
const BASE_RANGE_INC = 959
const MAX_RANGE = 13000
const MAX_KM_FEE = 16.9
const INC_INTERVAL = 5

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('port', process.env.PORT || 5800)
let port = app.get('port')
let id = 2517200490
server.listen(port, () => console.log(`Server up and running on port ${port}...`))

io.on('connect', socket => {
    console.log('socketId', socket.id)
    socket.id = id++
    console.log('localSocketId', socket.id)

    socket.on('locate', data => {
console.log('LOCALTE')        
        socket.range = +data.distance
        console.log(socket.id, socket.range)
    })
    socket.on('disconnect', a => {
        console.log(socket.id, a, 'Leaving room...')
    })
})

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') return res.status(201).end()
    
    next()
})

app.get('/', (req, res) => res.status(200).send('OK'))
app.post('/new', (req, res) => {
    let turn = 0
    let data

    const romaneio = new cron.CronJob(`* ${INC_INTERVAL} * * *`, () => {
        data = {
            ...req.body,
            fee: req.body.runSize * (BASE_KM_FEE + BASE_KM_FEE_INC * turn),
        }
console.log(data, '????????????????????????????????????????????????????????????')
        io.clients((e, clients) => {
            clients.filter(c => c.range && c.range <= (BASE_RANGE + (BASE_RANGE_INC * turn)))
                .forEach(c => io.to(c.id).emit('delivery', data))
        })
    })
    romaneio.start();
    res.status(200).json(data);

})