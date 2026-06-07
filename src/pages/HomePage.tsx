import { useEffect, useState } from "react"
import type { Movie } from "../types/movie"
import { getPopularMovies, searchMovies } from "../services/movieApi"
import Card from "../components/Card"
import Header from "../components/Header"

function HomePage() {
    const [movies,setMovies] = useState<Movie[]>([]) // 영화 데이터를 저장할 state
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [noResult,setNoResult] = useState(false)

  //API 불러오는 코드
  //초기 화면 인기 영화 20개 보여주는 코드
    useEffect(()=> {
        const fetchData = async () => {
        //에러 발생 시 try-catch문
        try {
            const data = await getPopularMovies()
            console.log("data",data)
            setMovies(data.results)
        } catch (error) {
            setError(true)
            console.log("에러 발생")
        } finally {
            setLoading(false)
            }
        }
        fetchData()
    }, [])

  //Search.tsx에서 검색어를 받아와 api를 호출 후 저장
    const handleSearch = async (value : string) => {
        try {
        setNoResult(false)
        const data = await searchMovies(value)
        setMovies(data.results)
        if(data.results.length === 0) {
        console.log("검색 결과 없음")
        setNoResult(true)
        }
        } catch (error) {
        setError(true)
        console.log("네트워크 오류 발생")
        }
    }

    if (loading) return <p>로딩 중입니다...</p>
    if (error) return <p>API 주소가 잘못되었습니다 새로고침해주세요</p>
    if (noResult) return ( 
        <div>
        <Header search = {handleSearch}/>
        <p>검색 결과가 없습니다</p>
        </div>
    )

    return (<div className="App">
        <Header search = {handleSearch}/>
        <Card movies = {movies}/>
    </div>
    )
}

export default HomePage