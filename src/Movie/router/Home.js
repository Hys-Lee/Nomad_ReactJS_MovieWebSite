import { useState, useEffect } from "react";
import Movie from "../components/Movie";
function Home() {
    let [loading, setLoading] = useState(true);
    let [movies, setMovies] = useState([]);
    let getMovies = async function () {
        let json;
        try {
            json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')).json();
        }
        catch (error) {
            alert(error);
            console.log("!!!!!!!ERRRRR")
        }
        setLoading(false);
        setMovies(json.data.movies);


        console.log("HIHI")
    }
    // getMovies();
    useEffect(() => {
        getMovies();
        console.log(movies);
    }, []);

    return (
        <div class="container">

            <h1 class="popmovies__title">Popular Movies</h1>
            <hr class="popmovies__distLine" />
            {loading ? <h2>Loading...</h2> :


                <div class="popmovies__container">
                    {movies.map(movie => {

                        return (<Movie
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            genres={movie.genres}
                            summary={movie.summary}

                        />)
                    })}
                </div>

            }

        </div>
    );

} export default Home;