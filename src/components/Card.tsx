import { useNavigate } from "react-router-dom"
import type { Movie } from "../types/movie"
import "./Card.css"

type Props = {
    movies : Movie[]
}

const Card = ({movies} : Props) => {
    const navigate = useNavigate()

    const moveToDetailPage = (element : Movie) => {
        navigate(`/detail/${element.id}`)
    }

    return (
    <div className="container">
        {movies.map((element) => (

            <div key={element.id} className="cardComponent" onClick={() => moveToDetailPage(element)}>
            {element.poster_path === null ? 
            <p>포스터 이미지가 없습니다</p> : 
            <img src={"https://image.tmdb.org/t/p/w300" + element.poster_path} alt="포스터 사진" className="moviePoster"/>}

            <div className="movieInfo">
                <div className="movieTitle">제목 : {element.title}</div>
                <div className="movieVoteAverage">평점 : {element.vote_average.toFixed(1)}</div>
            </div>

            </div>
            )

        )}
        </div>
    )
}

export default Card