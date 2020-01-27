import React from "react"

//components

import Navigation from "./elements/Navigation"
import MovieInfo from "./elements/MovieInfo"
import Actors from "./elements/Actors"
import MovieInfoBar from "./elements/MovieInfoBar"
import Grid from "./elements/Grid"
import Spinner from "./elements/Spinner"
import { useMovieFetch } from "../components/hookes/useMovieFetch"

const Movie = ({ movieId }) => {

    const [movie, loading, error] = useMovieFetch(movieId)
    console.log(movie)
    if (error) return <div>Whoooops..something went wrong</div>

    if (loading) return <Spinner />
    return (
        <>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor=>(
                    <Actors
                    key={actor.credit_id}
                    actor={actor} />
                ))}


            </Grid>
        </>
    )
}

export default Movie 