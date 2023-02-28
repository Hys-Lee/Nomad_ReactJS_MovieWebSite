import { func } from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
    const [details, setDetails] = useState({});
    const { movie_id } = useParams();

    console.log(movie_id);
    let movieContents = async function () {
        let json = "";
        try {
            json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`)).json();
            setDetails(json.data.movie);
        } catch (err) {
            console.log("Fucking eRr");
            console.log(err);
        }

        // console.log(json);


    }
    useEffect(() => {
        movieContents();
        // console.log(details.torrents[0].url);
    }, []);




    return (<div>
        <h1 class="popmovies__title--detailed">Details</h1>
        <img class="movie-box__coverImg--detailed" src={details.large_cover_image}></img>
        <h2 class="movie-box__title--detailed">{details.title_long}</h2>
        <p class="movie-box__description--detailed">
            {details.description_full}
        </p>
        <h3 class="movie-box__rating--detailed"> rating:  {details.rating} </h3>

    </div>
    );
} export default Details;