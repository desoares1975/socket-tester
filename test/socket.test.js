const io = require('socket.io-client')
const jwt = require('jsonwebtoken')
const debug = require('debug')
const error = debug('test:ERROR!')
const test = debug('test:test')
const log = debug('test:log')
const warning = debug('test:warning')
const response = debug('test:RESPONSE')
const config = require('courier-config').loadConfig('notification', 'qa')
const users = require('./data/users')
const encode = (payload) => {
  return jwt.sign(payload, config.jwt.secret, { expiresIn: '200y' })
}

describe('SOCKET', () => {
  const sockets = []

  before(done => {
    let i

    for (i = 0; i < 1; i++) {
      const token = encode({ data: { userId: users[i+10]._id } })
      sockets.push(io.connect('wss://notification.courier.k8sqa.io', {
        transports: ['websocket'],
        query: { token },
        rejectUnauthorized: false,
        secure: true
      }))
      const iNow = i

      sockets[iNow].on('newAuction', data =>  {
        response(`${new Date()} sockets[${iNow}] newAuction`, data)
        // setTimeout(() => {
        //   sockets[iNow].emit('auctionQualify', {
        //     auction: data,
        //     latitude: -23.5542146,
        //     longitude: -46.7429688
        //   })
        // }, 1500)
      })
      .on('auctioningCrate', data => {
        response(data)
        const {
          auction,
          crate
        } = data

        sockets[iNow].emit('apply', {
          auction,
          crate
        })
      })
        .on('auctionAccept', data => {
          response('Auction Accepted')
          response(data)
        })
        .on('applicationSuccess', data => {
          response('Success')
          response(data)
        })
        .on('applicationFailed', data => {
          response('Failed!!!!')
          response(data)
        })
        .on('connect', () => {
          sockets[iNow].emit('iAmAvailable')
          log('CONNECTED: ' + iNow, sockets[iNow].id)
        })
        .on('reconnect', () => {
          warning('RECONNECTED')
          sockets[iNow].emit('iAmAvailable')
        })
        .on('myTest', data => warning(`socket[${iNow}]`, data))
        .on('error', e => error('ERROR:', e.message))
        .on('disconnect', () => {
          sockets[iNow].emit('iAmNotAvailable')
          warning('DISCONNECTED', new Date())
        })
        .on('connect_error', e => error('CONNECT_ERROR', e))
    }

    sockets[sockets.length -1].on('connect', () => {
      setTimeout(() => log(`${sockets.length} Sockets connected...\n`, encode({ data: { userId: users[2]._id } })), 1600)
      done()
    })

  })

  it('Testing is about to begin....', () => console.log('Test Socket.IO'))
  
})


/**
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6IjVkNjNmYmUwMThmMmY4NjY3NTJiN2M3MiJ9LCJpYXQiOjE1NjgyMjQ4NDYsImV4cCI6MTg4MzgwMDg0Nn0.a_KYsVkZIy3_XGkcKyiC3xKYLZ1RQx3QT-g2Hv4J83c

 */