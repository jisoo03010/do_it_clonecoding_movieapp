import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import './components/Movie.css'
import './App.css'
function MovieApp() {
    const [isLoading, setIsloading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovis = async () => {
        const {
            data: {
                data: { movies },
            }
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        console.log(movies)
        setMovies(movies);
        setIsloading(false);
    }

    useEffect(() => { getMovis(); }, [])

    return (
        <section className="container" >
            {isLoading ?
                (
                    <div className="loader">
                        <span className="loader__text">'Loading...'</span>

                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => {
                            // console.log(movie)
                            return <Movie
                                key={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />;
                        })}
                    </div>

                )}
        </section>
    )
}

export default MovieApp;