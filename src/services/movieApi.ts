const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL

import axios from "axios"

const movieApi = axios.create({
    baseURL : BASE_URL,
    params: {
        api_key: API_KEY
    },
})

export default movieApi

export const getPopularMovies = async () => {
    const response = await movieApi.get("/movie/popular")
    return response.data
}