import { useEffect, useState } from "react"
import type { Movie } from "./types/movie"
import { getPopularMovies } from "./services/movieApi"
import Card from "./components/Card"
import Search from "./components/Search"

function App() {
  const [movies,setMovies] = useState<Movie[]>([]) // 영화 데이터를 저장할 state
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(false)
  const [searchQuery,setSearchQuery] = useState("") // 검색어 저장 state

  //API 불러오는 코드
  useEffect(()=> {
      const fetchData = async () => {
        //에러 발생 시 try-catch문
        try {
          const data = await getPopularMovies()
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

  //Search.tsx에 있는 searchValue 값을 가지고 옴(검색 결과)
  const searchValue = (value : string) => {
    setSearchQuery(value)
  }

  //Movie 배열에서 searchValue 값을 필터링하는 함수
  const filterMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

  if(loading) return <p>로딩 중입니다...</p>
  if(error) return <p>API 주소가 잘못되었습니다 새로고침해주세요</p>
  return (<div className="App">
    <Search search = {searchValue}/>
    <Card movies = {filterMovies}/>
  </div>
  )
}

export default App