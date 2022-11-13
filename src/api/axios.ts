import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/',
})
