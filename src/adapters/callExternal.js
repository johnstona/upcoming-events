const https = require('https')
const _EXTERNAL_URL = 'https://api.smarkets.com/v3/events/?state=upcoming&type='

// https call with search term to Smarkets API

const callExternalApi = (req, callback) => {
  https.get(`${_EXTERNAL_URL}${req.url.slice(1)}`, (resp) => {
    let data = ''

    resp.on('data', (chunk) => {
      data += chunk
    })

    resp.on('end', () => {
      return callback(data)
    })
  }).on('error', (err) => {
    console.log('Error: ' + err.message)
  })
}

module.exports.callApi = callExternalApi
