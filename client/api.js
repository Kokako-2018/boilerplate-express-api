import request from 'superagent'

//const rootUrl = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=rKA917qb66xRrIsAMt5TREu8HE55y4ZgbYSHZCgr'

// export function getTranslation (status) {
//   return request.get(rootUrl + '?limit=5&days=20&source=InciWeb&status=' + status)
//   console.log('hello' + status)
//   .then((res)=>{
//     return res.body
//   })
// }

export function getPic (callback) {
  request 
      .get(nasaUrl)
      .end((err, res)=> {
        callback(err, res.body)
      })
}