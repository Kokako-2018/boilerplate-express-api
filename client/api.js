import request from 'superagent'

const issUrl = 'https://api.wheretheiss.at/v1/satellites'

const nasaURL = 'https://api.nasa.gov/planetary/apod?api_key=hVgphNsE2IErmoVL7M09ckfwvySkSsTFgA7pdfGk'

export function getSatelliteById (callback) {
   request
    .get(issUrl+'/25544')
    .end((err, res) => {
      console.log('api request made')
      callback(err, res.body)
    })
}




//https://api.nasa.gov/planetary/apod?api_key=hVgphNsE2IErmoVL7M09ckfwvySkSsTFgA7pdfGk