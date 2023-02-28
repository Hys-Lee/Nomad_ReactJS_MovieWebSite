import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Movie({ id, coverImg, title, genres, summary }) {
    return (
        <div class="movie-box">
            <img class="movie-box__coverImg" src={coverImg} />
            <div class="nonimg-box">
                <h2 class="movie-box__title"><Link class="movie-box__link" to={`./movie/${id}`}>{title}</Link></h2>

                <div class="paragraph-box">
                    <h4 class="paragraph-box__title">Genre</h4>
                    <ul class="paragraph-box__container">{genres.map(genre =>
                        <li><h3 class="paragraph-box__item">{genre}</h3></li>)}
                    </ul>
                </div>
                <div class="paragraph-box">
                    <h4 class="paragraph-box__title">Description</h4>
                    <p class="paragraph-box__description">{summary.length < 100 ? summary : summary.slice(0, 100) + "..."}</p>
                </div>
            </div>

            {/* Link를 사용하면 페이지를 새로고침하지 않고도
            // 다른 페이지를 불러올 수 있음.
            // SPA를 완성시키는 느낌이군.*/}





        </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
}
export default Movie;

