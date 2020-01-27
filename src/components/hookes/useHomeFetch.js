import { useState, useEffect } from "react"
import { POPLAR_BASE_URL } from "../../config"

export const useHomeFetch = (SearchTerm) => {
    const [state, setstate] = useState({ movies: [] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    //console.log(state)

    const fetchMovies = async endpoint => {
        setError(false)
        setLoading(true)

        const isLoadMore = endpoint.search('page')

        try {
            const result = await (await fetch(endpoint)).json();
            setstate(prev => ({
                ...prev,
                movies:
                    isLoadMore !== -1
                        ? [...prev.movies, ...result.results]
                        : [...result.results],
                HeroImage: prev.HeroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))

        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    useEffect(() => {
        if (sessionStorage.homeState) {
            setstate(JSON.parse(sessionStorage.homeState))
            setLoading(false)
        } else {
            fetchMovies(`${POPLAR_BASE_URL}`)
        }
    }, [])
    useEffect(() => {
        if (!SearchTerm) {
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }
    }, [SearchTerm, state])
    return [{ state, error, loading }, fetchMovies]
}

