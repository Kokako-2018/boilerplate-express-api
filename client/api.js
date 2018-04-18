import request from 'superagent'


const satUrl = 'https://api.wheretheiss.at/v1/satellites'

export function sats (callback) {
  request
    .get(satUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}


