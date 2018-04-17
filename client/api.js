import request from 'superagent'

const NASAUrl = 'https://api.nasa.gov/planetary/apod?api_key=I6K2twCnPmfphLSnZ4FB2froZNiDHROwebMSWL1k'

export function getPic (callback) {
    request
        .get(NASAUrl)
        .end((err, res) => {
            callback(err, res.body)
        })
}