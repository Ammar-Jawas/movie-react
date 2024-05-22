import axios from "axios"

export const sMovie = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&api_key=4b3a75071a697bbfe208113850d7ca5a&page=1`)
    return search.data
}
