import axios from 'axios'

const Data = function() {
}

var p = Data.prototype;

p.listShops = function() {
  axios.get('https://tg4kv8x14k.execute-api.ap-northeast-1.amazonaws.com/default/getMochikaeruData', {
    params: {
      ID: 12345
    }
  }).then(function(response) {
    return response
  })
  .catch(function(error) {
    return error
  })
}

export default new Data