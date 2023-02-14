import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


function Movie({ id, coverImg, title, genres, summary }) {
    return (
        <div>
            <hr></hr>
            <img src={coverImg} />
            <Link to={`./movie/${id}`}><h2>{title}</h2></Link>
            {/* Link를 사용하면 페이지를 새로고침하지 않고도
            // 다른 페이지를 불러올 수 있음.
            // SPA를 완성시키는 느낌이군.*/}
            <ul>{genres.map(genre =>
                <li><h3>{genre}</h3></li>)}
            </ul>
            <p>{summary}</p>

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

