import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export default function useMovie() {
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovie = async () => {
        setIsLoading(true)
        try {
            setTimeout( async () => {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?page=1&api_key=4b3a75071a697bbfe208113850d7ca5a')
                setMovie(response.data.results)
                setIsLoading(false)
            }, 1500)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    return{
        data: movie,
        setMovie,
        isLoading,
    }
}
