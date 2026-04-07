import { useEffect, useState } from "react"
import type { Movie } from "./types/movie"
import { getPopularMovies } from "./services/movieApi"
import Card from "./components/Card"

function App() {
  const [movies,setMovies] = useState<Movie[]>([]) // 영화 데이터를 저장할 state
  const [loading,setLoading] = useState(true)

  //API 불러오는 코드
  useEffect(()=> {
    const fetchData = async () => {
      const data = await getPopularMovies()
      setMovies(data.results)
      setLoading(false)
      }
      fetchData()
  }, [])

  //에러 발생 시 코드
  useEffect(() => {

  })

  return <div className="App">
    {loading ? <p>로딩 중입니다...</p> : <Card movies = {movies}/>}
  </div>
}

export default App