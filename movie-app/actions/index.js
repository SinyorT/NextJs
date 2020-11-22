import axios from 'axios'

const BASE_URL='http://localhost:3000'
const MOVIE_DATA = []

const CATEGORY_DATA = [
  {id: 'c-0', name: 'all'},
  { id: 'c-1', name: 'drama' },
  { id: 'c-2', name: 'action' },
  { id: 'c-3', name: 'adventure' },
  { id: 'c-4', name: 'historical' }
]

//1. getCategories fuunction
//2. get categories in index page 
//3. provide categories to sidemenu
//4. in sidemenu iterate categories and display

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      reject('Cannot fetch data!')
    }, 50)
  })
}


export const getMovies = () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(MOVIE_DATA)
  //     reject('Cannot fetch data!')
  //   }, 50)
  // })

  return axios.get(`${BASE_URL}/api/v1/movies`).then(res=>res.data)
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7)
  return axios.post(`${BASE_URL}/api/v1/movies`,movie).then(res=>res.data)
  // return new Promise((resolve, reject) => {
  //   // Create ID for movie
  //   movie.id = Math.random().toString(36).substr(2, 7)
  //   MOVIE_DATA.push(movie)
  //   setTimeout(() => {
  //     resolve(MOVIE_DATA)
  //     // reject('Cannot fetch data!')
  //   }, 50)
  // })
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data)
}

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data)

  // return new Promise((resolve, reject) => {
  //   const movieIndex = MOVIE_DATA.findIndex(m => m.id === id)
  //   const movie = MOVIE_DATA[movieIndex]

  //   setTimeout(() => resolve(movie), 50)
  // })
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res=>res.data)
}