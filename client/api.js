import request from 'superagent'

const issUrl = 'https://api.wheretheiss.at/v1/satellites'

export function getSatelliteById (callback) {
   request
    .get(issUrl+'/25544')
    .end((err, res) => {
      console.log('api request made')
      callback(err, res.body)
    })
}