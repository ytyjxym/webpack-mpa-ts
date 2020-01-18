import axios from 'axios'

axios.defaults.baseURL = 'http://47.103.201.65:3000'
axios.defaults.headers.common['Authorization'] = '123'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default axios