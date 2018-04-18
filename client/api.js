import request from 'superagent'

const rootUrl = 'https://eda-te-reo.herokuapp.com/api'

export function getTranslation (word) {
  return request.get(rootUrl + '/translate?word=' + word).then((res)=>{
    return res.text
  })
}