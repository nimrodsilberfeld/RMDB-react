import React, { useState, useEffect } from "react"
import { POPLAR_BASE_URL, SEARCH_BASE_URL, API_URL, API_KEY, API_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"

import Grid from './elements/Grid'
import HeroImage from "./elements/HeroImage"
import LoadMoreBtn from "./elements/LoadMoreBtn"
import MovieThumb from "./elements/MovieThumb"
import SearchBar from "./elements/SearchBar"
import Spinner from "./elements/Spinner"
import Header from "./elements/Header"

//costune hookes
import { useHomeFetch } from './hookes/useHomeFetch'
import NoImage from './images/no_image.jpg'

const Home = () => {
    const [SearchTerm, setSearchTerm] = useState('')
    const [{ state, loading, error }, fetchMovies] = useHomeFetch(SearchTerm);

    const SearchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPLAR_BASE_URL
        setSearchTerm(search)
        fetchMovies(endpoint)
    }

    const LoadMoreMovies = () => {
        const SearchEndpoint = `${SEARCH_BASE_URL}${SearchTerm}&page=${state.currentPage + 1}`
        const PopularEndPoint = `${POPLAR_BASE_URL}&page=${state.currentPage + 1}`

        const endpoint = SearchTerm ? SearchEndpoint : PopularEndPoint;

        fetchMovies(endpoint)
    }

    if (error) return <div>Something went wrong ...</div>;
    if (!state.movies[0]) return <Spinner />;

    return (
        <>
            {!SearchTerm && (
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.HeroImage.backdrop_path}`}
                    title={state.HeroImage.original_title}
                    text={state.HeroImage.overview}
                />)}
            <SearchBar callback={SearchMovies} />
            <Grid header={SearchTerm ? 'Serch Result' : 'Popular Movies'}>
                {state.movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ?
                                `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`
                                : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            {state.loading && <Spinner />}
            {state.currentPage < state.totalPages && !(state.loading) && (
                <LoadMoreBtn text={'Load More'} callback={LoadMoreMovies} />
            )}
        </>
    )
}
export default Home 
