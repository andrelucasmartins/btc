import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://locahost:3333/'
})