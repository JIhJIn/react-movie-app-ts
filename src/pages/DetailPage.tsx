import { useParams } from "react-router-dom"
import { getMovieDetail } from "../services/movieApi"
import { useEffect, useState } from "react"
import type { Movie } from "../types/movie"
import "./DetailPage.css"
import Header from "../components/Header"

const DetailPage = () => {
    const [movieData, setMovieData] = useState<Movie>()
    const [error,setError] = useState(false)
    const {id} = useParams()
    console.log(movieData)
    useEffect(() => {
        const fetchData = async (id : string | undefined) => {
            try {
                const data = await getMovieDetail(Number(id))
                setMovieData(data)
            } catch (error) {
                setError(true)
            }
        }
        fetchData(id)
    },[])

    if(error) return <p>상세 정보를 불러오지 못했습니다.</p>
    if (!movieData) return <div>로딩중...</div>

    return (
    <div className="detailPage">
        <Header/>
            <img src={"https://image.tmdb.org/t/p/w200" + movieData.poster_path} alt="포스터 사진" className="movieImg"/>
            <div className="movieTitle">제목 : {movieData.title}</div>
            <div className="movieVoteAverage">평점 : {movieData.vote_average.toFixed(1)}</div>
            <div className="release_date">개봉일 : {movieData.release_date}</div>
            <div className="overview">줄거리 : {movieData.overview}</div>
    </div>
    )
}

export default DetailPage